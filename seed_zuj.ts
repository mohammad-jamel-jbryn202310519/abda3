import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ZUJ_DATA = {
  universityNameAr: "جامعة الزيتونة الأردنية",
  universityNameEn: "Al-Zaytoonah University of Jordan",
  logoUrl: "/logos/zuj.png",
  foundedYear: 1993, // Approximation

  faculties: [
    {
      nameArabic: "كلية العلوم وتكنولوجيا المعلومات", nameEnglish: "Faculty of Science and Information Technology", sortOrder: 1,
      programs: [
        { nameArabic: "الرياضيات", nameEnglish: "Mathematics", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 60, internationalFeePerHour: 85, internationalFeeUnit: "USD" },
        { nameArabic: "علم الحاسوب", nameEnglish: "Computer Science", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 75, internationalFeePerHour: 106, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة البرمجيات", nameEnglish: "Software Engineering", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 75, internationalFeePerHour: 106, internationalFeeUnit: "USD" },
        { nameArabic: "علم البيانات والذكاء الاصطناعي", nameEnglish: "Data Science and AI", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 75, internationalFeePerHour: 106, internationalFeeUnit: "USD" },
        { nameArabic: "الأمن السيبراني", nameEnglish: "Cybersecurity", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 75, internationalFeePerHour: 111, internationalFeeUnit: "USD" },
        { nameArabic: "علم البيانات", nameEnglish: "Data Science", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 120, internationalFeePerHour: 170, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة البرمجيات", nameEnglish: "Software Engineering", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 120, internationalFeePerHour: 170, internationalFeeUnit: "USD" },
        { nameArabic: "الرياضيات", nameEnglish: "Mathematics", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 130, internationalFeePerHour: 184, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الصيدلة", nameEnglish: "Faculty of Pharmacy", sortOrder: 2,
      programs: [
        { nameArabic: "الصيدلة", nameEnglish: "Pharmacy", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 155, internationalFeePerHour: null, internationalFeeUnit: "USD" },
        { nameArabic: "العلوم الصيدلانية", nameEnglish: "Pharmaceutical Sciences", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 212, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية التمريض", nameEnglish: "Faculty of Nursing", sortOrder: 3,
      programs: [
        { nameArabic: "التمريض", nameEnglish: "Nursing", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 75, internationalFeePerHour: 106, internationalFeeUnit: "USD" },
        { nameArabic: "التمريض السريري / البالغين", nameEnglish: "Clinical Nursing / Adult", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 120, internationalFeePerHour: 170, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الهندسة والتكنولوجيا", nameEnglish: "Faculty of Engineering and Technology", sortOrder: 4,
      programs: [
        { nameArabic: "الهندسة المدنية والبنية التحتية", nameEnglish: "Civil and Infrastructure Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 110, internationalFeePerHour: 155, internationalFeeUnit: "USD" },
        { nameArabic: "الهندسة الكهربائية / الاتصالات والحاسوب", nameEnglish: "Electrical / Communications and Computer Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
        { nameArabic: "الهندسة الميكانيكية", nameEnglish: "Mechanical Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
        { nameArabic: "الهندسة الكهربائية / قوى وتحكم", nameEnglish: "Electrical / Power and Control", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
        { nameArabic: "الهندسة الكهربائية / الأنظمة الذكية والاتصالات", nameEnglish: "Electrical / Smart Systems and Comms", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة الطاقة المستدامة", nameEnglish: "Sustainable Energy Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
        { nameArabic: "تكنولوجيا الطاقة البديلة", nameEnglish: "Alternative Energy Technology", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 113, internationalFeePerHour: null, internationalFeeUnit: "USD" },
        { nameArabic: "التصنيع الذكي", nameEnglish: "Smart Manufacturing", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 120, internationalFeePerHour: 170, internationalFeeUnit: "USD" },
        { nameArabic: "الإدارة الهندسية", nameEnglish: "Engineering Management", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 120, internationalFeePerHour: 170, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية العمارة والتصميم", nameEnglish: "Faculty of Architecture and Design", sortOrder: 5,
      programs: [
        { nameArabic: "هندسة العمارة", nameEnglish: "Architecture Engineering", degree: "BACHELOR", creditHours: 165, jordanianFeePerHour: 185, internationalFeePerHour: null, internationalFeeUnit: "USD" },
        { nameArabic: "التصميم الجرافيكي", nameEnglish: "Graphic Design", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 75, internationalFeePerHour: 106, internationalFeeUnit: "USD" },
        { nameArabic: "تكنولوجيا الوسائط المتعددة (ملتيميديا)", nameEnglish: "Multimedia Technology", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 75, internationalFeePerHour: 100, internationalFeeUnit: "USD" },
        { nameArabic: "تصميم أزياء", nameEnglish: "Fashion Design", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 75, internationalFeePerHour: 100, internationalFeeUnit: "USD" },
        { nameArabic: "التصميم الصناعي", nameEnglish: "Industrial Design", degree: "BACHELOR", creditHours: 152, jordanianFeePerHour: null, internationalFeePerHour: null, internationalFeeUnit: "USD" },
        { nameArabic: "التصميم الجرافيكي", nameEnglish: "Graphic Design", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 120, internationalFeePerHour: 170, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية العلوم الطبية التطبيقية", nameEnglish: "Faculty of Applied Medical Sciences", sortOrder: 6,
      programs: [
        { nameArabic: "العلاج الطبيعي", nameEnglish: "Physical Therapy", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: null, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الآداب", nameEnglish: "Faculty of Arts", sortOrder: 7,
      programs: [
        { nameArabic: "اللغة العربية وآدابها", nameEnglish: "Arabic Language and Literature", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 64, internationalFeePerHour: null, internationalFeeUnit: "USD" },
        { nameArabic: "اللغة الإنجليزية / أدب", nameEnglish: "English Language / Literature", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 65, internationalFeePerHour: 92, internationalFeeUnit: "USD" },
        { nameArabic: "اللغة الإنجليزية / ترجمة", nameEnglish: "English Language / Translation", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 65, internationalFeePerHour: 92, internationalFeeUnit: "USD" },
        { nameArabic: "اللغة الفرنسية والإنجليزية", nameEnglish: "French and English Language", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 55, internationalFeePerHour: 78, internationalFeeUnit: "USD" },
        { nameArabic: "اللغة الإنجليزية التطبيقية", nameEnglish: "Applied English Language", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 80, internationalFeePerHour: 113, internationalFeeUnit: "USD" },
        { nameArabic: "اللغة الإنجليزية", nameEnglish: "English Language", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 71, internationalFeePerHour: null, internationalFeeUnit: "USD" },
        { nameArabic: "اللغة الإنجليزية / أدب", nameEnglish: "English Language / Literature", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 120, internationalFeePerHour: 170, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الأعمال", nameEnglish: "Faculty of Business", sortOrder: 8,
      programs: [
        { nameArabic: "إدارة الأعمال", nameEnglish: "Business Administration", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 70, internationalFeePerHour: 100, internationalFeeUnit: "USD" },
        { nameArabic: "المحاسبة", nameEnglish: "Accounting", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 70, internationalFeePerHour: 100, internationalFeeUnit: "USD" },
        { nameArabic: "المحاسبة باللغة الإنجليزية", nameEnglish: "Accounting in English", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 75, internationalFeePerHour: 106, internationalFeeUnit: "USD" },
        { nameArabic: "التكنولوجيا المالية", nameEnglish: "Financial Technology", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 50, internationalFeePerHour: 65, internationalFeeUnit: "USD" },
        { nameArabic: "الإدارة اللوجستية", nameEnglish: "Logistics Management", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 70, internationalFeePerHour: 100, internationalFeeUnit: "USD" },
        { nameArabic: "التسويق الرقمي", nameEnglish: "Digital Marketing", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 65, internationalFeePerHour: 92, internationalFeeUnit: "USD" },
        { nameArabic: "ذكاء الأعمال", nameEnglish: "Business Intelligence", degree: "BACHELOR", creditHours: 152, jordanianFeePerHour: 70, internationalFeePerHour: 100, internationalFeeUnit: "USD" },
        { nameArabic: "إدارة الأعمال", nameEnglish: "Business Administration", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 212, internationalFeeUnit: "USD" },
        { nameArabic: "المحاسبة", nameEnglish: "Accounting", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 212, internationalFeeUnit: "USD" },
        { nameArabic: "التسويق الرقمي", nameEnglish: "Digital Marketing", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 130, internationalFeePerHour: 184, internationalFeeUnit: "USD" },
        { nameArabic: "تحليل الأعمال", nameEnglish: "Business Analytics", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 120, internationalFeePerHour: 170, internationalFeeUnit: "USD" },
        { nameArabic: "التمويل والتكنولوجيا المالية", nameEnglish: "Finance and FinTech", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 120, internationalFeePerHour: 170, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الحقوق", nameEnglish: "Faculty of Law", sortOrder: 9,
      programs: [
        { nameArabic: "الحقوق", nameEnglish: "Law", degree: "BACHELOR", creditHours: 141, jordanianFeePerHour: 65, internationalFeePerHour: 92, internationalFeeUnit: "USD" },
        { nameArabic: "الحقوق", nameEnglish: "Law", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 120, internationalFeePerHour: 170, internationalFeeUnit: "USD" },
      ]
    }
  ],

  semesterFees: [
    { degreeLevel: "BACHELOR", feeType: "ADMISSION", labelArabic: "رسم طلب الالتحاق", jordanianAmount: 150, internationalAmount: null, internationalUnit: "USD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "تأمينات مستردة (مرة واحدة)", jordanianAmount: 175, internationalAmount: null, internationalUnit: "USD", isRefundable: true, sortOrder: 2 },
    { degreeLevel: "BACHELOR", feeType: "STANDARD_SEMESTER", labelArabic: "رسم تسجيل فصل دراسي", jordanianAmount: 495, internationalAmount: 700, internationalUnit: "USD", isRefundable: false, sortOrder: 3 },
    { degreeLevel: "BACHELOR", feeType: "SUMMER_SEMESTER", labelArabic: "رسم تسجيل فصل صيفي", jordanianAmount: 250, internationalAmount: 350, internationalUnit: "USD", isRefundable: false, sortOrder: 4 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسم امتحان المستوى (لكل امتحان)", jordanianAmount: 30, internationalAmount: 20, internationalUnit: "USD", isRefundable: false, sortOrder: 5 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسم هوية جامعية", jordanianAmount: 15, internationalAmount: 10, internationalUnit: "USD", isRefundable: false, sortOrder: 6 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسم التخرج", jordanianAmount: 70, internationalAmount: 50, internationalUnit: "USD", isRefundable: false, sortOrder: 7 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسم أخرى", jordanianAmount: 7, internationalAmount: null, internationalUnit: "USD", isRefundable: false, sortOrder: 8 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسم إضافي", jordanianAmount: 20, internationalAmount: 50, internationalUnit: "USD", isRefundable: false, sortOrder: 9 },

    { degreeLevel: "MASTER", feeType: "ADMISSION", labelArabic: "رسم طلب الالتحاق", jordanianAmount: 35, internationalAmount: 25, internationalUnit: "USD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "تأمينات مستردة (مرة واحدة)", jordanianAmount: 70, internationalAmount: 50, internationalUnit: "USD", isRefundable: true, sortOrder: 2 },
    { degreeLevel: "MASTER", feeType: "STANDARD_SEMESTER", labelArabic: "رسم تسجيل فصل دراسي", jordanianAmount: 425, internationalAmount: 600, internationalUnit: "USD", isRefundable: false, sortOrder: 3 },
    { degreeLevel: "MASTER", feeType: "SUMMER_SEMESTER", labelArabic: "رسم تسجيل فصل صيفي", jordanianAmount: 425, internationalAmount: 600, internationalUnit: "USD", isRefundable: false, sortOrder: 4 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "رسم مناقشة الرسالة أو امتحان الشامل", jordanianAmount: 705, internationalAmount: 500, internationalUnit: "USD", isRefundable: false, sortOrder: 5 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "رسم هوية جامعية", jordanianAmount: 7, internationalAmount: 5, internationalUnit: "USD", isRefundable: false, sortOrder: 6 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "رسم التخرج", jordanianAmount: 70, internationalAmount: 50, internationalUnit: "USD", isRefundable: false, sortOrder: 7 },
  ]
};

async function main() {
  let university = await prisma.university.findFirst({
    where: {
      OR: [
        { nameArabic: { contains: "الزيتونة" } },
        { nameEnglish: { contains: "Zaytoonah" } }
      ]
    }
  });

  if (!university) {
    console.log("University not found, creating it...");
    university = await prisma.university.create({
      data: {
        nameArabic: ZUJ_DATA.universityNameAr,
        nameEnglish: ZUJ_DATA.universityNameEn,
        logoUrl: ZUJ_DATA.logoUrl,
        location: "Amman, Jordan",
        type: "PRIVATE",
        foundedYear: ZUJ_DATA.foundedYear,
        description: "جامعة الزيتونة الأردنية (ZUJ) جامعة خاصة أردنية.",
        degrees: ["BACHELOR", "MASTER"],
        websiteUrl: "https://www.zuj.edu.jo"
      }
    });
  }

  console.log(`Found/Created: ${university.nameArabic} (${university.id})`);

  // Clear existing data
  await prisma.semesterFee.deleteMany({ where: { universityId: university.id } });
  await prisma.faculty.deleteMany({ where: { universityId: university.id } });
  console.log("Cleared existing data.\\n");

  // Seed faculties & programs
  for (const f of ZUJ_DATA.faculties) {
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
  for (const sf of ZUJ_DATA.semesterFees) {
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
        "بكالوريوس بتقدير جيد فأعلى، ومن قُبل بتقدير مقبول يدرس 3 مواد في الفصل الأول بمعدل 75%+",
        "اجتياز امتحان اللغة الإنجليزية: 75% للصيدلة والهندسة والإنجليزية، 65% للتخصصات العلمية وإدارة الأعمال، 50% للإنسانية والإدارية",
        "المراكز المعتمدة: الجامعات الأردنية الرسمية، وامتحان IELTS وTOEFL داخل المملكة فقط",
        "عند الانتقال من جامعة أخرى: معدل جيد جداً فأعلى، ويمكن معادلة 9 ساعات كحد أقصى"
      ],
      requiredDocumentsInternational: [
        "بكالوريوس بتقدير جيد فأعلى، ومن قُبل بتقدير مقبول يدرس 3 مواد في الفصل الأول بمعدل 75%+",
        "اجتياز امتحان اللغة الإنجليزية: 75% للصيدلة والهندسة والإنجليزية، 65% للتخصصات العلمية وإدارة الأعمال، 50% للإنسانية والإدارية",
        "المراكز المعتمدة: الجامعات الأردنية الرسمية، وامتحان IELTS وTOEFL داخل المملكة فقط",
        "عند الانتقال من جامعة أخرى: معدل جيد جداً فأعلى، ويمكن معادلة 9 ساعات كحد أقصى"
      ]
    }
  });

  console.log(`\\n✅ Al-Zaytoonah University of Jordan (ZUJ) — seeded successfully!`);
  console.log(`   ${ZUJ_DATA.faculties.length} faculties | ${ZUJ_DATA.faculties.reduce((s,f)=>s+f.programs.length,0)} programs | ${ZUJ_DATA.semesterFees.length} semester fees`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
