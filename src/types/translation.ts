type ProjectItem = {
  title: string;
  desc: string;
  stack: string[];
};

type SkillCategory = {
  cat: string;
  items: string[];
};

export type Translation = {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    cta: string;
    cta2: string;
  };
  about: {
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    stat1: string;
    stat2: string;
    stat3: string;
  };
  projects: {
    heading: string;
    sub: string;
    demo: string;
    github: string;
    items: ProjectItem[];
  };
  skills: {
    heading: string;
    sub: string;
    categories: SkillCategory[];
  };
  contact: {
    heading: string;
    sub: string;
    email: string;
    or: string;
  };
};

