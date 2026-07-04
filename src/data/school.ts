/**
 * Central content source for SAGES Sohga.
 * ---------------------------------------------------------------
 * This module is the single source of truth for all site content.
 * It mirrors the shape a headless CMS (e.g. Sanity) would expose,
 * so swapping to a live CMS later means replacing these constants
 * with fetched documents — the component layer stays unchanged.
 */

export const school = {
  name: "Swami Atmanand Govt English School, Sohga",
  shortName: "SAGES Sohga",
  tagline: "Excellence in Education for Every Child",
  domain: "sagessohga.in",
  udise: "22020107408",
  board: "CGBSE",
  principal: "Leena Thomas",
  establisha: "Government of Chhattisgarh",
  address:
    "SAGES, Near Karji Chowk, Village Sohga, Ambikapur, Surguja, Chhattisgarh 497001",
  email: "sages.sohga.surguja@gmail.com",
  phone: "0123456789",
  phoneHref: "tel:0123456789",
  mapUrl: "https://maps.app.goo.gl/ypXvjGPnbvpbSas38",
  mapEmbed:
    "https://www.google.com/maps?q=Ambikapur,Surguja,Chhattisgarh&output=embed",
  timings: [
    { label: "Summer (Apr–Oct)", value: "7:30 AM – 1:30 PM" },
    { label: "Winter (Nov–Mar)", value: "9:00 AM – 3:30 PM" },
    { label: "Office Hours", value: "9:00 AM – 4:00 PM" },
    { label: "Weekly Off", value: "Sunday & 2nd Saturday" },
  ],
} as const;

export type NavItem = { label: string; to: string };

export const navigation: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Principal's Message", to: "/principal-message" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Facilities", to: "/facilities" },
  { label: "Staff", to: "/staff" },
  { label: "Gallery", to: "/gallery" },
  { label: "Achievements", to: "/achievements" },
  { label: "Results", to: "/results" },
  { label: "Timetable", to: "/timetable" },
  { label: "Notice Board", to: "/notices" },
  { label: "Downloads", to: "/downloads" },
  { label: "Government Schemes", to: "/schemes" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

/** Condensed primary nav for the header; the rest live under "More". */
export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Facilities", to: "/facilities" },
  { label: "Notice Board", to: "/notices" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: "1,850+", label: "Students Enrolled" },
  { value: "62", label: "Qualified Teachers" },
  { value: "98%", label: "Board Pass Rate" },
  { value: "24", label: "Years of Service" },
];

export const notices = [
  {
    id: "n1",
    title: "Admissions open for Session 2025–26 (Class 1 to 12)",
    date: "2025-06-18",
    category: "Admission",
    urgent: true,
    body: "Applications for the new academic session are now being accepted at the school office. English medium (Class 1–12) and Hindi medium (Class 9–10) seats available.",
  },
  {
    id: "n2",
    title: "Half-yearly examination schedule released",
    date: "2025-06-12",
    category: "Examination",
    urgent: false,
    body: "The detailed date-sheet for the half-yearly examinations is available on the Downloads page. Students must carry their admit cards.",
  },
  {
    id: "n3",
    title: "Parent-Teacher Meeting on 28 June 2025",
    date: "2025-06-08",
    category: "Event",
    urgent: false,
    body: "All parents are requested to attend the PTM to discuss student progress. Reporting time: 10:00 AM.",
  },
  {
    id: "n4",
    title: "Distribution of free textbooks under RTE",
    date: "2025-06-01",
    category: "Scheme",
    urgent: false,
    body: "Free textbooks for eligible students will be distributed from the school library. Bring the student ID card.",
  },
  {
    id: "n5",
    title: "Summer vacation and reopening dates",
    date: "2025-05-20",
    category: "General",
    urgent: false,
    body: "School reopens on 16 June 2025 after summer break. Regular classes resume from day one.",
  },
];

export const news = [
  {
    id: "news1",
    title: "SAGES Sohga wins District Science Exhibition 2025",
    date: "2025-06-10",
    excerpt:
      "Our students bagged first place in the district-level science exhibition with an innovative water-conservation model.",
  },
  {
    id: "news2",
    title: "New smart classrooms inaugurated",
    date: "2025-05-28",
    excerpt:
      "Six additional smart classrooms with interactive digital boards have been added to enhance learning outcomes.",
  },
  {
    id: "news3",
    title: "Annual Sports Meet concludes with record participation",
    date: "2025-02-14",
    excerpt:
      "Over 1,200 students participated across athletics, kabaddi, kho-kho and volleyball at the annual sports meet.",
  },
];

export const achievements = [
  {
    id: "a1",
    title: "100% Result in Class 12 Science Stream",
    year: "2024–25",
    category: "Academics",
    description:
      "Every Class 12 science student cleared the CGBSE board examination, with 14 students scoring above 90%.",
  },
  {
    id: "a2",
    title: "State-level Kabaddi Champions",
    year: "2024–25",
    category: "Sports",
    description:
      "The under-17 boys kabaddi team represented Surguja district and won the state championship.",
  },
  {
    id: "a3",
    title: "Best Eco-Club Award, Surguja Division",
    year: "2023–24",
    category: "Environment",
    description:
      "Recognised for tree plantation drives, plastic-free campus initiative and rainwater harvesting.",
  },
  {
    id: "a4",
    title: "District Topper in Class 10 Board",
    year: "2023–24",
    category: "Academics",
    description:
      "Kumari Anjali Sahu secured the district first rank with 97.8% in the Class 10 board examination.",
  },
  {
    id: "a5",
    title: "National Talent Search Qualifiers",
    year: "2023–24",
    category: "Academics",
    description:
      "Three students qualified the stage-1 National Talent Search Examination (NTSE).",
  },
  {
    id: "a6",
    title: "Swachhata Award for Cleanest Campus",
    year: "2022–23",
    category: "Environment",
    description:
      "Awarded by the district administration for maintaining hygiene and sanitation standards.",
  },
];

export const facilities = [
  {
    id: "library",
    title: "Central Library",
    image: "library",
    summary:
      "A well-stocked library with 12,000+ books, reference journals, and a quiet reading hall.",
    points: [
      "12,000+ books across all subjects",
      "Digital catalogue & reading corner",
      "Newspapers and competitive-exam material",
    ],
  },
  {
    id: "science-labs",
    title: "Science Laboratories",
    image: "lab",
    summary:
      "Fully equipped Physics, Chemistry and Biology labs for hands-on learning.",
    points: [
      "Separate Physics, Chemistry & Biology labs",
      "Modern apparatus & safety equipment",
      "Trained lab assistants",
    ],
  },
  {
    id: "computer-lab",
    title: "Computer Lab",
    image: "computer",
    summary:
      "Modern computer lab with high-speed internet for digital literacy programmes.",
    points: [
      "40 networked workstations",
      "High-speed broadband connectivity",
      "Coding & digital literacy classes",
    ],
  },
  {
    id: "smart-classes",
    title: "Smart Classrooms",
    image: "smartclass",
    summary:
      "Interactive digital boards bring lessons to life across all senior classes.",
    points: [
      "Interactive smart boards",
      "Audio-visual learning content",
      "Recorded lessons for revision",
    ],
  },
  {
    id: "sports",
    title: "Sports & Playground",
    image: "sports",
    summary:
      "Spacious playground with facilities for athletics, kabaddi, kho-kho and volleyball.",
    points: [
      "Large multi-sport playground",
      "Athletics track & courts",
      "Trained physical-education staff",
    ],
  },
  {
    id: "eco-club",
    title: "Eco Club & Green Campus",
    image: "sports",
    summary:
      "Student-led eco club driving plantation, waste segregation and awareness drives.",
    points: [
      "Butterfly & herbal garden",
      "Rainwater harvesting",
      "Plastic-free campus initiative",
    ],
  },
];

export const staff = [
  { id: "s1", name: "Leena Thomas", role: "Principal", subject: "Administration", qualification: "M.A., B.Ed.", experience: "24 yrs" },
  { id: "s2", name: "Rakesh Kujur", role: "Vice Principal", subject: "Mathematics", qualification: "M.Sc., B.Ed.", experience: "18 yrs" },
  { id: "s3", name: "Sunita Minj", role: "Senior Teacher", subject: "English", qualification: "M.A. English, B.Ed.", experience: "15 yrs" },
  { id: "s4", name: "Amit Gupta", role: "Senior Teacher", subject: "Physics", qualification: "M.Sc. Physics, B.Ed.", experience: "12 yrs" },
  { id: "s5", name: "Priya Tirkey", role: "Teacher", subject: "Biology", qualification: "M.Sc. Botany, B.Ed.", experience: "10 yrs" },
  { id: "s6", name: "Mohan Sahu", role: "Teacher", subject: "Chemistry", qualification: "M.Sc. Chemistry, B.Ed.", experience: "11 yrs" },
  { id: "s7", name: "Rekha Ekka", role: "Teacher", subject: "Hindi", qualification: "M.A. Hindi, B.Ed.", experience: "14 yrs" },
  { id: "s8", name: "Deepak Yadav", role: "Teacher", subject: "Computer Science", qualification: "MCA, B.Ed.", experience: "8 yrs" },
  { id: "s9", name: "Anita Pandey", role: "Teacher", subject: "Social Science", qualification: "M.A. History, B.Ed.", experience: "13 yrs" },
  { id: "s10", name: "Vikram Singh", role: "Physical Education", subject: "Sports", qualification: "M.P.Ed.", experience: "9 yrs" },
  { id: "s11", name: "Sushila Bara", role: "Teacher", subject: "Mathematics", qualification: "M.Sc. Maths, B.Ed.", experience: "7 yrs" },
  { id: "s12", name: "Rajesh Nag", role: "Teacher", subject: "Geography", qualification: "M.A. Geography, B.Ed.", experience: "10 yrs" },
];

export const events = [
  { id: "e1", title: "Independence Day Celebration", date: "2025-08-15", time: "8:00 AM", venue: "School Ground", category: "National" },
  { id: "e2", title: "Annual Science Exhibition", date: "2025-09-05", time: "10:00 AM", venue: "Science Block", category: "Academic" },
  { id: "e3", title: "Teachers' Day Programme", date: "2025-09-05", time: "11:00 AM", venue: "Auditorium", category: "Cultural" },
  { id: "e4", title: "Annual Sports Meet", date: "2025-12-18", time: "8:30 AM", venue: "Playground", category: "Sports" },
  { id: "e5", title: "Republic Day Celebration", date: "2026-01-26", time: "8:00 AM", venue: "School Ground", category: "National" },
  { id: "e6", title: "Annual Function & Prize Distribution", date: "2026-02-20", time: "5:00 PM", venue: "Auditorium", category: "Cultural" },
];

export const holidays = [
  { id: "h1", name: "Independence Day", date: "2025-08-15" },
  { id: "h2", name: "Raksha Bandhan", date: "2025-08-09" },
  { id: "h3", name: "Gandhi Jayanti", date: "2025-10-02" },
  { id: "h4", name: "Diwali Break", date: "2025-10-20 to 2025-10-25" },
  { id: "h5", name: "Chhath Puja", date: "2025-10-28" },
  { id: "h6", name: "Republic Day", date: "2026-01-26" },
  { id: "h7", name: "Holi", date: "2026-03-04" },
];

export const downloads = [
  { id: "d1", title: "Admission Form 2025–26", category: "Admission", size: "420 KB", type: "PDF" },
  { id: "d2", title: "Fee Structure & Concessions", category: "Admission", size: "180 KB", type: "PDF" },
  { id: "d3", title: "Half-Yearly Exam Date Sheet", category: "Examination", size: "240 KB", type: "PDF" },
  { id: "d4", title: "Booklist (Class 1–12)", category: "Academics", size: "310 KB", type: "PDF" },
  { id: "d5", title: "Transfer Certificate Format", category: "General", size: "120 KB", type: "PDF" },
  { id: "d6", title: "Annual Academic Calendar", category: "Academics", size: "290 KB", type: "PDF" },
  { id: "d7", title: "School Uniform Guidelines", category: "General", size: "150 KB", type: "PDF" },
  { id: "d8", title: "Scholarship Application (SC/ST/OBC)", category: "Scheme", size: "200 KB", type: "PDF" },
];

export const schemes = [
  {
    id: "sc1",
    title: "Right to Education (RTE)",
    summary: "Free and compulsory education for children aged 6–14 with 25% reserved seats for economically weaker sections.",
    link: "https://education.gov.in/rte",
  },
  {
    id: "sc2",
    title: "Mid-Day Meal Scheme",
    summary: "Nutritious cooked meals provided to students to improve health and encourage regular attendance.",
    link: "https://pmposhan.education.gov.in",
  },
  {
    id: "sc3",
    title: "Free Textbook Distribution",
    summary: "Government-supplied textbooks issued free of cost to all eligible students at the start of the session.",
    link: "https://scert.cg.gov.in",
  },
  {
    id: "sc4",
    title: "Pre & Post-Matric Scholarships",
    summary: "Financial assistance for SC, ST and OBC students to support continued education.",
    link: "https://scholarships.gov.in",
  },
  {
    id: "sc5",
    title: "Sarva Shiksha Abhiyan",
    summary: "Universalisation of elementary education through improved infrastructure and access.",
    link: "https://samagra.education.gov.in",
  },
  {
    id: "sc6",
    title: "Free Bicycle Scheme (Saraswati Cycle Yojana)",
    summary: "Bicycles provided to girl students of Class 9 to ease commute and reduce dropout.",
    link: "https://cg.gov.in",
  },
];

export const importantLinks = [
  { label: "Ministry of Education", url: "https://www.education.gov.in" },
  { label: "CBSE / CGBSE Board", url: "https://cgbse.nic.in" },
  { label: "SCERT Chhattisgarh", url: "https://scert.cg.gov.in" },
  { label: "National Scholarship Portal", url: "https://scholarships.gov.in" },
  { label: "DIKSHA Learning Platform", url: "https://diksha.gov.in" },
  { label: "PM eVidya", url: "https://pmevidya.education.gov.in" },
];

export const testimonials = [
  {
    id: "t1",
    quote:
      "The teachers genuinely care about every child. My daughter has grown in confidence and academics since joining SAGES Sohga.",
    name: "Sarita Devi",
    role: "Parent, Class 8",
  },
  {
    id: "t2",
    quote:
      "Free quality English-medium education close to home changed our family's future. We are grateful to the school.",
    name: "Ramesh Kumar",
    role: "Parent, Class 11",
  },
  {
    id: "t3",
    quote:
      "The science labs and smart classes made learning exciting. I cleared my board exam with distinction.",
    name: "Anjali Sahu",
    role: "Alumna, Batch 2024",
  },
];

export const faqs = [
  {
    q: "What is the medium of instruction?",
    a: "English medium for Classes 1–12 and Hindi medium for Classes 9–10.",
  },
  {
    q: "When do admissions open?",
    a: "Admissions for the new session typically open in April–June. Announcements appear on the Notice Board.",
  },
  {
    q: "Is education free at this school?",
    a: "As a Government (Swami Atmanand) school, education is provided free or at a nominal cost, with several government scholarships and schemes available.",
  },
  {
    q: "Which board is the school affiliated to?",
    a: "The school follows the Chhattisgarh Board of Secondary Education (CGBSE).",
  },
  {
    q: "What documents are required for admission?",
    a: "Birth certificate, previous marksheet/TC, Aadhaar card, caste certificate (if applicable) and passport-size photographs.",
  },
];

export const results = [
  { id: "r1", year: "2024–25", class: "Class 12", stream: "Science", pass: "100%", distinction: "14" },
  { id: "r2", year: "2024–25", class: "Class 12", stream: "Commerce", pass: "98%", distinction: "9" },
  { id: "r3", year: "2024–25", class: "Class 10", stream: "General", pass: "97%", distinction: "22" },
  { id: "r4", year: "2023–24", class: "Class 12", stream: "Science", pass: "99%", distinction: "12" },
  { id: "r5", year: "2023–24", class: "Class 10", stream: "General", pass: "96%", distinction: "19" },
];

export const timetable = {
  periods: ["I", "II", "III", "IV", "Recess", "V", "VI", "VII"],
  sample: [
    { day: "Monday", slots: ["English", "Maths", "Science", "Hindi", "—", "Social Sc.", "Computer", "Games"] },
    { day: "Tuesday", slots: ["Maths", "Science", "English", "Sanskrit", "—", "Hindi", "Library", "Art"] },
    { day: "Wednesday", slots: ["Science", "English", "Maths", "Social Sc.", "—", "Computer", "Hindi", "Games"] },
    { day: "Thursday", slots: ["Hindi", "Maths", "Science", "English", "—", "Social Sc.", "Music", "Sports"] },
    { day: "Friday", slots: ["English", "Science", "Maths", "Computer", "—", "Hindi", "Social Sc.", "Games"] },
    { day: "Saturday", slots: ["Activity", "Maths", "English", "Science", "—", "Assembly", "—", "—"] },
  ],
};

export const academics = {
  streams: [
    {
      title: "Primary (Class 1–5)",
      desc: "Activity-based foundational learning in English, Hindi, Mathematics, EVS and life skills.",
    },
    {
      title: "Middle (Class 6–8)",
      desc: "Structured subjects with science, social science, computer literacy and languages.",
    },
    {
      title: "Secondary (Class 9–10)",
      desc: "CGBSE curriculum in English and Hindi medium, preparing students for board examinations.",
    },
    {
      title: "Senior Secondary (Class 11–12)",
      desc: "Science and Commerce streams with laboratory work and career guidance.",
    },
  ],
  mediums: [
    "English Medium — Class 1 to 12",
    "Hindi Medium — Class 9 to 10",
  ],
};

export const galleryAlbums = [
  { id: "g1", title: "Campus & Infrastructure", category: "Campus", image: "hero", count: 24 },
  { id: "g2", title: "Science Exhibition 2025", category: "Events", image: "lab", count: 18 },
  { id: "g3", title: "Annual Sports Meet", category: "Sports", image: "sports", count: 32 },
  { id: "g4", title: "Library & Reading", category: "Academics", image: "library", count: 12 },
  { id: "g5", title: "Smart Classrooms", category: "Academics", image: "smartclass", count: 15 },
  { id: "g6", title: "Computer Lab Sessions", category: "Academics", image: "computer", count: 20 },
];
