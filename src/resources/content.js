import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Victor",
  lastName: "Ferreira",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Desenvolvedor Full-Stack",
  avatar: "/images/avatar.jpg",
  email: "victorlrpf@gmail.com",
  location: "America/Sao_Paulo", // IANA time zone identifier para São Paulo, Brasil
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/victorlrpf",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/victor-ferreira-88728b216/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Criando pontes entre lógica e imaginação</>,
  featured: {
    display: true,
    title: <>Projeto em destaque: <strong className="ml-4">codCraft</strong></>,
    href: "/work/codcraft-app-quiz-logica",
  },
  subline: (
    <>
      Sou Victor, desenvolvedor full-stack apaixonado por criar soluções que encantam usuários e resolvem problemas reais.
      <br /> De dia, desenvolvo sistemas robustos em C#, ASP.NET e React. À noite, me aventuro por projetos autorais com lógica e criatividade.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Victor Ferreira é um desenvolvedor full-stack de São Paulo, com forte atuação em sistemas web
        utilizando C#, ASP.NET, Python, React e APIs modernas. Com uma paixão por lógica de programação,
        ele também desenvolve experiências interativas para aprendizado e diversão.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência Profissional",
    experiences: [
      {
        company: "Projetos Pessoais",
        timeframe: "2022 - Presente",
        role: "Full-Stack Developer",
        achievements: [
          <>Desenvolvimento do <strong>codCraft</strong>, um aplicativo educacional gamificado com quiz de lógica de programação.</>,
          <>Criação de APIs REST e GraphQL integradas ao Supabase, com foco em performance e escalabilidade.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Pesquisador Acadêmico",
        timeframe: "2020 - 2022",
        role: "Desenvolvedor Científico",
        achievements: [
          <>Pesquisa em criptografia quântica usando Python, Qiskit e Silq, aplicada em segurança da informação.</>,
          <>Publicação de artigos científicos com foco em algoritmos e experimentos em computação quântica.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "C# e ASP.NET",
        description: <>Desenvolvimento de sistemas web robustos, APIs e integração com MySQL e outros bancos.</>,
        images: [],
      },
      {
        title: "React + Tailwind + Supabase",
        description: <>Criação de interfaces modernas e interativas com integração de backend em tempo real.</>,
        images: [],
      },
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
