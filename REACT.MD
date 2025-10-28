# React
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1920px-React.svg.png" alt="React Logo" style="width:200px; height:auto;">

React es una biblioteca de JavaScript para construir interfaces de usuario interactivas. Fue creada por Facebook y se basa en componentes reutilizables que gestionan su propio estado.

#
## Creacion e inicio de proyecto con React

```bash
npx create-react-app mi-app
cd mi-app
npm start
```

# Conceptos Fundamentales
## 1. Componentes
Los componentes son piezas independientes y reutilizables de UI. Hay dos tipos:
Componente funcional:

```javascript
function Saludo() {
    return <h1>¡Hola, mundo!</h1>;
}
```
Componente funcional con parámetros (props):
```javascript
function Saludo({ nombre }) {
    return <h1>¡Hola, {nombre}!</h1>;
}

// Uso: <Saludo nombre="Ana" />
```

## 2. Sintaxis JSX
JSX es una sintaxis que combina JavaScript y HTML:

```javascript
function Tarjeta() {
  const titulo = "React";
  const activo = true;
  
  return (
    <div className="tarjeta">
      <h2>{titulo}</h2>
      <p>Estado: {activo ? "Activo" : "Inactivo"}</p>
    </div>
  );
}
```
Reglas importantes:

- Usar className en vez de class
- Cerrar todas las etiquetas: <img />, <input />
- anidar todo dentro de un ûnico elemento padre (o usar <>...</> fragments)

## 3. Estado (useState)
El estado permite que los componentes registren y mantengan información:

```javascript
import { useState } from 'react';

function Contador() {
    const [cuenta, setCuenta] = useState(0);
  
  return (
      <div>
      <p>Contador: {cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>
        Incrementar
      </button>
      <button onClick={() => setCuenta(0)}>
        Reiniciar
      </button>
    </div>
  );
}
```

## 4. Renderizado de Listas
Uso de funcrion .map() para renderizar arrays:
```javascript
function ListaTareas() {
    const tareas = ['Estudiar React', 'Hacer ejercicio', 'Cocinar'];
  
  return (
      <ul>
      {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
      ))}
    </ul>
  );
}
```
Siempre usa ```key``` única para cada elemento de la lista.


## 5. Renderizado Condicional

```javascript
function Mensaje({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Bienvenido de vuelta</h1>;
  }
  return <h1>Por favor inicia sesión</h1>;
}

// O con operador ternario:
function Estado({ activo }) {
  return (
    <div>
      {activo ? <span>✅ Activo</span> : <span>❌ Inactivo</span>}
    </div>
  );
}
```

## 6. Eventos
```javascript
function Formulario() {
  const [texto, setTexto] = useState('');
  
  const manejarSubmit = (e) => {
    e.preventDefault();
    alert(`Enviaste: ${texto}`);
  };
  
  return (
    <form onSubmit={manejarSubmit}>
      <input 
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## 7. useEffect
Para efectos secundarios (llamadas API, suscripciones, etc.):
```javascript
import { useState, useEffect } from 'react';

function RelojDigital() {
  const [hora, setHora] = useState(new Date());
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);
    
    // Limpieza al desmontar
    return () => clearInterval(intervalo);
  }, []); // [] = ejecutar solo al montar
  
  return <h2>{hora.toLocaleTimeString()}</h2>;
}
```
Argumento array en useEffect:

- [] → Se ejecuta una vez al montar
- [variable] → Se ejecuta cuando cambia la variable
- Sin array → Se ejecuta en cada render

## 8. Estado Complejo
Para objetos o arrays:

```javascript 
function FormularioUsuario() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    edad: 0
  });
  
  const actualizar = (campo, valor) => {
    setUsuario({ ...usuario, [campo]: valor });
  };
  
  return (
    <div>
      <input 
        value={usuario.nombre}
        onChange={(e) => actualizar('nombre', e.target.value)}
        placeholder="Nombre"
      />
      <input 
        value={usuario.email}
        onChange={(e) => actualizar('email', e.target.value)}
        placeholder="Email"
      />
    </div>
  );
}
```

## 9. Composición de Componentes

```javascript
function Boton({ children, onClick, tipo = 'primario' }) {
  return (
    <button 
      className={`btn-${tipo}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function App() {
  return (
    <div>
      <Boton onClick={() => alert('Click!')} tipo="primario">
        Guardar
      </Boton>
      <Boton onClick={() => alert('Cancelado')} tipo="secundario">
        Cancelar
      </Boton>
    </div>
  );
}
```
#
## Ejemplo Completo: Todo App

```javascript
import { useState } from 'react';

function TodoApp() {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState('');
  
  const agregarTarea = () => {
    if (input.trim()) {
      setTareas([...tareas, { id: Date.now(), texto: input, completada: false }]);
      setInput('');
    }
  };
  
  const toggleTarea = (id) => {
    setTareas(tareas.map(t => 
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };
  
  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };
  
  return (
    <div>
      <h1>Lista de Compras</h1>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
      />
      <button onClick={agregarTarea}>Agregar</button>
      
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id} style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
            <input 
              type="checkbox"
              checked={tarea.completada}
              onChange={() => toggleTarea(tarea.id)}
            />
            {tarea.texto}
            <button onClick={() => eliminarTarea(tarea.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```