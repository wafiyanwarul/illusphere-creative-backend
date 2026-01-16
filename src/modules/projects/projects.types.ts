// src/modules/projects/projects.types.ts
import { ContactMethod, ContactTime, ProjectType, TimelineType } from '@prisma/client';

// Request DTO dari frontend form
export interface ProjectSubmissionRequest {
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

    selectedServices: Array<{
        serviceId: string;
        complexityId: string;
    }>;

    additionalServices?: Array<{
        id: string;
    }>;
}

// Response yang dikirim balik ke frontend (minimalis, sesuai kebutuhan client)
export interface ProjectSubmissionResponse {
    referenceId: string;
    projectId: string;
    estimatedMin: number;
    estimatedMax: number;
    message: string;
}