const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@ibda3alkhalij.com';
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'ChangeMe123!';

  const existingAdmin = await prisma.admin.findUnique({ where: { email: adminEmail } });
  if (!existingAdmin) {
    const hashed = await bcrypt.hash(adminPassword, 10);
    await prisma.admin.create({ data: { email: adminEmail, password: hashed } });
    console.log('Created admin:', adminEmail);
    console.log('Admin password (change immediately):', adminPassword);
  } else {
    console.log('Admin already exists:', adminEmail);
  }

  const existingSettings = await prisma.siteSettings.findFirst();
  if (!existingSettings) {
    await prisma.siteSettings.create({
      data: {
        siteNameArabic: 'إبداع الخليج',
        siteNameEnglish: 'Ibda3 Al-Khalij',
        logoUrl: '/logo/default.png',
        heroTitleArabic: 'خدمات طلابية مميزة لدراسة الأردن',
        heroTitleEnglish: 'Premium student services for studying in Jordan',
        heroDescriptionArabic: 'نساعد الطلاب الدوليين في اختيار الجامعة المناسبة، تقديم المستندات، وحجز الدراسة بسهولة.',
        heroDescriptionEnglish: 'We support international students with university selection, document guidance, and admission assistance.',
        contactEmail: 'info@ibda3alkhalij.com',
        whatsappNumber: '+962712345678',
        phoneNumber: '+962678901234',
        googleMapsUrl: '',
        socialLinks: {}
      }
    });
    console.log('Created default SiteSettings.');
  } else {
    console.log('SiteSettings already exist.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
