# HTML: El Lenguaje que Construyó la Web
HTML (HyperText Markup Language) creado en 1990 por Tim Berners-Lee, un científico británico que trabajaba en el CERN (Organización Europea para la Investigación Nuclear) en Ginebra, Suiza. Berners-Lee no solo creó HTML, sino que también desarrolló simultáneamente el protocolo HTTP y las URLs, estableciendo los tres pilares fundamentales de la World Wide Web.

## Los Orígenes y Primeros Propósitos
El contexto de creación de HTML fue profundamente académico y colaborativo. Berners-Lee observó la dificultad que enfrentaban los científicos e investigadores del CERN para compartir información entre diferentes sistemas informáticos. Su solución revolucionaria fue crear un sistema de hipertexto que permitiera enlazar documentos de manera no lineal, facilitando la navegación y el intercambio de conocimiento científico.

El primer propósito de HTML era sorprendentemente simple pero poderoso: permitir que los documentos de texto pudieran contener enlaces a otros documentos, creando una red interconectada de información. La primera página web de la historia, creada por Berners-Lee en 1990, explicaba precisamente qué era la World Wide Web y cómo utilizarla.

## Evolución y Derivaciones
HTML ha experimentado múltiples evoluciones desde su concepción inicial. Las primeras versiones (HTML 1.0 y 2.0) eran extremadamente básicas, con capacidades limitadas de formato. HTML 3.2, lanzado en 1997, introdujo tablas y applets, mientras que HTML 4.0 (1997-1999) incorporó hojas de estilo CSS y mejoró la accesibilidad.

El salto más significativo llegó con **HTML5 (2014)**, que revolucionó el lenguaje al introducir elementos semánticos como `<header>`, `<nav>`, `<article>` y `<section>`, además de capacidades multimedia nativas con `<video>` y `<audio>`, y APIs avanzadas para aplicaciones web modernas.

## Derivaciones y Tecnologías Relacionadas
HTML ha generado numerosas derivaciones y extensiones. **XHTML (2000)** intentó combinar HTML con la rigidez sintáctica de **XML**. XML mismo se derivó parcialmente de los conceptos de marcado de HTML. Más recientemente, tecnologías como **JSX** (utilizada en React) han extendido los conceptos de HTML para la programación de interfaces de usuario modernas.

El legado de Tim Berners-Lee trasciende la creación técnica: su decisión de no patentar estas tecnologías y mantenerlas como estándares abiertos fue fundamental para el crecimiento democrático y universal de Internet. HTML continúa siendo el lenguaje fundamental de la web, adaptándose constantemente a las necesidades de una era digital en constante evolución.

# HTML (HyperText Markup Language):

**HyperText** Refiere a texto que contiene enlaces (hipervínculos) hacia otros textos o recursos, permitiendo navegación no lineal. El prefijo "hiper" indica la capacidad de trascender la lectura secuencial tradicional.

**Markup** Sistema de anotaciones o marcado que define la estructura y presentación del contenido mediante etiquetas específicas.

**Language** Lenguaje formal con sintaxis y semántica definidas para comunicar instrucciones al navegador web.

## Lenguaje de Marcado Declarativo
HTML no es un lenguaje de programación imperativo, sino declarativo. Los desarrolladores describen qué quieren mostrar, no cómo procesarlo. El navegador interpreta las etiquetas y renderiza el contenido según sus propias reglas de presentación.

## Estructura Jerárquica basada en DOM
HTML utiliza una estructura de árbol jerárquico conocida como **DOM (Document Object Model)**. Cada elemento puede contener otros elementos anidados, creando relaciones padre-hijo que definen la organización lógica del documento.

## Sintaxis de Etiquetas (Tags)
La sintaxis fundamental consiste en elementos delimitados por corchetes angulares:

- Etiquetas de apertura: `<elemento>`
- Etiquetas de cierre: `</elemento>`
- Elementos vacíos: `<elemento />` o `<elemento>`

## Separación de Contenido, Presentación y Comportamiento
HTML maneja exclusivamente la estructura semántica del contenido. La presentación visual se delega a **CSS (Cascading Style Sheets)** y la funcionalidad interactiva a **JavaScript**, siguiendo el principio de separación de responsabilidades.

## Elementos Semánticos
**HTML5** introdujo elementos semánticamente significativos (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`) que proporcionan contexto estructural tanto para navegadores como para tecnologías de asistencia y motores de búsqueda.

## Sistema de Atributos
Los elementos HTML pueden incluir atributos que modifican su comportamiento o proporcionan metadatos:

```html
<img src="imagen.jpg" alt="Descripción" width="300" height="200">
```

## Compatibilidad hacia Atrás y Tolerancia a Errores
HTML está diseñado para ser extremadamente tolerante. Los navegadores intentan renderizar código HTML incluso con errores sintácticos, aplicando reglas de corrección automática.

## Estándar Abierto y Multiplataforma
HTML es mantenido por el [**W3C (World Wide Web Consortium)**](https://www.w3.org/) como estándar abierto, garantizando interoperabilidad entre diferentes navegadores, sistemas operativos y dispositivos.

## Capacidades Multimedia Nativas
HTML5 incorporó soporte nativo para contenido multimedia (`<video>`, `<audio>`, `<canvas>`) eliminando la dependencia de plugins externos como Flash.

## APIs Integradas
Las versiones modernas incluyen APIs avanzadas para geolocalización, almacenamiento local, notificaciones push, acceso a hardware del dispositivo, y aplicaciones web progresivas (PWAs).

Esta combinación de simplicidad conceptual y potencia técnica ha permitido que HTML se mantenga como el lenguaje fundamental de la web durante más de tres décadas.

# [Documentación y ejemplos](https://www.w3schools.com/html/html_basic.asp)