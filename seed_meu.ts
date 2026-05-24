import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const MEU_DATA = {
  universityNameAr: "جامعة الشرق الأوسط",
  universityNameEn: "Middle East University",
  logoUrl: "/logos/meu.png",
  foundedYear: 2005, // Approximation, adjust if needed

  faculties: [
    {
      nameArabic: "كلية الآداب والعلوم التربوية", nameEnglish: "Faculty of Arts and Educational Sciences", sortOrder: 1,
      programs: [
        { nameArabic: "اللغة الإنجليزية وآدابها", nameEnglish: "English Language and Literature", degree: "BACHELOR", creditHours: 135, jordanianFeePerHour: 80, internationalFeePerHour: 115, internationalFeeUnit: "USD" },
        { nameArabic: "اللغة العربية وآدابها", nameEnglish: "Arabic Language and Literature", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 50, internationalFeePerHour: 70, internationalFeeUnit: "USD" },
        { nameArabic: "الترجمة التطبيقية", nameEnglish: "Applied Translation", degree: "BACHELOR", creditHours: 135, jordanianFeePerHour: 90, internationalFeePerHour: 130, internationalFeeUnit: "USD" },
        { nameArabic: "تكنولوجيا التعليم", nameEnglish: "Educational Technology", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 70, internationalFeePerHour: 100, internationalFeeUnit: "USD" },
        { nameArabic: "الإدارة والتدريب الرياضي", nameEnglish: "Sports Management and Training", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 70, internationalFeePerHour: 100, internationalFeeUnit: "USD" },
        { nameArabic: "الدبلوم العالي في التربية", nameEnglish: "High Diploma in Education", degree: "HIGH_DIPLOMA", creditHours: 27, jordanianFeePerHour: 100, internationalFeePerHour: 145, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الحقوق", nameEnglish: "Faculty of Law", sortOrder: 2,
      programs: [
        { nameArabic: "القانون", nameEnglish: "Law", degree: "BACHELOR", creditHours: 141, jordanianFeePerHour: 65, internationalFeePerHour: 95, internationalFeeUnit: "USD" },
        { nameArabic: "القانون الخاص", nameEnglish: "Private Law", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 140, internationalFeePerHour: 200, internationalFeeUnit: "USD" },
        { nameArabic: "القانون العام", nameEnglish: "Public Law", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 140, internationalFeePerHour: 200, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الأعمال", nameEnglish: "Faculty of Business", sortOrder: 3,
      programs: [
        { nameArabic: "إدارة الأعمال", nameEnglish: "Business Administration", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 80, internationalFeePerHour: 115, internationalFeeUnit: "USD" },
        { nameArabic: "المحاسبة", nameEnglish: "Accounting", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 85, internationalFeePerHour: 120, internationalFeeUnit: "USD" },
        { nameArabic: "التسويق الإلكتروني والتواصل الاجتماعي", nameEnglish: "E-Marketing and Social Media", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 90, internationalFeePerHour: 130, internationalFeeUnit: "USD" },
        { nameArabic: "ذكاء الأعمال", nameEnglish: "Business Intelligence", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 90, internationalFeePerHour: 130, internationalFeeUnit: "USD" },
        { nameArabic: "التكنولوجيا المالية", nameEnglish: "Financial Technology", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 90, internationalFeePerHour: 130, internationalFeeUnit: "USD" },
        { nameArabic: "الأعمال والتجارة الإلكترونية", nameEnglish: "E-Business and Commerce", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 90, internationalFeePerHour: 130, internationalFeeUnit: "USD" },
        { nameArabic: "إدارة الموارد البشرية", nameEnglish: "Human Resources Management", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 90, internationalFeePerHour: 130, internationalFeeUnit: "USD" },
        { nameArabic: "إدارة سلسلة التزويد والإدارة اللوجستية الرقمية", nameEnglish: "Supply Chain and Digital Logistics Management", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 90, internationalFeePerHour: 130, internationalFeeUnit: "USD" },
        { nameArabic: "الأعمال وعلم النفس", nameEnglish: "Business and Psychology", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 90, internationalFeePerHour: 130, internationalFeeUnit: "USD" },
        { nameArabic: "إدارة الأعمال (MBA)", nameEnglish: "Business Administration (MBA)", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 200, internationalFeePerHour: 285, internationalFeeUnit: "USD" },
        { nameArabic: "المحاسبة", nameEnglish: "Accounting", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 215, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية تكنولوجيا المعلومات", nameEnglish: "Faculty of Information Technology", sortOrder: 4,
      programs: [
        { nameArabic: "علم الحاسوب", nameEnglish: "Computer Science", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 145, internationalFeeUnit: "USD" },
        { nameArabic: "علم البيانات والذكاء الاصطناعي", nameEnglish: "Data Science and AI", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 145, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة البرمجيات", nameEnglish: "Software Engineering", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 145, internationalFeeUnit: "USD" },
        { nameArabic: "الأمن السيبراني", nameEnglish: "Cybersecurity", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 145, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الإعلام", nameEnglish: "Faculty of Media", sortOrder: 5,
      programs: [
        { nameArabic: "الصحافة والإعلام", nameEnglish: "Journalism and Media", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 70, internationalFeePerHour: 100, internationalFeeUnit: "USD" },
        { nameArabic: "الإذاعة والتلفزيون", nameEnglish: "Radio and Television", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 70, internationalFeePerHour: 100, internationalFeeUnit: "USD" },
        { nameArabic: "الإعلام الرقمي", nameEnglish: "Digital Media", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 80, internationalFeePerHour: 115, internationalFeeUnit: "USD" },
        { nameArabic: "الإعلام", nameEnglish: "Media", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 180, internationalFeePerHour: 255, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الهندسة والتصميم", nameEnglish: "Faculty of Engineering and Design", sortOrder: 6,
      programs: [
        { nameArabic: "هندسة الطاقة المتجددة", nameEnglish: "Renewable Energy Engineering", degree: "BACHELOR", creditHours: 162, jordanianFeePerHour: 90, internationalFeePerHour: 130, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة الأنظمة الذكية", nameEnglish: "Smart Systems Engineering", degree: "BACHELOR", creditHours: 162, jordanianFeePerHour: 110, internationalFeePerHour: 160, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة العمارة", nameEnglish: "Architecture Engineering", degree: "BACHELOR", creditHours: 165, jordanianFeePerHour: 110, internationalFeePerHour: 160, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة طبية حيوية", nameEnglish: "Biomedical Engineering", degree: "BACHELOR", creditHours: 165, jordanianFeePerHour: 110, internationalFeePerHour: 160, internationalFeeUnit: "USD" },
        { nameArabic: "التصميم الجرافيكي", nameEnglish: "Graphic Design", degree: "BACHELOR", creditHours: 135, jordanianFeePerHour: 90, internationalFeePerHour: 130, internationalFeeUnit: "USD" },
        { nameArabic: "التصميم الداخلي", nameEnglish: "Interior Design", degree: "BACHELOR", creditHours: 141, jordanianFeePerHour: 100, internationalFeePerHour: 145, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الصيدلة", nameEnglish: "Faculty of Pharmacy", sortOrder: 7,
      programs: [
        { nameArabic: "الصيدلة", nameEnglish: "Pharmacy", degree: "BACHELOR", creditHours: 165, jordanianFeePerHour: 130, internationalFeePerHour: 185, internationalFeeUnit: "USD" },
        { nameArabic: "تصنيع المستحضرات التجميلية والكيماوية", nameEnglish: "Cosmetics and Chemical Manufacturing", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 90, internationalFeePerHour: 130, internationalFeeUnit: "USD" },
        { nameArabic: "العلوم الصيدلانية", nameEnglish: "Pharmaceutical Sciences", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 180, internationalFeePerHour: 255, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية العلوم الطبية المساندة", nameEnglish: "Faculty of Allied Medical Sciences", sortOrder: 8,
      programs: [
        { nameArabic: "العلاج الطبيعي", nameEnglish: "Physical Therapy", degree: "BACHELOR", creditHours: 136, jordanianFeePerHour: 100, internationalFeePerHour: 145, internationalFeeUnit: "USD" },
        { nameArabic: "التحاليل الطبية والعلوم المخبرية", nameEnglish: "Medical Analytics and Laboratory Sciences", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 145, internationalFeeUnit: "USD" },
        { nameArabic: "التغذية والصحة التكاملية", nameEnglish: "Nutrition and Integrative Health", degree: "BACHELOR", creditHours: 136, jordanianFeePerHour: 100, internationalFeePerHour: 145, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة الجينات والتكنولوجيا الحيوية", nameEnglish: "Genetic Engineering and Biotechnology", degree: "BACHELOR", creditHours: 136, jordanianFeePerHour: 80, internationalFeePerHour: 115, internationalFeeUnit: "USD" },
        { nameArabic: "إسعاف وطوارئ", nameEnglish: "Paramedics and Emergency", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 145, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية التمريض", nameEnglish: "Faculty of Nursing", sortOrder: 9,
      programs: [
        { nameArabic: "التمريض", nameEnglish: "Nursing", degree: "BACHELOR", creditHours: 134, jordanianFeePerHour: 90, internationalFeePerHour: 130, internationalFeeUnit: "USD" },
      ]
    }
  ],

  semesterFees: [
    { degreeLevel: "BACHELOR", feeType: "ADMISSION", labelArabic: "رسم الالتحاق (مرة واحدة)", jordanianAmount: 100, internationalAmount: 145, internationalUnit: "USD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "تأمينات مستردة (مرة واحدة)", jordanianAmount: 75, internationalAmount: 110, internationalUnit: "USD", isRefundable: true, sortOrder: 2 },
    { degreeLevel: "BACHELOR", feeType: "STANDARD_SEMESTER", labelArabic: "رسم تسجيل فصلي", jordanianAmount: 500, internationalAmount: 705, internationalUnit: "USD", isRefundable: false, sortOrder: 3 },
    { degreeLevel: "BACHELOR", feeType: "SUMMER_SEMESTER", labelArabic: "رسم تسجيل صيفي", jordanianAmount: 500, internationalAmount: 705, internationalUnit: "USD", isRefundable: false, sortOrder: 4 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "تأمين صحي (اختياري) فصل عادي", jordanianAmount: 60, internationalAmount: 85, internationalUnit: "USD", isRefundable: false, sortOrder: 5 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "تأمين صحي (اختياري) فصل صيفي", jordanianAmount: 35, internationalAmount: 50, internationalUnit: "USD", isRefundable: false, sortOrder: 6 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسم خدمات فصلية لغير الأردنيين", jordanianAmount: 30, internationalAmount: 45, internationalUnit: "USD", isRefundable: false, sortOrder: 7 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "المواصلات", jordanianAmount: 0, internationalAmount: 0, internationalUnit: "USD", isRefundable: false, sortOrder: 8 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "هوية جامعية (أول مرة)", jordanianAmount: 0, internationalAmount: 0, internationalUnit: "USD", isRefundable: false, sortOrder: 9 },

    { degreeLevel: "MASTER", feeType: "ADMISSION", labelArabic: "رسم الالتحاق (مرة واحدة)", jordanianAmount: 100, internationalAmount: 145, internationalUnit: "USD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "تأمينات مستردة (مرة واحدة)", jordanianAmount: 75, internationalAmount: 110, internationalUnit: "USD", isRefundable: true, sortOrder: 2 },
    { degreeLevel: "MASTER", feeType: "STANDARD_SEMESTER", labelArabic: "رسم تسجيل فصلي", jordanianAmount: 500, internationalAmount: 705, internationalUnit: "USD", isRefundable: false, sortOrder: 3 },
    { degreeLevel: "MASTER", feeType: "SUMMER_SEMESTER", labelArabic: "رسم تسجيل صيفي", jordanianAmount: 500, internationalAmount: 705, internationalUnit: "USD", isRefundable: false, sortOrder: 4 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "تأمين صحي (اختياري) فصل عادي", jordanianAmount: 60, internationalAmount: 85, internationalUnit: "USD", isRefundable: false, sortOrder: 5 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "تأمين صحي (اختياري) فصل صيفي", jordanianAmount: 35, internationalAmount: 50, internationalUnit: "USD", isRefundable: false, sortOrder: 6 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "رسم خدمات فصلية لغير الأردنيين", jordanianAmount: 30, internationalAmount: 45, internationalUnit: "USD", isRefundable: false, sortOrder: 7 },

    { degreeLevel: "HIGH_DIPLOMA", feeType: "ADMISSION", labelArabic: "رسم الالتحاق (مرة واحدة)", jordanianAmount: 100, internationalAmount: 145, internationalUnit: "USD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "HIGH_DIPLOMA", feeType: "OTHER", labelArabic: "تأمينات مستردة (مرة واحدة)", jordanianAmount: 75, internationalAmount: 110, internationalUnit: "USD", isRefundable: true, sortOrder: 2 },
    { degreeLevel: "HIGH_DIPLOMA", feeType: "STANDARD_SEMESTER", labelArabic: "رسم تسجيل فصلي", jordanianAmount: 500, internationalAmount: 705, internationalUnit: "USD", isRefundable: false, sortOrder: 3 },
    { degreeLevel: "HIGH_DIPLOMA", feeType: "SUMMER_SEMESTER", labelArabic: "رسم تسجيل صيفي", jordanianAmount: 500, internationalAmount: 705, internationalUnit: "USD", isRefundable: false, sortOrder: 4 },
  ]
};

async function main() {
  let university = await prisma.university.findFirst({
    where: {
      OR: [
        { nameArabic: { contains: "الشرق الأوسط" } },
        { nameEnglish: { contains: "Middle East" } }
      ]
    }
  });

  if (!university) {
    console.log("University not found, creating it...");
    university = await prisma.university.create({
      data: {
        nameArabic: MEU_DATA.universityNameAr,
        nameEnglish: MEU_DATA.universityNameEn,
        logoUrl: MEU_DATA.logoUrl,
        location: "Amman, Jordan",
        type: "PRIVATE"
      }
    });
  }

  console.log(`Found/Created: ${university.nameArabic} (${university.id})`);

  // Clear existing data
  await prisma.semesterFee.deleteMany({ where: { universityId: university.id } });
  await prisma.faculty.deleteMany({ where: { universityId: university.id } });
  console.log("Cleared existing data.\\n");

  // Seed faculties & programs
  for (const f of MEU_DATA.faculties) {
    const faculty = await prisma.faculty.create({
      data: { nameArabic: f.nameArabic, nameEnglish: f.nameEnglish, universityId: university.id, sortOrder: f.sortOrder }
    });
    for (let i = 0; i < f.programs.length; i++) {
      const p = f.programs[i];
      await prisma.program.create({
        data: {
          nameArabic: p.nameArabic, nameEnglish: p.nameEnglish, degree: p.degree,
          creditHours: p.creditHours, facultyId: faculty.id,
          jordanianFeePerHour: p.jordanianFeePerHour,
          internationalFeePerHour: p.internationalFeePerHour,
          internationalFeeUnit: p.internationalFeeUnit, sortOrder: i
        }
      });
    }
    console.log(`✓ ${f.nameArabic} — ${f.programs.length} programs`);
  }

  // Seed semester fees
  for (const sf of MEU_DATA.semesterFees) {
    await prisma.semesterFee.create({
      data: {
        universityId: university.id, degreeLevel: sf.degreeLevel, feeType: sf.feeType,
        labelArabic: sf.labelArabic, labelEnglish: sf.labelArabic,
        jordanianAmount: sf.jordanianAmount, internationalAmount: sf.internationalAmount,
        internationalUnit: sf.internationalUnit, isRefundable: sf.isRefundable, sortOrder: sf.sortOrder
      }
    });
  }

  // Update degrees field and requirements
  await prisma.university.update({
    where: { id: university.id },
    data: { 
      degrees: ["BACHELOR", "MASTER", "HIGH_DIPLOMA"], 
      feesLastUpdated: new Date(),
      requiredDocumentsJordanian: [
        "صورة مصدقة عن شهادة الثانوية العامة",
        "صورة عن شهادة الميلاد الأصلية",
        "هوية أحوال مدنية",
        "صورتان شخصيتان ملونتان",
        "للماجستير: بكالوريوس بتقدير جيد فأعلى من جامعة معتمدة بالانتظام",
        "للماجستير: اجتياز امتحان قدرات اللغة الأجنبية أو دراسة برنامج تأهيلي 6 ساعات",
        "للماجستير: دراسة مواد استدراكية بحد أقصى 9 ساعات إذا كان التخصص مختلفاً",
        "للماجستير: وثيقة التخرج وكشف علامات البكالوريوس مصدق من وزارة التعليم العالي"
      ],
      requiredDocumentsInternational: [
        "صورة مصدقة عن شهادة الثانوية العامة مصدقة حسب الأصول",
        "صورة عن شهادة الميلاد الأصلية",
        "جواز سفر ساري المفعول",
        "صورتان شخصيتان ملونتان",
        "للماجستير: بكالوريوس بتقدير جيد فأعلى من جامعة معتمدة بالانتظام",
        "للماجستير: اجتياز امتحان قدرات اللغة الأجنبية أو دراسة برنامج تأهيلي 6 ساعات",
        "للماجستير: شهادة اعتراف ومعادلة من بلدهم وتصديق الوثائق من السفارة الأردنية والخارجية"
      ]
    }
  });

  console.log(`\\n✅ Middle East University (MEU) — seeded successfully!`);
  console.log(`   ${MEU_DATA.faculties.length} faculties | ${MEU_DATA.faculties.reduce((s,f)=>s+f.programs.length,0)} programs | ${MEU_DATA.semesterFees.length} semester fees`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
