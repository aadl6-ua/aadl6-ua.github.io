# Assets Folder

## Profile Image
Para añadir tu foto de perfil, coloca la imagen en esta carpeta con el nombre `profile.jpg` o `profile.png`.

La imagen debe tener:
- Formato cuadrado (recomendado 500x500px o mayor)
- Formato JPG o PNG
- Peso optimizado (máximo 500KB recomendado)

Una vez añadida la imagen, actualiza la referencia en `index.html` cambiando:
```html
<div class="profile-image">👤</div>
```

Por:
```html
<img src="assets/profile.jpg" alt="Álvaro Andrés De Lamo" class="profile-image">
```

## Imagen de Preview para SEO
Para las previsualizaciones en redes sociales, crea una imagen `profile-preview.jpg` de 1200x630px.
