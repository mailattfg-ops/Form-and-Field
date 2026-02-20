import {
  BadgeCheck,
  BriefcaseBusiness,
  Compass,
  FileCheck,
  GraduationCap,
  PlaneTakeoff,
  Sparkles,
  Stamp,
  Users,
  HandCoins,
  History,
  ShieldCheck,
  Handshake,
  Route,
  Target
} from "lucide-react";

export const WHATSAPP_NUMBER = "919999999999";

export const services = [
  {
    title: "Study Abroad Consultation",
    description: "Complete planning for country, university, and intake based on your profile.",
    icon: GraduationCap,
    image: "/images/consultation.avif"
  },
  {
    title: "Visa Assistance",
    description: "Complete filing preparation and strategies to increase your visa approval chances.",
    icon: Stamp,
    image: "/images/visa.avif"
  },
  {
    title: "Career Guidance",
    description: "Professional roadmaps aligned with your long-term career goals and global opportunities.",
    icon: Compass,
    image: "/images/career.avif"
  },
  {
    title: "University Admission Help",
    description: "End-to-end support for application preparation, SOP refinement, and interview prep.",
    icon: FileCheck,
    image: "/images/admission.avif"
  },
  {
    title: "Immigration Support",
    description: "Reliable guidance for relocation pathways and settlement preparation.",
    icon: BriefcaseBusiness,
    image: "/images/immigration.avif"
  },
  {
    title: "Scholarship Guidance",
    description: "Expert assistance in identifying and applying for financial grants and scholarships.",
    icon: HandCoins,
    image: "/images/scholarship.avif"
  }
] as const;

export const countries = [
  { name: "Canada", flag: "🇨🇦", image: "/images/canada.avif" },
  { name: "UK", flag: "🇬🇧", image: "/images/ukavif.avif" },
  { name: "Australia", flag: "🇦🇺", image: "/images/Australia.avif" },
  { name: "Germany", flag: "🇩🇪", image: "/images/Germany.avif" },
  { name: "USA", flag: "🇺🇸", image: "/images/USA.avif" },
  { name: "New Zealand", flag: "🇳🇿", image: "/images/newZealand.avif" }
] as const;

export const highlights = [
  { title: "10+ Years Experience", description: "A decade of focused global education and migration consulting.", icon: History },
  { title: "High Visa Success Rate", description: "Well-structured applications backed by profile-specific strategy.", icon: ShieldCheck },
  { title: "Trusted Consultants", description: "Dedicated advisors with transparent communication and accountability.", icon: Handshake },
  { title: "End-to-End Support", description: "From discovery call to pre-departure orientation, everything covered.", icon: Route },
  { title: "Personalized Guidance", description: "Every recommendation is customized to your budget and goals.", icon: Target },
  { title: "24/7 Global Support", description: "Around-the-clock assistance for all your queries and pre-departure needs.", icon: Sparkles }
] as const;

export const roadmap = [
  "Consultation",
  "Profile Evaluation",
  "University Selection",
  "Application Process",
  "Visa Filing",
  "Pre-Departure Support"
] as const;

export const testimonials = [
  {
    name: "Gokul Krishnan",
    role: "MS in Data Science, Canada (from Kochi)",
    message:
      "The team helped me secure admission in a top Canadian university. Their guidance on GIC and visa filing was exceptional and stress-free."
  },
  {
    name: "Sneha Matthew",
    role: "BSc Nursing, UK (from Kottayam)",
    message:
      "FormField made my dream of studying nursing in the UK a reality. Their support during the NMC registration and visa process was invaluable."
  },
  {
    name: "Arjun P.V.",
    role: "Engineering, Germany (from Trivandrum)",
    message:
      "Best consultants in Kerala for Germany. They helped me with everything from APS to university applications, making the complex process very smooth."
  }
] as const;

export const faqs = [
  {
    question: "How long does visa processing take?",
    answer:
      "It depends on country and intake, but most student visas are processed within a few weeks to a few months once complete documents are submitted."
  },
  {
    question: "Which countries are best for study?",
    answer:
      "The best country depends on your program, budget, and long-term career goals. We help shortlist the right fit based on profile analysis."
  },
  {
    question: "Do you help with scholarships?",
    answer:
      "Yes. We identify suitable scholarship opportunities and guide you on eligibility, timelines, and application quality."
  },
  {
    question: "Is consultation free?",
    answer:
      "Yes. Your first consultation is free and focused on understanding your goals and recommending next steps."
  }
] as const;

export const allCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
  "Vanuatu", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
] as const;
