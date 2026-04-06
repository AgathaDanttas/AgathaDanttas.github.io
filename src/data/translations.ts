import type { Translation } from "../types/translation";
import type { Language } from "../types/language";

export const translations: Record<Language, Translation> = {
  pt: {
    nav: {
      home: "Início",
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
      downloadCV: "Baixar Currículo",
    },
    about: {
      heading: "Onde design encontra engenharia",
      p1: "Sou Desenvolvedora Web e estudante de Engenharia de Software, com foco em construir aplicações modernas, bem estruturadas e pensadas para o usuário.",
      p2: "Atuo na interseção entre design e engenharia, transformando ideias em soluções digitais funcionais, elegantes e escaláveis. Mais do que fazer interfaces bonitas, me preocupo com a qualidade do código, organização do projeto e a experiência real de quem utiliza o sistema.",
      p3: "Tenho experiência em desenvolvimento full-stack e estou em constante evolução, aprofundando meus conhecimentos em arquitetura de software, back-end e boas práticas de desenvolvimento.",
      p4: "Quando não estou programando, gosto de explorar novas tendências de design, estudar tecnologia e experimentar ideias criativas em projetos pessoais.",
      stat1: "Projetos Criados",
      stat2: "Tecnologias",
      stat3: "Anos de Experiência",
    },
    experience: {
      heading: "Trajetória",
      educationHeading: "Educação",
      jobs: [
        { title: "Desenvolvedora Full-Stack", company: "Empresa", period: "2023 - Presente", description: "Desenvolvimento de aplicações modernas..." }
      ],
      education: [
        { degree: "Engenharia de Software", school: "Universidade", period: "2022 - 2026", description: "Estudos com foco em arquitetura de software." }
      ]
    },
    process: {
      heading: "Meu Processo",
      steps: [
        { title: "Descoberta", desc: "Análise de requisitos e entendimento do problema." },
        { title: "Design", desc: "Prototipagem de soluções focadas em UX/UI." },
        { title: "Desenvolvimento", desc: "Escrita de código limpo, escalável e testado." },
        { title: "Entrega", desc: "Deploy contínuo e acompanhamento pós-lançamento." }
      ]
    },
    certifications: {
      heading: "Certificações",
      items: [
        { title: "Certificação em React", issuer: "Alura", date: "2023" },
        { title: "Bootcamp Fullstack", issuer: "Rocketseat", date: "2022" }
      ]
    },
    projects: {
      heading: "Projetos em Destaque",
      demo: "Demo",
      github: "GitHub",
      allProjectsHeading: "Todos os Projetos",
      filterAll: "Todos",
      items: [
        {
          title: "NexaUI Design System",
          desc: "Uma biblioteca completa de componentes construída com React e Tailwind CSS. Inclui mais de 60 componentes, modo escuro e foco em acessibilidade.",
          stack: ["React", "Tailwind CSS", "TypeScript", "Storybook"],
          category: "Design System",
          featured: true,
        },
        {
          title: "SIM-UPA",
          desc: "Sistema integrado de monitoramento e regulação de UPAs com suporte a frotas de ambulâncias e encaminhamento inteligente.",
          stack: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
          category: "HealthTech",
          featured: true,
        },
        {
          title: "FinTech Landing Page",
          desc: "Página de conversão moderna e de alta performance para uma startup de finanças, focada em SEO.",
          stack: ["React", "Framer Motion", "Tailwind CSS"],
          category: "Landing Page",
          featured: true,
        },
        {
          title: "App de Gestão Kanban",
          desc: "Aplicativo web de organização usando a metodologia Kanban com atualizações em tempo real.",
          stack: ["React", "Node.js", "MongoDB", "WebSockets"],
          category: "SaaS",
          featured: false,
        },
        {
          title: "Portfolio Fotográfico",
          desc: "Site de portfólio minimalista para fotógrafos profissionais com galeria otimizada.",
          stack: ["React", "TypeScript", "CSS"],
          category: "Landing Page",
          featured: false,
        }
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
        {
          cat: "Backend",
          items: ["Node.js", "Python", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"],
        },
        {
          cat: "Ferramentas",
          items: ["Git", "Docker", "AWS", "Vercel", "Figma", "CI/CD"],
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
    nav: {
      home: "Home",
      about: "About", projects: "Projects", skills: "Skills", contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Agatha Dantas",
      title: "Web Developer & Software Engineer",
      cta: "View My Work",
      cta2: "Get In Touch",
      downloadCV: "Download CV",
    },
    about: {
      heading: "Where design meets engineering",
      p1: "I'm a Web Developer and Software Engineering student, focusing on building modern, well-structured, and user-centric applications.",
      p2: "I operate at the intersection of design and engineering, transforming ideas into functional, elegant, and scalable digital solutions. More than making beautiful interfaces, I care about code quality, project organization, and the real experience of those who use the system.",
      p3: "I have experience in full-stack development and am constantly evolving, deepening my knowledge in software architecture, back-end, and development best practices.",
      p4: "When I'm not coding, I like to explore design trends, study technology, and experiment with creative ideas in personal projects.",
      stat1: "Projects Built",
      stat2: "Technologies",
      stat3: "Years Experience",
    },
    experience: {
      heading: "Experience",
      educationHeading: "Education",
      jobs: [
        { title: "Full-Stack Developer", company: "Company", period: "2023 - Present", description: "Development of modern applications..." }
      ],
      education: [
        { degree: "Software Engineering", school: "University", period: "2022 - 2026", description: "Focusing on software architecture." }
      ]
    },
    process: {
      heading: "My Process",
      steps: [
        { title: "Discovery", desc: "Requirement analysis and problem understanding." },
        { title: "Design", desc: "Prototyping UX/UI focused solutions." },
        { title: "Development", desc: "Writing clean, scalable, and tested code." },
        { title: "Launch", desc: "Continuous deployment and monitoring." }
      ]
    },
    certifications: {
      heading: "Certifications",
      items: [
        { title: "React Certification", issuer: "Alura", date: "2023" },
        { title: "Fullstack Bootcamp", issuer: "Rocketseat", date: "2022" }
      ]
    },
    projects: {
      heading: "Selected Work",
      sub: "A few projects I'm proud of.",
      demo: "Live Demo",
      github: "GitHub",
      allProjectsHeading: "All Projects",
      filterAll: "All",
      items: [
        {
          title: "NexaUI Design System",
          desc: "A complete component library built with React and Tailwind CSS.",
          stack: ["React", "Tailwind CSS", "TypeScript", "Storybook"],
          category: "Design System",
          featured: true,
        },
        {
          title: "SIM-UPA",
          desc: "Integrated UPA monitoring and regulation system with ambulance fleet support and intelligent routing.",
          stack: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
          category: "HealthTech",
          featured: true,
        },
        {
          title: "FinTech Landing Page",
          desc: "Modern, high-performance conversion page for a finance startup, focused on SEO.",
          stack: ["React", "Framer Motion", "Tailwind CSS"],
          category: "Landing Page",
          featured: true,
        },
        {
          title: "Kanban Management App",
          desc: "Organization web app using the Kanban methodology with real-time updates.",
          stack: ["React", "Node.js", "MongoDB", "WebSockets"],
          category: "SaaS",
          featured: false,
        },
        {
          title: "Photography Portfolio",
          desc: "Minimalist portfolio site for professional photographers with optimized gallery.",
          stack: ["React", "TypeScript", "CSS"],
          category: "Landing Page",
          featured: false,
        }
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
        {
          cat: "Backend",
          items: ["Node.js", "Python", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"],
        },
        {
          cat: "Tools",
          items: ["Git", "Docker", "AWS", "Vercel", "Figma", "CI/CD"],
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
    nav: {
      home: "Accueil",
      about: "À propos", projects: "Projets", skills: "Compétences", contact: "Contact"
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Agatha Dantas",
      title: "Développeuse Web & Ingénieure Logiciel",
      cta: "Voir Mon Travail",
      cta2: "Me Contacter",
      downloadCV: "Télécharger CV",
    },
    about: {
      heading: "Où le design rencontre l'ingénierie",
      p1: "Je suis développeuse Web et étudiante en ingénierie logicielle, avec pour objectif de créer des applications modernes, bien structurées et centrées sur l'utilisateur.",
      p2: "J'opère à l'intersection du design et de l'ingénierie, en transformant les idées en solutions numériques fonctionnelles, élégantes et évolutives. Au-delà de créer de belles interfaces, je me soucie de la qualité du code, de l'organisation du projet et de l'expérience réelle des utilisateurs du système.",
      p3: "J'ai de l'expérience dans le développement full-stack et je suis en constante évolution, approfondissant mes connaissances en architecture logicielle, back-end et meilleures pratiques de développement.",
      p4: "Quand je ne programme pas, j'aime explorer les nouvelles tendances en matière de design, étudier la technologie et expérimenter des idées créatives dans des projets personnels.",
      stat1: "Projets Réalisés",
      stat2: "Technologies",
      stat3: "Ans d'Expérience",
    },
    experience: {
      heading: "Expérience",
      educationHeading: "Éducation",
      jobs: [
        { title: "Développeuse Full-Stack", company: "Entreprise", period: "2023 - Présent", description: "Développement d'applications modernes..." }
      ],
      education: [
        { degree: "Ingénierie Logicielle", school: "Université", period: "2022 - 2026", description: "Études axées sur l'architecture logicielle." }
      ]
    },
    process: {
      heading: "Mon Processus",
      steps: [
        { title: "Découverte", desc: "Analyse des exigences et compréhension du problème." },
        { title: "Conception", desc: "Prototypage de solutions axées sur l'UX/UI." },
        { title: "Développement", desc: "Écriture de code propre, évolutif et testé." },
        { title: "Lancement", desc: "Déploiement continu et suivi." }
      ]
    },
    certifications: {
      heading: "Certifications",
      items: [
        { title: "Certification React", issuer: "Alura", date: "2023" },
        { title: "Bootcamp Fullstack", issuer: "Rocketseat", date: "2022" }
      ]
    },
    projects: {
      heading: "Travaux Sélectionnés",
      sub: "Quelques projets dont je suis fière.",
      demo: "Démo",
      github: "GitHub",
      allProjectsHeading: "Tous les Projets",
      filterAll: "Tous",
      items: [
        {
          title: "NexaUI Design System",
          desc: "Une bibliothèque complète de composants construite avec React et Tailwind CSS.",
          stack: ["React", "Tailwind CSS", "TypeScript", "Storybook"],
          category: "Design System",
          featured: true,
        },
        {
          title: "SIM-UPA",
          desc: "Système intégré de surveillance et de régulation des UPA avec support aux flottes d'ambulances et acheminement intelligent.",
          stack: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
          category: "HealthTech",
          featured: true,
        },
        {
          title: "FinTech Landing Page",
          desc: "Page de conversion moderne et performante pour une startup financière, optimisée pour le SEO.",
          stack: ["React", "Framer Motion", "Tailwind CSS"],
          category: "Landing Page",
          featured: true,
        },
        {
          title: "App de Gestion Kanban",
          desc: "Application web d'organisation utilisant la méthodologie Kanban avec mises à jour en temps réel.",
          stack: ["React", "Node.js", "MongoDB", "WebSockets"],
          category: "SaaS",
          featured: false,
        },
        {
          title: "Portfolio Photographique",
          desc: "Site de portfolio minimaliste pour les photographes professionnels avec galerie optimisée.",
          stack: ["React", "TypeScript", "CSS"],
          category: "Landing Page",
          featured: false,
        }
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
        {
          cat: "Backend",
          items: ["Node.js", "Python", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"],
        },
        {
          cat: "Outils",
          items: ["Git", "Docker", "AWS", "Vercel", "Figma", "CI/CD"],
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
    nav: {
      home: "Inicio",
      about: "Sobre mí", projects: "Proyectos", skills: "Habilidades", contact: "Contacto"
    },
    hero: {
      greeting: "Hola, soy",
      name: "Agatha Dantas",
      title: "Desarrolladora Web e Ingeniera de Software",
      cta: "Ver Mi Trabajo",
      cta2: "Contactarme",
      downloadCV: "Descargar CV",
    },
    about: {
      heading: "Donde el diseño encuentra la ingeniería",
      p1: "Soy Desarrolladora Web y estudiante de Ingeniería de Software, enfocada en construir aplicaciones modernas, bien estructuradas y pensadas para el usuario.",
      p2: "Trabajo en la intersección entre el diseño y la ingeniería, transformando ideas en soluciones digitales funcionales, elegantes y escalables. Más que hacer interfaces bonitas, me preocupo por la calidad del código, la organización del proyecto y la experiencia real de quienes utilizan el sistema.",
      p3: "Tengo experiencia en desarrollo full-stack y estoy en constante evolución, profundizando mis conocimientos en arquitectura de software, back-end y buenas prácticas de desarrollo.",
      p4: "Cuando no estoy programando, me gusta explorar nuevas tendencias de diseño, estudiar tecnología y experimentar con ideas creativas en proyectos personales.",
      stat1: "Proyectos",
      stat2: "Tecnologías",
      stat3: "Años de Experiencia",
    },
    experience: {
      heading: "Experiencia",
      educationHeading: "Educación",
      jobs: [
        { title: "Desarrolladora Full-Stack", company: "Empresa", period: "2023 - Presente", description: "Desarrollo de aplicaciones modernas..." }
      ],
      education: [
        { degree: "Ingeniería de Software", school: "Universidad", period: "2022 - 2026", description: "Estudios centrados en la arquitectura de software." }
      ]
    },
    process: {
      heading: "Mi Proceso",
      steps: [
        { title: "Descubrimiento", desc: "Análisis de requisitos y comprensión del problema." },
        { title: "Diseño", desc: "Prototipado de soluciones centradas en UX/UI." },
        { title: "Desarrollo", desc: "Escritura de código limpio, escalable y probado." },
        { title: "Lanzamiento", desc: "Despliegue continuo y seguimiento." }
      ]
    },
    certifications: {
      heading: "Certificaciones",
      items: [
        { title: "Certificación React", issuer: "Alura", date: "2023" },
        { title: "Bootcamp Fullstack", issuer: "Rocketseat", date: "2022" }
      ]
    },
    projects: {
      heading: "Trabajo Seleccionado",
      sub: "Algunos proyectos de los que estoy orgullosa.",
      demo: "Demo",
      github: "GitHub",
      allProjectsHeading: "Todos los Proyectos",
      filterAll: "Todos",
      items: [
        {
          title: "NexaUI Design System",
          desc: "Una biblioteca completa de componentes construida con React y Tailwind CSS.",
          stack: ["React", "Tailwind CSS", "TypeScript", "Storybook"],
          category: "Design System",
          featured: true,
        },
        {
          title: "SIM-UPA",
          desc: "Sistema integrado de monitoreo y regulación de UPAs con soporte para flotas de ambulancias y encaminamiento inteligente.",
          stack: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
          category: "HealthTech",
          featured: true,
        },
        {
          title: "FinTech Landing Page",
          desc: "Página de conversión moderna y de alto rendimiento para una startup financiera, enfocada en SEO.",
          stack: ["React", "Framer Motion", "Tailwind CSS"],
          category: "Landing Page",
          featured: true,
        },
        {
          title: "App de Gestión Kanban",
          desc: "Aplicación web de organización utilizando la metodología Kanban con actualizaciones en tiempo real.",
          stack: ["React", "Node.js", "MongoDB", "WebSockets"],
          category: "SaaS",
          featured: false,
        },
        {
          title: "Portfolio Fotográfico",
          desc: "Sitio de portafolio minimalista para fotógrafos profesionales con galería optimizada.",
          stack: ["React", "TypeScript", "CSS"],
          category: "Landing Page",
          featured: false,
        }
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
        {
          cat: "Backend",
          items: ["Node.js", "Python", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"],
        },
        {
          cat: "Herramientas",
          items: ["Git", "Docker", "AWS", "Vercel", "Figma", "CI/CD"],
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
