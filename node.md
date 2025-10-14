# Node.js
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Node Logo" style="width:200px; height:auto;">


Node.js es un entorno de ejecución de JavaScript del lado del servidor construido sobre el motor V8 de Google Chrome. Fue creado por Ryan Dahl en 2009 y permite ejecutar código JavaScript fuera del navegador.

La instalación de Node.js incluye NPM (Node Package Manager): Es el registro y gestor de paquetes y librerías de Javascript.

#
### [Node download](https://nodejs.org/es/)

#
# NPM

NPM es el gestor de paquetes predeterminado para Node.js. Tiene dos componentes principales:

- Registro en línea: Una base de datos pública masiva de paquetes de código JavaScript (la más grande del mundo)
- Cliente de línea de comandos: Herramienta que permite instalar, gestionar y publicar paquetes

## Funciones principales:

Instalar dependencias: Descargar librerías y módulos que otros desarrolladores han creado

```bash
npm install [libname]
npm install react lodash
```

## Comandos esenciales:

```bash
npm init - Crear un nuevo proyecto

npm install - Instalar todas las dependencias

npm install [paquete] - Instalar un paquete específico

npm uninstall [paquete] - Desinstalar un paquete

npm update - Actualizar paquetes

npm run [script] - Ejecutar scripts personalizados

npm publish - Publicar tu paquete al registro
```

## Usos mas importantes 
- Gestionar proyectos: Mantener un archivo package.json que lista todas las dependencias de tu proyecto
- Compartir código: Publicar tus propios paquetes para que otros los usen
- Ejecutar scripts: Automatizar tareas como testing, compilación, etc.
- Control de versiones: Manejar diferentes versiones de paquetes

## Estructura básica
package.json: Archivo de configuración que contiene:

- Nombre y versión del proyecto
- Lista de dependencias
- Scripts personalizados
- Metadatos del proyecto

node_modules/: Carpeta donde se instalan todos los paquetes

package-lock.json: Archivo que "congela" las versiones exactas instaladas