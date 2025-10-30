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

export default TodoApp;