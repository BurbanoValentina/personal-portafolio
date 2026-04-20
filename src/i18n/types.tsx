export type Lang = "en" | "es";

export interface Translations {
  nav: {
    about: string;
    projects: string;
    experience: string;
    services: string;
    evolution: string;
    certifications: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    badge: string;
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    description: string;
    name: string;
    contactMe: string;
    downloadCV: string;
    followMe: string;
    available: string;
    yearsExp: string;
    techTitle: string;
  };
  about: {
    label: string;
    title1: string;
    titleHighlight: string;
    bio1: string;
    bio2: string;
    bio3: string;
    quote: string;
    values: { title: string; description: string }[];
  };
  projects: {
    label: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    viewAll: string;
    items: { title: string; subtitle: string; description: string }[];
  };
  experience: {
    label: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    certTitle: string;
    certLabel: string;
    certTitle1: string;
    certTitleHighlight: string;
    certSubtitle: string;
    viewCert: string;
    items: { period: string; title: string; company: string; description: string; tags: string[] }[];
    certs: { title: string; institution: string; period: string; description: string; url?: string }[];
  };
  testimonials: {
    label: string;
    title1: string;
    titleHighlight: string;
    items: { quote: string; name: string; role: string; initials: string }[];
  };
  services: {
    label: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      tags: string[];
    }[];
    faqLabel: string;
    faqItems: {
      question: string;
      answer: string;
    }[];
    ctaQuestion: string;
    ctaDescription: string;
    ctaButton: string;
  };
  processAndGrowth: {
    label: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
    }[];
    principles: {
      title: string;
      description: string;
    }[];
    learningLabel: string;
    learningItems: {
      title: string;
      description: string;
      status: "active" | "soon" | "planned" | "completed";
      statusLabel: string;
    }[];
    goalsLabel: string;
    goals: {
      text: string;
      detail: string;
      done: boolean;
    }[];
    visionLabel: string;
    visionItems: {
      text: string;
      detail: string;
    }[];
  };
  footer: {
    rights: string;
  };
}
