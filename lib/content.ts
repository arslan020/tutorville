export const SITE = {
  name: "TutorVille",
  tagline: "Where Learning is a Journey, not a Destination",
  range: "From Reception all the way to A level",
  email: "tutorville@outlook.co.uk",
  phoneDisplay: "07429 012363",
  phoneTel: "+447429012363",
  contactName: "Kiran Kaur",
  brandStatement: "Expert tutoring, tailored to each child. From Reception to A level.",
};

/**
 * Paste the Google Calendar appointment schedule link here when the client sends it.
 * Example: https://calendar.google.com/calendar/appointments/schedules/XXXX
 */
export const BOOKING_CALENDAR_URL = "";

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Tutors", href: "/tutors" },
  { label: "Prices", href: "/prices" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact us", href: "/contact" },
];

export const LEVELS = ["Reception", "KS1", "KS2", "KS3", "GCSE", "A level"];

export const WHY_HEADING = "Why should you choose TutorVille?";

export const WHY_INTRO =
  "We provide expert tutoring in Math and English. Our tutors are experienced, dedicated, and adapt to the individual learning style of each student. We cover all levels from Reception to A level, ensuring a comprehensive understanding of subjects. Choose us for a unique, effective learning experience!";

export const WHY = [
  {
    number: "01",
    title: "Expert Tutors",
    text: "Highly Qualified Tutors from Russell Group Universities & Oxbridge - Our tutors are highly qualified with extensive experience and credentials. More importantly, they are passionate about nurturing each child's unique talents and abilities. We take a personalised approach, getting to know each student's learning style and customising lessons to help them thrive. Our tutors create an engaging, supportive environment where students feel empowered to learn, grow, and pursue their full potential.",
  },
  {
    number: "02",
    title: "Personalised Learning Plans",
    text: "Learning is an adventure at TutorVille! Tutors design dynamic lessons that make academics exciting. We incorporate imaginative learning tools that spark curiosity and motivation. Students are eager to participate because our tutors make education fun and rewarding. Your child will look forward to lessons filled with discovery, creativity, and meaningful challenges to conquer.",
  },
  {
    number: "03",
    title: "Frequent Progress Updates",
    text: "We believe communication with parents is essential. Tutors provide detailed face-to-face feedback after each session to keep you fully informed about your child's development. We will collaborate with you to set goals, share successes, and ensure your child receives the best possible guidance on their educational journey.",
  },
];

export type Tutor = {
  name: string;
  photo?: string;
  photoFocus?: string;
  role: string;
  highlights: string[];
};

export const TUTORS: Tutor[] = [
  {
    name: "Kiran",
    photo: "/tutors/kiran.jpg",
    photoFocus: "50% 32%",
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
    photo: "/tutors/krishan.jpg",
    photoFocus: "55% 30%",
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
    photo: "/tutors/manav.jpg",
    photoFocus: "50% 32%",
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
  price: string;
  note?: string;
};

export const IN_PERSON_PRICES: PriceRow[] = [
  { level: "A level", price: "From £50", note: "per lesson, depending on travel" },
  { level: "GCSE", price: "From £40", note: "per lesson, depending on travel" },
  { level: "KS3", price: "From £30", note: "per lesson, depending on travel" },
  { level: "KS2", price: "From £30", note: "per lesson, depending on travel" },
  { level: "KS1", price: "From £30", note: "per lesson, depending on travel" },
  { level: "Reception", price: "From £25", note: "per lesson, depending on travel" },
];

export const ONLINE_PRICES: PriceRow[] = [
  { level: "A level", price: "From £45", note: "per lesson" },
  { level: "GCSE", price: "From £35", note: "per lesson" },
  { level: "KS3", price: "From £30", note: "per lesson" },
  { level: "KS2", price: "From £30", note: "per lesson" },
  { level: "KS1", price: "From £30", note: "per lesson" },
  { level: "Reception", price: "From £25", note: "per lesson" },
];

export const YEAR_GROUPS = ["Reception", "KS1", "KS2", "KS3", "GCSE", "A level", "11+"];

export type WrittenReview = { text: string; author: string; note?: string };

// Text copied from the parent messages the client supplied (screenshots kept in /public/reviews/photos).
export const WRITTEN_REVIEWS: WrittenReview[] = [
  {
    text: "Ms. Kaur has been excellent teacher. Our daughter progressed a lot with her teaching. Without her, we wouldn't imagine the progress we have seen. Our daughter loves to study with her. It has been 2 years and we look forward to many more years of Ms. Kaur as a teacher for my daughter. I must also emphasize that she has progressed even better during lockdown learning online with Ms. Kaur. We absolutely recommend her with five stars.",
    author: "Nilay",
  },
  {
    text: "Hi Krishan, hope all well with you. We were away most of the summer. Avy has joined Hampton school and is loving it there. Thanks for helping him achieve such good results. He got an offer from City of London and Ibstock school that we declined and is also on reserve list with St Paul's school.",
    author: "Parent",
  },
  {
    text: "We have been using Krishan for about 5/6 months now and are really pleased with what she has achieved so far with our son. We initially had feedback from our son's school on areas that he needed to improve, which allowed Krishan to plan his tutoring sessions accordingly. She is professional, but firm with her approach and always gives feedback at the end of each session. She tutored our son through his SATs, where he is now able to tackle the papers independently. There are many areas she has covered in Maths and English that will leave him ahead of his class. Krishan has been a great asset to our son's school work - Thank you!",
    author: "M Antao-Kolawole",
  },
  {
    text: "Mrs. Krishan has been wonderful tutor for my son Zoravar Singh. We started English lessons with her in November 2022 and we have seen a big improvement in his English work for the past few months. I got a lovely feedback from his school teacher and we have started Maths lessons with Mrs. Krishan as well. She always gives me a feedback after every lesson which helps me a lot. Zoravar enjoys his lessons with Mrs. Krishan because she is very patient and friendly. I would definitely recommend Mrs. Krishan to other parents.",
    author: "Parent of Zoravar",
  },
  {
    text: "Krishan has been working with Neel since last 2 years. The rapport she built in first few sessions was very helpful in bringing out best in him. His concepts are clear and he is ahead in his class clearly because of his sessions with Krishan. Neel shares not only his educational troubles with her but his personal anxieties too with confidence that she is always there for him, boosting his self esteem. Zoom lessons are also delivered to same standard and encouragement. Will highly recommend Krishan.",
    author: "Suman",
  },
  {
    text: "Just wanted to say that I've seen a real improvement in Rosie since she has been coming to you for tutoring lessons. Her confidence has grown so much and I can see that she is now taking pride in her work. She is also much better at working independently. We just received her end of year report which was really brilliant, it showed that she was progressing really well and she seems much more confident in class. Thank you so much for all the help you've given us. She is also now at the expected level in reading and writing which was the area she was falling a little behind so this is great news - thanks once again.",
    author: "Kelly",
  },
  {
    text: "Krishan has really enhanced our daughter's confidence in English and Maths. Her tutoring methodology is both encouraging and constructive, fostering a positive and engaging learning environment. Seeing our child enthusiastic about learning is priceless. Thank you Krishan.",
    author: "Parent",
  },
  {
    text: "We are so grateful that Neil got a tutor like you. We have seen a massive improvement in his reading, writing and fine motor skills since he started taking lessons from you. Thank you for teaching and supporting Neil. Well done!",
    author: "Parent of Neil",
  },
  {
    text: "Krishan has been working with Mausam since last two years. First few sessions with Krishan were enough to build lasting bond and bring out best in Mausam. Mausam's English vocabulary, speech and grammar improved tremendously within couple of months. She progressed in maths equally well. She is now well ahead of her class in both Maths and English.",
    author: "Suman",
  },
  {
    text: "Neel got his mock SAT results today. English reading 47/50, Maths arithmetic 40/40, Maths reasoning 33/35, Maths reasoning 35/35. Thank you for being there for him.. he has done it while enjoying it.",
    author: "Suman",
  },
  {
    text: "All thanks to you.",
    author: "A House Dad",
    note: "On his son's Ashton House School pre-prep report",
  },
];

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
