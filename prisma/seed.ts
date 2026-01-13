import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import 'dotenv/config';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
    adapter,
});

async function main() {
    console.log('🌱 Seeding database...');

    // ============================================
    // 1. CREATE ADMIN USER
    // ============================================
    console.log('👤 Creating admin user...');

    const hashedPassword = await bcrypt.hash('illusphere2026', 10);

    const admin = await prisma.user.upsert({
        where: { email: 'admin@illusphere.com' },
        update: {},
        create: {
            email: 'admin@illusphere.com',
            password: hashedPassword,
            name: 'Wafiy Anwarul Hikam',
            role: 'PM',
            isActive: true,
        },
    });

    console.log(`✅ Admin created: ${admin.email}`);

    // ============================================
    // 2. CREATE TECH SERVICES
    // ============================================
    console.log('💻 Creating tech services...');

    // Web Development
    const webDev = await prisma.service.upsert({
        where: { slug: 'web-dev' },
        update: {},
        create: {
            name: 'Web Development',
            slug: 'web-dev',
            description: 'Custom web development solutions from landing pages to enterprise applications',
            category: 'TECH',
            icon: 'Code',
            basePrice: 3000000,
            isActive: true,
        },
    });

    await prisma.complexityOption.createMany({
        data: [
            {
                serviceId: webDev.id,
                name: 'Landing Page (3-5 pages)',
                slug: 'landing',
                description: 'Simple landing page with 3-5 sections',
                minPrice: 3000000,
                maxPrice: 7000000,
            },
            {
                serviceId: webDev.id,
                name: 'Business Website (8-12 pages)',
                slug: 'business',
                description: 'Complete business website with multiple pages',
                minPrice: 8000000,
                maxPrice: 15000000,
            },
            {
                serviceId: webDev.id,
                name: 'E-Commerce Platform',
                slug: 'ecommerce',
                description: 'Full e-commerce platform with payment integration',
                minPrice: 15000000,
                maxPrice: 35000000,
            },
            {
                serviceId: webDev.id,
                name: 'Custom Web Application',
                slug: 'webapp',
                description: 'Custom web application with advanced features',
                minPrice: 25000000,
                maxPrice: 75000000,
            },
        ],
        skipDuplicates: true,
    });

    // Mobile App Development
    const mobileDev = await prisma.service.upsert({
        where: { slug: 'mobile-dev' },
        update: {},
        create: {
            name: 'Mobile App Development',
            slug: 'mobile-dev',
            description: 'iOS and Android mobile application development',
            category: 'TECH',
            icon: 'Smartphone',
            basePrice: 12000000,
            isActive: true,
        },
    });

    await prisma.complexityOption.createMany({
        data: [
            {
                serviceId: mobileDev.id,
                name: 'Simple App (5-7 screens)',
                slug: 'simple',
                description: 'Basic mobile app with essential features',
                minPrice: 12000000,
                maxPrice: 25000000,
            },
            {
                serviceId: mobileDev.id,
                name: 'Standard App (10-15 screens)',
                slug: 'standard',
                description: 'Standard mobile app with moderate complexity',
                minPrice: 25000000,
                maxPrice: 50000000,
            },
            {
                serviceId: mobileDev.id,
                name: 'Complex App (20+ screens)',
                slug: 'complex',
                description: 'Complex mobile app with advanced features',
                minPrice: 50000000,
                maxPrice: 100000000,
            },
            {
                serviceId: mobileDev.id,
                name: 'Enterprise App',
                slug: 'enterprise',
                description: 'Enterprise-grade mobile application',
                minPrice: 100000000,
                maxPrice: 200000000,
            },
        ],
        skipDuplicates: true,
    });

    // AI Solutions & Chatbot
    const aiSolutions = await prisma.service.upsert({
        where: { slug: 'ai-solutions' },
        update: {},
        create: {
            name: 'AI Solutions & Chatbot',
            slug: 'ai-solutions',
            description: 'AI-powered solutions and intelligent chatbots',
            category: 'TECH',
            icon: 'Bot',
            basePrice: 7000000,
            isActive: true,
        },
    });

    await prisma.complexityOption.createMany({
        data: [
            {
                serviceId: aiSolutions.id,
                name: 'Basic Chatbot (FAQ)',
                slug: 'basic-chatbot',
                description: 'Simple FAQ chatbot',
                minPrice: 7000000,
                maxPrice: 12000000,
            },
            {
                serviceId: aiSolutions.id,
                name: 'AI Chatbot (NLP)',
                slug: 'ai-chatbot',
                description: 'AI-powered chatbot with natural language processing',
                minPrice: 15000000,
                maxPrice: 30000000,
            },
            {
                serviceId: aiSolutions.id,
                name: 'Custom ML Model',
                slug: 'custom-ml',
                description: 'Custom machine learning model',
                minPrice: 30000000,
                maxPrice: 60000000,
            },
            {
                serviceId: aiSolutions.id,
                name: 'AI Integration Suite',
                slug: 'ai-suite',
                description: 'Complete AI integration suite',
                minPrice: 60000000,
                maxPrice: 120000000,
            },
        ],
        skipDuplicates: true,
    });

    // Cloud Infrastructure & DevOps
    const cloudDevops = await prisma.service.upsert({
        where: { slug: 'cloud-devops' },
        update: {},
        create: {
            name: 'Cloud Infrastructure & DevOps',
            slug: 'cloud-devops',
            description: 'Cloud infrastructure setup and DevOps services',
            category: 'TECH',
            icon: 'Cloud',
            basePrice: 5000000,
            isActive: true,
        },
    });

    await prisma.complexityOption.createMany({
        data: [
            {
                serviceId: cloudDevops.id,
                name: 'Cloud Migration (Basic)',
                slug: 'migration',
                description: 'Basic cloud migration service',
                minPrice: 5000000,
                maxPrice: 10000000,
            },
            {
                serviceId: cloudDevops.id,
                name: 'CI/CD Pipeline Setup',
                slug: 'cicd',
                description: 'Complete CI/CD pipeline implementation',
                minPrice: 8000000,
                maxPrice: 15000000,
            },
            {
                serviceId: cloudDevops.id,
                name: 'Full Infrastructure',
                slug: 'full-infra',
                description: 'Complete infrastructure setup',
                minPrice: 20000000,
                maxPrice: 40000000,
            },
            {
                serviceId: cloudDevops.id,
                name: 'Enterprise Architecture',
                slug: 'enterprise-arch',
                description: 'Enterprise-grade cloud architecture',
                minPrice: 40000000,
                maxPrice: 80000000,
            },
        ],
        skipDuplicates: true,
    });

    console.log('✅ Tech services created');

    // ============================================
    // 3. CREATE CREATIVE SERVICES
    // ============================================
    console.log('🎨 Creating creative services...');

    // UI/UX Design
    const uiuxDesign = await prisma.service.upsert({
        where: { slug: 'ui-ux' },
        update: {},
        create: {
            name: 'UI/UX Design',
            slug: 'ui-ux',
            description: 'User interface and experience design',
            category: 'CREATIVE',
            icon: 'Palette',
            basePrice: 4000000,
            isActive: true,
        },
    });

    await prisma.complexityOption.createMany({
        data: [
            {
                serviceId: uiuxDesign.id,
                name: 'Website Design (5-8 pages)',
                slug: 'website-design',
                description: 'Complete website UI/UX design',
                minPrice: 4000000,
                maxPrice: 8000000,
            },
            {
                serviceId: uiuxDesign.id,
                name: 'App Design (10-15 screens)',
                slug: 'app-design',
                description: 'Mobile app UI/UX design',
                minPrice: 6000000,
                maxPrice: 12000000,
            },
            {
                serviceId: uiuxDesign.id,
                name: 'Design System + Prototype',
                slug: 'design-system',
                description: 'Complete design system with prototype',
                minPrice: 12000000,
                maxPrice: 25000000,
            },
            {
                serviceId: uiuxDesign.id,
                name: 'Complete Brand Experience',
                slug: 'brand-experience',
                description: 'Full brand experience design',
                minPrice: 25000000,
                maxPrice: 50000000,
            },
        ],
        skipDuplicates: true,
    });

    // Graphic Design
    const graphicDesign = await prisma.service.upsert({
        where: { slug: 'graphic-design' },
        update: {},
        create: {
            name: 'Graphic Design',
            slug: 'graphic-design',
            description: 'Professional graphic design services',
            category: 'CREATIVE',
            icon: 'PenTool',
            basePrice: 1500000,
            isActive: true,
        },
    });

    await prisma.complexityOption.createMany({
        data: [
            {
                serviceId: graphicDesign.id,
                name: 'Logo Design Only',
                slug: 'logo',
                description: 'Professional logo design',
                minPrice: 1500000,
                maxPrice: 4000000,
            },
            {
                serviceId: graphicDesign.id,
                name: 'Brand Identity Package',
                slug: 'brand-identity',
                description: 'Complete brand identity package',
                minPrice: 5000000,
                maxPrice: 12000000,
            },
            {
                serviceId: graphicDesign.id,
                name: 'Marketing Materials Kit',
                slug: 'marketing-kit',
                description: 'Marketing materials design kit',
                minPrice: 3000000,
                maxPrice: 8000000,
            },
            {
                serviceId: graphicDesign.id,
                name: 'Complete Visual System',
                slug: 'visual-system',
                description: 'Complete visual design system',
                minPrice: 15000000,
                maxPrice: 30000000,
            },
        ],
        skipDuplicates: true,
    });

    // Social Media Management
    const socialMedia = await prisma.service.upsert({
        where: { slug: 'social-media' },
        update: {},
        create: {
            name: 'Social Media Management',
            slug: 'social-media',
            description: 'Social media management and content creation',
            category: 'CREATIVE',
            icon: 'Share2',
            basePrice: 2500000,
            isActive: true,
        },
    });

    await prisma.complexityOption.createMany({
        data: [
            {
                serviceId: socialMedia.id,
                name: '1 Month (15 posts)',
                slug: '1-month',
                description: '1 month social media management',
                minPrice: 2500000,
                maxPrice: 2500000,
            },
            {
                serviceId: socialMedia.id,
                name: '3 Months (45 posts) - Save Rp 500.000',
                slug: '3-months',
                description: '3 months social media management',
                minPrice: 7000000,
                maxPrice: 7000000,
            },
            {
                serviceId: socialMedia.id,
                name: '6 Months (90 posts) - Save Rp 2.000.000',
                slug: '6-months',
                description: '6 months social media management',
                minPrice: 13000000,
                maxPrice: 13000000,
            },
            {
                serviceId: socialMedia.id,
                name: '12 Months (180 posts) - Save Rp 5.000.000',
                slug: '12-months',
                description: '12 months social media management',
                minPrice: 25000000,
                maxPrice: 25000000,
            },
        ],
        skipDuplicates: true,
    });

    // Videography & Motion Graphics
    const videography = await prisma.service.upsert({
        where: { slug: 'videography' },
        update: {},
        create: {
            name: 'Videography & Motion Graphics',
            slug: 'videography',
            description: 'Professional video production and motion graphics',
            category: 'CREATIVE',
            icon: 'Video',
            basePrice: 5000000,
            isActive: true,
        },
    });

    await prisma.complexityOption.createMany({
        data: [
            {
                serviceId: videography.id,
                name: 'Product Video (30-60s)',
                slug: 'product-video',
                description: 'Short product showcase video',
                minPrice: 5000000,
                maxPrice: 10000000,
            },
            {
                serviceId: videography.id,
                name: 'Brand Video (2-3 min)',
                slug: 'brand-video',
                description: 'Brand storytelling video',
                minPrice: 10000000,
                maxPrice: 20000000,
            },
            {
                serviceId: videography.id,
                name: 'Full Campaign (multiple videos)',
                slug: 'campaign',
                description: 'Complete video campaign',
                minPrice: 20000000,
                maxPrice: 50000000,
            },
            {
                serviceId: videography.id,
                name: 'Documentary/Long-form',
                slug: 'documentary',
                description: 'Documentary or long-form content',
                minPrice: 50000000,
                maxPrice: 100000000,
            },
        ],
        skipDuplicates: true,
    });

    console.log('✅ Creative services created');

    // ============================================
    // 4. CREATE ADDITIONAL SERVICES
    // ============================================
    console.log('➕ Creating additional services...');

    await prisma.additionalService.createMany({
        data: [
            {
                name: 'Content Writing & Copywriting',
                slug: 'content',
                description: 'Professional content writing and copywriting services',
                icon: 'FileText',
                minPrice: 1500000,
                maxPrice: 5000000,
            },
            {
                name: 'SEO Optimization Setup',
                slug: 'seo',
                description: 'Complete SEO optimization setup',
                icon: 'Search',
                minPrice: 2000000,
                maxPrice: 8000000,
            },
            {
                name: 'Multilingual Support (per language)',
                slug: 'multilingual',
                description: 'Multi-language support integration',
                icon: 'Globe',
                minPrice: 3000000,
                maxPrice: 3000000,
            },
            {
                name: 'Ongoing Maintenance (per month)',
                slug: 'maintenance',
                description: 'Monthly maintenance and support',
                icon: 'Headphones',
                minPrice: 1200000,
                maxPrice: 1200000,
            },
            {
                name: 'Training & Documentation',
                slug: 'training',
                description: 'Training sessions and documentation',
                icon: 'BookOpen',
                minPrice: 2500000,
                maxPrice: 5000000,
            },
            {
                name: 'Priority Support (per month)',
                slug: 'priority-support',
                description: 'Priority customer support',
                icon: 'Phone',
                minPrice: 800000,
                maxPrice: 800000,
            },
        ],
        skipDuplicates: true,
    });

    console.log('✅ Additional services created');

    // ============================================
    // SUMMARY
    // ============================================
    const serviceCount = await prisma.service.count();
    const complexityCount = await prisma.complexityOption.count();
    const additionalCount = await prisma.additionalService.count();

    console.log('\n🎉 Seeding completed!');
    console.log(`📊 Summary:`);
    console.log(`   - Users: 1 (Admin)`);
    console.log(`   - Services: ${serviceCount}`);
    console.log(`   - Complexity Options: ${complexityCount}`);
    console.log(`   - Additional Services: ${additionalCount}`);
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });