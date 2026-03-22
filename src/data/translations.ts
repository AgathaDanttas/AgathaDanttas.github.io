import type { Translation } from "../types/translation";
import type { Language } from "../types/language";

export const translations: Record<Language, Translation> = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Agatha Dantas",
      title: "Desenvolvedora Web & Engenheira de Software",
      cta: "Ver Meu Trabalho",
      cta2: "Entrar em Contato",
    },
    about: {
      heading: "Criando experiências digitais com código e criatividade",
      p1: "Sou uma Desenvolvedora Web e Engenheira de Software apaixonada por criar aplicações web elegantes, modernas e performáticas. Gosto de atuar no encontro entre design e engenharia, transformando ideias em experiências digitais bem construídas.",
      p2: "Com uma base sólida em tecnologias modernas de front-end e back-end, busco sempre escrever código limpo, escalável e com atenção aos detalhes.",
      p3: "Quando não estou programando, gosto de explorar novas tendências de design, estudar tecnologia e experimentar ideias criativas em projetos pessoais.",
      stat1: "Projetos Criados",
      stat2: "Tecnologias",
      stat3: "Anos de Experiência",
    },
    projects: {
      heading: "Trabalhos em Destaque",
      sub: "Alguns projetos dos quais me orgulho.",
      demo: "Demo",
      github: "GitHub",
      items: [
        {
          title: "NexaUI Design System",
          desc: "Uma biblioteca completa de componentes construída com React e Tailwind CSS. Inclui mais de 60 componentes, modo escuro e foco em acessibilidade.",
          stack: ["React", "Tailwind CSS", "TypeScript", "Storybook"],
        },
      ],
    },
    skills: {
      heading: "Stack & Especialidades",
      sub: "Tecnologias com as quais trabalho no dia a dia.",
      categories: [
        {
          cat: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
        },
      ],
    },
    contact: {
      heading: "Vamos Trabalhar Juntas",
      sub: "Tem um projeto em mente? Vou adorar conversar sobre ele.",
      email: "Dizer Olá",
      or: "ou me encontre em",
    },
  },
  en: {
    nav: { about: "About", projects: "Projects", skills: "Skills", contact: "Contact" },
    hero: {
      greeting: "Hello, I'm",
      name: "Agatha Dantas",
      title: "Web Developer & Software Engineer",
      cta: "View My Work",
      cta2: "Get In Touch",
    },
    about: {
      heading: "Crafting digital experiences with code and creativity",
      p1: "I'm a passionate Web Developer and Software Engineer who loves building elegant, high-performance web applications.",
      p2: "With a strong foundation in modern front-end and back-end technologies, I always aim for clean, scalable, and detail-oriented code.",
      p3: "When I'm not coding, I'm exploring design trends, studying technology, and experimenting with creative personal projects.",
      stat1: "Projects Built",
      stat2: "Technologies",
      stat3: "Years Experience",
    },
    projects: {
      heading: "Selected Work",
      sub: "A few projects I'm proud of.",
      demo: "Live Demo",
      github: "GitHub",
      items: [
        {
          title: "NexaUI Design System",
          desc: "A complete component library built with React and Tailwind CSS.",
          stack: ["React", "Tailwind CSS", "TypeScript", "Storybook"],
        },
      ],
    },
    skills: {
      heading: "Tech Stack & Expertise",
      sub: "Technologies I work with daily.",
      categories: [
        {
          cat: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
        },
      ],
    },
    contact: {
      heading: "Let's Work Together",
      sub: "Have a project in mind? I'd love to hear about it.",
      email: "Say Hello",
      or: "or find me on",
    },
  },
  fr: {
    nav: { about: "À propos", projects: "Projets", skills: "Compétences", contact: "Contact" },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Agatha Dantas",
      title: "Développeuse Web & Ingénieure Logiciel",
      cta: "Voir Mon Travail",
      cta2: "Me Contacter",
     
    },
    about: {
      heading: "Créer des expériences numériques avec code et créativité",
      p1: "Je suis une développeuse Web et ingénieure logiciel passionnée par la création d'applications web élégantes et performantes.",
      p2: "Avec une solide base en technologies modernes front-end et back-end, je recherche toujours un code propre, évolutif et bien structuré.",
      p3: "Quand je ne code pas, j'explore les tendances de design.",
      stat1: "Projets Réalisés",
      stat2: "Technologies",
      stat3: "Ans d'Expérience",
    },
    projects: {
      heading: "Travaux Sélectionnés",
      sub: "Quelques projets dont je suis fière.",
      demo: "Démo",
      github: "GitHub",
      items: [
        {
          title: "NexaUI Design System",
          desc: "Une bibliothèque complète de composants construite avec React et Tailwind CSS.",
          stack: ["React", "Tailwind CSS", "TypeScript", "Storybook"],
        },
      ],
    },
    skills: {
      heading: "Stack Technique & Expertise",
      sub: "Technologies avec lesquelles je travaille au quotidien.",
      categories: [
        {
          cat: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
        },
      ],
    },
    contact: {
      heading: "Travaillons Ensemble",
      sub: "Vous avez un projet en tête ? J'aimerais beaucoup en entendre parler.",
      email: "Dire Bonjour",
      or: "ou retrouvez-moi sur",
    },
  },
  es: {
    nav: { about: "Sobre mí", projects: "Proyectos", skills: "Habilidades", contact: "Contacto" },
    hero: {
      greeting: "Hola, soy",
      name: "Agatha Dantas",
      title: "Desarrolladora Web e Ingeniera de Software",
      cta: "Ver Mi Trabajo",
      cta2: "Contactarme",
    },
    about: {
      heading: "Creando experiencias digitales con código y creatividad",
      p1: "Soy una desarrolladora web e ingeniera de software apasionada por crear aplicaciones modernas.",
      p2: "Con una base sólida en tecnologías modernas de front-end y back-end.",
      p3: "Cuando no estoy programando, exploro tendencias de diseño.",
      stat1: "Proyectos",
      stat2: "Tecnologías",
      stat3: "Años de Experiencia",
    },
    projects: {
      heading: "Trabajo Seleccionado",
      sub: "Algunos proyectos de los que estoy orgullosa.",
      demo: "Demo",
      github: "GitHub",
      items: [
        {
          title: "NexaUI Design System",
          desc: "Una biblioteca completa de componentes construida con React y Tailwind CSS.",
          stack: ["React", "Tailwind CSS", "TypeScript", "Storybook"],
        },
      ],
    },
    skills: {
      heading: "Stack Tecnológico & Especialidad",
      sub: "Tecnologías con las que trabajo todos los días.",
      categories: [
        {
          cat: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
        },
      ],
    },
    contact: {
      heading: "Trabajemos Juntas",
      sub: "¿Tienes un proyecto en mente? Me encantaría saber más.",
      email: "Decir Hola",
      or: "o encuéntrame en",
    },
  },
};