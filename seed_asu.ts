import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ASU_DATA = {
  universityNameAr: "جامعة العلوم التطبيقية الخاصة",
  universityNameEn: "Applied Science Private University",

  faculties: [
    {
      nameArabic: "كلية طب الأسنان", nameEnglish: "Faculty of Dentistry", sortOrder: 1,
      programs: [
        { nameArabic: "دكتور في طب الأسنان", nameEnglish: "Doctor of Dental Surgery (DDS)", degree: "BACHELOR", creditHours: 213, jordanianFeePerHour: 300, internationalFeePerHour: 423, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الآداب والعلوم الإنسانية", nameEnglish: "Faculty of Arts & Humanities", sortOrder: 2,
      programs: [
        { nameArabic: "اللغة الإنجليزية وآدابها", nameEnglish: "English Language & Literature", degree: "BACHELOR", creditHours: 136, jordanianFeePerHour: 85, internationalFeePerHour: 120, internationalFeeUnit: "USD" },
        { nameArabic: "اللغة الإنجليزية / ترجمة", nameEnglish: "English Language / Translation", degree: "BACHELOR", creditHours: 136, jordanianFeePerHour: 85, internationalFeePerHour: 120, internationalFeeUnit: "USD" },
        { nameArabic: "العلوم السياسية", nameEnglish: "Political Science", degree: "BACHELOR", creditHours: 136, jordanianFeePerHour: 85, internationalFeePerHour: 60, internationalFeeUnit: "USD" },
        { nameArabic: "الإعلام الرقمي الإلكتروني", nameEnglish: "Digital Media", degree: "BACHELOR", creditHours: 136, jordanianFeePerHour: 80, internationalFeePerHour: 113, internationalFeeUnit: "USD" },
        { nameArabic: "اللغة الإنجليزية التطبيقية", nameEnglish: "Applied English Language", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 120, internationalFeePerHour: 85, internationalFeeUnit: "USD" },
        { nameArabic: "التربية الرياضية", nameEnglish: "Physical Education", degree: "BACHELOR", creditHours: 135, jordanianFeePerHour: 60, internationalFeePerHour: 85, internationalFeeUnit: "USD" },
        { nameArabic: "اللغتان الصينية والإنجليزية", nameEnglish: "Chinese & English Languages", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 80, internationalFeePerHour: 113, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية العلوم", nameEnglish: "Faculty of Sciences", sortOrder: 3,
      programs: [
        { nameArabic: "الكيمياء", nameEnglish: "Chemistry", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 60, internationalFeePerHour: 85, internationalFeeUnit: "USD" },
        { nameArabic: "الرياضيات", nameEnglish: "Mathematics", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 60, internationalFeePerHour: 85, internationalFeeUnit: "USD" },
        { nameArabic: "الكيمياء", nameEnglish: "Chemistry", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الفنون والتصميم", nameEnglish: "Faculty of Arts & Design", sortOrder: 4,
      programs: [
        { nameArabic: "تصميم الجرافيك", nameEnglish: "Graphic Design", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 95, internationalFeePerHour: 134, internationalFeeUnit: "USD" },
        { nameArabic: "التصميم الداخلي", nameEnglish: "Interior Design", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 95, internationalFeePerHour: 120, internationalFeeUnit: "USD" },
        { nameArabic: "التصميم للوسائط الرقمية", nameEnglish: "Digital Media Design", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 85, internationalFeePerHour: 120, internationalFeeUnit: "USD" },
        { nameArabic: "تصميم الأزياء والاكسسوارات", nameEnglish: "Fashion & Accessories Design", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
        { nameArabic: "التصميم الداخلي", nameEnglish: "Interior Design", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 200, internationalFeePerHour: 282, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الأعمال", nameEnglish: "Faculty of Business", sortOrder: 5,
      programs: [
        { nameArabic: "المحاسبة", nameEnglish: "Accounting", degree: "BACHELOR", creditHours: 136, jordanianFeePerHour: 105, internationalFeePerHour: 148, internationalFeeUnit: "USD" },
        { nameArabic: "إدارة الأعمال", nameEnglish: "Business Administration", degree: "BACHELOR", creditHours: 142, jordanianFeePerHour: 105, internationalFeePerHour: 148, internationalFeeUnit: "USD" },
        { nameArabic: "التسويق", nameEnglish: "Marketing", degree: "BACHELOR", creditHours: 142, jordanianFeePerHour: 105, internationalFeePerHour: 148, internationalFeeUnit: "USD" },
        { nameArabic: "نظم المعلومات الإدارية", nameEnglish: "Management Information Systems", degree: "BACHELOR", creditHours: 142, jordanianFeePerHour: 110, internationalFeePerHour: 155, internationalFeeUnit: "USD" },
        { nameArabic: "التسويق الرقمي", nameEnglish: "Digital Marketing", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
        { nameArabic: "الذكاء الاصطناعي في المحاسبة والتدقيق", nameEnglish: "AI in Accounting & Auditing", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 95, internationalFeePerHour: 134, internationalFeeUnit: "USD" },
        { nameArabic: "التكنولوجيا المالية وإدارة المخاطر", nameEnglish: "FinTech & Risk Management", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 110, internationalFeePerHour: 155, internationalFeeUnit: "USD" },
        { nameArabic: "المحاسبة", nameEnglish: "Accounting", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 175, internationalFeePerHour: 247, internationalFeeUnit: "USD" },
        { nameArabic: "المالية وإدارة المخاطر", nameEnglish: "Finance & Risk Management", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 175, internationalFeePerHour: 247, internationalFeeUnit: "USD" },
        { nameArabic: "إدارة الأعمال الرقمية", nameEnglish: "Digital Business Administration", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 175, internationalFeePerHour: 247, internationalFeeUnit: "USD" },
        { nameArabic: "التسويق الرقمي", nameEnglish: "Digital Marketing", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 175, internationalFeePerHour: 247, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الحقوق", nameEnglish: "Faculty of Law", sortOrder: 6,
      programs: [
        { nameArabic: "الحقوق", nameEnglish: "Law", degree: "BACHELOR", creditHours: 141, jordanianFeePerHour: 65, internationalFeePerHour: 92, internationalFeeUnit: "USD" },
        { nameArabic: "القوانين السيبرانية", nameEnglish: "Cyber Laws", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 212, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الهندسة والتكنولوجيا", nameEnglish: "Faculty of Engineering & Technology", sortOrder: 7,
      programs: [
        { nameArabic: "هندسة الكهربائية / الاتصالات وهندسة الحاسوب", nameEnglish: "Electrical / Communications & Computer Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 125, internationalFeePerHour: 177, internationalFeeUnit: "USD" },
        { nameArabic: "الهندسة الميكانيكية", nameEnglish: "Mechanical Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 125, internationalFeePerHour: 177, internationalFeeUnit: "USD" },
        { nameArabic: "الهندسة الصناعية", nameEnglish: "Industrial Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 125, internationalFeePerHour: 177, internationalFeeUnit: "USD" },
        { nameArabic: "الهندسة المدنية", nameEnglish: "Civil Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 130, internationalFeePerHour: 184, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة العمارة", nameEnglish: "Architectural Engineering", degree: "BACHELOR", creditHours: 167, jordanianFeePerHour: 130, internationalFeePerHour: 184, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة القوى والطاقة المتجددة", nameEnglish: "Power & Renewable Energy Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 130, internationalFeePerHour: 184, internationalFeeUnit: "USD" },
        { nameArabic: "تكنولوجيا الطاقة المتجددة", nameEnglish: "Renewable Energy Technology", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 80, internationalFeePerHour: 113, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة الروبوتات والذكاء الاصطناعي", nameEnglish: "Robotics & AI Engineering", degree: "BACHELOR", creditHours: 160, jordanianFeePerHour: 125, internationalFeePerHour: 177, internationalFeeUnit: "USD" },
        { nameArabic: "الهندسة التطبيقية / المركبات الهجينة والكهربائية", nameEnglish: "Applied Engineering / Hybrid & Electric Vehicles", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 60, internationalFeePerHour: 85, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الصيدلة", nameEnglish: "Faculty of Pharmacy", sortOrder: 8,
      programs: [
        { nameArabic: "الصيدلة", nameEnglish: "Pharmacy", degree: "BACHELOR", creditHours: 161, jordanianFeePerHour: 125, internationalFeePerHour: 177, internationalFeeUnit: "USD" },
        { nameArabic: "علوم صيدلانية", nameEnglish: "Pharmaceutical Sciences", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 212, internationalFeeUnit: "USD" },
        { nameArabic: "تكنولوجيا الصيدلانية وإدارة الجودة", nameEnglish: "Pharmaceutical Technology & Quality Management", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 212, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية العلوم الطبية المساندة", nameEnglish: "Faculty of Allied Medical Sciences", sortOrder: 9,
      programs: [
        { nameArabic: "التغذية السريرية والحميات", nameEnglish: "Clinical Nutrition & Dietetics", degree: "BACHELOR", creditHours: 136, jordanianFeePerHour: 65, internationalFeePerHour: 92, internationalFeeUnit: "USD" },
        { nameArabic: "العلاج الطبيعي", nameEnglish: "Physical Therapy", degree: "BACHELOR", creditHours: 135, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
        { nameArabic: "تكنولوجيا المختبرات الطبية والسريرية", nameEnglish: "Medical & Clinical Laboratory Technology", degree: "BACHELOR", creditHours: 137, jordanianFeePerHour: 90, internationalFeePerHour: 127, internationalFeeUnit: "USD" },
        { nameArabic: "علم التجميل", nameEnglish: "Cosmetology", degree: "BACHELOR", creditHours: 140, jordanianFeePerHour: 90, internationalFeePerHour: 127, internationalFeeUnit: "USD" },
        { nameArabic: "التغذية السريرية والحميات", nameEnglish: "Clinical Nutrition & Dietetics", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية التمريض", nameEnglish: "Faculty of Nursing", sortOrder: 10,
      programs: [
        { nameArabic: "التمريض", nameEnglish: "Nursing", degree: "BACHELOR", creditHours: 135, jordanianFeePerHour: 80, internationalFeePerHour: 113, internationalFeeUnit: "USD" },
        { nameArabic: "التمريض", nameEnglish: "Nursing", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 212, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية تكنولوجيا المعلومات", nameEnglish: "Faculty of Information Technology", sortOrder: 11,
      programs: [
        { nameArabic: "علم الحاسوب", nameEnglish: "Computer Science", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 90, internationalFeePerHour: 127, internationalFeeUnit: "USD" },
        { nameArabic: "هندسة البرمجيات", nameEnglish: "Software Engineering", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
        { nameArabic: "الأمن السيبراني والحوسبة السحابية", nameEnglish: "Cybersecurity & Cloud Computing", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
        { nameArabic: "علم البيانات والذكاء الاصطناعي", nameEnglish: "Data Science & AI", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
        { nameArabic: "الواقع الرقمي وتطوير الألعاب", nameEnglish: "Digital Reality & Game Development", degree: "BACHELOR", creditHours: 132, jordanianFeePerHour: 100, internationalFeePerHour: 141, internationalFeeUnit: "USD" },
        { nameArabic: "علم الحاسوب", nameEnglish: "Computer Science", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 212, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "كلية الشريعة والدراسات الإسلامية", nameEnglish: "Faculty of Sharia & Islamic Studies", sortOrder: 12,
      programs: [
        { nameArabic: "الفقه وأصوله", nameEnglish: "Islamic Jurisprudence", degree: "BACHELOR", creditHours: 136, jordanianFeePerHour: 50, internationalFeePerHour: 71, internationalFeeUnit: "USD" },
        { nameArabic: "القراءات القرآنية والتفسير", nameEnglish: "Quranic Recitation & Interpretation", degree: "BACHELOR", creditHours: 136, jordanianFeePerHour: 50, internationalFeePerHour: 71, internationalFeeUnit: "USD" },
      ]
    },
    {
      nameArabic: "برامج الدراسات العليا - الدبلوم والتربية", nameEnglish: "Graduate Programs - Diploma & Education", sortOrder: 13,
      programs: [
        { nameArabic: "دبلوم تكنولوجيا إنتاج الملابس والاكسسوارات", nameEnglish: "Clothing & Accessories Production Technology Diploma", degree: "HIGH_DIPLOMA", creditHours: 72, jordanianFeePerHour: 50, internationalFeePerHour: 71, internationalFeeUnit: "USD" },
        { nameArabic: "دبلوم تطبيقات الوسائط الرقمية", nameEnglish: "Digital Media Applications Diploma", degree: "HIGH_DIPLOMA", creditHours: 72, jordanianFeePerHour: 50, internationalFeePerHour: 71, internationalFeeUnit: "USD" },
        { nameArabic: "دبلوم الفنون والحرف التشكيلية", nameEnglish: "Arts & Crafts Diploma", degree: "HIGH_DIPLOMA", creditHours: 72, jordanianFeePerHour: 50, internationalFeePerHour: 71, internationalFeeUnit: "USD" },
        { nameArabic: "دبلوم الحوسبة / هندسة البرمجيات (BTEC الدولي)", nameEnglish: "Computing / Software Engineering BTEC Diploma", degree: "HIGH_DIPLOMA", creditHours: 75, jordanianFeePerHour: 70, internationalFeePerHour: 100, internationalFeeUnit: "USD" },
        { nameArabic: "دبلوم عالي في التربية", nameEnglish: "High Diploma in Education", degree: "HIGH_DIPLOMA", creditHours: 27, jordanianFeePerHour: 80, internationalFeePerHour: 113, internationalFeeUnit: "USD" },
        { nameArabic: "ترجمة المرئي والمسموع ووسائط الإعلام", nameEnglish: "Audiovisual Translation & Media", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 212, internationalFeeUnit: "USD" },
        { nameArabic: "تكنولوجيا الإعلام الرقمي", nameEnglish: "Digital Media Technology", degree: "MASTER", creditHours: 33, jordanianFeePerHour: 150, internationalFeePerHour: 212, internationalFeeUnit: "USD" },
      ]
    },
  ],

  semesterFees: [
    // ── BACHELOR GENERAL ──
    { degreeLevel: "BACHELOR", feeType: "ADMISSION", labelArabic: "رسوم طلب التحاق (مرة واحدة)", jordanianAmount: 60, internationalAmount: 60, internationalUnit: "USD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "BACHELOR", feeType: "STANDARD_SEMESTER", labelArabic: "رسوم تسجيل فصلية (فصل أول/ثاني)", jordanianAmount: 388, internationalAmount: 275, internationalUnit: "USD", isRefundable: false, sortOrder: 2 },
    { degreeLevel: "BACHELOR", feeType: "SUMMER_SEMESTER", labelArabic: "رسوم تسجيل الفصل الصيفي", jordanianAmount: 162, internationalAmount: 115, internationalUnit: "USD", isRefundable: false, sortOrder: 3 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "تأمينات مستردة (مرة واحدة)", jordanianAmount: 127, internationalAmount: 90, internationalUnit: "USD", isRefundable: true, sortOrder: 4 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسوم اعتماد دولي ومحلي", jordanianAmount: 28, internationalAmount: 20, internationalUnit: "USD", isRefundable: false, sortOrder: 5 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسوم تصنيفات عالمية", jordanianAmount: 28, internationalAmount: 20, internationalUnit: "USD", isRefundable: false, sortOrder: 6 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسم تعليم وتراسل عن بعد", jordanianAmount: 49, internationalAmount: 35, internationalUnit: "USD", isRefundable: false, sortOrder: 7 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسم أنشطة (فصل عادي)", jordanianAmount: 42, internationalAmount: 30, internationalUnit: "USD", isRefundable: false, sortOrder: 8 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسوم امتحانات المستوى (لكل مادة)", jordanianAmount: 28, internationalAmount: 20, internationalUnit: "USD", isRefundable: false, sortOrder: 9 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسوم التسجيل الإضافية - الفصل الأول", jordanianAmount: 635, internationalAmount: 450, internationalUnit: "USD", isRefundable: false, sortOrder: 10 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسوم التسجيل الإضافية - الفصل الثاني", jordanianAmount: 635, internationalAmount: 450, internationalUnit: "USD", isRefundable: false, sortOrder: 11 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "رسوم التسجيل الإضافية - الفصل الصيفي", jordanianAmount: 310, internationalAmount: 220, internationalUnit: "USD", isRefundable: false, sortOrder: 12 },
    // ── BACHELOR DENTISTRY ──
    { degreeLevel: "BACHELOR_DENTISTRY", feeType: "ADMISSION", labelArabic: "رسوم طلب التحاق طب الأسنان (مرة واحدة)", jordanianAmount: 353, internationalAmount: 250, internationalUnit: "USD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "BACHELOR_DENTISTRY", feeType: "STANDARD_SEMESTER", labelArabic: "رسوم تسجيل فصلية - طب الأسنان", jordanianAmount: 705, internationalAmount: 500, internationalUnit: "USD", isRefundable: false, sortOrder: 2 },
    { degreeLevel: "BACHELOR_DENTISTRY", feeType: "SUMMER_SEMESTER", labelArabic: "رسوم الفصل الصيفي - طب الأسنان", jordanianAmount: 353, internationalAmount: 250, internationalUnit: "USD", isRefundable: false, sortOrder: 3 },
    { degreeLevel: "BACHELOR_DENTISTRY", feeType: "OTHER", labelArabic: "رسوم امتحانات المستوى (لكل مادة) - طب الأسنان", jordanianAmount: 28, internationalAmount: 20, internationalUnit: "USD", isRefundable: false, sortOrder: 4 },
    // ── MASTER ──
    { degreeLevel: "MASTER", feeType: "ADMISSION", labelArabic: "رسوم طلب التحاق - ماجستير", jordanianAmount: 317, internationalAmount: 225, internationalUnit: "USD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "MASTER", feeType: "STANDARD_SEMESTER", labelArabic: "رسوم تسجيل فصلية - ماجستير", jordanianAmount: 387, internationalAmount: 275, internationalUnit: "USD", isRefundable: false, sortOrder: 2 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "تأمينات مستردة - ماجستير", jordanianAmount: 42, internationalAmount: 30, internationalUnit: "USD", isRefundable: true, sortOrder: 3 },
    { degreeLevel: "MASTER", feeType: "OTHER", labelArabic: "رسوم مصادر بحثية وتعليم عن بعد", jordanianAmount: 71, internationalAmount: 50, internationalUnit: "USD", isRefundable: false, sortOrder: 4 },
    // ── HIGH DIPLOMA ──
    { degreeLevel: "HIGH_DIPLOMA", feeType: "ADMISSION", labelArabic: "رسوم طلب التحاق - دبلوم عالي (أول مرة)", jordanianAmount: 113, internationalAmount: 80, internationalUnit: "USD", isRefundable: false, sortOrder: 1 },
    { degreeLevel: "HIGH_DIPLOMA", feeType: "STANDARD_SEMESTER", labelArabic: "رسوم تسجيل فصلية - دبلوم عالي", jordanianAmount: 424, internationalAmount: 300, internationalUnit: "USD", isRefundable: false, sortOrder: 2 },
    { degreeLevel: "HIGH_DIPLOMA", feeType: "OTHER", labelArabic: "تأمينات مستردة - دبلوم عالي (أول مرة)", jordanianAmount: 28, internationalAmount: 20, internationalUnit: "USD", isRefundable: true, sortOrder: 3 },
    { degreeLevel: "HIGH_DIPLOMA", feeType: "OTHER", labelArabic: "رسوم تعليم وتراسل عن بعد - دبلوم عالي", jordanianAmount: 71, internationalAmount: 50, internationalUnit: "USD", isRefundable: false, sortOrder: 4 },
    // ── TRANSPORTATION ──
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "مواصلات: الزرقاء / الرصيفة / مرج الحمام / السلط (فصل عادي)", jordanianAmount: 145, internationalAmount: null, internationalUnit: "JOD", isRefundable: false, sortOrder: 20 },
    { degreeLevel: "BACHELOR", feeType: "OTHER", labelArabic: "مواصلات: داخل عمان (فصل عادي)", jordanianAmount: 120, internationalAmount: null, internationalUnit: "JOD", isRefundable: false, sortOrder: 21 },
  ]
};

async function main() {
  const university = await prisma.university.findFirst({
    where: {
      OR: [
        { nameArabic: { contains: "التطبيقية" } },
        { nameEnglish: { contains: "Applied Science" } }
      ]
    }
  });

  if (!university) {
    console.error("❌ Applied Science University not found in database.");
    process.exit(1);
  }

  console.log(`Found: ${university.nameArabic} (${university.id})`);

  // Clear existing data
  await prisma.semesterFee.deleteMany({ where: { universityId: university.id } });
  await prisma.faculty.deleteMany({ where: { universityId: university.id } });
  console.log("Cleared existing data.\n");

  // Seed faculties & programs
  for (const f of ASU_DATA.faculties) {
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
  for (const sf of ASU_DATA.semesterFees) {
    await prisma.semesterFee.create({
      data: {
        universityId: university.id, degreeLevel: sf.degreeLevel, feeType: sf.feeType,
        labelArabic: sf.labelArabic, labelEnglish: sf.labelArabic,
        jordanianAmount: sf.jordanianAmount, internationalAmount: sf.internationalAmount,
        internationalUnit: sf.internationalUnit, isRefundable: sf.isRefundable, sortOrder: sf.sortOrder
      }
    });
  }

  // Update degrees field
  await prisma.university.update({
    where: { id: university.id },
    data: { degrees: ["BACHELOR", "MASTER", "HIGH_DIPLOMA"], feesLastUpdated: new Date() }
  });

  console.log(`\n✅ Applied Science Private University — seeded successfully!`);
  console.log(`   ${ASU_DATA.faculties.length} faculties | ${ASU_DATA.faculties.reduce((s,f)=>s+f.programs.length,0)} programs | ${ASU_DATA.semesterFees.length} semester fees`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
