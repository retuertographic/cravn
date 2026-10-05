# Bar Restaurante Cara-Ven — web

Sitio estático de una sola página para **Bar Restaurante Cara-Ven**
(Av. Cristóbal Colón, 2 · El Puertito de Güímar · Tenerife).

Mismo planteamiento que la web de El Capricho: HTML plano, sin framework ni
compilación, con la carta separada en un archivo de datos para poder cambiar
precios sin tocar el diseño.

## Qué contiene

```
index.html                 la página completa, cabecera y pie incluidos
menu-data.js               los 42 platos con precios y nombres en ES/EN/DE/FR
assets/site.css            todo el diseño
assets/i18n.js             los textos del sitio en los cuatro idiomas
assets/site-common.js      menú móvil, idioma, modal legal, "abierto ahora"
img/                       fotos del restaurante y logo
404.html                   página de error
robots.txt                 permiso de rastreo + ruta del sitemap
sitemap.xml                el mapa del sitio para buscadores
.nojekyll                  le dice a GitHub Pages que sirva los archivos tal cual
```

La web no hace ninguna petición de red: todo va en el propio HTML y en dos
archivos de script. Si el navegador consigue abrir `index.html`, la ve entera.

## Publicar en GitHub Pages

En el repositorio: `Settings → Pages`, en "Source" elige la rama y la carpeta
`/ (root)`. En un par de minutos la web queda en
`https://retuertographicdesign.github.io/cravn/`.

Para usar un dominio propio, añade un archivo `CNAME` en la raíz con el
dominio (por ejemplo `caraven.com`) y apunta el DNS a GitHub Pages.

## Cambiar la carta

Todo está en `menu-data.js`. Es el mismo contenido que un JSON, con un
`window.MENU_DATA =` delante para que el navegador pueda cargarlo sin servidor.
Cada plato tiene el nombre en los cuatro idiomas, el precio y, si hace falta,
una nota:

```json
{
  "name": { "es": "Arepas", "en": "Arepas", "de": "Arepas", "fr": "Arepas" },
  "price": 4.00,
  "note": { "es": "+0,50 €/ingrediente", "en": "+€0.50/ingredient", ... }
}
```

- **Cambiar un precio**: edita `price`. Se escribe con punto decimal (`10.50`);
  la web ya lo muestra como `10,50 €` en español y `€10.50` en inglés.
- **Añadir un plato**: copia un bloque entero dentro de la categoría que toque.
- **Añadir una categoría**: copia un bloque `{ "id": ..., "name": ..., "items": [...] }`.
  Aparece sola como pestaña nueva.

No hay que tocar nada más: la página lo lee al cargar. Respeta la coma final
de cada bloque y las comillas; si algo se rompe, el navegador avisa en la
consola (F12).

## Si cambias de dominio

La URL del sitio está escrita en cuatro sitios y hay que cambiarla en todos:

1. `index.html`, en el `<head>`: `canonical`, `hreflang`, `og:url` y `og:image`.
2. `index.html`, en el bloque `application/ld+json`: `url`, `image` y `hasMenu`.
3. `robots.txt`, en la línea `Sitemap:`.
4. `sitemap.xml`, en `<loc>`.

Deben ser URLs absolutas: una ruta relativa en `og:image` hace que al compartir
el enlace no salga ninguna imagen.

## Accesibilidad

El sitio pasa axe-core (WCAG 2.2 AA) sin violaciones. Dos cosas que conviene
no romper al tocar el diseño:

- `--gold` (#F0A32B) solo vale sobre fondo oscuro y en los botones rellenos.
  Para texto dorado sobre fondo claro está `--gold-ink` (#9C5D00), que sí llega
  al contraste mínimo. Si usas `--gold` sobre papel o crema, bajas a 2.07:1 y
  WCAG pide 4.5.
- El texto en español vive en el HTML, no solo en `i18n.js`. Si añades un
  elemento con `data-i18n`, escribe también dentro el texto en español: así lo
  ven los buscadores y se sigue leyendo aunque falle el JavaScript.

## Cambiar los textos

Están todos en `assets/i18n.js`, agrupados por idioma (`es`, `en`, `de`, `fr`).
Cada clave se corresponde con un `data-i18n="clave"` del HTML. Si añades una
clave, añádela en los cuatro idiomas **y escribe el español también dentro del
elemento en `index.html`** (ver el apartado de accesibilidad).

## Horario

El horario aparece en dos sitios y hay que cambiarlo en los dos si varía:

1. La tabla de `index.html` (sección de contacto).
2. La constante `HOURS` de `assets/site-common.js`, que es la que decide si el
   cartel del hero dice "Abierto ahora" o "Ahora cerrado". Se calcula siempre
   en hora de Canarias, no en la del visitante.

También conviene actualizar el bloque `openingHoursSpecification` del
`application/ld+json` de `index.html`, que es lo que lee Google.

## Ver la web en local

Basta con abrir `index.html` con doble clic: no hace falta servidor. Esto
también sirve para comprobar si un problema está en la web o en el alojamiento
— si abierta en local se ve bien pero publicada no, el fallo está en la
configuración de GitHub Pages, no en el código.

## Pendiente de vosotros

Cosas que he dejado listas pero que necesitan datos reales del negocio:

- **Datos del titular en el aviso legal.** En `assets/i18n.js`, las claves
  `aviso_p1` de los cuatro idiomas llevan `[NOMBRE DEL TITULAR]` y `[NIF]`.
  Hay que sustituirlos por los reales antes de publicar.
- **Logo.** `img/logo-caraven.svg` es un monograma provisional. Si existe el
  logo original de Cara-Ven, basta con reemplazar ese archivo.
- **Fotos.** Las que hay vienen de Google Maps y son de baja resolución
  (máximo 680 px de ancho). Se nota sobre todo en la foto grande de portada.
  Con fotos originales del restaurante ganaría bastante.
- **Redes sociales.** Solo hay enlaces a WhatsApp y Google Maps. Si tenéis
  Instagram o Facebook, se añaden en el bloque `.socials` de `index.html`.
- **Media ración.** La carta original no trae precios de media ración
  (aparecen como `--.--€`), así que la web dice que se consulte al personal.
  Si me pasáis los precios, los añado.
