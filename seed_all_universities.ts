import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// =========================================================
// ALL JORDANIAN UNIVERSITIES — SORTED BY QS WORLD RANKING 2026
// Public Universities first, then Private Universities
// Sort order within each type: 1 = highest ranked
// =========================================================

const UNIVERSITIES = [
  // ─────────────────────────────────────────────────────────
  // PUBLIC UNIVERSITIES (حكومية)
  // ─────────────────────────────────────────────────────────
  {
    nameArabic: "الجامعة الأردنية",
    nameEnglish: "University of Jordan",
    type: "GOVERNMENT",
    location: "عمان",
    governorate: "عمان",
    worldRanking: 601,
    sortOrder: 1,
    degrees: ["BACHELOR", "MASTER", "PHD"],
  },
  {
    nameArabic: "جامعة العلوم والتكنولوجيا الأردنية",
    nameEnglish: "Jordan University of Science and Technology",
    type: "GOVERNMENT",
    location: "إربد",
    governorate: "إربد",
    worldRanking: 651,
    sortOrder: 2,
    degrees: ["BACHELOR", "MASTER", "PHD"],
  },
  {
    nameArabic: "جامعة اليرموك",
    nameEnglish: "Yarmouk University",
    type: "GOVERNMENT",
    location: "إربد",
    governorate: "إربد",
    worldRanking: 1001,
    sortOrder: 3,
    degrees: ["BACHELOR", "MASTER", "PHD"],
  },
  {
    nameArabic: "جامعة مؤتة",
    nameEnglish: "Mutah University",
    type: "GOVERNMENT",
    location: "الكرك",
    governorate: "الكرك",
    worldRanking: 1201,
    sortOrder: 4,
    degrees: ["BACHELOR", "MASTER", "PHD"],
  },
  {
    nameArabic: "الجامعة الهاشمية",
    nameEnglish: "The Hashemite University",
    type: "GOVERNMENT",
    location: "الزرقاء",
    governorate: "الزرقاء",
    worldRanking: 1201,
    sortOrder: 5,
    degrees: ["BACHELOR", "MASTER", "PHD"],
  },
  {
    nameArabic: "جامعة البلقاء التطبيقية",
    nameEnglish: "Al-Balqa Applied University",
    type: "GOVERNMENT",
    location: "السلط",
    governorate: "البلقاء",
    worldRanking: 1401,
    sortOrder: 6,
    degrees: ["BACHELOR", "MASTER"],
  },
  {
    nameArabic: "الجامعة الألمانية الأردنية",
    nameEnglish: "German Jordanian University",
    type: "GOVERNMENT",
    location: "مادبا",
    governorate: "مادبا",
    worldRanking: 1401,
    sortOrder: 7,
    degrees: ["BACHELOR", "MASTER"],
  },
  {
    nameArabic: "جامعة آل البيت",
    nameEnglish: "Al al-Bayt University",
    type: "GOVERNMENT",
    location: "المفرق",
    governorate: "المفرق",
    worldRanking: 1401,
    sortOrder: 8,
    degrees: ["BACHELOR", "MASTER", "PHD"],
  },
  {
    nameArabic: "جامعة الحسين بن طلال",
    nameEnglish: "Al-Hussein Bin Talal University",
    type: "GOVERNMENT",
    location: "معان",
    governorate: "معان",
    worldRanking: 1601,
    sortOrder: 9,
    degrees: ["BACHELOR", "MASTER"],
  },
  {
    nameArabic: "جامعة الطفيلة التقنية",
    nameEnglish: "Tafila Technical University",
    type: "GOVERNMENT",
    location: "الطفيلة",
    governorate: "الطفيلة",
    worldRanking: 1601,
    sortOrder: 10,
    degrees: ["BACHELOR", "MASTER"],
  },

  // ─────────────────────────────────────────────────────────
  // PRIVATE UNIVERSITIES (خاصة)
  // ─────────────────────────────────────────────────────────
  {
    nameArabic: "جامعة عمان الأهلية",
    nameEnglish: "Al-Ahliyya Amman University",
    type: "PRIVATE",
    location: "عمان",
    governorate: "عمان",
    worldRanking: 761,
    sortOrder: 101,
    degrees: ["BACHELOR", "MASTER"],
  },
  {
    nameArabic: "جامعة العلوم التطبيقية الخاصة",
    nameEnglish: "Applied Science Private University",
    type: "PRIVATE",
    location: "عمان",
    governorate: "عمان",
    worldRanking: 1001,
    sortOrder: 102,
    degrees: ["BACHELOR", "MASTER", "PHD"],
  },
  {
    nameArabic: "جامعة الأميرة سمية للتكنولوجيا",
    nameEnglish: "Princess Sumaya University for Technology",
    type: "PRIVATE",
    location: "عمان",
    governorate: "عمان",
    worldRanking: 1201,
    sortOrder: 103,
    degrees: ["BACHELOR", "MASTER", "PHD"],
  },
  {
    nameArabic: "جامعة الشرق الأوسط",
    nameEnglish: "Middle East University",
    type: "PRIVATE",
    location: "عمان",
    governorate: "عمان",
    worldRanking: 1201,
    sortOrder: 104,
    degrees: ["BACHELOR", "MASTER", "PHD"],
  },
  {
    nameArabic: "جامعة الزيتونة الأردنية",
    nameEnglish: "Al-Zaytoonah University of Jordan",
    type: "PRIVATE",
    location: "عمان",
    governorate: "عمان",
    worldRanking: 1401,
    sortOrder: 105,
    degrees: ["BACHELOR", "MASTER"],
  },
  {
    nameArabic: "جامعة عمان العربية",
    nameEnglish: "Amman Arab University",
    type: "PRIVATE",
    location: "عمان",
    governorate: "عمان",
    worldRanking: 1401,
    sortOrder: 106,
    degrees: ["BACHELOR", "MASTER", "PHD"],
  },
  {
    nameArabic: "جامعة البترا",
    nameEnglish: "Petra University",
    type: "PRIVATE",
    location: "عمان",
    governorate: "عمان",
    worldRanking: 1401,
    sortOrder: 107,
    degrees: ["BACHELOR", "MASTER"],
  },
  {
    nameArabic: "جامعة الزرقاء",
    nameEnglish: "Zarqa University",
    type: "PRIVATE",
    location: "الزرقاء",
    governorate: "الزرقاء",
    worldRanking: 1401,
    sortOrder: 108,
    degrees: ["BACHELOR", "MASTER"],
  },
  {
    nameArabic: "جامعة فيلادلفيا",
    nameEnglish: "Philadelphia University",
    type: "PRIVATE",
    location: "جرش",
    governorate: "جرش",
    worldRanking: 1601,
    sortOrder: 109,
    degrees: ["BACHELOR", "MASTER"],
  },
  {
    nameArabic: "جامعة الإسراء",
    nameEnglish: "Isra University",
    type: "PRIVATE",
    location: "عمان",
    governorate: "عمان",
    worldRanking: 1601,
    sortOrder: 110,
    degrees: ["BACHELOR", "MASTER"],
  },
  {
    nameArabic: "جامعة جرش",
    nameEnglish: "Jerash University",
    type: "PRIVATE",
    location: "جرش",
    governorate: "جرش",
    worldRanking: 1601,
    sortOrder: 111,
    degrees: ["BACHELOR", "MASTER"],
  },
  {
    nameArabic: "جامعة جدارا",
    nameEnglish: "Jadara University",
    type: "PRIVATE",
    location: "إربد",
    governorate: "إربد",
    worldRanking: 1601,
    sortOrder: 112,
    degrees: ["BACHELOR", "MASTER"],
  },
  {
    nameArabic: "جامعة العقبة للتكنولوجيا",
    nameEnglish: "Aqaba University of Technology",
    type: "PRIVATE",
    location: "العقبة",
    governorate: "العقبة",
    worldRanking: 1601,
    sortOrder: 113,
    degrees: ["BACHELOR"],
  },
  {
    nameArabic: "جامعة الاتحاد",
    nameEnglish: "Al-Etihad University",
    type: "PRIVATE",
    location: "عمان",
    governorate: "عمان",
    worldRanking: 1601,
    sortOrder: 114,
    degrees: ["BACHELOR"],
  },
];

const DEFAULT_JORDANIAN_DOCS = [
  "كشف علامات الثانوية العامة الأصلي أو المصدق (التوجيهي)",
  "صورة مصدقة عن الهوية الوطنية",
  "دفتر خدمة العلم (للذكور)",
  "أي متطلبات خاصة بالجامعة (مثل شهادة حسن سير وسلوك)"
];

const DEFAULT_INTERNATIONAL_DOCS = [
  "صورة مصدقة عن جواز السفر",
  "معادلة شهادة الثانوية العامة (صادرة عن وزارة التربية والتعليم الأردنية)",
  "كتاب عدم ممانعة (إذا كان مطلوباً من الملحقية الثقافية لبلدهم)",
  "البطاقة الأمنية (لبعض الجنسيات، مثل الطلبة السوريين)",
  "صور شخصية بقياس جواز السفر"
];

async function main() {
  console.log(`Seeding ${UNIVERSITIES.length} universities...\n`);

  for (const uni of UNIVERSITIES) {
    const existing = await prisma.university.findFirst({
      where: {
        OR: [
          { nameArabic: uni.nameArabic },
          { nameEnglish: uni.nameEnglish }
        ]
      }
    });

    if (existing) {
      await prisma.university.update({
        where: { id: existing.id },
        data: {
          worldRanking: uni.worldRanking,
          sortOrder: uni.sortOrder,
          governorate: uni.governorate,
          location: uni.location,
          degrees: uni.degrees,
          requiredDocumentsJordanian: DEFAULT_JORDANIAN_DOCS,
          requiredDocumentsInternational: DEFAULT_INTERNATIONAL_DOCS,
        }
      });
      console.log(`✏️  Updated: ${uni.nameArabic} (sortOrder: ${uni.sortOrder})`);
    } else {
      await prisma.university.create({
        data: {
          nameArabic: uni.nameArabic,
          nameEnglish: uni.nameEnglish,
          type: uni.type as any,
          location: uni.location,
          governorate: uni.governorate,
          worldRanking: uni.worldRanking,
          sortOrder: uni.sortOrder,
          degrees: uni.degrees,
          gallery: [],
          requiredDocuments: [
            "ملف الصورة الشخصية",
            "ملف شهادة الثانوية أو المرحلة السابقة",
            "ملف الصورة الوطنية / الهوية",
            "ملف صورة القبول الجامعي",
            "ملف صورة الجدول الدراسي",
            "ملف الصورة من ختم الجواز"
          ],
          requiredDocumentsJordanian: DEFAULT_JORDANIAN_DOCS,
          requiredDocumentsInternational: DEFAULT_INTERNATIONAL_DOCS,
        }
      });
      console.log(`✅  Created: ${uni.nameArabic} (sortOrder: ${uni.sortOrder})`);
    }
  }

  console.log(`\n🎉 Done! All ${UNIVERSITIES.length} universities are in the database, sorted by QS 2026 ranking.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
