export const SITE = {
  name: "TutorVille",
  tagline: "Where Learning is a Journey, not a Destination",
  range: "From Reception all the way to A level",
  email: "tutorville@outlook.co.uk",
  phoneDisplay: "07429 012363",
  phoneTel: "+447429012363",
  contactName: "Kiran Kaur",
  brandStatement: "Expert Maths and English tutoring, tailored to each child. From Reception to A level.",
};

/**
 * Paste the Google Calendar appointment schedule link here when the client sends it.
 * Example: https://calendar.google.com/calendar/appointments/schedules/XXXX
 */
export const BOOKING_CALENDAR_URL = "";

export const NAV = [
  { label: "Tutors", href: "/tutors" },
  { label: "Prices", href: "/prices" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact us", href: "/contact" },
];

export const LEVELS = ["Reception", "KS1", "KS2", "KS3", "GCSE", "A level"];

export const WHY = [
  {
    number: "01",
    title: "Expert Tutors",
    text: "Highly qualified tutors from Russell Group universities and Oxbridge. They are experienced, credentialed, and passionate about nurturing each child's unique talents. Lessons are personalised around how your child learns best, in a supportive setting where they feel able to grow.",
  },
  {
    number: "02",
    title: "Personalised Learning Plans",
    text: "Learning is an adventure at TutorVille. Tutors design dynamic lessons that make academics exciting, with imaginative tools that spark curiosity. Students take part because lessons feel rewarding, full of discovery, creativity, and challenges worth conquering.",
  },
  {
    number: "03",
    title: "Frequent Progress Updates",
    text: "Communication with parents is essential. Tutors give detailed face-to-face feedback after each session so you stay fully informed. We set goals with you, share successes, and keep your child on the best path through their education.",
  },
];

export type Tutor = {
  name: string;
  role: string;
  highlights: string[];
};

export const TUTORS: Tutor[] = [
  {
    name: "Kiran",
    role: "Maths & English tutor for KS2, KS3, GCSE and A level",
    highlights: [
      "UCL graduate",
      "10+ years of tutoring",
      "5,000+ hours of tuition experience",
      "Ex Goldman Sachs and Credit Suisse consultant, currently working at Deloitte",
    ],
  },
  {
    name: "Krishan",
    role: "Maths & English tutor for KS1, KS2 and 11+",
    highlights: [
      "15+ years of tutoring",
      "8,000+ hours of tuition experience",
      "SEN Level 3 qualified",
      "Qualified Montessori teacher",
    ],
  },
  {
    name: "Manav",
    role: "Maths, English and Sciences for KS2, KS3, GCSE and A level",
    highlights: [
      "Interview preparation and personal statement reviews",
      "10+ years of tutoring",
      "5,000+ hours of tuition experience",
      "Practising dentist",
      "King's College London alumni",
    ],
  },
];

export type PriceRow = {
  level: string;
  subject: string;
  price: string;
  note?: string;
};

export const IN_PERSON_PRICES: PriceRow[] = [
  { level: "A level", subject: "Maths / English", price: "From £50", note: "per lesson, depending on travel" },
  { level: "GCSE", subject: "Maths / English", price: "From £40", note: "per lesson, depending on travel" },
  { level: "KS3", subject: "Maths / English", price: "From £30", note: "per lesson, depending on travel" },
  { level: "KS2", subject: "Maths / English", price: "From £30", note: "per lesson, depending on travel" },
  { level: "KS1", subject: "Maths / English", price: "From £30", note: "per lesson, depending on travel" },
  { level: "Reception", subject: "Maths / English", price: "From £25", note: "per lesson, depending on travel" },
];

export const ONLINE_PRICES: PriceRow[] = [
  { level: "A level", subject: "Maths / English", price: "From £45", note: "per lesson" },
  { level: "GCSE", subject: "Maths / English", price: "From £35", note: "per lesson" },
  { level: "KS3", subject: "Maths / English", price: "From £30", note: "per lesson" },
  { level: "KS2", subject: "Maths / English", price: "From £30", note: "per lesson" },
  { level: "KS1", subject: "Maths / English", price: "From £30", note: "per lesson" },
  { level: "Reception", subject: "Maths / English", price: "From £25", note: "per lesson" },
];

export const YEAR_GROUPS = ["Reception", "KS1", "KS2", "KS3", "GCSE", "A level", "11+"];

export const WRITTEN_REVIEWS = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  const ext = n === "10" || n === "12" ? "png" : "jpeg";
  return `/reviews/photos/${n}.${ext}`;
});

export const VIDEO_REVIEWS = [
  "/reviews/videos/01.mp4",
  "/reviews/videos/02.mov",
  "/reviews/videos/03.mov",
  "/reviews/videos/04.mp4",
  "/reviews/videos/05.mov",
  "/reviews/videos/06.mp4",
  "/reviews/videos/07.mp4",
  "/reviews/videos/08.mp4",
];
export const SUBJECTS = ["Maths", "English", "Sciences", "Interview preparation", "Personal statement review"];
