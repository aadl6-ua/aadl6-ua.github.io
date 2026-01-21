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
    'skill-fullstack': 'Desarrollo Full Stack',
    'skill-cloud': 'Cloud Computing',
    'skill-software': 'Ingeniería del Software',
    'skill-ml': 'Machine Learning',
    'skill-ds': 'Estructuras de Datos y Algoritmos',
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
    'tech-learning': 'En Aprendizaje',
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
    'project1-type': 'Visualización de Datos & Analytics',
    'project1-description': 'Dashboard analítico integral construido con R Shiny para explorar datos de ventas musicales. El proyecto incluye ingeniería de datos extensiva con SQL para estructurar y transformar datasets originales, seguido de visualizaciones interactivas con mapas de calor geográficos, tendencias temporales de ventas, análisis por género y segmentación de clientes. Implementa filtrado avanzado, controles de umbral e interacciones reactivas de usuario para permitir exploración dinámica de datos. Desarrollado durante el curso Data Analysis in Business en la Universidad de Silesia.',
    'project2-type': 'Machine Learning & Ciencia de Datos',
    'project2-description': 'Aplicación web completa para análisis de clustering con machine learning no supervisado. Implementa algoritmos K-means, DBSCAN y Jerárquico con optimización automática de parámetros. Incluye parsing inteligente de CSV que detecta automáticamente separadores y headers, preprocesamiento automático con imputación de valores faltantes, codificación de variables categóricas y eliminación de outliers, visualizaciones interactivas 2D/3D con Plotly, y métricas de evaluación completas. Incorpora tres datasets precargados (Iris, Ausentismo, Coches) con variables objetivo eliminadas para demostrar aprendizaje no supervisado puro. Los usuarios pueden subir datasets personalizados. Para principiantes, se recomienda el dataset Iris por su estructura de clustering clara. Desarrollado durante el curso Cluster Analysis en la Universidad de Silesia.',
    'project2-note1': '<strong>Nota del Dataset:</strong> Los datasets proporcionados tienen las columnas de clasificación/objetivo eliminadas para permitir análisis de clustering no supervisado real.',
    'project2-note2': '<strong>Prueba la Carga de Archivos:</strong> <a href="assets/data/cars.csv" download class="inline-link">Descarga el dataset Cars</a> para probar la funcionalidad de carga de archivos personalizados.',
    'project2-note3': '<strong>Recomendado para Principiantes:</strong> Comienza con el dataset Iris, tiene clusters naturales bien definidos y es el más fácil de interpretar.',
    'project3-type': 'Machine Learning & Ciencia de Datos',
    'project3-description': 'Aplicación web completa para entrenamiento y análisis de árboles de decisión con extracción automática de reglas. Implementa algoritmo DecisionTreeClassifier de scikit-learn con optimización de hiperparámetros configurable (criterio Gini/Entropy, profundidad máxima, tamaños mínimos de división). Incluye parsing inteligente de CSV con detección automática de separadores y headers, preprocesamiento automático con imputación de valores faltantes, codificación de variables categóricas y división train/test. Las visualizaciones interactivas incluyen matriz de confusión con Plotly, importancia de variables, estructura completa del árbol con matplotlib y análisis de profundidad. El sistema extrae reglas de decisión en formato IF-THEN legible y permite exportar predicciones, importancias y resumen del modelo. Incluye dataset Cars precargado para demostración. Desarrollado durante el curso Decision and Association Rules en la Universidad de Silesia.',
    'project3-note1': '<strong>Nota del Dataset:</strong> El dataset Cars incluido clasifica vehículos en categorías de aceptabilidad basándose en características como precio, mantenimiento, puertas, capacidad de pasajeros, maletero y seguridad.',
    'project3-note2': '<strong>Configuración Flexible:</strong> Ajusta hiperparámetros en tiempo real para observar cómo afectan la estructura del árbol, las reglas extraídas y las métricas de rendimiento.',
    'project3-note3': '<strong>Recomendado para Principiantes:</strong> El dataset Cars incluido tiene reglas de decisión claras y es ideal para entender cómo funcionan los árboles de decisión.',
    'project-live': 'Demo en Vivo',
    'project-code': 'Código',
    'more-projects': 'Más proyectos en camino...',
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
    'skill-fullstack': 'Full Stack Development',
    'skill-cloud': 'Cloud Computing',
    'skill-software': 'Software Engineering',
    'skill-ml': 'Machine Learning',
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
    'tech-learning': 'Learning',
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
    'project1-type': 'Data Visualization & Analytics',
    'project1-description': 'Comprehensive analytics dashboard built with R Shiny for exploring music sales data. The project includes extensive SQL data engineering to structure and transform raw datasets, followed by interactive visualizations featuring geographic heat maps, temporal sales trends, genre analysis, and customer segmentation. Implements advanced filtering, threshold controls, and reactive user interactions to enable dynamic data exploration. Developed during Data Analysis in Business course at University of Silesia.',
    'project2-type': 'Machine Learning & Data Science',
    'project2-description': 'Full-featured web application for unsupervised machine learning clustering analysis. Implements K-means, DBSCAN, and Hierarchical clustering algorithms with automatic parameter optimization. Features intelligent CSV parsing that automatically detects separators and headers, automatic preprocessing with missing value imputation, categorical variable encoding and outlier removal, interactive 2D/3D visualizations with Plotly, and comprehensive evaluation metrics. Includes three pre-loaded datasets (Iris, Absenteeism, Cars) with target variables removed to demonstrate pure unsupervised learning. Users can upload custom datasets. For beginners, the Iris dataset is recommended for its clear clustering structure. Developed during Cluster Analysis course at University of Silesia.',
    'project2-note1': '<strong>Dataset Note:</strong> Provided datasets have classification/target columns removed to enable true unsupervised clustering analysis.',
    'project2-note2': '<strong>Test Upload Feature:</strong> <a href="assets/data/cars.csv" download class="inline-link">Download Cars dataset</a> to test the custom file upload functionality.',
    'project2-note3': '<strong>Recommended for Beginners:</strong> Start with the Iris dataset, it has well-defined natural clusters and is easiest to interpret.',
    'project3-type': 'Machine Learning & Data Science',
    'project3-description': 'Full-featured web application for decision tree training and analysis with automatic rule extraction. Implements scikit-learn DecisionTreeClassifier algorithm with configurable hyperparameter optimization (Gini/Entropy criterion, maximum depth, minimum split sizes). Features intelligent CSV parsing with automatic separator and header detection, automatic preprocessing with missing value imputation, categorical variable encoding and train/test split. Interactive visualizations include Plotly confusion matrix, feature importance rankings, complete tree structure with matplotlib and depth analysis. The system extracts decision rules in readable IF-THEN format and allows exporting predictions, importance rankings and model summary. Includes pre-loaded Cars dataset for demonstration. Developed during Decision and Association Rules course at University of Silesia.',
    'project3-note1': '<strong>Dataset Note:</strong> The included Cars dataset classifies vehicles into acceptability categories based on features like price, maintenance, doors, passenger capacity, trunk size, and safety.',
    'project3-note2': '<strong>Flexible Configuration:</strong> Adjust hyperparameters in real time to observe how they affect tree structure, extracted rules and performance metrics.',
    'project3-note3': '<strong>Recommended for Beginners:</strong> The included Cars dataset has clear decision rules and is ideal for understanding how decision trees work.',
    'project-live': 'Live Demo',
    'project-code': 'Code',
    'more-projects': 'More projects coming soon...',
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
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
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

// Active navigation highlight on scroll
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  const scrollPosition = window.scrollY + 150; // Offset para activar antes
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    // Si estamos dentro de esta sección (con offset)
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  // Si llegamos al final de la página, activar contact
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    current = 'contact';
  }
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);
updateActiveNavLink(); // Initial call

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;
  
  // Actualizar posición del ratón
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // El punto sigue inmediatamente
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });
  
  // El círculo sigue con retraso suave (efecto laggy)
  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    
    cursorOutline.style.left = outlineX + 'px';
    cursorOutline.style.top = outlineY + 'px';
    
    requestAnimationFrame(animateOutline);
  }
  animateOutline();
  
  // Expandir en hover de elementos interactivos
  document.querySelectorAll('a, button, .skill-card, .education-card, .contact-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorOutline.classList.add('expand');
    });
    el.addEventListener('mouseleave', () => {
      cursorOutline.classList.remove('expand');
    });
  });
}
