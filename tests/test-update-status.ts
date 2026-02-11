// tests/test-update-status.ts (contoh cepat)
import { ProjectService } from '../src/modules/projects/projects.service';
import { prisma } from '../src/config/database';

async function testUpdate() {
    const service = new ProjectService();
    const projectId = '14f9bb64-c9cc-459d-b1e6-3eb5267047e3'; // ambil dari Supabase table projects
    const newStatus = 'IN_PROGRESS'; // atau 'IN_PROGRESS' dll

    try {
        const updated = await service.updateProjectStatus(projectId, newStatus, 'e150bf46-b027-44e2-a5f2-92eb3a51715d', 'Review awal selesai');
        console.log('SUCCESS! Status updated to:', updated.status);
        console.log('Updated at:', updated.reviewedAt);
    } catch (err) {
        console.error('ERROR:', err);
    } finally {
        await prisma.$disconnect();
    }
}

testUpdate();