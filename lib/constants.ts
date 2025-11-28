// Navigation items
export const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
] as const;

// Social links
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/petersog-brambifa/",
  github: "https://github.com/dev-Peterr",
  email: "mailto:brambifapeterjr@gmail.com",
  phone: "tel:+2349138049948",
} as const;

// Resume link
export const resumeLink = "/BRAMBIFA-PETER-RESUMEpdf.pdf";

// Contact info
export const contactInfo = [
  {
    id: "location",
    icon: "MapPin",
    label: "Location",
    value: "Lagos, Nigeria",
    link: null,
  },
  {
    id: "email",
    icon: "Mail",
    label: "Email",
    value: "brambifapeterjr@gmail.com",
    link: socialLinks.email,
  },
  {
    id: "phone",
    icon: "Phone",
    label: "Phone",
    value: "+234 913 804 9948",
    link: socialLinks.phone,
  },
  {
    id: "linkedin",
    icon: "Linkedin",
    label: "LinkedIn",
    value: "petersog-brambifa",
    link: socialLinks.linkedin,
  },
  {
    id: "github",
    icon: "Github",
    label: "GitHub",
    value: "dev-Peterr",
    link: socialLinks.github,
  },
] as const;

// Experience data
export const experiences = [
  {
    title: "Application Support",
    company: "Ecobank Nigeria",
    period: "10.2025 – Present",
    location: "Lagos, Nigeria",
    responsibilities: [
      "Deliver frontline support for core banking applications, troubleshooting incidents, performing root-cause analysis, and driving timely escalations to maintain operational continuity.",
      "Support release cycles by validating patches, verifying system integrity, and monitoring post-deployment performance to ensure stable, high-quality application behavior.",
      "Streamline internal support processes through documentation, reporting, and proactive analysis of high-impact incidents.",
    ],
  },
  {
    title: "Software Development (React) Intern",
    company: "Qucoon Academy",
    period: "01.2025 – 04.2025",
    location: "Lagos, Nigeria",
    responsibilities: [
      "Participated in a hands-on, project-based program simulating enterprise React development using Redux, and TypeScript.",
      "Built and optimized UI components with reusable design patterns and robust state management.",
      "Used Git and GitHub for collaborative version control, following best practices in branching and pull requests.",
    ],
  },
  {
    title: "Remote IT Support Specialist",
    company: "VeeVee Tech Solutions",
    period: "07.2023 – 12.2024",
    location: "Texas, USA",
    responsibilities: [
      "Delivered tier-1 and tier-2 technical support, resolving end-user issues related to hardware, software and network connectivity.",
      "Reduced system downtime by 15% through proactive maintenance and database management.",
      "Supported and monitored 30+remote workstations and network devices to maintain operational efficiency.",
    ],
  },
  {
    title: "Front-End Engineer Intern",
    company: "Ecobank Nigeria",
    period: "01.2023 – 06.2023",
    location: "Lagos, Nigeria",
    responsibilities: [
      "Web Development: Contributed to website features development using HTML, CSS, JavaScript, and ReactJS.",
      "Worked with senior developers to optimize website performance, ensuring a responsive user experience.",
      "Utilized Git and GitHub for version control, streamlining collaboration within the development team. ",
    ],
  },
] as const;

// Education data
export const educationData = [
  {
    institution: "Babcock University",
    degree: "B.Sc. Computer Engineering",
    location: "Ilisan-Remo, Ogun State, Nigeria.",
    details: [
      { icon: "GraduationCap", text: "Major in Computer Science" },
      { icon: "Award", text: "Relevant Coursework: OOP, Algorithm & Data Structures, Programming Methodology" },
      { icon: "Users", text: "Member of the BUCC (Babcock University Computer Club) Developer Community" },
      { icon: "Users", text: "Active member of the Church Choir (musician) and Basketball team" },
    ],
  },
] as const;

// Projects data
export type ProjectLink = { label: string; href: string; kind?: "code" | "live" | "docs" };

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "CySec Con 2025 Conference Page",
    description:
      "Front-End website build: React + Vite frontend + styling done with Tailwind CSS. Includes carousel, animations, responsive design.",
    tags: ["React", "TypeScript", "Tailwind"],
    links: [
      { label: "Live", href: "https://cysec-con.vercel.app/", kind: "live" },
      { label: "Code", href: "https://github.com/Senibo-Don-Pedro/e-commerce-frontend", kind: "code" },
    ],
  },
] as const;
