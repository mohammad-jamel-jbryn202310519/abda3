const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const governmentUniversities = [
  { name: 'الجامعة الأردنية (JU)', eng: 'University of Jordan', location: 'عمان', governorate: 'عمان' },
  { name: 'جامعة اليرموك (YU)', eng: 'Yarmouk University', location: 'إربد', governorate: 'إربد' },
  { name: 'جامعة مؤتة (MUTAH)', eng: 'Mutah University', location: 'الكرك', governorate: 'الكرك' },
  { name: 'جامعة العلوم والتكنولوجيا الأردنية (JUST)', eng: 'Jordan University of Science and Technology', location: 'إربد', governorate: 'إربد' },
  { name: 'الجامعة الهاشمية (HU)', eng: 'Hashemite University', location: 'الزرقاء', governorate: 'الزرقاء' },
  { name: 'جامعة آل البيت (AABU)', eng: 'Al al-Bayt University', location: 'المفرق', governorate: 'المفرق' },
  { name: 'جامعة البلقاء التطبيقية (BAU)', eng: 'Al-Balqa Applied University', location: 'السلط', governorate: 'البلقاء' },
  { name: 'جامعة الحسين بن طلال (AHU)', eng: 'Al-Hussein Bin Talal University', location: 'معان', governorate: 'معان' },
  { name: 'جامعة الطفيلة التقنية (TTU)', eng: 'Tafila Technical University', location: 'الطفيلة', governorate: 'الطفيلة' },
  { name: 'الجامعة الألمانية الأردنية (GJU)', eng: 'German Jordanian University', location: 'مادبا', governorate: 'مادبا' }
];

const privateUniversities = [
  { name: 'جامعة عمان الأهلية', eng: 'Al-Ahliyya Amman University', location: 'البلقاء', governorate: 'البلقاء' },
  { name: 'جامعة البترا', eng: 'University of Petra', location: 'عمان', governorate: 'عمان' },
  { name: 'جامعة العلوم التطبيقية الخاصة', eng: 'Applied Science Private University', location: 'عمان', governorate: 'عمان' },
  { name: 'جامعة الزيتونة الأردنية', eng: 'Al-Zaytoonah University of Jordan', location: 'عمان', governorate: 'عمان' },
  { name: 'جامعة فيلادلفيا', eng: 'Philadelphia University', location: 'جرش', governorate: 'جرش' },
  { name: 'جامعة الإسراء', eng: 'Isra University', location: 'عمان', governorate: 'عمان' },
  { name: 'جامعة الشرق الأوسط', eng: 'Middle East University', location: 'عمان', governorate: 'عمان' },
  { name: 'جامعة الأميرة سمية للتكنولوجيا', eng: 'Princess Sumaya University for Technology', location: 'عمان', governorate: 'عمان' },
  { name: 'الجامعة الأمريكية في مادبا', eng: 'American University of Madaba', location: 'مادبا', governorate: 'مادبا' },
  { name: 'جامعة الزرقاء', eng: 'Zarqa University', location: 'الزرقاء', governorate: 'الزرقاء' },
  { name: 'جامعة جدارا', eng: 'Jadara University', location: 'إربد', governorate: 'إربد' },
  { name: 'جامعة جرش', eng: 'Jerash University', location: 'جرش', governorate: 'جرش' },
  { name: 'جامعة عجلون الوطنية', eng: 'Ajloun National University', location: 'عجلون', governorate: 'عجلون' },
  { name: 'جامعة عمان العربية', eng: 'Amman Arab University', location: 'البلقاء', governorate: 'البلقاء' },
  { name: 'الجامعة العربية المفتوحة (فرع الأردن)', eng: 'Arab Open University (Jordan)', location: 'عمان', governorate: 'عمان' }
];

const requiredDocuments = [
  "ملف الصورة الجواز",
  "ملف لشهادة الثانوية أو المرحلة السابقة",
  "ملف الصورة الهوية الوطنية",
  "ملف الصورة القبول الجامعي",
  "ملف الصورة الجدول الدراسي",
  "ملف الصورة من ختم الجواز"
];

const degrees = ["بكالوريوس", "ماجستير", "دكتوراة"];

async function main() {
  // Clear existing universities
  await prisma.university.deleteMany({});
  
  const allUniversities = [
    ...governmentUniversities.map(u => ({ ...u, type: 'GOVERNMENT' })),
    ...privateUniversities.map(u => ({ ...u, type: 'PRIVATE' }))
  ];

  for (const uni of allUniversities) {
    await prisma.university.create({
      data: {
        nameArabic: uni.name,
        nameEnglish: uni.eng,
        type: uni.type,
        location: uni.location,
        governorate: uni.governorate,
        degrees: degrees,
        requiredDocuments: requiredDocuments,
      }
    });
  }

  console.log(`Successfully seeded ${allUniversities.length} universities.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
