import  { useState } from 'react';

function Formulario() {
  const [texto, setTexto] = useState('');
  
  const manejarSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
     alert(`Enviaste: ${texto}`);
    // codigo para guardar el etxto en una cockie
  };
  
  return (
    <>
        <form onSubmit={manejarSubmit}>
        <input 
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escribe algo"
        />
        <button type="submit">Enviar</button>
        </form>
        <p>Texto actual: {texto}</p>
    </>
  );
}

export default Formulario;