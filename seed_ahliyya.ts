import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const AHLIYYA_DATA = {
  faculties: [
    {
      nameArabic: "كلية الآداب والعلوم", nameEnglish: "Faculty of Arts & Sciences", sortOrder: 1,
      programs: [
        { nameArabic: "اللغة الإنجليزية وآدابها", nameEnglish: "English Language & Literature", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 85, internationalFeePerHour: 140, internationalFeeUnit: "USD" },
        { nameArabic: "اللغة الإنجليزية والترجمة", nameEnglish: "English Language & Translation", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 85, internationalFeePerHour: 140, internationalFeeUnit: "USD" },
        { nameArabic: "اللغة الإنجليزية التطبيقية", nameEnglish: "Applied English Language", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 85, internationalFeePerHour: 140, internationalFeeUnit: "USD" },
        { nameArabic: "اللغتان الألمانية-الإنجليزية", nameEnglish: "German-English Languages", degree: "BACHELOR", creditHours: 135, jordanianFeePerHour: 90, internationalFeePerHour: 150, internationalFeeUnit: "USD" },
        { nameArabic: "اللغتان الصينية-الإنجليزية", nameEnglish: "Chinese-English Languages", degree: "BACHELOR", creditHours: 135, jordanianFeePerHour: 90, internationalFeePerHour: 150, internationalFeeUnit: "USD" },
        { nameArabic: "علم النفس السريري", nameEnglish: "Clinical Psychology", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 85, internationalFeePerHour: 140, internationalFeeUnit: "USD" },
        { nameArabic: "علم النفس الإكلينيكي", nameEnglish: "Clinical Psychology", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
        { nameArabic: "اللغة الإنجليزية وآدابها", nameEnglish: "English Language & Literature", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 210, internationalFeeUnit: "JOD" },
      ]
    },
    {
      nameArabic: "كلية الحقوق", nameEnglish: "Faculty of Law", sortOrder: 2,
      programs: [
        { nameArabic: "الحقوق", nameEnglish: "Law", degree: "BACHELOR", creditHours: 141, jordanianFeePerHour: 95, internationalFeePerHour: 150, internationalFeeUnit: "USD" },
        { nameArabic: "الحقوق", nameEnglish: "Law", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 235, internationalFeeUnit: "JOD" },
        { nameArabic: "التحكيم في عقود الإنشاءات", nameEnglish: "Arbitration in Construction Contracts", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
        { nameArabic: "القانون الجزائي", nameEnglish: "Criminal Law", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 235, internationalFeeUnit: "JOD" },
        { nameArabic: "القانون الطبي والأخلاقيات", nameEnglish: "Medical Law & Ethics", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
      ]
    },
    {
      nameArabic: "كلية الأعمال", nameEnglish: "Faculty of Business", sortOrder: 3,
      programs: [
        { nameArabic: "إدارة الأعمال", nameEnglish: "Business Administration", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 165, internationalFeeUnit: "USD" },
        { nameArabic: "التسويق الإلكتروني والتواصل الرقمي", nameEnglish: "Digital Marketing & Communication", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 165, internationalFeeUnit: "USD" },
        { nameArabic: "التكنولوجيا المالية", nameEnglish: "Financial Technology (FinTech)", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 165, internationalFeeUnit: "USD" },
        { nameArabic: "الأعمال والتجارة الإلكترونية", nameEnglish: "Business & E-Commerce", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 165, internationalFeeUnit: "USD" },
        { nameArabic: "تكنولوجيا تحليل الأعمال", nameEnglish: "Business Analytics Technology", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 165, internationalFeeUnit: "USD" },
        { nameArabic: "المحاسبة الدولية والتدقيق", nameEnglish: "International Accounting & Auditing", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 165, internationalFeeUnit: "USD" },
        { nameArabic: "إدارة الأزمات والكوارث", nameEnglish: "Crisis & Disaster Management", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 165, internationalFeeUnit: "USD" },
        { nameArabic: "إدارة سلاسل التوريد واللوجستيات الرقمية", nameEnglish: "Supply Chain & Digital Logistics Management", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 175, internationalFeeUnit: "USD" },
        { nameArabic: "إدارة الأعمال MBA", nameEnglish: "MBA", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
        { nameArabic: "الإدارة الحكومية", nameEnglish: "Government Administration", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
        { nameArabic: "تكنولوجيا الأعمال", nameEnglish: "Business Technology", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
      ]
    },
    {
      nameArabic: "كلية الهندسة", nameEnglish: "Faculty of Engineering", sortOrder: 4,
      programs: [
        { nameArabic: "هندسة الاتصالات والحاسوب", nameEnglish: "Communication & Computer Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 125, internationalFeePerHour: 200, internationalFeeUnit: "USD" },
        { nameArabic: "الهندسة الطبية", nameEnglish: "Biomedical Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 125, internationalFeePerHour: 200, internationalFeeUnit: "USD" },
        { nameArabic: "الهندسة المدنية", nameEnglish: "Civil Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 125, internationalFeePerHour: 200, internationalFeeUnit: "USD" },
        { nameArabic: "الهندسة الكهربائية", nameEnglish: "Electrical Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 125, internationalFeePerHour: 200, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة الروبوتات والذكاء الاصطناعي", nameEnglish: "Robotics & AI Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 130, internationalFeePerHour: 200, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة المركبات الكهربائية", nameEnglish: "Electric Vehicle Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 125, internationalFeePerHour: 200, internationalFeeUnit: "USD" },
        { nameArabic: "الهندسة الصناعية", nameEnglish: "Industrial Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 125, internationalFeePerHour: 200, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة الاتصالات والحاسوب", nameEnglish: "Communication & Computer Engineering", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
        { nameArabic: "هندسة الإنشاءات وإدارة المشاريع", nameEnglish: "Construction Engineering & Project Management", degree: "MASTER", creditHours: 34, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
        { nameArabic: "الهندسة الطبية الحيوية", nameEnglish: "Biomedical Engineering", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
      ]
    },
    {
      nameArabic: "كلية تقنية المعلومات", nameEnglish: "Faculty of Information Technology", sortOrder: 5,
      programs: [
        { nameArabic: "علم الحاسوب", nameEnglish: "Computer Science", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 110, internationalFeePerHour: 175, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة البرمجيات", nameEnglish: "Software Engineering", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 110, internationalFeePerHour: 175, internationalFeeUnit: "USD" },
        { nameArabic: "الشبكات والأمن السيبراني", nameEnglish: "Networks & Cybersecurity", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 110, internationalFeePerHour: 175, internationalFeeUnit: "USD" },
        { nameArabic: "علم البيانات والذكاء الاصطناعي", nameEnglish: "Data Science & AI", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 110, internationalFeePerHour: 175, internationalFeeUnit: "USD" },
        { nameArabic: "الأمن السيبراني", nameEnglish: "Cybersecurity", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 250, internationalFeePerHour: 300, internationalFeeUnit: "JOD" },
      ]
    },
    {
      nameArabic: "كلية الصيدلة", nameEnglish: "Faculty of Pharmacy", sortOrder: 6,
      programs: [
        { nameArabic: "الصيدلة", nameEnglish: "Pharmacy", degree: "BACHELOR", creditHours: 162, jordanianFeePerHour: 130, internationalFeePerHour: 230, internationalFeeUnit: "USD" },
        { nameArabic: "العلوم الصيدلانية", nameEnglish: "Pharmaceutical Sciences", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
      ]
    },
    {
      nameArabic: "كلية العلوم الطبية المساندة", nameEnglish: "Faculty of Allied Medical Sciences", sortOrder: 7,
      programs: [
        { nameArabic: "العلوم الطبية المخبرية", nameEnglish: "Medical Laboratory Sciences", degree: "BACHELOR", creditHours: 137, jordanianFeePerHour: 105, internationalFeePerHour: 200, internationalFeeUnit: "USD" },
        { nameArabic: "السمع والنطق", nameEnglish: "Audiology & Speech", degree: "BACHELOR", creditHours: 142, jordanianFeePerHour: 100, internationalFeePerHour: 175, internationalFeeUnit: "USD" },
        { nameArabic: "علم البصريات", nameEnglish: "Optometry", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 80, internationalFeePerHour: 135, internationalFeeUnit: "USD" },
        { nameArabic: "علم التجميل", nameEnglish: "Cosmetology", degree: "BACHELOR", creditHours: 139, jordanianFeePerHour: 100, internationalFeePerHour: 175, internationalFeeUnit: "USD" },
        { nameArabic: "العلاج الطبيعي", nameEnglish: "Physical Therapy", degree: "BACHELOR", creditHours: 134, jordanianFeePerHour: 110, internationalFeePerHour: 200, internationalFeeUnit: "USD" },
        { nameArabic: "التكنولوجيا الحيوية الصيدلانية", nameEnglish: "Pharmaceutical Biotechnology", degree: "BACHELOR", creditHours: 134, jordanianFeePerHour: 105, internationalFeePerHour: 175, internationalFeeUnit: "USD" },
        { nameArabic: "العلاج الوظيفي", nameEnglish: "Occupational Therapy", degree: "BACHELOR", creditHours: 134, jordanianFeePerHour: 110, internationalFeePerHour: 175, internationalFeeUnit: "USD" },
        { nameArabic: "العلوم الطبية المخبرية", nameEnglish: "Medical Laboratory Sciences", degree: "MASTER", creditHours: 36, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
        { nameArabic: "علوم واضطرابات التواصل", nameEnglish: "Communication Sciences & Disorders", degree: "MASTER", creditHours: 36, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
        { nameArabic: "علوم السمع", nameEnglish: "Audiology Sciences", degree: "MASTER", creditHours: 36, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
      ]
    },
    {
      nameArabic: "كلية التمريض", nameEnglish: "Faculty of Nursing", sortOrder: 8,
      programs: [
        { nameArabic: "التمريض", nameEnglish: "Nursing", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 165, internationalFeeUnit: "USD" },
        { nameArabic: "علوم التمريض / الرعاية الحثيثة القلبية والتنفسية", nameEnglish: "Nursing Sciences / Cardiac & Respiratory Care", degree: "MASTER", creditHours: 34, jordanianFeePerHour: 225, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
        { nameArabic: "علوم التمريض / الرعاية الأولية", nameEnglish: "Nursing Sciences / Primary Care", degree: "MASTER", creditHours: 34, jordanianFeePerHour: 225, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
      ]
    },
    {
      nameArabic: "كلية التكنولوجيا الزراعية", nameEnglish: "Faculty of Agricultural Technology", sortOrder: 9,
      programs: [
        { nameArabic: "التكنولوجيا الزراعية", nameEnglish: "Agricultural Technology", degree: "BACHELOR", creditHours: 140, jordanianFeePerHour: 90, internationalFeePerHour: 150, internationalFeeUnit: "USD" },
        { nameArabic: "الحيوية وهندسة الجينات", nameEnglish: "Biotechnology & Genetic Engineering", degree: "BACHELOR", creditHours: 140, jordanianFeePerHour: 90, internationalFeePerHour: 150, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية العمارة والتصميم", nameEnglish: "Faculty of Architecture & Design", sortOrder: 10,
      programs: [
        { nameArabic: "هندسة العمارة", nameEnglish: "Architectural Engineering", degree: "BACHELOR", creditHours: 135, jordanianFeePerHour: 125, internationalFeePerHour: 200, internationalFeeUnit: "USD" },
        { nameArabic: "التصميم الداخلي", nameEnglish: "Interior Design", degree: "BACHELOR", creditHours: 135, jordanianFeePerHour: 105, internationalFeePerHour: 170, internationalFeeUnit: "USD" },
        { nameArabic: "الوسائط المتعددة والتصميم الجرافيكي", nameEnglish: "Multimedia & Graphic Design", degree: "BACHELOR", creditHours: 135, jordanianFeePerHour: 105, internationalFeePerHour: 170, internationalFeeUnit: "USD" },
        { nameArabic: "تصميم وتطوير الألعاب الرقمية", nameEnglish: "Digital Game Design & Development", degree: "BACHELOR", creditHours: 135, jordanianFeePerHour: 110, internationalFeePerHour: 175, internationalFeeUnit: "USD" },
        { nameArabic: "التصميم الداخلي", nameEnglish: "Interior Design", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 200, internationalFeePerHour: 275, internationalFeeUnit: "JOD" },
      ]
    },
    {
      nameArabic: "كلية العلوم التربوية", nameEnglish: "Faculty of Educational Sciences", sortOrder: 11,
      programs: [
        { nameArabic: "التربية البدنية والصحية", nameEnglish: "Physical & Health Education", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 70, internationalFeePerHour: 120, internationalFeeUnit: "USD" },
        { nameArabic: "علوم الرياضة", nameEnglish: "Sports Sciences", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 195, internationalFeeUnit: "JOD" },
      ]
    },
    {
      nameArabic: "كلية إدارة الضيافة والسياحة", nameEnglish: "Faculty of Hospitality & Tourism Management", sortOrder: 12,
      programs: [
        { nameArabic: "إدارة الضيافة وفنون الطهي", nameEnglish: "Hospitality Management & Culinary Arts", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 165, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية طب الأسنان", nameEnglish: "Faculty of Dentistry", sortOrder: 13,
      programs: [
        { nameArabic: "دكتور في طب الأسنان", nameEnglish: "Doctor of Dental Surgery (DDS)", degree: "BACHELOR", creditHours: 200, jordanianFeePerHour: 390, internationalFeePerHour: 600, internationalFeeUnit: "USD" },
        { nameArabic: "تكنولوجيا صناعة الأسنان", nameEnglish: "Dental Technology", degree: "BACHELOR", creditHours: 135, jordanianFeePerHour: 130, internationalFeePerHour: 210, internationalFeeUnit: "USD" },
      ]
    },
  ],
  semesterFees: [
    // Bachelor General
    { degreeLevel: "BACHELOR", feeType: "STANDARD_SEMESTER", labelArabic: "رسوم تسجيل فصلية", jordanianAmount: 375, internationalAmount: 575, internationalUnit: "USD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "BACHELOR", feeType: "ADMISSION", labelArabic: "رسوم التحاق (مرة واحدة)", jordanianAmount: 75, internationalAmount: 120, internationalUnit: "USD", isRefundable: false, sortOrder: 2 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسوم امتحانات المستوى (عربي، إنجليزي، حاسوب)", jordanianAmount: 75, internationalAmount: 120, internationalUnit: "USD", isRefundable: false, sortOrder: 3 },
    { degreeLevel: "BACHELOR", feeType: "SUMMER_SEMESTER", labelArabic: "رسوم تسجيل صيفي", jordanianAmount: 250, internationalAmount: 375, internationalUnit: "USD", isRefundable: false, sortOrder: 4 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسوم إجراء معادلة", jordanianAmount: 75, internationalAmount: 100, internationalUnit: "USD", isRefundable: false, sortOrder: 5 },
    { degreeLevel: "BACHELOR", feeType: "GRADUATION", labelArabic: "رسوم التخرج", jordanianAmount: 150, internationalAmount: 225, internationalUnit: "USD", isRefundable: false, sortOrder: 6 },
    // Bachelor Dentistry
    { degreeLevel: "BACHELOR_DENTISTRY", feeType: "STANDARD_SEMESTER", labelArabic: "رسوم تسجيل فصلية - طب الأسنان", jordanianAmount: 500, internationalAmount: 750, internationalUnit: "USD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "BACHELOR_DENTISTRY", feeType: "ADMISSION", labelArabic: "رسوم التحاق (مرة واحدة) - طب الأسنان", jordanianAmount: 150, internationalAmount: 300, internationalUnit: "USD", isRefundable: false, sortOrder: 2 },
    { degreeLevel: "BACHELOR_DENTISTRY", feeType: "SUMMER_SEMESTER", labelArabic: "رسوم تسجيل صيفي - طب الأسنان", jordanianAmount: 350, internationalAmount: 600, internationalUnit: "USD", isRefundable: false, sortOrder: 3 },
    { degreeLevel: "BACHELOR_DENTISTRY", feeType: "OTHER", labelArabic: "رسوم تسجيل سريرية فصلية (سنة 3/4/5)", jordanianAmount: 300, internationalAmount: 450, internationalUnit: "USD", isRefundable: false, sortOrder: 4 },
    { degreeLevel: "BACHELOR_DENTISTRY", feeType: "GRADUATION", labelArabic: "رسوم تخريج - طب الأسنان", jordanianAmount: 200, internationalAmount: 350, internationalUnit: "USD", isRefundable: false, sortOrder: 5 },
    // Master
    { degreeLevel: "MASTER", feeType: "ADMISSION", labelArabic: "رسوم طلب الالتحاق", jordanianAmount: 150, internationalAmount: 200, internationalUnit: "JOD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "MASTER", feeType: "STANDARD_SEMESTER", labelArabic: "رسوم تسجيل فصل نظامي", jordanianAmount: 425, internationalAmount: 450, internationalUnit: "JOD", isRefundable: false, sortOrder: 2 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "رسوم امتحان الشامل", jordanianAmount: 350, internationalAmount: 450, internationalUnit: "JOD", isRefundable: false, sortOrder: 3 },
    { degreeLevel: "MASTER", feeType: "SUMMER_SEMESTER", labelArabic: "رسوم تسجيل صيفي", jordanianAmount: 250, internationalAmount: 350, internationalUnit: "JOD", isRefundable: false, sortOrder: 4 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "رسوم تسجيل رسالة لأول مرة", jordanianAmount: 250, internationalAmount: 300, internationalUnit: "JOD", isRefundable: false, sortOrder: 5 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "رسوم استمرارية الرسالة", jordanianAmount: 425, internationalAmount: 450, internationalUnit: "JOD", isRefundable: false, sortOrder: 6 },
    { degreeLevel: "MASTER", feeType: "GRADUATION", labelArabic: "رسوم تخريج", jordanianAmount: 200, internationalAmount: 200, internationalUnit: "JOD", isRefundable: false, sortOrder: 7 },
  ]
};

async function main() {
  // Find the university
  const university = await prisma.university.findFirst({
    where: { nameArabic: { contains: "الأهلية" } }
  });

  if (!university) {
    console.error("Al-Ahliyya university not found in database. Please ensure it exists first.");
    process.exit(1);
  }

  console.log(`Found university: ${university.nameArabic} (${university.id})`);

  // Clear existing faculties and semester fees
  await prisma.semesterFee.deleteMany({ where: { universityId: university.id } });
  await prisma.faculty.deleteMany({ where: { universityId: university.id } });
  console.log("Cleared existing faculties and fees.");

  // Seed faculties and programs
  for (const f of AHLIYYA_DATA.faculties) {
    const faculty = await prisma.faculty.create({
      data: {
        nameArabic: f.nameArabic,
        nameEnglish: f.nameEnglish,
        universityId: university.id,
        sortOrder: f.sortOrder,
      }
    });
    for (let i = 0; i < f.programs.length; i++) {
      const p = f.programs[i];
      await prisma.program.create({
        data: {
          nameArabic: p.nameArabic,
          nameEnglish: p.nameEnglish,
          degree: p.degree,
          creditHours: p.creditHours,
          facultyId: faculty.id,
          jordanianFeePerHour: p.jordanianFeePerHour,
          internationalFeePerHour: p.internationalFeePerHour,
          internationalFeeUnit: p.internationalFeeUnit,
          sortOrder: i
        }
      });
    }
    console.log(`✓ Faculty: ${f.nameArabic} (${f.programs.length} programs)`);
  }

  // Seed semester fees
  for (let i = 0; i < AHLIYYA_DATA.semesterFees.length; i++) {
    const sf = AHLIYYA_DATA.semesterFees[i];
    await prisma.semesterFee.create({
      data: {
        universityId: university.id,
        degreeLevel: sf.degreeLevel,
        feeType: sf.feeType,
        labelArabic: sf.labelArabic,
        labelEnglish: sf.labelArabic,
        jordanianAmount: sf.jordanianAmount,
        internationalAmount: sf.internationalAmount,
        internationalUnit: sf.internationalUnit,
        isRefundable: sf.isRefundable,
        sortOrder: sf.sortOrder
      }
    });
  }
  console.log(`✓ Seeded ${AHLIYYA_DATA.semesterFees.length} semester fees.`);
  console.log(`\n✅ Al-Ahliyya Amman University data seeded successfully!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
