# Web de Alba Galiano · Escritora

Web oficial de la novelista **Alba Galiano Fernández**, autora de *Una puerta abierta al mar* (Editorial Gusanillo, 2026).

Dirección prevista: **albagalianoescritora.com** (de momento, la dirección gratuita de Cloudflare: `albagalianoescritora.pages.dev`).

Es una web de **código abierto**: HTML, CSS y JavaScript sencillos, sin programas especiales. Cualquiera puede modificarla. Cloudflare la publica automáticamente cada vez que se guarda un cambio aquí, en GitHub.

## Páginas

| Archivo | Pestaña |
|---|---|
| `index.html` | Inicio |
| `quien-soy.html` | ¿Quién soy? |
| `una-puerta-abierta-al-mar.html` | El libro |
| `proximas-novelas.html` | Próximas novelas |
| `noticias.html` | Noticias y eventos |
| `contacto.html` | Contáctame (con formulario) |
| `privacidad.html` | Privacidad y aviso legal |

## Cambios rápidos (desde la web de GitHub)

- **Correo de contacto, Instagram y enlaces de compra**: están todos en `js/config.js`. Cambia el dato entre comillas y pulsa **Commit changes**. Se actualiza en todas las páginas.
- **Cambiar un texto**: abre el `.html` de la página, pulsa el lápiz ✏️, cambia el texto y pulsa **Commit changes**. En un minuto está en la web.
- **Cambiar una foto**: entra en `img`, pulsa **Add file → Upload files** y sube una foto con el **mismo nombre** que la que quieres sustituir.
- **Añadir una noticia**: en `noticias.html` hay instrucciones dentro del código. Copia un bloque `<article class="tarjeta">`, cambia fecha, título, texto, foto y enlace.
- **Añadir el segundo libro**: en `proximas-novelas.html`, sustituye el bloque marcado «Segunda parte».
- **Colores y letras**: al principio de `css/estilos.css`.

Si algo sale mal, en **Commits** se puede volver a cualquier versión anterior.

## Fotos (carpeta `img`)

| Archivo | Dónde se ve |
|---|---|
| `alba-retrato.jpg` | Portada (vertical) y ¿Quién soy? |
| `alba-2.jpg`, `alba-3.jpg` | ¿Quién soy?, Inicio, Próximas novelas |
| `alba-cabecera.jpg` | Fondo de la cabecera de ¿Quién soy? |
| `libro-portada.jpg` | Portada del libro (vertical, 2:3) |
| `libro-mar.jpg` | El libro frente al mar |
| `libro-ambiente.jpg` | Otra foto del libro |
| `casablanca-mar.jpg` | Fondo de cabeceras (mar) |
| `noticias-cabecera.jpg` | Fondo de la cabecera de Noticias |
| `ig-1.jpg` … `ig-4.jpg` | Galería de Instagram |
| `noticias/…` | Fotos de cada noticia |

## Formulario de contacto

Funciona con FormSubmit (gratis). Mientras el campo `correo` de `js/config.js` esté vacío, el formulario invita a escribir por Instagram. Al poner el correo, la primera vez que alguien use el formulario llegará a ese correo un mensaje de FormSubmit para activarlo: pulsar **Activate**.

## Licencia

El **código** de la web se publica con licencia MIT (ver `LICENSE`). Los **textos, fotografías y la portada** del libro pertenecen a Alba Galiano y a Editorial Gusanillo y no están incluidos en esa licencia.
