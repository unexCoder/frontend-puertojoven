<img src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.svg" alt="HTML5 Logo" style="width:100px; height:auto;">


# Git: Guía práctica de inicio
#
[Sitio oficial](https://git-scm.com/)
## Descripción conceptual
Git es un sistema de control de versiones que realiza un seguimiento de los cambios que se producen en tus archivos a lo largo del tiempo. Es posible realizar seguimiento historico del estado de desarrollo de un archivo o de un proyecto con multiples archivos y carpetas.

El sistema se basa en la creacion de instantáneas (denominadas «commits») de tu proyecto en diferentes momentos.

Puedes volver a cualquier instantánea anterior siempre que lo necesites.

Varias personas pueden trabajar en el mismo proyecto sin sobrescribir el trabajo de los demás.

Mantiene un historial completo de quién cambió qué y cuándo.

## Conceptos clave:

- Repositorio (repo): una carpeta que Git está rastreando.
- Commit: una instantánea guardada de tu proyecto en un momento específico.
- Rama: una versión paralela de tu proyecto (como una línea temporal alternativa).
- Remoto: una versión de tu repositorio alojada en otro lugar (como GitHub).


## Ejemplos prácticos de la línea de comandos

### Introducción
Inicializar un nuevo repositorio Git:
```bash
git init;
```
Esto convierte tu carpeta actual en un repositorio Git.

Clonar un repositorio existente:
```bash
git clone https://github.com/username/repo-name.git
```
Descarga una copia de un repositorio remoto a tu ordenador.

### Flujo de trabajo básico

Comprobar el estado de tus archivos:
```bash
git status
```
Muestra qué archivos se han modificado, añadido o eliminado.

Prepara los archivos para su confirmación (los prepara para guardarlos):
```bash
git add filename.txt        # Añade un archivo específico.
git add .                   # Añade todos los archivos modificados.
```
Confirma los cambios (guarda una instantánea):
```bash
git commit -m «Añadir función de inicio de sesión»
```
El indicador -m te permite añadir un mensaje descriptivo sobre lo que ha cambiado.

Ver el historial de confirmaciones:
```bash
git log                     # Historial completo
git log --oneline          # Vista compacta
```
### Trabajar con ramas
Crear una nueva rama:
```bash
git branch nombre-de-la-característica
```
Cambiar a una rama:
```bash
git checkout nombre-de-la-característica
# o utilizar el comando más reciente:
git switch nombre-de-la-característica
```
Crear y cambiar a una nueva rama con un solo comando:
```bash
git checkout -b nombre-de-la-característica
# o:
git switch -c nombre-de-la-característica
```
Fusionar una rama en la rama actual:
```bash
git merge nombre-de-la-característica
```

### Trabajar con repositorios remotos
Añadir un repositorio remoto:
```bash
\git remote add origin https://github.com/username/repo-name.git
```
Enviar tus confirmaciones al repositorio remoto:
```bash
git push origin main        # Enviar a la rama «main»
git push -u origin main     # Primera vez (configura el seguimiento)
```
Descargar los cambios del repositorio remoto:
```bash
git pull origin main
```
Ver tus repositorios remotos:
```bash
git remote -v
```

### Comandos útiles
Ver qué ha cambiado en tus archivos:
```bash
git diff                    # Cambios no preparados
git diff --staged          # Cambios preparados
```

Deshacer los cambios en un archivo:
```bash
git checkout -- filename.txt    # Descartar los cambios (antes de prepararlos)
git restore filename.txt        # Nueva forma de descartar los cambios
```
Desmarcar un archivo:
```bash
git reset filename.txt
# o:
git restore --staged filename.txt
```
## Ejemplo de flujo de trabajo típico
A continuación se muestra cómo se puede utilizar Git para una tarea típica:
```bash
# 1. Empezar a trabajar en una nueva función
git checkout -b new-feature

# 2. Realizar cambios en los archivos y, a continuación, comprobar qué ha cambiado
git status

# 3. Prepara tus cambios
git add .

# 4. Confirma con un mensaje descriptivo
git commit -m «Añadir página de perfil de usuario»

# 5. Envía a remoto
git push origin nueva-funcionalidad

# 6. Vuelve a la rama principal
git checkout main

# 7. Fusiona tu funcionalidad
git merge nueva-funcionalidad
```