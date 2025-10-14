# Command Line Interface (CLI)
<img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Terminalicon2.png" alt="Terminal Logo" style="width:200px; height:auto;">

El terminal (también llamado consola, línea de comandos o CLI - Command Line Interface) es una interfaz de texto que permite interactuar con el sistema operativo mediante comandos escritos, sin usar el mouse ni elementos gráficos.

## Componentes principales:
- Shell: El intérprete de comandos que procesa lo que escribes (bash, zsh, PowerShell, cmd)
- Emulador de terminal: La aplicación gráfica que muestra el shell (Windows Terminal, iTerm2, GNOME Terminal)
- Prompt: El indicador que muestra dónde escribir (ej: C:\Users\tu-nombre> o $)

## Funciones principales:
### Navegación del sistema de archivos

- Moverte entre carpetas
- Listar archivos
- Crear, copiar, mover, eliminar archivos y directorios

### Ejecutar programas y scripts

- Correr aplicaciones
- Ejecutar código (Node.js, Python, etc.)
- Automatizar tareas

### Gestión de paquetes y dependencias

- NPM, pip, apt, brew
- Instalar y actualizar software

### Control de versiones

- Git (commits, push, pull, branches)

### Administración del sistema

- Gestionar procesos
- Configurar permisos
- Monitorear recursos

### Desarrollo web y aplicaciones

- Iniciar servidores
- Compilar código
- Ejecutar tests

### Acceso remoto

- SSH para conectarse a servidores
- Administración de servidores en la nube

## Comandos Comunes del Terminal
### Navegación de Carpetas
Windows (CMD/PowerShell)

```bash
dir                    # Listar archivos y carpetas
cd carpeta             # Entrar a una carpeta
cd ..                  # Subir un nivel (carpeta anterior)
cd \                   # Ir a la raíz del disco
cd C:\Users            # Ir a una ruta específica
cd                     # Mostrar carpeta actual (solo CMD)
pwd                    # Mostrar carpeta actual (PowerShell)
tree                   # Ver árbol de carpetas
```

Linux / Mac
```bash
ls                     # Listar archivos y carpetas
ls -la                 # Listar con detalles y archivos ocultos
cd carpeta             # Entrar a una carpeta
cd ..                  # Subir un nivel
cd ~                   # Ir a carpeta home del usuario
cd /                   # Ir a la raíz
pwd                    # Mostrar ruta actual
tree                   # Ver árbol de carpetas (si está instalado)
```

### Creación de Carpetas

Windows
```bash
mkdir nueva-carpeta                    # Crear carpeta
mkdir carpeta1 carpeta2                # Crear múltiples carpetas
md carpeta                             # Alternativa (md = mkdir)
mkdir "carpeta con espacios"           # Carpeta con espacios en el nombre
```

Linux / Mac
```bash
mkdir nueva-carpeta                    # Crear carpeta
mkdir -p ruta/completa/nueva          # Crear carpetas anidadas
mkdir carpeta1 carpeta2 carpeta3      # Crear múltiples carpetas
```

### Creación de Archivos
Windows
```bash
type nul > archivo.txt                 # Crear archivo vacío
echo Hola > archivo.txt                # Crear archivo con contenido
echo Mas texto >> archivo.txt          # Agregar texto a archivo existente
copy con archivo.txt                   # Crear y escribir (Ctrl+Z para terminar)
notepad archivo.txt                    # Crear/editar con Notepad
```
Linux / Mac
```bash
touch archivo.txt                      # Crear archivo vacío
echo "Hola" > archivo.txt              # Crear archivo con contenido
echo "Mas texto" >> archivo.txt        # Agregar texto al archivo
cat > archivo.txt                      # Crear y escribir (Ctrl+D para terminar)
nano archivo.txt                       # Crear/editar con nano
vim archivo.txt                        # Crear/editar con vim
```

### Visualizar Archivos

Windows
```bash
type archivo.txt                       # Ver contenido completo
more archivo.txt                       # Ver con paginación
```
Linux / Mac
```bash
cat archivo.txt                        # Ver contenido completo
less archivo.txt                       # Ver con paginación (q para salir)
head archivo.txt                       # Ver primeras 10 líneas
tail archivo.txt                       # Ver últimas 10 líneas
```
### Copiar Archivos y Carpetas
Windows
```bash
copy archivo.txt destino\              # Copiar archivo
xcopy carpeta destino /E /I            # Copiar carpeta completa
robocopy origen destino /E             # Copiar (más robusto)
```
Linux / Mac
```bash
cp archivo.txt destino/                # Copiar archivo
cp -r carpeta destino/                 # Copiar carpeta completa
```

### Mover/Renombrar
Windows
```bash
move archivo.txt destino\              # Mover archivo
move viejo.txt nuevo.txt               # Renombrar archivo
move carpeta destino\                  # Mover carpeta
ren viejo.txt nuevo.txt                # Renombrar (alternativa)
```
Linux / Mac
```bash
mv archivo.txt destino/                # Mover archivo
mv viejo.txt nuevo.txt                 # Renombrar archivo
mv carpeta destino/                    # Mover carpeta
```

### Eliminar Archivos y Carpetas
Windows
```bash
del archivo.txt                        # Eliminar archivo
del *.txt                              # Eliminar todos los .txt
rmdir carpeta                          # Eliminar carpeta vacía
rmdir /S carpeta                       # Eliminar carpeta con contenido
rmdir /S /Q carpeta                    # Eliminar sin confirmar
```
Linux / Mac
```bash
rm archivo.txt                         # Eliminar archivo
rm *.txt                               # Eliminar todos los .txt
rmdir carpeta                          # Eliminar carpeta vacía
rm -r carpeta                          # Eliminar carpeta con contenido
rm -rf carpeta                         # Eliminar forzado (¡cuidado!)
```

### Buscar Archivos
Windows
```bash
dir /S archivo.txt                     # Buscar archivo recursivamente
where archivo.txt                      # Buscar en PATH
findstr "texto" archivo.txt            # Buscar texto en archivo
```
Linux / Mac
```bash
find . -name "archivo.txt"             # Buscar archivo
find . -name "*.txt"                   # Buscar por patrón
grep "texto" archivo.txt               # Buscar texto en archivo
grep -r "texto" .                      # Buscar en todos los archivos
```
### Información del Sistema
Windows
```bash
cls                                    # Limpiar pantalla
exit                                   # Cerrar terminal
systeminfo                             # Info del sistema
ipconfig                               # Info de red
```
Linux / Mac
```bash
clear                                  # Limpiar pantalla
exit                                   # Cerrar terminal
uname -a                               # Info del sistema
ifconfig / ip addr                     # Info de red
df -h                                  # Espacio en disco
```
