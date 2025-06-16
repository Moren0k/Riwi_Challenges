# Práctica avanzada: domina HTML & CSS

Esta práctica está pensada para que dediques **2‑4 horas**, profundizando en maquetación moderna **solo con HTML5 y CSS3**.  Sigue los retos en orden: cada uno parte del anterior.

---

## 0. Preparación del proyecto

1. Crea una carpeta llamada `portfolio-challenge/`.
2. Dentro, crea los archivos iniciales:

   * `index.html` LISTO
   * `about.html` LISTO
   * `contacto.html` LISTO
   * `css/estilos.css`  (hoja de estilos global) LISTO
3. Enlaza la hoja de estilos en las tres páginas: LISTO

   ```html
   <link rel="stylesheet" href="style.css"> 
4. En `estilos.css` añade un *reset* sencillo: LISTO

   ```css
   *{margin:0;padding:0;box-sizing:border-box;}
   html{font-family:sans-serif;line-height:1.5;}
   ```

---

## 1. Landing page con **CSS Grid**

**Archivos:** `index.html`, `css/estilos.css`

* Diseña un **layout de tres filas** con Grid: LISTO

  1. **Header** fijo (`position:sticky`) con logo y navegación. LISTO
  2. **Hero** centrado vertical y horizontalmente. LISTO
  3. **Footer** con enlaces externos.
* El *Hero* debe incluir:

  * Un `<h1>` principal. LISTO
  * Un `<p>` descriptivo. LISTO
  * Un botón «Conoce más» que enlace a `about.html`. LISTO
* Usa `scroll-snap-type:y mandatory;` en `body` para que cada sección se detenga al hacer scroll. LISTO

---

## 2. Galería de proyectos (**Flexbox + Cards**)

**Archivos:** `about.html`, `css/estilos.css`, carpeta `img/` (mín. 6 imágenes libres)

* Crea la sección `#proyectos` con varias **cards**:

  * Imagen, `<h3>` y breve descripción.
  * Botón “Ver más” (enlace `#`).
  * Maqueta con **Flexbox** para que:
  * En pantallas móviles haya 1 columna.
  * En ≥ 1024 px aparezcan 3 columnas.
* Añade un efecto **hover** que eleve la card (`transform:translateY(-4px)`) con `transition`.

---

## 3. Tema oscuro con **variables CSS**

**Archivos:** `css/estilos.css`, modificaciones en `index.html`

* Declara variables en `:root`:

  ```css
  :root{
    --clr-bg:#ffffff;
    --clr-text:#1a1a1a;
    --clr-accent:#0066ff;
  }
  body{background:var(--clr-bg);color:var(--clr-text);}  
  a,button{color:var(--clr-accent);}
  ```
  
  * Coloca un interruptor en el header:

  ```html
  <label class="switch">
    <input type="checkbox" id="toggle-theme">
    <span class="slider"></span>
  </label>
  ```
  
* Con el **checkbox‑hack** aplica la clase `.dark`:

  ```css
  #toggle-theme:checked ~ *{
    --clr-bg:#121212;
    --clr-text:#eaeaea;
    --clr-accent:#66ccff;
  }
  ```

---

## 4. Menú responsive **hamburger** (solo CSS)

**Archivos:** `index.html`, `css/estilos.css`

* Agrega un `<input type="checkbox" id="toggle-nav">` y un `<label>` con el icono `☰`.
* Los enlaces de navegación van dentro de `<nav><ul>...</ul></nav>`.
* Oculta el `<ul>` por defecto en `max-width:768px` y muéstralo cuando `#toggle-nav:checked + nav`.
* Para accesibilidad ⬆️: añade `aria-label` al label y `role="navigation"` al nav.

---

## 5. Animaciones clave

**Archivos:** `css/estilos.css`

* Crea `@keyframes wiggle` y aplícala al botón principal en `:hover`.
* Aplica un **fade‑in progresivo** a las cards usando `animation-delay` con `:nth-child()` (p.ej. `0.1s` de diferencia entre cada una).

---

## 6. Formulario de contacto validado (HTML5 + CSS)

**Archivos:** `contacto.html`, `css/estilos.css`

* Campos: nombre, email, asunto, mensaje.
* Usa atributos `required`, `type="email"`, `minlength`, etc.
* Estila con **Grid**: 2 columnas en escritorio, 1 en móvil.
* Destaca los campos inválidos con `input:invalid{border-color:red;}` y muestra un mensaje general debajo con `:invalid ~ .msg-error`.

---

## 7. Despliegue y presentación

1. Sube el proyecto a GitHub en un repo llamado **`portfolio-html-css`**.
2. Activa **GitHub Pages** (carpeta raíz).
3. En el README coloca una captura de la home y enlaces rápidos.
4. Comparte tu URL en el canal del curso.

> **Reto extra ⚡**  Usa [Freenom](https://my.freenom.com/) para conectar un dominio gratuito a tu página.

---

## Recursos útiles

* [CSS Tricks – Guía completa de Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [Flexbox Froggy (juego)](https://flexboxfroggy.com/)
* [Can I Use – Compatibilidad de navegadores](https://caniuse.com/)

---

¡Éxitos!  Al terminar tendrás un **mini‑portfolio responsive** hecho únicamente con HTML y CSS

---

### Notas

* Si encuentras un término desconocido, ¡investígalo y documenta tu aprendizaje en el README!
