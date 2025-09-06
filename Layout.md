# Sistemas de Layout

Layout se refiere a la disposición, organización y estructura visual de los elementos dentro de una página web o aplicación. Es el sistema que define cómo se posicionan, dimensionan y relacionan espacialmente todos los componentes de la interfaz.  Maquetación, composición, diagramación.

El diseño de layout consiste en determinar:

1. Posicionamiento: Ubicación exacta de cada elemento en el viewport
2. Dimensionamiento: Ancho, alto y proporciones de los componentes
3. Flujo: Orden y dirección en que se renderizan los elementos
4. Espaciado: Márgenes, padding y gaps entre componentes
5. Jerarquía visual: Relaciones de importancia y agrupación

## Tecnologías y Metodologías de Layout

1. Flexbox (CSS Flexible Box)

Sistema unidimensional para alineación y distribución:

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

2. CSS Grid Layout

Sistema bidimensional para crear layouts complejos:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-gap: 20px;
}
```
#
# Flexbox (CSS Flexible Box Layout)

Flexbox es unidimensional porque opera principalmente en UNA dimensión a la vez para el layout principal, aunque utiliza ambos ejes para el control completo del posicionamiento.

```
FLUJO PRINCIPAL (Main Axis)
────────────────────────────────────────►
┌────────┬────────┬────────┬────────┐
│ Item 1 │ Item 2 │ Item 3 │ Item 4 │
└────────┴────────┴────────┴────────┘
────────────────────────────────────────►

ALINEACIÓN SECUNDARIA (Cross Axis)
┌────────┐
│        │
▼        ▼
(perpendicular al flujo)
```

## [Conceptos básicos de flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

### Terminología Técnica:

- Flex Container: Elemento padre con ```css display: flex```
- Flex Items: Elementos hijos directos del container
- Main Axis: Eje principal de distribución
- Cross Axis: Eje perpendicular al principal
- Main Size: Dimensión en el eje principal
- Cross Size: Dimensión en el eje cruzado

### Propiedades del Flex Container

- display

```css
.container {
  display: flex;        /* Inline-level flex container */
  display: inline-flex; /* Block-level flex container */
}
```

```css display: flex``` (Block-level)

El container se comporta como un elemento de bloque .Ocupa toda la anchura disponible por defecto. Se apila verticalmente con otros elementos. Los flex items dentro siguen las mismas reglas flexbox

```cssdisplay: inline-flex``` (Inline-level)

El container se comporta como un elemento inline. Ocupa solo el ancho de su contenido. Se posiciona horizontalmente con otros elementos inline. Los flex items dentro siguen las mismas reglas flexbox

### Comparación con otros Display values
| Display Value | Container Behavior | Items Inside | Use Case            |
|---------------|--------------------|--------------|---------------------|
| block         |Block-level         |Normal flow   |Divisiones,secciones |
| inline        |Inline-level        |Normal flow   |Texto, spans         |
| inline-block  |Inline-level        |Normal flow   |Botones, elementos híbridos |
| flex          |Block-level         |Flex items    |Layouts principales. |
| inline-flex   |Inline-level        |Flex items    |Componentes inline.  |

- flex-direction

Define la dirección del eje principal

```css
.container {
    flex-direction: row;         /* Default: izquierda → derecha */
    flex-direction: row-reverse; /* derecha → izquierda */
    flex-direction: column;      /* arriba → abajo */
    flex-direction: column-reverse; /* abajo → arriba */
}
```

- justify-content

Alineación en el eje principal

```css
.container {
  justify-content: flex-start;    /* Inicio del container */
  justify-content: flex-end;      /* Final del container */
  justify-content: center;        /* Centro */
  justify-content: space-between; /* Espaciado entre items */
  justify-content: space-around;  /* Espaciado alrededor */
  justify-content: space-evenly;  /* Espaciado uniforme */
}
```
- align-items

Alineación en el eje secundario

```css
.container {
  align-items: stretch;    /* Default: estira items */
  align-items: flex-start; /* Inicio del eje cruzado */
  align-items: flex-end;   /* Final del eje cruzado */
  align-items: center;     /* Centro del eje cruzado */
  align-items: baseline;   /* Línea base del texto */
}
```

- align-content

Alineación de líneas múltiples

```css
.container {
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: stretch;
}
```
- flex-wrap

Controla si los items se 'envuelven'

```css
.container {
    flex-wrap: nowrap;    /* Default: no wrap */
    flex-wrap: wrap;      /* Wrap hacia abajo */
    flex-wrap: wrap-reverse; /* Wrap hacia arriba */
}
```
- gap 

(CSS Grid adoptado por Flexbox)

```css
.container {
  gap: 20px;          /* row-gap y column-gap */
  row-gap: 10px;      /* Espaciado vertical */
  column-gap: 15px;   /* Espaciado horizontal */
}
```

## Propiedades de Flex Item

- align-self

Sobrescribe align-items para item específico
```css
.item {
  align-self: auto;      /* Default: hereda align-items */
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: baseline;
  align-self: stretch;
}
```

- order

Cambia orden visual sin modificar DOM

```css
.item {
  order: 0;  /* Default: orden DOM */
  order: -1; /* Aparece primero */
  order: 1;  /* Aparece después */
}
```

- flex-basis

Tamaño base antes de distribución
```css
.item {
    flex-basis: auto;  /* Default: basado en contenido */
  flex-basis: 200px; /* Tamaño base específico */
  flex-basis: 30%;   /* Porcentaje del container */
  flex-basis: 0;     /* Sin tamaño base */
}
```

- flex-grow

Factor de crecimiento proporcional

```css
.item {
  flex-grow: 0; /* Default: no crece */
  flex-grow: 1; /* Crece proporcionalmente */
  flex-grow: 2; /* Crece 2x más que flex-grow: 1 */
}
```
- flex-shrink

Factor de encogimiento

```css
.item {
  flex-shrink: 1; /* Default: puede encogerse */
  flex-shrink: 0; /* No se encoge */
  flex-shrink: 2; /* Se encoge 2x más rápido */
}
```

### Casos de Uso y Patrones Comunes
1. Centrado Perfecto
```css
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  /* requiere especificar tamaño del container */       
}
```
2. Layout de Tres Columnas

```css
.layout {
  display: flex;
}
.sidebar { flex: 0 0 200px; }
.main { flex: 1; }
.aside { flex: 0 0 150px; }
```

3. Distribución Equitativa

```css
.equal-items {
  display: flex;
}
.item { flex: 1; }
```

4. Sticky Footer,  pie de página de un sitio web que se mantiene pegado a la parte inferior de la pantalla del navegador.
```css
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content { flex: 1; }
```
## [Guía completa de Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
## [Flexbox Adventure](https://codingfantasy.com/games/flexboxadventure)

#
# CSS Grid

CSS Grid es un sistema de layout bidimensional que permite el control simultáneo de filas y columnas, organizando elementos en una grilla explícita con capacidades de posicionamiento precisas

```
Grid Container (display: grid)
┌─────────────────────────────────────┐
│ Grid Line │ Grid Line │ Grid Line   │ ← Grid Lines
├───────────┼───────────┼─────────────┤
│Grid Cell  │Grid Cell  │Grid Cell    │ ← Grid Cells
│(1,1)      │(1,2)      │(1,3)        │
├───────────┼───────────┼─────────────┤
│Grid Area  │Grid Area  │Grid Area    │ ← Grid Areas
│(spanning) │(2,2)      │(2,3)        │
└─────────────────────────────────────┘
  ↑           ↑           ↑
Grid Track  Grid Track  Grid Track
```

### Terminología Técnica

- Grid Container: Elemento padre con display: grid o display: inline-grid
- Grid Items: Elementos hijos directos del grid container
- Grid Lines: Líneas divisorias que forman la estructura de la grilla. Se numeran desde 1. Pueden tener nombres explícitos. Existen tanto horizontales como verticales.
- Grid Tracks: Espacio entre dos grid lines adyacentes
- Row tracks: Espacios horizontales
- Column tracks: Espacios verticales
- Grid Cells: Unidad más pequeña de la grilla (intersección de row y column track)
- Grid Areas: Área rectangular compuesta por una o más grid cells

### Propiedades del Grid Container

- display
```css
.container {
  display: grid;        /* Block-level grid container */
  display: inline-grid; /* Inline-level grid container */
}
```

- grid-template-columns / grid-template-rows

Define el tamaño de tracks explícitos

```css
.container {
  /* Valores absolutos */
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: 50px auto 50px;
  
  /* Unidades fractionales */
  grid-template-columns: 1fr 2fr 1fr; /* Distribución proporcional */
  
  /* Función repeat() */
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  
  /* Tamaños mixtos */
  grid-template-columns: 200px repeat(2, 1fr) 100px;
  
  /* Con nombres de líneas */
  grid-template-columns: 
    [sidebar-start] 250px 
    [sidebar-end main-start] 1fr 
    [main-end];
}
```

- grid-template-areas

Define áreas nombrando celdas

```css
.container {
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

/* Items se asignan a áreas */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

- gap (grid-gap)
```css
.container {
  gap: 20px;              /* row-gap y column-gap */
  row-gap: 10px;          /* Espacio entre filas */
  column-gap: 15px;       /* Espacio entre columnas */
  
  /* Legacy syntax */
  grid-gap: 20px;
  grid-row-gap: 10px;
  grid-column-gap: 15px;
}
```
- justify-items / align-items

Alineación de items dentro de sus celdas
```css
.container {
  /* Alineación horizontal */
  justify-items: start | end | center | stretch; /* default: stretch */
  
  /* Alineación vertical */
  align-items: start | end | center | stretch;   /* default: stretch */
  
  /* Shorthand */
  place-items: center; /* align-items justify-items */
}
```

- justify-content / align-content

Alineación de la grilla completa dentro del container

```css
.container {
  /* Si la grilla es menor que el container */
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
  
  /* Shorthand */
  place-content: center;
}
```

- grid-auto-columns / grid-auto-rows

Tamaño de tracks implícitos

```css
.container {
  grid-auto-columns: 200px;    /* Columnas implícitas */
  grid-auto-rows: minmax(100px, auto); /* Filas implícitas */
}
```

- grid-auto-flow

Control del algoritmo de auto-placement

```css
.container {
  grid-auto-flow: row;          /* default: llenar filas */
  grid-auto-flow: column;       /* llenar columnas */
  grid-auto-flow: row dense;    /* intentar llenar huecos */
  grid-auto-flow: column dense;
}
```

### Propiedades de Grid Items

- grid-column / grid-row

Posicionamiento explícito

```css
.item {
  /* Por números de línea */
  grid-column: 1 / 3;          /* De línea 1 a 3 */
  grid-row: 2 / 4;             /* De línea 2 a 4 */
  
  /* Con span */
  grid-column: 2 / span 2;     /* Desde línea 2, abarca 2 tracks */
  grid-row: span 3;            /* Abarca 3 filas desde auto-placement */
  
  /* Por nombres de línea */
  grid-column: sidebar-start / main-end;
  
  /* Shorthand individual */
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

- grid-area

```css
.item {
  /* Por área nombrada */
  grid-area: header;
  
  /* Por coordenadas: row-start / column-start / row-end / column-end */
  grid-area: 1 / 1 / 3 / 4;
  
  /* Mixto */
  grid-area: header-start / sidebar-start / footer-end / main-end;
}
```

- justify-self / align-self

Alineación individual del item

```css
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
  place-self: center; /* shorthand */
}
```

### Unidades y Funciones Específicas
- Unidad Fraccional (fr)

```css
.container {
  /* 1fr = 1 fracción del espacio disponible */
  grid-template-columns: 200px 1fr 2fr; /* Fijo + proporcional */
  
  /* Cálculo: espacio_disponible = total - 200px */
  /* Columna 2: 1/(1+2) * espacio_disponible */
  /* Columna 3: 2/(1+2) * espacio_disponible */
}
```
- minmax()
```css
.container {
  grid-template-columns: 
    minmax(200px, 1fr)      /* Mínimo 200px, máximo 1fr */
    minmax(100px, 400px)    /* Entre 100px y 400px */
    minmax(auto, 1fr);      /* Mínimo contenido, máximo 1fr */
}
```
- repeat()
```css
.container {
  /* Repetición simple */
  grid-template-columns: repeat(4, 100px); /* 100px 100px 100px 100px */
  
  /* Con patrones */
  grid-template-columns: repeat(2, 100px 200px); /* 100px 200px 100px 200px */
  
  /* Auto-repeat */
  grid-template-columns: repeat(auto-fill, 200px); /* Crea tantas como quepan */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive */
}
```
- auto-fill

```css
/* Crea tracks vacíos si hay espacio */
grid-template-columns: repeat(auto-fill, 200px);

/* Con 800px de ancho: [200px][200px][200px][200px] */
/* Tracks vacíos mantienen espacio */
```


- auto-fit
```css
/* Colapsa tracks vacíos */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

/* Con 800px de ancho y 2 items: [400px][400px] */
/* Items crecen para llenar espacio */
```

### Casos de Uso y Patrones
1. Layout Básico de Página
```css
.page-layout {
    display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px 1fr 150px;
  min-height: 100vh;
  gap: 20px;
}
```

2. Card Grid Responsivo
```css
.card-grid {
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

/* Auto-ajuste sin media queries */
```

3. Galería de Imágenes con Masonry
```css
.gallery {
    display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: 10px; /* Filas pequeñas para control fino */
  gap: 10px;
}

.gallery-item {
    grid-row-end: span var(--row-span); /* Calculado con JS */
}
```

4. Layout de Dashboard

```css
.dashboard {
  display: grid;
  grid-template-areas:
    "nav nav nav nav"
    "sidebar widget-1 widget-2 widget-3"
    "sidebar widget-4 widget-4 widget-5"
    "sidebar widget-6 widget-7 widget-7";
  grid-template-columns: 250px repeat(3, 1fr);
  grid-template-rows: 60px repeat(3, 200px);
  gap: 15px;
  height: 100vh;
}
```

5. Form Layout Avanzado

```css
.form-grid {
  display: grid;
  grid-template-columns: [labels] auto [controls] 1fr;
  gap: 20px 10px;
}

.form-row {
  display: grid;
  grid-template-columns: subgrid; /* CSS Grid Level 2 */
  grid-column: 1 / -1;
}

.full-width {
  grid-column: 1 / -1;
}
```

6. Layout de Artículo

```css
.article-layout {
  display: grid;
  grid-template-columns: 
    [full-start] minmax(1em, 1fr) 
    [main-start] minmax(0, 40em) 
    [main-end] minmax(1em, 1fr) 
    [full-end];
}

.article-content { grid-column: main; }
.full-bleed { grid-column: full; }
```


### [Guía interactiva de CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)
### [Grid Critters](https://gridcritters.com/)
### [13 grids en 8 minutos](https://www.youtube.com/watch?v=gUzkRue28VI)
### [Poster grid layout design](https://www.youtube.com/watch?v=BQEVqWiD304)

#
# Responsive Design (Diseño adaptativo)

El diseño responsivo es una metodología de desarrollo web que permite que las páginas web y aplicaciones se adapten automáticamente a diferentes tamaños de pantalla y dispositivos, proporcionando una experiencia de usuario óptima sin importar si se accede desde un teléfono móvil, tablet, laptop o monitor de escritorio.

### Principios Fundamentales
El diseño responsivo se basa en tres pilares técnicos principales:

- Grillas Fluidas (Fluid Grids): En lugar de usar dimensiones fijas en píxeles, se utilizan unidades relativas como porcentajes, em, rem o viewport units (vw, vh). Esto permite que los elementos se redimensionen proporcionalmente según el contenedor padre.
- Imágenes Flexibles: Las imágenes y otros elementos multimedia se configuran para que no excedan el ancho de su contenedor, típicamente usando max-width: 100% y height: auto.
- Media Queries: Son reglas CSS que aplican estilos específicos según las características del dispositivo, principalmente el ancho de la pantalla, pero también la orientación, densidad de píxeles y otras propiedades.

### Implementación Técnica

## Breakpoints
Se establecen puntos de quiebre donde el diseño cambia significativamente:

- Mobile: hasta 768px
- Tablet: 769px a 1024px
- Desktop: 1025px en adelante

Mobile breakpoint
```css
@media (max-width: 575.98px) {
    /* style */
}
```
Tablet breakpoint
```css
@media (min-width: 768px) and (max-width: 991.98px) {
    /* style */
}
```
Desktop breakpoint
```css
@media (min-width: 992px) and (max-width: 1199.98px) {
    /* style */
}
```
Extra large display breakpoint
```css
@media (min-width: 1200px) {
    /* style */
}
```

## CSS Grid y Flexbox
Estas tecnologías CSS permiten crear layouts flexibles que se reorganizan automáticamente:

- CSS Grid: Ideal para layouts bidimensionales complejos
- Flexbox: Perfecto para alineación y distribución de elementos en una dimensión

## Unidades Responsivas

- rem/em: Escalables según el tamaño de fuente
- %: Relativo al contenedor padre
- vw/vh: Relativo al viewport (1vw = 1% del ancho de ventana)
- clamp(): Permite valores mínimos, preferidos y máximos

### Enfoques de Implementación

- Mobile First: Se diseña primero para móviles y luego se expande hacia pantallas más grandes usando min-width en media queries.
- Desktop First: Proceso inverso, comenzando por desktop y adaptando hacia abajo con max-width.
- Container Queries: Tecnología más reciente que permite que los elementos respondan al tamaño de su contenedor específico, no solo al viewport.