<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="HTML5 Logo" style="width:100px; height:auto;">

# CSS: Estilo y diseño
## Los Orígenes y su Creador
**CSS (Cascading Style Sheets)**, fue creado por Håkon Wium Lie en 1994, mientras trabajaba en el CERN junto a Tim Berners-Lee, el inventor de la World Wide Web. Lie propuso inicialmente el concepto en un documento titulado "Cascading HTML Style Sheets - A Proposal", presentado en la conferencia Web '94 en Chicago.

El noruego Håkon Lie había observado una necesidad crítica: la web necesitaba separar el contenido de su presentación visual. En aquella época, los documentos HTML mezclaban estructura y diseño, lo que dificultaba el mantenimiento y la consistencia visual de los sitios web.

## Primeros Propósitos del Lenguaje
CSS fue diseñado con objetivos específicos y revolucionarios para su tiempo:

**Separación de concerns:** 
Permitir que el contenido (HTML) se mantuviera independiente de su presentación visual, facilitando el mantenimiento y la reutilización del código.

**El concepto de "cascada":** Establecer un sistema jerárquico donde múltiples hojas de estilo pudieran aplicarse a un mismo documento, resolviendo conflictos mediante reglas de especificidad y herencia.

**Accesibilidad mejorada:** Facilitar que los usuarios pudieran aplicar sus propias hojas de estilo, especialmente importante para personas con problemas de accesibilidad.

**Eficiencia:** Reducir el ancho de banda al evitar la repetición de información repetida en elementos HTML.

## Evolución y Desarrollo
La primera especificación oficial, **CSS1**, fue publicada por el W3C en diciembre de 1996. Incluía propiedades básicas para tipografía, colores, espaciado y posicionamiento simple. Sin embargo, el soporte de los navegadores fue inicialmente limitado y problemático.

**CSS2** llegó en 1998, introduciendo el posicionamiento absoluto y relativo, z-index, tipos de medios (para impresión, pantalla, etc.) y el concepto de elementos flotantes. CSS2.1, una revisión importante, se convirtió en recomendación oficial en 2011.

**CSS3**, desarrollado de forma modular desde los años 2000, introdujo características revolucionarias como bordes redondeados, sombras, gradientes, transformaciones, animaciones y transiciones, además de nuevos selectores más potentes.

## Derivaciones y Evolución Posterior
El éxito de CSS inspiró el desarrollo de diversas tecnologías y metodologías:

**Preprocesadores:** Herramientas como Sass, Less y Stylus extendieron CSS con variables, funciones, mixins y anidación, compilando posteriormente a CSS estándar.

**Frameworks:** Bootstrap, Foundation y otros frameworks populares establecieron sistemas de diseño y componentes reutilizables basados en CSS.

**Metodologías de organización:** **BEM (Block Element Modifier)**, **OOCSS (Object-Oriented CSS)** y **Atomic CSS** surgieron para estructurar mejor el código CSS en proyectos grandes.

**CSS-in-JS:** En el ecosistema de JavaScript moderno, bibliotecas como styled-components permitieron escribir estilos directamente en JavaScript.

Nuevas especificaciones: CSS Grid, Flexbox, Custom Properties (variables CSS nativas) y Container Queries han modernizado las capacidades de layout y diseño responsivo.

## Impacto y Legado
La visión de Håkon Lie se materializó exitosamente: CSS se convirtió en el estándar universal para el diseño web. Su principio fundamental de separación entre contenido y presentación sigue siendo relevante décadas después, y continúa evolucionando para adaptarse a las necesidades del diseño web moderno, desde dispositivos móviles hasta interfaces de realidad virtual.

Hoy CSS no solo cumple su propósito original, sino que ha crecido hasta convertirse en un lenguaje de diseño sofisticado, capaz de crear interfaces complejas y experiencias visuales ricas que trascienden las limitaciones de sus humildes comienzos en los años 90.

# Características Técnicas
## CSS (Cascading Style Sheets)

Las "Hojas de Estilo en Cascada" (CSS) describen un conjunto de reglas de formato que controlan la apariencia de una página web.

### Cascading (Cascada)
El término "Cascading" es el núcleo conceptual más importante de CSS y se refiere a la metodología jerárquica para resolver conflictos entre reglas de estilo:

Algoritmo de Cascada: CSS implementa un sistema de prioridades que determina qué estilos se aplican cuando múltiples reglas afectan al mismo elemento. Este algoritmo considera:

Origen de la regla: User agent (navegador) → Usuario → Autor

Importancia: Declaraciones marcadas con `!important`

Especificidad: Calculada mediante el sistema de puntuación (inline, IDs, clases, elementos)

Orden de aparición: Las reglas posteriores sobrescriben las anteriores con igual especificidad

Herencia: Los elementos hijos heredan automáticamente ciertas propiedades de sus ancestros, como `color`, `font-family`, pero no propiedades de layout como `margin` o `padding`.


## Style Sheets (Hojas de Estilo)
Hace referencia a documentos que contienen reglas de presentación visual, separadas del contenido estructural. Esta separación permite:

Reutilización: Una hoja de estilo puede aplicarse a múltiples documentos HTML

Mantenimiento centralizado: Cambios globales desde un único archivo

Carga optimizada: Los navegadores pueden cachear las hojas de estilo

# 
CSS se puede escribir dentro del archivo HTML, usando el estilo como elemento `<style>` o como atributo de algún otro elemento `<p style="">`. También se puede escribir en un archivo separado, solo CSS, importándolo al documento HTML de la siguiente manera:

```html
<link rel="stylesheet" href="nombre_del_archivo_css.css">
```

# 
## Sistema de Selectores
CSS utiliza un sofisticado sistema de selectores que permite targeting granular de elementos:

### Selectores Básicos:

- Tipo: `h1`, `div`, `p`
- Clase: `.mi-clase`
- ID: `#mi-id`
- Universal: `*`

### Selectores Combinadores:

- Descendiente: `div p` (todos los p dentro de div)
- Hijo directo: `div > p` (solo p hijos directos de div)
- Hermano adyacente: `h1 + p` (primer p que sigue a h1)
- Hermanos generales: `h1 ~ p` (todos los p hermanos de h1)

### Pseudo-clases y Pseudo-elementos:

- Estados: :hover, `:focus`, `:visited`, `:nth-child()`
- Pseudo-elementos: `::before`, `::after`, `::first-line`

## Box Model (Modelo de Caja)
Fundamento arquitectónico de CSS que define cómo se calculan las dimensiones y espaciado:

```
┌─────────────────────────────────┐
│            margin               │
│ ┌─────────────────────────────┐ │
│ │          border             │ │
│ │ ┌─────────────────────────┐ │ │
│ │ │        padding          │ │ │
│ │ │ ┌─────────────────────┐ │ │ │
│ │ │ │      content        │ │ │ │
│ │ │ └─────────────────────┘ │ │ │
│ │ └─────────────────────────┘ │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```
###Variantes del Box Model:

`box-sizing: content-box` (estándar): width/height afectan solo el contenido
`box-sizing: border-box`: width/height incluyen padding y border

## Sistemas de Layout Avanzados
**Flexbox (Flexible Box Layout):**
Layout unidimensional (fila o columna)
Control preciso sobre alineación, distribución y orden
Manejo inteligente del espacio disponible y elementos flexibles

**CSS Grid:**
Sistema bidimensional (filas y columnas simultáneas)
Definición de áreas de grid explícitas
Control granular sobre posicionamiento y spanning

**Multi-column Layout:**
Distribución automática de contenido en columnas
Control sobre gaps, rules y breaking

## Unidades de Medida Sofisticadas
- Unidades Absolutas: `px`, `pt`, `cm`, `mm`, `in`
- Unidades Relativas:
`em`: Relativa al font-size del elemento
`rem`: Relativa al font-size del elemento raíz
`%`: Porcentaje del elemento contenedor
`vw`, `vh`: Porcentaje del viewport width/height
`vmin`, `vmax`: Porcentaje de la dimensión menor/mayor del viewport
`ch`: Ancho del carácter "0" en la fuente actual
`ex`: Altura de la "x" minúscula en la fuente actual

## Funciones CSS Nativas
### Funciones de Cálculo:

- `calc()`: Operaciones matemáticas mixtas: width: calc(100% - 20px)
- `min()`, `max()`, `clamp()`: Selección de valores

### Funciones de Color:

`rgb()`, `rgba()`, `hsl()`, `hsla()`
`color-mix()`, `color-contrast()` (CSS4)

### Funciones de Transformación:

`translate()`, `rotate()`, `scale()`, `skew()`

`matrix()` para transformaciones complejas

## Custom Properties (Variables CSS)
```css
:root {
  --primary-color: #3498db;
  --font-size-base: 16px;
}

.element {
  color: var(--primary-color);
  font-size: var(--font-size-base);
}
```
- Scope dinámico (pueden cambiar via JavaScript)
- Herencia natural
- Fallback values: `var(--color, blue)`

## Animaciones y Transiciones
Transitions: Interpolación automática entre estados
```css
.element {
  transition: all 0.3s ease-in-out;
}
```
Keyframe Animations: Control frame-by-frame
```css
@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}
```

## Media Queries y Diseño Responsivo
Sistema de condicionales para aplicar estilos según características del dispositivo:
```css
@media (min-width: 768px) and (max-width: 1024px) {
  /* Estilos para tablets */
}

@media (prefers-color-scheme: dark) {
  /* Estilos para modo oscuro */
}
```

## Arquitectura de Parsing y Rendering
**CSS Object Model (CSSOM):**

Representación programática de las hojas de estilo
API para manipulación dinámica desde JavaScript

Proceso de Rendering:

- Parsing: Conversión del texto CSS a CSSOM
- Matching: Aplicación de selectores a elementos DOM
- Cascade Resolution: Aplicación del algoritmo de cascada
- Layout: Cálculo de posiciones y dimensiones
- Paint: Renderización visual final

## Sistema de puntuación para determinar qué reglas tienen prioridad:

- Inline styles: 1000 puntos
- IDs: 100 puntos
- Clases, pseudo-clases, atributos: 10 puntos
- Elementos y pseudo-elementos: 1 punto

Ejemplo: `#header` `.nav` `a:hover` = 100 + 10 + 1 + 10 = 121 puntos

## Optimizaciones del Navegador:

- Selector matching: Los navegadores procesan selectores de derecha a izquierda
- Style recalculation: Estrategias de invalidación selectiva
- Composite layers: Aceleración hardware para transformaciones y opacity

Esta arquitectura técnica ha convertido a CSS en un lenguaje declarativo extremadamente poderoso, capaz de manejar desde layouts simples hasta interfaces complejas con animaciones sofisticadas, todo mientras mantiene la separación fundamental entre contenido y presentación que motivó su creación original.

## [ Documentación y ejemplos ](https://developer.mozilla.org/en-US/docs/Web/CSS)

## [Reset CSS](https://meyerweb.com/eric/tools/css/reset/)

Reset Básico: Elimina márgenes, paddings y establece box-sizing: border-box para todos los elementos.

Reset Completo (Eric Meyer): Un reset más exhaustivo que elimina estilos de prácticamente todos los elementos HTML.

Reset Moderno: Inspirado en Normalize.css, mantiene algunos estilos útiles mientras estandariza el comportamiento entre navegadores.

Reset Personalizado: Un enfoque híbrido que combina lo mejor de los otros métodos y añade algunas utilidades.

```css
/* ========================================
   1. RESET CSS BÁSICO (Minimalista)
======================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 100%;
}

body {
    line-height: 1.5;
    font-family: Arial, sans-serif;
}

/* ========================================
   2. RESET CSS COMPLETO (Eric Meyer Reset)
======================================== */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset para elementos antiguos */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* ========================================
   3. RESET CSS MODERNO (Normalize.css inspirado)
======================================== */

*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
}

body {
    margin: 0;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
}

/* Remover márgenes por defecto */
h1, h2, h3, h4, h5, h6,
p, blockquote, pre,
dl, dd, ol, ul, figure, hr {
    margin: 0;
    padding: 0;
}

/* Listas */
ol, ul {
    list-style: none;
}

/* Imágenes */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Enlaces */
a {
    text-decoration: none;
    color: inherit;
}

/* Formularios */
button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

button, input {
    overflow: visible;
}

button, select {
    text-transform: none;
}

/* ========================================
   4. RESET CSS PERSONALIZADO HÍBRIDO
======================================== */

/* Reset universal con box-sizing */
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Configuración base del HTML */
html {
    font-size: 62.5%; /* 1rem = 10px */
    scroll-behavior: smooth;
}

body {
    font-size: 1.6rem; /* 16px */
    line-height: 1.6;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    background-color: #fff;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0.5em;
}

/* Párrafos */
p {
    margin-bottom: 1em;
}

/* Listas */
ul, ol {
    list-style: none;
}

/* Enlaces */
a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.2s ease;
}

a:hover {
    color: #0056b3;
}

/* Imágenes y medios */
img, video, audio, iframe, object, embed {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Formularios */
input, textarea, select, button {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
}

/* Tablas */
table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
}

/* Utilidades */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

.visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}
```