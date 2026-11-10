export interface Course {
  id: string
  title: string
  price: string
  numericPrice: number
  level: "Beginner" | "Advanced"
  format: string
  duration: string
  description: string
  modules: string[]
  inclusions: string[]
  featured?: boolean
  badge: string
}

export const COURSES: Course[] = [
  {
    id: "cybersecurity-starter-program",
    title: "Cybersecurity Starter Program",
    price: "₹999",
    numericPrice: 499,
    level: "Beginner",
    format: "7-day practical program",
    duration: "7 Days Intensive",
    description:
      "A fast-paced, hands-on kickstart into cybersecurity foundations, networking, Linux, and AI-assisted security workflows.",
    badge: "Most Popular for Beginners",
    modules: [
      "Cybersecurity Fundamentals",
      "Networking Basics",
      "Linux for Cybersecurity",
      "Web Security Essentials",
      "AI + Cybersecurity",
      "Practical Security Tools",
      "Mini Hands-On Project",
    ],
    inclusions: [
      "Beginner roadmap from zero to defensive basics",
      "Recorded lessons + practical browser labs",
      "Curated PDF notes & quick-reference cheat sheets",
      "Hands-on mini project & evaluated assignments",
      "Verified Certificate of Completion",
      "Access to private DRAGOZ community",
    ],
    featured: false,
  },
  {
    id: "advanced-cybersecurity-course",
    title: "Advanced Cybersecurity Course",
    price: "₹2,999",
    numericPrice: 2999,
    level: "Advanced",
    format: "Practical / project-based",
    duration: "Comprehensive Track",
    description:
      "Master end-to-end offensive and defensive security operations, malware analysis, forensics, cloud defense, and threat intelligence.",
    badge: "Complete Career Track",
    modules: [
      "Advanced Ethical Hacking & Exploitation",
      "Network Security, Segmentation & Defense",
      "Web Application Security & OWASP Top 10",
      "Linux for Security Professionals & SysOps",
      "Malware Analysis & Reverse Engineering (RE)",
      "Digital Forensics & Incident Response (DFIR)",
      "Cloud Security & Infrastructure Auditing",
      "Threat Intelligence & Threat Hunting",
      "Security Tools & Workflow Automation",
      "Final Comprehensive Capstone Project",
    ],
    inclusions: [
      "Practical & industry-oriented project work",
      "Live interactive + recorded deep-dive modules",
      "Real-world enterprise scenario simulations",
      "Industry-recognized Certificate of Completion",
      "Lifetime DRAGOZ community access & mentorship",
    ],
    featured: true,
  },
]
