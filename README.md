# Portfolio - Álvaro Andrés De Lamo

Portfolio profesional de Álvaro Andrés De Lamo, estudiante de Ingeniería Informática en la Universidad de Alicante con experiencia internacional.

Sitio: [aadl6-ua.github.io](https://aadl6-ua.github.io)

## Características

- Diseño moderno y responsive
- Modo claro/oscuro con persistencia
- Multiidioma (Español/Inglés)
- Optimización móvil y rendimiento sin frameworks pesados
- SEO y accesibilidad cuidados

## Estructura del proyecto

```
aadl6-ua.github.io/
├── index.html
├── _config.yml
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       └── (imágenes del sitio)
└── README.md
```

## Personalización

### Añadir tu foto de perfil

1. Coloca tu imagen en `assets/img/` (por ejemplo `pfp.jpeg`).
2. En `index.html`, actualiza el atributo `src` de la imagen principal:

```html
<img src="assets/img/pfp.jpeg" alt="Álvaro Andrés De Lamo" class="profile-image" />
```

### Cambiar colores

Las variables de color están al inicio de `assets/css/styles.css` en los bloques `:root` y `[data-theme="dark"]`.

### Añadir proyectos

Edita la sección con id `projects` en `index.html` y reemplaza el bloque “Próximamente” por tus tarjetas de proyecto.

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 (variables, Grid, Flexbox)
- JavaScript Vanilla
- GitHub Pages

## SEO

Incluye meta tags, Open Graph, Schema.org y se publica con GitHub Pages.

## Despliegue

Se publica automáticamente en GitHub Pages al hacer push a `main`.

## Contacto

- Email: alvaroandresdelamo@gmail.com
- LinkedIn: [linkedin.com/in/alvaro-andres-de-lamo-50149b358](https://www.linkedin.com/in/alvaro-andres-de-lamo-50149b358)
- GitHub: [github.com/aadl6-ua](https://github.com/aadl6-ua)
