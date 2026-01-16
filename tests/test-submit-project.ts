// test-submit-project.ts (jalanin pake ts-node atau compile dulu)
import { ProjectService } from '../src/modules/projects/projects.service';
import { prisma } from '../src/config/database';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

async function testSubmit() {
    const service = new ProjectService();

    const dummyData = {
        clientName: 'Test Client Bro',
        clientEmail: 'testclient@contoh.com',          // email unik, kalau udah ada di DB bakal link existing
        clientPhone: '08123456789',
        countryCode: '+62',
        companyName: 'Test Company',
        companyWebsite: 'https://test.com',
        contactMethod: 'WHATSAPP' as const,
        contactTime: 'FLEXIBLE' as const,
        referralSource: 'Instagram',
        projectName: 'Website Company Profile Keren',
        description: 'Mau website modern buat perusahaan, minimal 5 halaman + responsive',
        projectType: 'NEW' as const,
        timeline: 'STANDARD' as const,
        budgetMin: 8000000,
        budgetMax: 15000000,
        notes: 'Prioritas UI/UX bagus',
        selectedServices: [
            {
                serviceId: 'a6e3d57c-2f92-4c09-9bac-45032a56c54e',  // cek di Supabase table services, ambil id uuid-nya
                complexityId: '559ee2d4-f1d6-4c6f-b819-146de4ee617e', // cek table complexity_options
            },
            // tambah 1-2 lagi kalau mau test multiple
        ],
        additionalServices: [
            { id: 'ab9106a4-5b08-46bf-a6a8-aebac1c21203' }, // ambil dari table additional_services
        ],
    };

    try {
        const result = await service.submitProject(dummyData);
        console.log('✅ SUCCESS! Project dibuat:');
        console.log('Reference ID:', result.referenceId);
        console.log('Project ID:', result.project.id);
        console.log('Estimated Min/Max:', result.project.estimatedMin, result.project.estimatedMax);
        console.log('Client ID:', result.project.clientId);
    } catch (error) {
        console.error('❌ ERROR saat submit:');
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

testSubmit();