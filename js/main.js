// Translations
const translations = {
  es: {
    'nav-about': 'Sobre mí',
    'nav-skills': 'Aptitudes',
    'nav-tech': 'Tecnologías',
    'nav-education': 'Educación',
    'nav-projects': 'Proyectos',
    'nav-contact': 'Contacto',
    'hero-name': 'Álvaro Andrés De Lamo',
    'hero-title': 'Estudiante de Ingeniería Informática',
    'hero-location': 'Alicante/Alacant, España',
    'hero-description': 'Estudiante avanzado de Ingeniería Informática especializado en Ingeniería del Software, con experiencia internacional en Polonia y USA en desarrollo de software, full stack, análisis de datos y machine learning. Con formación académica internacional y pasión por soluciones tecnológicas innovadoras, combino base teórica sólida con práctica en entornos multiculturales y exigentes para resolver problemas complejos.',
    'hero-contact': 'Contacto',
    'about-title': 'Sobre mí',
    'about-heading': 'Ingeniero de Software en formación',
    'about-text': 'Con experiencia académica internacional y pasión por el desarrollo de soluciones tecnológicas innovadoras. Mi formación combina conocimientos teóricos sólidos con experiencia práctica en entornos multiculturales y académicamente exigentes.',
    'skills-title': 'Aptitudes Principales',
    'skill-ds': 'Data Structures & Algorithms',
    'skill-db': 'Bases de Datos',
    'skill-networks': 'Redes de Computadores',
    'skill-data': 'Análisis de Datos',
    'skill-mobile': 'Desarrollo de Apps Móviles',
    'skill-web': 'Desarrollo Web',
    'skill-os': 'Sistemas Operativos',
    'skill-crypto': 'Criptografía Aplicada',
    'tech-title': 'Tecnologías',
    'tech-frontend': 'Frontend',
    'tech-backend': 'Backend',
    'tech-databases': 'Bases de Datos',
    'tech-tools': 'Herramientas & DevOps',
    'tech-other': 'Otros',
    'education-title': 'Educación',
    'edu1-degree': 'Grado en Ingeniería Informática',
    'edu1-period': 'Septiembre 2022 - Enero 2027',
    'edu1-description': 'Grado en Ingeniería Informática por la Universidad de Alicante, con sólida formación en programación, estructuras de datos, sistemas operativos, bases de datos, redes de computadores e ingeniería del software. El plan de estudios incluye cursos avanzados en gestión de proyectos informáticos, calidad y especificación de software, sistemas inteligentes y modelado matemático, así como experiencia internacional a través de programas de intercambio académico en Europa y Estados Unidos.',
    'edu1-mention-label': 'Nota:',
    'edu1-mention': 'Especialización en Ingeniería del Software',
    'edu2-degree': 'Estudiante de Intercambio Erasmus+ - Ingeniería Informática (cursos de nivel Máster)',
    'edu2-period': 'Octubre 2024 - Febrero 2025',
    'edu2-description': 'Programa de intercambio Erasmus+ completado durante el Grado en Ingeniería Informática en la Universidad de Alicante. Cursé asignaturas impartidas en inglés del programa de Máster en Computer Science (estudios de segundo ciclo), con enfoque académico y técnico en análisis de datos, aprendizaje automático, optimización y descubrimiento de conocimiento. Formación desarrollada en un entorno internacional y multidisciplinar, mejorando tanto las habilidades técnicas como las capacidades de trabajo en equipo y comunicación en inglés.',
    'edu2-note-label': 'Nota:',
    'edu2-note-prefix': 'Programa',
    'edu2-transcript': 'Transcript',
    'edu3-degree': 'Estudiante de Intercambio – Computer Science (nivel Universitario)',
    'edu3-period': 'Agosto 2025 - Diciembre 2025',
    'edu3-description': 'Programa de intercambio académico completado durante el Grado en Ingeniería Informática en la Universidad de Alicante. Cursé asignaturas de nivel universitario (undergraduate) de Computer Science impartidas íntegramente en inglés en Chestnut Hill College (Philadelphia, USA). Cursos enfocados en sistemas operativos, criptografía aplicada, desarrollo web y desarrollo de aplicaciones móviles en un entorno académico estadounidense. Rendimiento académico: GPA 4.0 / 4.0.',
    'edu3-note-label': 'Nota:',
    'edu3-note': 'Programas académicos relevantes: CMTC, CSEC, CMSC',
    'edu3-transcript': 'Transcript',
    'languages-title': 'Idiomas',
    'lang-spanish': 'Español',
    'lang-native': 'Nativo',
    'lang-english': 'Inglés',
    'lang-professional': 'Profesional Completo',
    'projects-title': 'Proyectos',
    'projects-coming': 'Próximamente',
    'projects-description': 'Pronto compartiré aquí mis proyectos más destacados. Mantente al tanto para ver aplicaciones full stack, proyectos de machine learning y mucho más.',
    'contact-title': 'Contacto',
    'footer': 'Todos los derechos reservados.'
  },
  en: {
    'nav-about': 'About',
    'nav-skills': 'Skills',
    'nav-tech': 'Technologies',
    'nav-education': 'Education',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    'hero-name': 'Álvaro Andrés De Lamo',
    'hero-title': 'Computer Science Student',
    'hero-location': 'Alicante/Alacant, Spain',
    'hero-description': 'Advanced Computer Science student specializing in Software Engineering, with international experience in Poland and the USA across software development, full stack, data analysis, and machine learning. With international academic experience and a drive for innovative solutions, I blend solid theoretical knowledge with hands-on work in multicultural, demanding environments to solve complex problems.',
    'hero-contact': 'Contact',
    'about-title': 'About Me',
    'about-heading': 'Software Engineer in Training',
    'about-text': 'With international academic experience and passion for developing innovative technological solutions. My education combines solid theoretical knowledge with practical experience in multicultural and academically demanding environments.',
    'skills-title': 'Core Skills',
    'skill-ds': 'Data Structures & Algorithms',
    'skill-db': 'Databases',
    'skill-networks': 'Computer Networks',
    'skill-data': 'Data Analysis',
    'skill-mobile': 'Mobile App Development',
    'skill-web': 'Web Development',
    'skill-os': 'Operating Systems',
    'skill-crypto': 'Applied Cryptography',
    'tech-title': 'Technologies',
    'tech-frontend': 'Frontend',
    'tech-backend': 'Backend',
    'tech-databases': 'Databases',
    'tech-tools': 'Tools & DevOps',
    'tech-other': 'Other',
    'education-title': 'Education',
    'edu1-degree': 'Bachelor\'s Degree in Computer Engineering',
    'edu1-period': 'September 2022 - January 2027',
    'edu1-description': 'Bachelor\'s Degree in Computer Engineering from the University of Alicante, with a strong foundation in programming, data structures, operating systems, databases, computer networks and software engineering. The curriculum includes advanced courses in IT project management, software quality and specification, intelligent systems, and mathematical modeling, as well as international experience through academic exchange programs in Europe and the United States.',
    'edu1-mention-label': 'Note:',
    'edu1-mention': 'Specialization in Software Engineering',
    'edu2-degree': 'Erasmus+ Exchange Student - Computer Engineering (Master-level courses)',
    'edu2-period': 'October 2024 - February 2025',
    'edu2-description': 'Erasmus+ exchange program completed during the Bachelor\'s Degree in Computer Engineering at the University of Alicante. Attended courses taught in English from the Master\'s program in Computer Science (second-cycle studies), with an academic and technical focus on data analysis, machine learning, optimization, and knowledge discovery. Training conducted in an international and multidisciplinary environment, enhancing both technical skills and teamwork and communication abilities in English.',
    'edu2-note-label': 'Note:',
    'edu2-note-prefix': 'Programme',
    'edu2-transcript': 'Transcript',
    'edu3-degree': 'Exchange Student – Computer Science (Undergraduate level)',
    'edu3-period': 'August 2025 - December 2025',
    'edu3-description': 'Academic exchange program completed during the Bachelor\'s Degree in Computer Engineering at the University of Alicante. Attended undergraduate-level Computer Science courses taught entirely in English at Chestnut Hill College (Philadelphia, USA). Coursework focused on operating systems, applied cryptography, web development, and mobile application development in a U.S. academic environment. Academic performance: GPA 4.0 / 4.0.',
    'edu3-note-label': 'Note:',
    'edu3-note': 'Relevant academic programmes: CMTC, CSEC, CMSC',
    'edu3-transcript': 'Transcript',
    'languages-title': 'Languages',
    'lang-spanish': 'Spanish',
    'lang-native': 'Native',
    'lang-english': 'English',
    'lang-professional': 'Full Professional',
    'projects-title': 'Projects',
    'projects-coming': 'Coming Soon',
    'projects-description': 'I will soon share my most notable projects here. Stay tuned to see full stack applications, machine learning projects and much more.',
    'contact-title': 'Contact',
    'footer': 'All rights reserved.'
  }
};

// Theme Toggle with subtle animation
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;

const icons = {
  sun: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5" fill="currentColor"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  moon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
};

function setThemeIcon(theme) {
  if (!themeIcon) return;
  themeIcon.innerHTML = theme === 'dark' ? icons.sun : icons.moon;
}

const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
setThemeIcon(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setThemeIcon(newTheme);
    // Subtle visual feedback
    themeToggle.style.animation = 'none';
    setTimeout(() => {
      themeToggle.style.animation = '';
    }, 10);
  });
}

// Language Toggle
const langButtons = [document.getElementById('langBtnEs'), document.getElementById('langBtnEn')];
const savedLang = localStorage.getItem('language') || 'es';

function setActiveLangButton(lang) {
  langButtons.forEach(btn => { if (btn) btn.classList.toggle('active', btn.dataset.lang === lang); });
}

function updateLanguage(lang) {
  document.querySelectorAll('[data-i18n-key]').forEach(element => {
    const key = element.getAttribute('data-i18n-key');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem('language', lang);
  if (lang === 'es') {
    document.title = 'Álvaro Andrés De Lamo | Estudiante de Ingeniería del Software';
  } else {
    document.title = 'Álvaro Andrés De Lamo | Software Engineering Student';
  }
  setActiveLangButton(lang);
}

updateLanguage(savedLang);
langButtons.forEach(btn => { 
  if (btn) btn.addEventListener('click', () => updateLanguage(btn.dataset.lang)); 
});

// Education Cards Toggle with smooth animation
document.querySelectorAll('.education-card').forEach(card => {
  const toggle = card.querySelector('.education-toggle');
  if (toggle) {
    toggle.addEventListener('click', (e) => { 
      e.stopPropagation(); 
      card.classList.toggle('active'); 
    });
  }
  card.addEventListener('click', () => { 
    card.classList.toggle('active'); 
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Fade-in animation on scroll - More subtle
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -30px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { 
    if (entry.isIntersecting) { 
      entry.target.classList.add('fade-in-up'); 
      observer.unobserve(entry.target); 
    } 
  });
}, observerOptions);

document.querySelectorAll('.skill-card, .education-card, .contact-card').forEach(el => observer.observe(el));

// Perfect grid layout for skills (no empty spaces)
function setOptimalSkillsGrid() {
  const skillsGrid = document.querySelector('.skills-grid');
  if (!skillsGrid) return;
  
  const skillCards = skillsGrid.querySelectorAll('.skill-card');
  // Responsive columns: desktop 4, laptop/tablet 3, mobile 1
  if (window.innerWidth <= 768) {
    skillsGrid.style.gridTemplateColumns = '1fr';
  } else if (window.innerWidth <= 1200) {
    skillsGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
  } else {
    skillsGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
  }
}

// Call on load and resize
setOptimalSkillsGrid();
window.addEventListener('resize', setOptimalSkillsGrid);
