/* ================================================================
   PORTFOLIO - script.js  (Douglas Rodrigues de Morais)
================================================================ */


/* ================================================================
   01. TRADUÇÕES (i18n)
================================================================ */
const i18n = {
  pt: {
    nav_about: "Sobre",
    nav_skills: "Skills",
    nav_projects: "Projetos",
    nav_certifications: "Certificações",
    nav_education: "Formação",
    nav_experience: "Experiência",
    nav_contact: "Contato",
    hero_badge: "Disponível para projetos",
    hero_desc: `Transformo ideias em <strong>aplicações web completas</strong> e de alto impacto.
                Da interface à lógica do servidor, desenvolvo experiências modernas de ponta a ponta.`,
    hero_btn_projects: "Ver Projetos",
    hero_btn_contact: "Contato",
    about_label: "01 — Sobre Mim",
    about_title: `Código com <span>propósito</span>`,
    about_p1: `Sou um desenvolvedor Full Stack apaixonado por criar aplicações web que unem
               <strong>beleza, performance e usabilidade</strong>. Minha jornada começou em 2025 com
               curiosidade pura — desmontar sites para entender como funcionavam.`,
    about_p2: `Atuo no desenvolvimento de aplicações completas, da interface à lógica do servidor,
               criando experiências modernas e integrando as diferentes partes de cada projeto.`,
    about_p3: `Quando não estou codando, estou estudando <strong>novas tecnologias</strong> ou
               explorando o design de interfaces que inspira meu trabalho diário.`,
    stat_years_exp: "Anos de experiência",
    stat_delivered: "Projetos entregues",
    stat_tech_mastered: "Tecnologias dominadas",
    stat_coffees: "Cafés consumidos",
    skills_label: "02 — Tecnologias",
    skills_title: `Stack <span>Técnico</span>`,
    skills_desc: "Ferramentas e tecnologias que uso para desenvolver aplicações web completas.",
    skills_locked_label: "Em desbloqueio",
    skills_unlocking: "Desbloqueando em breve...",
    projects_label: "03 — Projetos",
    projects_title: `Trabalhos <span>Recentes</span>`,
    projects_desc: "Uma seleção dos projetos que mais me orgulho.",
    projects_see_all: "Ver todos os projetos",
    all_projects_title: `Todos os <span>Projetos</span>`,
    cert_label: "04 — Certificações",
    cert_title: `Minhas <span>Certificações</span>`,
    cert_desc: "Cursos e certificações que validam meu conhecimento técnico.",
    edu_label: "05 — Formação Acadêmica",
    edu_title: `Minha <span>Formação</span>`,
    edu_desc: "A base acadêmica que fundamenta meu desenvolvimento profissional.",
    exp_label: "06 — Trajetória",
    exp_title: `Minha <span>Jornada</span>`,
    exp_desc: "A linha do tempo da minha evolução como desenvolvedor.",
    exp_photo_label: "Quem está por trás do código",
    photo_hint: "Clique para adicionar sua foto",
    contact_label: "07 — Contato",
    contact_title: `Vamos <span>conversar?</span>`,
    contact_desc: "Disponível para projetos freelance, oportunidades e colaborações criativas.",
    contact_form_label: "Mensagem Direta",
    contact_form_title: "Envie uma mensagem",
    form_name: "Nome",
    form_name_ph: "Seu nome",
    form_email: "Email",
    form_email_ph: "seu@email.com",
    form_message: "Mensagem",
    form_msg_ph: "Fale sobre seu projeto...",
    form_submit: "Enviar Mensagem →",
    form_success: "Mensagem Enviada ✓",
    footer_copy: "© 2025 · Douglas Rodrigues de Morais · Feito com ♥ e muito café",
    whatsapp_tooltip: "Fale comigo!",
    proj_github: "GitHub",
    proj_demo: "Demo",
    status_ongoing: "Em andamento",
    status_completed: "Concluído",
    cert_view: "Ver certificado →",
    edu_label_ongoing: "Em andamento",
    edu_label_completed: "Concluído",
    cert_completed: "Concluído",
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_certifications: "Certifications",
    nav_education: "Education",
    nav_experience: "Experience",
    nav_contact: "Contact",
    hero_badge: "Available for projects",
    hero_desc: `I turn ideas into <strong>complete, high-impact web applications</strong>.
                From the interface to server-side logic, I build modern end-to-end experiences.`,
    hero_btn_projects: "View Projects",
    hero_btn_contact: "Contact",
    about_label: "01 — About Me",
    about_title: `Code with <span>purpose</span>`,
    about_p1: `I'm a Full Stack developer passionate about creating web applications that combine
               <strong>beauty, performance and usability</strong>. My journey began in 2025 with
               pure curiosity — disassembling websites to understand how they worked.`,
    about_p2: `I build complete applications, from the interface to server-side logic,
               creating modern experiences and integrating each part of a project.`,
    about_p3: `When I'm not coding, I'm studying <strong>new technologies</strong> or
               exploring interface design that inspires my daily work.`,
    stat_years_exp: "Years of experience",
    stat_delivered: "Projects delivered",
    stat_tech_mastered: "Technologies mastered",
    stat_coffees: "Coffees consumed",
    skills_label: "02 — Technologies",
    skills_title: `Tech <span>Stack</span>`,
    skills_desc: "Tools and technologies I use to build complete web applications.",
    skills_locked_label: "Unlocking",
    skills_unlocking: "Unlocking soon...",
    projects_label: "03 — Projects",
    projects_title: `Recent <span>Work</span>`,
    projects_desc: "A selection of the projects I'm most proud of.",
    projects_see_all: "View all projects",
    all_projects_title: `All <span>Projects</span>`,
    cert_label: "04 — Certifications",
    cert_title: `My <span>Certifications</span>`,
    cert_desc: "Courses and certifications that validate my technical knowledge.",
    edu_label: "05 — Academic Education",
    edu_title: `My <span>Education</span>`,
    edu_desc: "The academic foundation that supports my professional development.",
    exp_label: "06 — Career Path",
    exp_title: `My <span>Journey</span>`,
    exp_desc: "The timeline of my evolution as a developer.",
    exp_photo_label: "Who is behind the code",
    photo_hint: "Click to add your photo",
    contact_label: "07 — Contact",
    contact_title: `Let's <span>chat?</span>`,
    contact_desc: "Available for freelance projects, opportunities and creative collaborations.",
    contact_form_label: "Direct Message",
    contact_form_title: "Send a message",
    form_name: "Name",
    form_name_ph: "Your name",
    form_email: "Email",
    form_email_ph: "your@email.com",
    form_message: "Message",
    form_msg_ph: "Tell me about your project...",
    form_submit: "Send Message →",
    form_success: "Message Sent ✓",
    footer_copy: "© 2025 · Douglas Rodrigues de Morais · Made with ♥ and lots of coffee",
    whatsapp_tooltip: "Talk to me!",
    proj_github: "GitHub",
    proj_demo: "Demo",
    status_ongoing: "In progress",
    status_completed: "Completed",
    cert_view: "View certificate →",
    edu_label_ongoing: "In progress",
    edu_label_completed: "Completed",
    cert_completed: "Completed",
  },
};

let currentLang = "pt";

function t(key) {
  return i18n[currentLang][key] || i18n["pt"][key] || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[currentLang][key] !== undefined) {
      el.innerHTML = i18n[currentLang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[currentLang][key] !== undefined) {
      el.placeholder = i18n[currentLang][key];
    }
  });

  document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  renderProjects();
  renderTimeline();
  renderContacts();
  renderCerts();
  renderEducation();
  setTimeout(initScrollReveal, 50);
}

function setLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  applyTranslations();
}


/* ================================================================
   02. DADOS
================================================================ */

/* ── SKILLS DESBLOQUEADAS (correia) ─────────────────────────── */
const skills = [
  {
    name: "HTML5", color: "#E34F26",
    svg: `<svg viewBox="0 0 24 24"><path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>`
  },
  {
    name: "CSS3", color: "#1572B6",
    svg: `<svg viewBox="0 0 24 24"><path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>`
  },
  {
    name: "JavaScript", color: "#F7DF1E",
    svg: `<svg viewBox="0 0 24 24"><path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>`
  },
  {
    name: "TypeScript", color: "#3178C6",
    svg: `<svg viewBox="0 0 24 24"><path fill="#3178C6" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>`
  },
  {
    name: "React", color: "#61DAFB",
    svg: `<svg viewBox="0 0 24 24"><path fill="#61DAFB" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.143.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.292zM5.131 6.538c1.02 0 2.515.814 4.109 2.292-.687.72-1.373 1.54-2.034 2.446-1.102.118-2.148.295-3.109.538-.108-.5-.196-.986-.249-1.449-.225-1.873.063-3.326.73-3.705.148-.082.33-.123.553-.122zm4.868 5.628c.34-.077.68-.141 1.018-.196l-.002.003c.355.057.714.12 1.063.2.297.047.591.1.879.16-.107.36-.226.719-.357 1.077-.137-.325-.281-.645-.429-.963a12.5 12.5 0 0 0-.44-.89 11.765 11.765 0 0 0-.732 1.853c-.13-.358-.25-.717-.356-1.077a12.85 12.85 0 0 0-.645-.167zm-1.3 2.163c-.356-.77-.673-1.558-.95-2.348.277-.79.595-1.578.95-2.349.33.77.645 1.557.928 2.349-.283.791-.598 1.578-.928 2.348zm6.898-6.62c.2 0 .393.027.57.083 1.514.433 2.963 2.783 2.963 6.131 0 3.33-1.427 5.678-2.927 6.125-.175.054-.373.08-.577.08-1.02 0-2.515-.814-4.109-2.292.688-.72 1.373-1.541 2.034-2.446 1.102-.118 2.148-.295 3.109-.538.108.5.196.986.249 1.449.225 1.873-.063 3.326-.73 3.705-.148.082-.33.123-.553.122-1.018 0-2.513-.814-4.105-2.292.686-.72 1.372-1.541 2.033-2.446 1.101-.118 2.147-.295 3.108-.538.108.5.196.986.249 1.449z"/></svg>`
  },
  {
    name: "Git", color: "#F05032",
    svg: `<svg viewBox="0 0 24 24"><path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.604-.404-.541-.541-.677-1.338-.404-1.996L7.67 3.775l-7.216 7.208c-.604.604-.604 1.582 0 2.188l10.48 10.477c.604.604 1.582.604 2.186 0l10.426-10.44c.605-.603.605-1.581 0-2.187"/></svg>`
  },
  {
    name: "GitHub", color: "#ffffff",
    svg: `<svg viewBox="0 0 24 24"><path fill="#ffffff" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`
  },
  {
    name: "C", color: "#A8B9CC",
    svg: `<svg viewBox="0 0 24 24"><path fill="#A8B9CC" d="M16.5 9.4l-1.9-1.1c-.3-.2-.6-.2-.9-.1-1 .5-2 .8-3.1.8-3.5 0-6.4-2.9-6.4-6.4S7.1-.9 10.6-.9c1.1 0 2.1.3 3 .8.3.2.6.1.9-.1L16.4.7c.5-.3.7-1 .3-1.5C15 -1.9 12.9-2.8 10.6-2.8 5 -2.8.4 1.8.4 7.4s4.6 10.2 10.2 10.2c2.3 0 4.4-.9 6.1-2.2.5-.4.3-1.1-.2-1.4z"/></svg>`
  },
];

/* ── SKILLS BLOQUEADAS (em breve) ───────────────────────────── */
const skillsLocked = [
  { icon: "⚛️", name: "Next.js" },
  { icon: "🌿", name: "Node.js" },
  { icon: "🐘", name: "PostgreSQL" },
  { icon: "☁️", name: "AWS" },
  { icon: "🐳", name: "Docker" },
  { icon: "🔥", name: "Firebase" },
];

/* ── PROJETOS ─────────────────────────────────────────────────── */
const projects = [
  {
    icon: "",
    featured: true,
    title: {
      pt: "Landing Page Criativa",
      en: "Creative Landing Page",
    },
    desc: {
      pt: "Landing page responsiva com animações CSS, design moderno e alta performance — do zero ao deploy.",
      en: "Responsive landing page with CSS animations, modern design and high performance — from scratch to deploy.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/douglasrmorais/Mario-Bros",
    demo: "https://douglasrmorais.github.io/Mario-Bros/",
    video: "assets/Projeto - Mario-Bros.mp4",
  },
  {
    icon: "",
    featured: true,
    title: {
      pt: "Cadastro de usuários",
      en: "User Registration",
    },
    desc: {
      pt: "Aplicação de cadastro de usuários com interface gráfica desenvolvida em React e backend em Node.js.",
      en: "User registration application with a graphical interface built with React and a Node.js backend.",
    },
    tags: ["React", "Node.js"],
    github: "https://github.com/douglasrmorais/Cadastro-usuarios",
    demo: "",
    video: "assets/Projeto - Cadastro-usuarios.mp4",
  },
  {
    icon: "",
    featured: false,
    title: {
      pt: "Jogo da Memória",
      en: "Memory Game",
    },
    desc: {
      pt: "Um game responsivo que desafia a memória do usuário.",
      en: "A responsive game that challenges the user's memory.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/douglasrmorais/MemoryRace-Oficial",
    demo: " https://douglasrmorais.github.io/MemoryRace-Oficial/",
    video: "assets/Projeto - MemoryRace.mp4",
  },
  {
    icon: "",
    featured: false,
    title: {
      pt: "Gerador de sites",
      en: "Website Generator",
    },
    desc: {
      pt: "Web site com integração de uma IA que com apenas um prompt gera um site para você com a interface e o código HTML e CSS pronto para vizualização do usuário.",
      en: "Website with AI integration that generates a website for you with just one prompt, complete with interface and HTML/CSS code ready for user viewing.",
    },
    tags: ["HTML", "CSS", "JavaScript", "IA"],
    github: "https://github.com/douglasrmorais/Gerador-de-sites-com-IA",
    demo: " https://douglasrmorais.github.io/Gerador-de-sites-com-IA/",
    video: "assets/Projeto - Gerador de sites com IA.mp4",
  },
  {
    icon: "",
    featured: false,
    title: {
      pt: "Sorteador de números",
      en: "Random Number Generator",
    },
    desc: {
      pt: "Sorteador de números aleatórios usando HTML, CSS e JavaScript.",
      en: "Random number generator using HTML, CSS and JavaScript.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/douglasrmorais/Sorteador-de-N-meros",
    demo: "https://douglasrmorais.github.io/Sorteador-de-N-meros/",
    video: "assets/Projeto - Sorteador de números.mp4",
  },
  {
    icon: "",
    featured: false,
    title: {
      pt: "Conversor de moedas",
      en: "Currency Converter",
    },
    desc: {
      pt: "Conversor de moedas onde você coloca o seu valor em REAL e ele converte para Dólar, Euro, Libra e Bitcoin.",
      en: "Currency converter where you enter your value in REAL and it converts to Dollar, Euro, Pound and Bitcoin.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/douglasrmorais/Conversor-de-Moedas",
    demo: "https://douglasrmorais.github.io/Conversor-de-Moedas/",
    video: "assets/Projeto - Conversor de moedas.mp4",
  },
  {
    icon: "",
    featured: false,
    title: {
      pt: "Gerador de código CSS",
      en: "CSS Code Generator",
    },
    desc: {
      pt: "Um gerador de interfaces com CSS simples.",
      en: "A simple CSS interface generator.",
    },
    tags: ["HTML", "CSS", "JavaScript", "IA"],
    github: "https://github.com/douglasrmorais/Gerador-de-codigo-CSS",
    demo: "https://douglasrmorais.github.io/Gerador-de-codigo-CSS/",
    video: "assets/Gerador de código com IA.mp4",
  },
  
];

/* ── CERTIFICAÇÕES ──────────────────────────────────────────── */
const certifications = [
  {
    icon: "",
    issuer: "DevClub",
    name: {
      pt: "HTML",
      en: "HTML",
    },
    date: {
      pt: "2026",
      en: "2026",
    },
    image: "assets/Certificado - HTML.png",
    href: "#",
  },
  {
    icon: "",
    issuer: "DevClub",
    name: {
      pt: "CSS",
      en: "CSS",
    },
    date: {
      pt: "2026",
      en: "2026",
    },
    image: "assets/Certificado - CSS Intermediário.png",
    href: "#",
  },
  {
    icon: "",
    issuer: "DevClub",
    name: {
      pt: "Git e Github",
      en: "Git e Github",
    },
    date: {
      pt: "2026",
      en: "2026",
    },
    image: "assets/Certificado - Git & GitHub.png",
    href: "#",
  },
  {
    icon: "",
    issuer: "Pnaat",
    name: {
      pt: "Fundamentos em IOT e Edge AI",
      en: "Fundamentals of IOT and Edge AI",
    },
    date: {
      pt: "2026",
      en: "2026",
    },
    image: "assets/Certificado - IoT Edge AI.png",
    href: "#",
  },
  {
    icon: "",
    issuer: "Pnaat",
    name: {
      pt: "Fundamentos em Python",
      en: "Python fundamentals",
    },
    date: {
      pt: "2026",
      en: "2026",
    },
    image: "assets/Certificado - Fundamentos Python.png",
    href: "#",
  },
  {
    icon: "",
    issuer: "Instituto federal da Paraíba",
    name: {
      pt: "Desenvolvimento de sistemas Web com Django",
      en: "Web systems development with Django",
    },
    date: {
      pt: "2026",
      en: "2026",
    },
    image: "assets/Certificado - Introdução Django.png",
    href: "#",
  },
];

/* ── FORMAÇÃO ACADÊMICA ─────────────────────────────────────── */
const education = [
  {
    icon: "🎓",
    image: "assets/logo-ifpb.png",
    period: {
      pt: "2025 — 2028 Presente",
      en: "2025 — 2028 Present",
    },
    degree: {
      pt: "Análise e Desenvolvimento de Sistemas",
      en: "Systems Analysis and Development",
    },
    institution: {
      pt: "Instituto Federal da Paraíba (IFPB)",
      en: "Instituto Federal da Paraíba (IFPB)",
    },
    desc: {
      pt: "Graduação - Tecnólogo",
      en: "Degree - Technologist",
    },
    status: "ongoing",
  },
  {
    icon: "🎓",
    image: "assets/logo-devclub.png",
    period: {
      pt: "2026 — 2027 Presente",
      en: "2026 — 2027 Present",
    },
    degree: {
      pt: "Formação Full Stack",
      en: "Full Stack Training",
    },
    institution: {
      pt: "DevClub",
      en: "DevClub",
    },
    desc: {
      pt: "Curso profissionalizante",
      en: "Professional training course",
    },
    status: "ongoing",
  },
];

/* ── TIMELINE (jornada 2025-2026) ───────────────────────────── */
const timeline = [
  {
    date: {
      pt: "2026 — Presente",
      en: "2026 — Present",
    },
    title: {
      pt: "Criando Projetos Próprios",
      en: "Building Personal Projects",
    },
    org: {
      pt: "Desenvolvimento Independente",
      en: "Independent Development",
    },
    desc: {
      pt: "Comecei a colocar em prática tudo que aprendi — criando projetos reais com HTML, CSS, JavaScript, TypeScript e React. Cada projeto é um novo desafio e uma nova conquista.",
      en: "Started putting everything I learned into practice — building real projects with HTML, CSS, JavaScript, TypeScript and React. Each project is a new challenge and a new achievement.",
    },
  },
  {
    date: {
      pt: "2025 — Início",
      en: "2025 — Beginning",
    },
    title: {
      pt: "Descoberta da Programação",
      en: "Discovering Programming",
    },
    org: {
      pt: "Cursos Online & Presenciais",
      en: "Online & In-person Courses",
    },
    desc: {
      pt: "Dei meu primeiro passo na tecnologia! Comecei com HTML e CSS em cursos online e presenciais, descobrindo que criar interfaces digitais era exatamente o que eu queria fazer.",
      en: "Took my first step into tech! Started with HTML and CSS in online and in-person courses, discovering that building digital interfaces was exactly what I wanted to do.",
    },
  },
];

/* ── CONTATOS — LINKS REAIS ─────────────────────────────────── */
const contacts = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/douglas-moraiss",
    href: "https://www.linkedin.com/in/douglas-moraiss",
    iconColor: "#0A66C2",
    svg: `<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: "GitHub",
    value: "github.com/douglasrmorais",
    href: "https://github.com/douglasrmorais",
    iconColor: "#ffffff",
    svg: `<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#ffffff" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  },
  {
    label: "WhatsApp",
    value: "+55 (83) 9 8166-8407",
    href: "https://wa.me/5583981668407?text=Ol%C3%A1%20Douglas!%20Acabei%20de%20ver%20seu%20portf%C3%B3lio%20e%20gostei%20bastante%20do%20seu%20trabalho.%20Podemos%20conversar%3F%0A",
    iconColor: "#25D366",
    svg: `<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`,
  },
  {
    label: "Instagram",
    value: "@douglas_morais.75",
    href: "https://www.instagram.com/douglas_morais.75?igsh=ajkyZjJ5ODI4cnc2",
    iconColor: "#E1306C",
    svg: `<svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-contact" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stop-color="#fdf497"/>
          <stop offset="45%" stop-color="#fd5949"/>
          <stop offset="60%" stop-color="#d6249f"/>
          <stop offset="90%" stop-color="#285AEB"/>
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-contact)"/>
      <path fill="#fff" d="M12 7.378A4.622 4.622 0 1 0 12 16.622 4.622 4.622 0 0 0 12 7.378zm0 7.622a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      <circle fill="#fff" cx="16.804" cy="7.196" r="1.08"/>
      <path fill="#fff" d="M15.998 3H8.002A5.007 5.007 0 0 0 3 8.002v7.996A5.007 5.007 0 0 0 8.002 21h7.996A5.007 5.007 0 0 0 21 15.998V8.002A5.007 5.007 0 0 0 15.998 3zm3.44 13a3.446 3.446 0 0 1-3.44 3.44H8.002A3.446 3.446 0 0 1 4.56 15.998V8.002A3.446 3.446 0 0 1 8.002 4.56h7.996A3.446 3.446 0 0 1 19.44 8.002v7.996z"/>
    </svg>`,
  },
  {
    label: "Email",
    value: "douglasmoraiss022@gmail.com",
    href: "mailto:douglasmoraiss022@gmail.com",
    iconColor: "#EA4335",
    svg: `<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>`,
  },
];

/* ── ROLES DO TYPEWRITER ─────────────────────────────────────── */
const rolesPt = ["Desenvolvedor Full Stack", "Desenvolvedor Web", "Desenvolvedor de aplicações"];
const rolesEn = ["Full Stack Developer", "Web Developer", "End-to-end Developer"];

function getRoles() {
  return currentLang === "en" ? rolesEn : rolesPt;
}


/* ================================================================
   03. RENDERIZAÇÃO
================================================================ */

/** Monta a correia de skills — duplica os chips para o loop infinito */
function renderSkillsTicker() {
  const ticker = document.getElementById("skillsTicker");
  if (!ticker) return;
  const makeChips = () => skills.map(s => `
    <div class="skill-chip" style="--skill-color:${s.color}">
      <span class="skill-chip-icon">${s.svg}</span>
      <span class="skill-chip-name">${s.name}</span>
    </div>
  `).join("");
  ticker.innerHTML = makeChips() + makeChips();
}

/** Monta o grid de skills bloqueadas */
function renderLockedSkills() {
  const grid = document.getElementById("skillsLockedGrid");
  if (!grid) return;
  grid.innerHTML = skillsLocked.map(s => `
    <div class="skill-locked-card">
      <div class="skill-locked-icon">${s.icon}</div>
      <div class="skill-locked-name">${s.name}</div>
      <div class="skill-locked-bar"></div>
      <div class="skill-locked-badge">Em breve</div>
    </div>
  `).join("");
}

/* ── Card de projeto ─────────────────────────────────────────── */
function buildProjectCard(p) {
  const hasVideo = p.video && p.video.trim() !== '';
  return `
    <div class="project-card reveal">
      <div class="project-img">
        ${hasVideo
          ? `<video src="${p.video}" controls autoplay muted loop preload="metadata" class="project-video"></video>`
          : `<div class="project-img-pattern"></div>
             <div class="project-glow"></div>
             <div class="project-img-icon">${p.icon}</div>`
        }
      </div>
      <div class="project-body">
        <div class="project-tags">${p.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}</div>
        <div class="project-title">${p.title[currentLang] || p.title.pt}</div>
        <div class="project-desc">${p.desc[currentLang] || p.desc.pt}</div>
        <div class="project-actions">
          <a href="${p.github || '#'}" class="proj-btn gh" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            ${t("proj_github")}
          </a>
          <a href="${p.demo || '#'}" class="proj-btn demo" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            ${t("proj_demo")}
          </a>
        </div>
      </div>
    </div>
  `;
}

/* Na home: apenas os 2 primeiros featured */
function renderProjects() {
  const homeGrid = document.getElementById("projectsGrid");
  if (!homeGrid) return;
  const featured = projects.filter(p => p.featured).slice(0, 2);
  homeGrid.innerHTML = featured.map(buildProjectCard).join("");
  renderAllProjects();
}

function renderAllProjects() {
  const allGrid = document.getElementById("allProjectsGrid");
  if (!allGrid) return;
  allGrid.innerHTML = projects.map(buildProjectCard).join("");
}

function renderTimeline() {
  const container = document.getElementById("timeline");
  if (!container) return;
  container.innerHTML = timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">${item.date[currentLang] || item.date.pt}</div>
      <div class="timeline-title">${item.title[currentLang] || item.title.pt}</div>
      <div class="timeline-org">${item.org[currentLang] || item.org.pt}</div>
      <div class="timeline-desc">${item.desc[currentLang] || item.desc.pt}</div>
    </div>
  `).join("");
}

function renderContacts() {
  const container = document.getElementById("contactLinks");
  if (!container) return;
  container.innerHTML = contacts.map(ct => `
    <a href="${ct.href}" class="contact-link reveal" target="_blank" rel="noopener">
      <div class="contact-link-icon contact-icon-colored" style="--icon-bg:${ct.iconColor}20; --icon-border:${ct.iconColor}40;">
        ${ct.svg}
      </div>
      <div class="contact-link-text">
        <div class="contact-link-label">${ct.label}</div>
        <div class="contact-link-value">${ct.value}</div>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" opacity=".4">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </a>
  `).join("");
}

/* ── CERTIFICAÇÕES — layout igual à foto de referência ─────── */
function renderCerts() {
  const certsGrid = document.getElementById("certsGrid");
  if (!certsGrid) return;
  certsGrid.innerHTML = certifications.slice(0, 3).map(cert => `
    <a href="${cert.href}" class="cert-card" target="_blank" rel="noopener">
      <div class="cert-image-wrap">
        <img src="${cert.image}" alt="${cert.name[currentLang]}" class="cert-img">
      </div>
      <div class="cert-content">
        <h3 class="cert-title">${cert.name[currentLang]}</h3>
        <p class="cert-issuer-name">${cert.issuer}</p>
        <div class="cert-footer-row">
          <span class="cert-status-badge">
            <span class="cert-status-dot"></span>
            ${t('cert_completed')}
          </span>
        </div>
      </div>
    </a>
  `).join('');
}

function renderAllCerts() {
  const allCertsGrid = document.getElementById("allCertsGrid");
  if (!allCertsGrid) return;
  allCertsGrid.innerHTML = certifications.map(cert => `
    <a href="${cert.href}" class="cert-card" target="_blank" rel="noopener">
      <div class="cert-image-wrap">
        <img src="${cert.image}" alt="${cert.name[currentLang]}" class="cert-img">
      </div>
      <div class="cert-content">
        <h3 class="cert-title">${cert.name[currentLang]}</h3>
        <p class="cert-issuer-name">${cert.issuer}</p>
        <div class="cert-footer-row">
          <span class="cert-status-badge">
            <span class="cert-status-dot"></span>
            ${t('cert_completed')}
          </span>
        </div>
      </div>
    </a>
  `).join('');
}

function openAllCerts(e) {
  if (e) e.preventDefault();
  renderAllCerts();
  const overlay = document.getElementById("allCertsOverlay");
  if (!overlay) return;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeAllCerts(e) {
  if (e && e.target !== document.getElementById('allCertsOverlay')) return;
  const overlay = document.getElementById('allCertsOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  try { document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' }); } catch (err) {}
}

function renderEducation() {
  const grid = document.getElementById("educationGrid");
  if (!grid) return;
  grid.innerHTML = education.map((e, i) => `
    <div class="edu-card reveal" style="transition-delay:${i * 0.1}s">
      <div class="edu-icon-wrap">
        ${e.image ? `<img src="${e.image}" alt="${e.institution[currentLang] || e.institution.pt}" class="edu-image">` : e.icon}
      </div>
      <div class="edu-content">
        <div class="edu-period">${e.period[currentLang] || e.period.pt}</div>
        <div class="edu-degree">${e.degree[currentLang] || e.degree.pt}</div>
        <div class="edu-institution">${e.institution[currentLang] || e.institution.pt}</div>
        <div class="edu-desc">${e.desc[currentLang] || e.desc.pt}</div>
        <span class="edu-status ${e.status}">
          ${e.status === "ongoing" ? t("edu_label_ongoing") : t("edu_label_completed")}
        </span>
      </div>
    </div>
  `).join("");
}





/* ================================================================
   05. MODAL — TODOS OS PROJETOS
================================================================ */
function openAllProjects(e) {
  if (e) e.preventDefault();
  renderAllProjects();
  const overlay = document.getElementById("allProjectsOverlay");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(initScrollReveal, 100);
}

function closeAllProjects(e) {
  if (e && e.target !== document.getElementById("allProjectsOverlay")) return;
  document.getElementById("allProjectsOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => { if (e.key === "Escape") { closeAllProjects(); closeAllCerts(); } });


/* ================================================================
   06. TYPEWRITER
================================================================ */
let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeLoop() {
  const el = document.getElementById("typewriter");
  if (!el) return;
  const roles = getRoles();
  const word = roles[roleIndex % roles.length];
  if (!isDeleting) {
    el.textContent = word.slice(0, ++charIndex);
    if (charIndex === word.length) { isDeleting = true; setTimeout(typeLoop, 2200); return; }
    setTimeout(typeLoop, 95);
  } else {
    el.textContent = word.slice(0, --charIndex);
    if (charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; setTimeout(typeLoop, 400); return; }
    setTimeout(typeLoop, 45);
  }
}


/* ================================================================
   07. SCROLL REVEAL
================================================================ */
let revealObserver;
function initScrollReveal() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .timeline-item").forEach(el => {
    revealObserver.observe(el);
  });
}


/* ================================================================
   08. CURSOR GLOW
================================================================ */
function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;
  document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}


/* ================================================================
   09. NAVEGAÇÃO
================================================================ */
function initNavScroll() {
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    nav.style.borderBottomColor = window.scrollY > 20 ? "rgba(255,255,255,.1)" : "rgba(255,255,255,.05)";
  });
}

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a[data-section]");
  const setActive = id => navLinks.forEach(link => link.classList.toggle("active", link.dataset.section === id));
  const onScroll = () => {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) current = section.getAttribute("id");
    });
    if (current) setActive(current);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}


/* ================================================================
   10. FORMULÁRIO
================================================================ */
function handleFormSubmit(btn) {
  btn.textContent = t("form_success");
  btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
  setTimeout(() => { btn.textContent = t("form_submit"); btn.style.background = ""; }, 3000);
}


/* ================================================================
   11. INIT
================================================================ */
function init() {
  renderSkillsTicker();
  renderLockedSkills();
  renderProjects();
  renderTimeline();
  renderContacts();
  renderCerts();
  renderEducation();
  typeLoop();
  initScrollReveal();
  initCursorGlow();
  initNavScroll();
  initActiveNav();
}

window.addEventListener("load", init);