type ProjectItem = {
  title: string;
  desc: string;
  stack: string[];
  category: string;
  featured?: boolean;
};

type SkillCategory = {
  cat: string;
  items: string[];
};

export type Translation = {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
    experience?: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    cta: string;
    cta2: string;
    downloadCV: string;
  };
  about: {
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    stat1: string;
    stat2: string;
    stat3: string;
  };
  experience: {
    heading: string;
    educationHeading: string;
    jobs: { title: string; company: string; period: string; description: string }[];
    education: { degree: string; school: string; period: string; description: string }[];
  };

  process: {
    heading: string;
    steps: { title: string; desc: string }[];
  };
  certifications: {
    heading: string;
    items: { title: string; issuer: string; date: string }[];
  };
  projects: {
    heading: string;
    sub?: string;
    demo: string;
    github: string;
    allProjectsHeading: string;
    filterAll: string;
    items: ProjectItem[];
  };
  skills: {
    heading: string;
    sub: string;
    categories: SkillCategory[];
  };
  contact: {
    label: ReactNode;
    heading: string;
    sub: string;
    email: string;
    or: string;
  };
};
