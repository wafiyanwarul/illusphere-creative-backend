// src/modules/projects/projects.service.ts
import { prisma } from '../../config/database';
import { BadRequestError } from '../../shared/utils/errors'; // Path ini harus match struktur folder-mu
import {
  Project,
  ContactMethod,
  ContactTime,
  ProjectType,
  TimelineType,
  // ProjectService as PrismaProjectService,
  // ProjectAdditionalService,
} from '@prisma/client';

interface ProjectSubmissionDto {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  countryCode?: string;
  companyName?: string;
  companyWebsite?: string;
  contactMethod?: ContactMethod;
  contactTime?: ContactTime;
  referralSource?: string;
  projectName: string;
  description: string;
  projectType?: ProjectType;
  timeline?: TimelineType;
  budgetMin: number;
  budgetMax: number;
  notes?: string;
  selectedServices: { serviceId: string; complexityId: string }[];
  additionalServices?: { id: string }[];
}

export class ProjectService {
  async submitProject(data: ProjectSubmissionDto): Promise<{ project: Project; referenceId: string }> {
    // 1. Cari atau buat client
    let client = await prisma.client.findUnique({
      where: { email: data.clientEmail },
    });

    if (!client) {
      client = await prisma.client.create({
        data: {
          fullName: data.clientName,
          email: data.clientEmail,
          phone: data.clientPhone,
          countryCode: data.countryCode || '+62',
          companyName: data.companyName,
          companyWebsite: data.companyWebsite,
          contactMethod: data.contactMethod || ContactMethod.EMAIL,
          contactTime: data.contactTime || ContactTime.FLEXIBLE,
          referralSource: data.referralSource,
        },
      });
    }

    // 2. Generate reference ID unik (ILS-2026-XXXX)
    const year = new Date().getFullYear();
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `ILS-${year}-${randomId}`;

    // 3. Hitung estimasi harga
    let estimatedMin = 0;
    let estimatedMax = 0;

    const projectServicesData: {
      serviceId: string;
      complexityOptionId: string;
      selectedMinPrice: number;
      selectedMaxPrice: number;
    }[] = [];

    for (const svc of data.selectedServices) {
      const complexity = await prisma.complexityOption.findUnique({
        where: { id: svc.complexityId },
      });

      if (!complexity) {
        throw new BadRequestError(`Complexity option dengan ID ${svc.complexityId} tidak ditemukan`);
      }

      estimatedMin += complexity.minPrice;
      estimatedMax += complexity.maxPrice;

      projectServicesData.push({
        serviceId: svc.serviceId,
        complexityOptionId: svc.complexityId,
        selectedMinPrice: complexity.minPrice,
        selectedMaxPrice: complexity.maxPrice,
      });
    }

    const projectAdditionalServicesData: {
      additionalServiceId: string;
      selectedMinPrice: number;
      selectedMaxPrice: number;
    }[] = [];

    for (const add of data.additionalServices || []) {
      const addSvc = await prisma.additionalService.findUnique({
        where: { id: add.id },
      });

      if (!addSvc) {
        throw new BadRequestError(`Additional service dengan ID ${add.id} tidak ditemukan`);
      }

      estimatedMin += addSvc.minPrice;
      estimatedMax += addSvc.maxPrice;

      projectAdditionalServicesData.push({
        additionalServiceId: add.id,
        selectedMinPrice: addSvc.minPrice,
        selectedMaxPrice: addSvc.maxPrice,
      });
    }

    // 4. Apply timeline modifier
    const modifier = this.getTimelineModifier(data.timeline || TimelineType.STANDARD);
    estimatedMin = Math.round(estimatedMin * (1 + modifier));
    estimatedMax = Math.round(estimatedMax * (1 + modifier));

    // 5. Buat project + junction tables
    const project = await prisma.project.create({
      data: {
        referenceId,
        clientId: client.id,
        projectName: data.projectName,
        description: data.description,
        projectType: data.projectType || ProjectType.NEW,
        timeline: data.timeline || TimelineType.STANDARD,
        timelineModifier: modifier,
        estimatedMin,
        estimatedMax,
        budgetRangeMin: data.budgetMin,
        budgetRangeMax: data.budgetMax,
        additionalNotes: data.notes,
        status: 'PENDING_REVIEW', // Default status dari enum ProjectStatus
        projectServices: {
          create: projectServicesData,
        },
        projectAdditionalServices: {
          create: projectAdditionalServicesData,
        },
      },
      include: {
        client: true,
      },
    });

    // 6. Log activity
    await prisma.projectActivity.create({
      data: {
        projectId: project.id,
        type: 'PROJECT_SUBMITTED',
        action: 'Project submitted by client',
        description: `Reference: ${referenceId}`,
      },
    });

    return { project, referenceId };
  }

  private getTimelineModifier(timeline: TimelineType): number {
    switch (timeline) {
      case TimelineType.RUSH:
        return 0.3;
      case TimelineType.STANDARD:
        return 0;
      case TimelineType.FLEXIBLE:
        return -0.1;
      case TimelineType.NO_DEADLINE:
        return -0.15;
      default:
        return 0;
    }
  }
}