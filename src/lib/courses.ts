export type Lesson = {
  title: string;
  duration: string;
  /** Optional YouTube video ID. Leave empty for a "coming soon" placeholder. */
  videoId?: string;
};

export type Course = {
  slug: string;
  title: string;
  short: string;
  stream: string;
  level: "UG" | "PG";
  duration: string;
  mode: string;
  fee: string;
  emi: string;
  tier: "Tier 1" | "Tier 2" | "Tier 3";
  rating: number;
  students: string;
  accent: string;
  icon: "briefcase" | "chart" | "calc" | "line" | "megaphone" | "crown";
  outcomes: string[];
  highlights: string[];
  curriculum: Lesson[];
};

export const courses: Course[] = [
  {
    slug: "bachelor-of-business-administration-bba",
    title: "Bachelor of Business Administration (BBA)",
    short:
      "Build a strong foundation in management, marketing, finance and entrepreneurship.",
    stream: "Management",
    level: "UG",
    duration: "3 Years",
    mode: "100% Online",
    fee: "₹32,000/yr",
    emi: "EMI from ₹2,800/mo",
    tier: "Tier 2",
    rating: 4.8,
    students: "12,400+",
    accent: "from-navy-700 to-navy-900",
    icon: "briefcase",
    outcomes: [
      "Core concepts of management, accounting and business law",
      "Marketing, HR and operations fundamentals",
      "Data-driven decision making and business analytics",
      "Leadership, communication and presentation skills",
    ],
    highlights: [
      "UGC-entitled degree",
      "Live + recorded classes",
      "Industry mentorship",
      "Placement assistance",
    ],
    curriculum: [
      { title: "Principles of Management", duration: "42 min", videoId: "vOykcERGw9Y" },
      { title: "Business Economics", duration: "38 min", videoId: "IMcU-yWK-rc" },
      { title: "Financial Accounting", duration: "51 min", videoId: "mEuea9NGiJM" },
      { title: "Marketing Management", duration: "45 min", videoId: "uTIfDBH80HU" },
      { title: "Organisational Behaviour", duration: "40 min", videoId: "EQ-6_KxcTFg" },
      { title: "Business Statistics", duration: "48 min", videoId: "UjPTKJ2API8" },
    ],
  },
  {
    slug: "master-of-business-administration-mba",
    title: "Master of Business Administration (MBA)",
    short:
      "An industry-focused MBA with specialisations in Finance, Marketing and HR.",
    stream: "Management",
    level: "PG",
    duration: "2 Years",
    mode: "100% Online",
    fee: "₹68,000/yr",
    emi: "EMI from ₹5,800/mo",
    tier: "Tier 1",
    rating: 4.9,
    students: "18,900+",
    accent: "from-navy-700 to-navy-900",
    icon: "chart",
    outcomes: [
      "Strategic management and corporate finance",
      "Specialisation in Finance, Marketing or HR",
      "Case-based learning from real companies",
      "Executive communication and negotiation",
    ],
    highlights: [
      "AACSB-aligned curriculum",
      "Capstone industry project",
      "Alumni network access",
      "Career & placement cell",
    ],
    curriculum: [
      { title: "Strategic Management", duration: "55 min", videoId: "CMMUwNeBxyA" },
      { title: "Corporate Finance", duration: "47 min", videoId: "FLWG3LgNFPo" },
      { title: "Marketing Strategy", duration: "43 min", videoId: "9zyL5Tu-FnY" },
      { title: "Human Resource Management", duration: "41 min", videoId: "c8_avX9miag" },
      { title: "Business Analytics", duration: "52 min", videoId: "rCFQukS8Org" },
      { title: "Operations & Supply Chain", duration: "46 min", videoId: "ZNLaoFdcCPs" },
    ],
  },
  {
    slug: "bachelor-of-commerce-bcom",
    title: "Bachelor of Commerce (B.Com)",
    short:
      "A comprehensive commerce degree covering accounting, taxation and finance.",
    stream: "Commerce",
    level: "UG",
    duration: "3 Years",
    mode: "100% Online",
    fee: "₹28,000/yr",
    emi: "EMI from ₹2,400/mo",
    tier: "Tier 2",
    rating: 4.7,
    students: "9,800+",
    accent: "from-navy-700 to-navy-900",
    icon: "calc",
    outcomes: [
      "Financial and cost accounting",
      "Income tax and GST fundamentals",
      "Banking, insurance and financial markets",
      "Business law and company law",
    ],
    highlights: [
      "CA/CS foundation-ready",
      "Practical Tally & Excel",
      "Recorded + live doubt sessions",
      "Exam-oriented study material",
    ],
    curriculum: [
      { title: "Financial Accounting", duration: "44 min", videoId: "nZqDkrEPDjE" },
      { title: "Cost Accounting", duration: "39 min", videoId: "m8LdwJuOal4" },
      { title: "Income Tax Law", duration: "50 min", videoId: "PXy2XPZFyWQ" },
      { title: "Business Law", duration: "36 min", videoId: "jdUhrqbQqbQ" },
      { title: "Banking & Finance", duration: "42 min", videoId: "fs4DAd55_0o" },
    ],
  },
  {
    slug: "master-of-commerce-mcom",
    title: "Master of Commerce (M.Com)",
    short:
      "Advanced commerce education for careers in finance, banking and academia.",
    stream: "Commerce",
    level: "PG",
    duration: "2 Years",
    mode: "100% Online",
    fee: "₹42,000/yr",
    emi: "EMI from ₹3,600/mo",
    tier: "Tier 1",
    rating: 4.8,
    students: "6,500+",
    accent: "from-navy-700 to-navy-900",
    icon: "line",
    outcomes: [
      "Advanced financial management",
      "International finance and taxation",
      "Research methodology and dissertation",
      "Corporate governance and ethics",
    ],
    highlights: [
      "UGC-NET oriented content",
      "Research mentorship",
      "Banking & finance career path",
      "Flexible semester structure",
    ],
    curriculum: [
      { title: "Advanced Financial Management", duration: "49 min", videoId: "psQaSIotMv4" },
      { title: "International Business", duration: "44 min", videoId: "vVzco0yZl88" },
      { title: "Corporate Tax Planning", duration: "46 min", videoId: "-QmvKHi5ZbM" },
      { title: "Research Methodology", duration: "40 min", videoId: "VUCicpiNdMI" },
    ],
  },
  {
    slug: "bba-digital-marketing",
    title: "BBA in Digital Marketing",
    short:
      "A career-focused BBA specialising in digital marketing, SEO and growth.",
    stream: "Management",
    level: "UG",
    duration: "3 Years",
    mode: "100% Online",
    fee: "₹38,000/yr",
    emi: "EMI from ₹3,200/mo",
    tier: "Tier 3",
    rating: 4.7,
    students: "7,200+",
    accent: "from-navy-700 to-navy-900",
    icon: "megaphone",
    outcomes: [
      "SEO, SEM and social media marketing",
      "Content marketing and copywriting",
      "Performance marketing and analytics",
      "Brand building and campaign strategy",
    ],
    highlights: [
      "Live project portfolio",
      "Google & Meta certification prep",
      "Internship placement support",
      "Tool-based hands-on training",
    ],
    curriculum: [
      { title: "Digital Marketing Fundamentals", duration: "41 min", videoId: "qnBhOVH1QQ8" },
      { title: "SEO & Content Strategy", duration: "47 min", videoId: "tqL5OOTycMo" },
      { title: "Social Media Marketing", duration: "38 min", videoId: "d5pVjv1KYVw" },
      { title: "Performance Marketing", duration: "45 min", videoId: "Bt-0wTf_j4c" },
      { title: "Marketing Analytics", duration: "43 min", videoId: "ecSj1bHbs48" },
    ],
  },
  {
    slug: "executive-mba-emba",
    title: "Executive MBA (EMBA)",
    short:
      "A weekend EMBA for working professionals aiming for senior leadership.",
    stream: "Management",
    level: "PG",
    duration: "18 Months",
    mode: "Online + Weekend",
    fee: "₹1,10,000/yr",
    emi: "EMI from ₹9,200/mo",
    tier: "Tier 1",
    rating: 4.9,
    students: "3,100+",
    accent: "from-navy-700 to-navy-900",
    icon: "crown",
    outcomes: [
      "Leadership and change management",
      "Advanced strategy and M&A",
      "Executive finance for leaders",
      "Digital transformation strategy",
    ],
    highlights: [
      "Weekend live sessions",
      "CXO mentorship",
      "Global case studies",
      "Senior alumni network",
    ],
    curriculum: [
      { title: "Leadership & Change", duration: "52 min", videoId: "22coAwMD9M0" },
      { title: "Strategy & M&A", duration: "48 min", videoId: "dOmFyeBhwnM" },
      { title: "Executive Finance", duration: "50 min", videoId: "Jx796PHJzgc" },
      { title: "Digital Transformation", duration: "44 min", videoId: "_2-sWHeJg98" },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export const universities = [
  "University of Delhi",
  "Mumbai University",
  "Christ University",
  "Amity University",
  "LPU Online",
  "Chandigarh University",
  "Jain University",
  "Manipal Online",
  "Symbiosis CDOE",
  "VIT Online",
];
