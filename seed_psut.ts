import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const PSUT_DATA = {
  universityNameAr: "جامعة الأميرة سمية للتكنولوجيا",
  universityNameEn: "Princess Sumaya University for Technology",
  logoUrl: "/logos/psut.png",
  foundedYear: 1991,

  faculties: [
    {
      nameArabic: "كلية الملك الحسين لعلوم الحوسبة", nameEnglish: "King Hussein School of Computing Sciences", sortOrder: 1,
      programs: [
        { nameArabic: "علم البيانات والذكاء الاصطناعي", nameEnglish: "Data Science & AI", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 130, internationalFeePerHour: 130, internationalFeeUnit: "JOD" },
        { nameArabic: "الأمن السيبراني", nameEnglish: "Cybersecurity", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 130, internationalFeePerHour: 130, internationalFeeUnit: "JOD" },
        { nameArabic: "علم الحاسوب", nameEnglish: "Computer Science", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 130, internationalFeePerHour: 130, internationalFeeUnit: "JOD" },
        { nameArabic: "هندسة البرمجيات", nameEnglish: "Software Engineering", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 130, internationalFeePerHour: 130, internationalFeeUnit: "JOD" },
        { nameArabic: "علم الرسم الحاسوبي", nameEnglish: "Computer Graphics", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 130, internationalFeePerHour: 130, internationalFeeUnit: "JOD" },
        // Master
        { nameArabic: "علم الحاسوب", nameEnglish: "Computer Science", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 150, internationalFeeUnit: "JOD" },
        { nameArabic: "علم البيانات", nameEnglish: "Data Science", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 150, internationalFeeUnit: "JOD" },
        { nameArabic: "أمن نظم المعلومات والجرائم الرقمية", nameEnglish: "Information Systems Security & Digital Criminology", degree: "MASTER", creditHours: 34, jordanianFeePerHour: 150, internationalFeePerHour: 150, internationalFeeUnit: "JOD" },
        { nameArabic: "هندسة نظم المؤسسات (بالاشتراك مع الألمانية الأردنية)", nameEnglish: "Enterprise Systems Engineering", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 120, internationalFeePerHour: 120, internationalFeeUnit: "JOD" },
        { nameArabic: "تكنولوجيا المعلومات الصحية", nameEnglish: "Health Information Technology", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 150, internationalFeeUnit: "JOD" },
      ]
    },
    {
      nameArabic: "كلية الملك طلال لتكنولوجيا الأعمال", nameEnglish: "King Talal School of Business Technology", sortOrder: 2,
      programs: [
        { nameArabic: "المحاسبة", nameEnglish: "Accounting", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 120, internationalFeePerHour: 120, internationalFeeUnit: "JOD" },
        { nameArabic: "التسويق الإلكتروني والتواصل الاجتماعي", nameEnglish: "E-Marketing & Social Media", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 120, internationalFeePerHour: 120, internationalFeeUnit: "JOD" },
        { nameArabic: "تكنولوجيا معلومات الأعمال", nameEnglish: "Business Information Technology", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 120, internationalFeePerHour: 120, internationalFeeUnit: "JOD" },
        { nameArabic: "إدارة الأعمال", nameEnglish: "Business Administration", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 120, internationalFeePerHour: 120, internationalFeeUnit: "JOD" },
        // Master
        { nameArabic: "ريادة الأعمال", nameEnglish: "Entrepreneurship", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 150, internationalFeeUnit: "JOD" },
        { nameArabic: "تحليل الأعمال", nameEnglish: "Business Analytics", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 150, internationalFeeUnit: "JOD" },
        { nameArabic: "التسويق الإلكتروني والتواصل الاجتماعي", nameEnglish: "E-Marketing & Social Media", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 150, internationalFeeUnit: "JOD" },
        { nameArabic: "الإدارة الهندسية (برنامج مشترك مع جامعة أريزونا)", nameEnglish: "Engineering Management", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 150, internationalFeeUnit: "JOD" },
      ]
    },
    {
      nameArabic: "كلية الملك عبدالله الثاني للهندسة", nameEnglish: "King Abdullah II School of Engineering", sortOrder: 3,
      programs: [
        { nameArabic: "هندسة أمن الشبكات والمعلومات", nameEnglish: "Networks & Information Security Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 130, internationalFeePerHour: 130, internationalFeeUnit: "JOD" },
        { nameArabic: "هندسة القدرة والطاقة الكهربائية", nameEnglish: "Electrical Power & Energy Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 130, internationalFeePerHour: 130, internationalFeeUnit: "JOD" },
        { nameArabic: "هندسة الحاسوب", nameEnglish: "Computer Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 130, internationalFeePerHour: 130, internationalFeeUnit: "JOD" },
        { nameArabic: "الهندسة الإلكترونية", nameEnglish: "Electronic Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 130, internationalFeePerHour: 130, internationalFeeUnit: "JOD" },
        { nameArabic: "هندسة الاتصالات - إنترنت الأشياء", nameEnglish: "Communications Engineering - IoT", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 130, internationalFeePerHour: 130, internationalFeeUnit: "JOD" },
        // Master
        { nameArabic: "الهندسة الكهربائية", nameEnglish: "Electrical Engineering", degree: "MASTER", creditHours: 34, jordanianFeePerHour: 150, internationalFeePerHour: 150, internationalFeeUnit: "JOD" },
      ]
    }
  ],

  semesterFees: [
    // BACHELOR
    { degreeLevel: "BACHELOR", feeType: "ADMISSION", labelArabic: "رسوم طلب الالتحاق (مرة واحدة)", jordanianAmount: 25, internationalAmount: 25, internationalUnit: "JOD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسوم التسجيل الفصل الأول (أول مرة)", jordanianAmount: 375, internationalAmount: 375, internationalUnit: "JOD", isRefundable: false, sortOrder: 2 },
    { degreeLevel: "BACHELOR", feeType: "STANDARD_SEMESTER", labelArabic: "رسوم التسجيل (فصل أول/ثاني)", jordanianAmount: 350, internationalAmount: 350, internationalUnit: "JOD", isRefundable: false, sortOrder: 3 },
    { degreeLevel: "BACHELOR", feeType: "SUMMER_SEMESTER", labelArabic: "رسوم التسجيل الفصل الصيفي", jordanianAmount: 175, internationalAmount: 175, internationalUnit: "JOD", isRefundable: false, sortOrder: 4 },
    
    // MASTER
    { degreeLevel: "MASTER", feeType: "ADMISSION", labelArabic: "رسوم طلب الالتحاق (مرة واحدة)", jordanianAmount: 50, internationalAmount: 50, internationalUnit: "JOD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "رسوم قبول وتسجيل (مرة واحدة عند الالتحاق)", jordanianAmount: 50, internationalAmount: 50, internationalUnit: "JOD", isRefundable: false, sortOrder: 2 },
    { degreeLevel: "MASTER", feeType: "STANDARD_SEMESTER", labelArabic: "رسوم تسجيل فصلية (كل فصل دراسي)", jordanianAmount: 350, internationalAmount: 350, internationalUnit: "JOD", isRefundable: false, sortOrder: 3 }
  ]
};

async function main() {
  let university = await prisma.university.findFirst({
    where: {
      OR: [
        { nameArabic: { contains: "سمية" } },
        { nameEnglish: { contains: "Sumaya" } }
      ]
    }
  });

  if (!university) {
    console.log("University not found, creating it...");
    university = await prisma.university.create({
      data: {
        nameArabic: PSUT_DATA.universityNameAr,
        nameEnglish: PSUT_DATA.universityNameEn,
        logoUrl: PSUT_DATA.logoUrl,
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
  for (const f of PSUT_DATA.faculties) {
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
  for (const sf of PSUT_DATA.semesterFees) {
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
      degrees: ["BACHELOR", "MASTER"], 
      feesLastUpdated: new Date(),
      requiredDocumentsJordanian: [
        "اجتياز اختبار القبول والمقابلة الشخصية بنجاح",
        "الحد الأدنى للمعدل: 75% للحوسبة والأعمال، 80% للهندسة",
        "للماجستير: بكالوريوس بتقدير جيد فأعلى من جامعة معتمدة، واجتياز امتحان لغة إنجليزية معتمد (TOEFL/IELTS)",
        "كشف علامات الثانوية العامة الأصلي أو مصدق",
        "صورة مصدقة عن هوية الأحوال المدنية",
        "دفتر خدمة العلم (للذكور الأردنيين)"
      ],
      requiredDocumentsInternational: [
        "اجتياز اختبار القبول والمقابلة الشخصية بنجاح",
        "معادلة الشهادة من وزارة التربية والتعليم الأردنية",
        "للماجستير: بكالوريوس بتقدير جيد فأعلى من جامعة معتمدة، واجتياز امتحان لغة إنجليزية معتمد (TOEFL/IELTS)",
        "صورة مصدقة عن جواز السفر",
        "كتاب عدم ممانعة (إذا كان مطلوباً من الملحقية الثقافية لبلد الطالب)"
      ]
    }
  });

  console.log(`\\n✅ Princess Sumaya University for Technology — seeded successfully!`);
  console.log(`   ${PSUT_DATA.faculties.length} faculties | ${PSUT_DATA.faculties.reduce((s,f)=>s+f.programs.length,0)} programs | ${PSUT_DATA.semesterFees.length} semester fees`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
