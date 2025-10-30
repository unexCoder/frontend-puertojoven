import { useState } from 'react';

function FormularioUsuario() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    edad: 0,
    direccion: '',
    ciudad: '',
    codigo_postal: '',
    credito: 0.0,
    membresia: false,
    picture: 'url'
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
      <button onClick={console.log(usuario)} >Mostrar</button>
    </div>
  );
}

export default FormularioUsuario;