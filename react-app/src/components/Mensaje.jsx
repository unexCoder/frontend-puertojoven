function Mensaje({ isLoggedIn }) {

  if (isLoggedIn) {
    return <h1>Bienvenido de vuelta</h1>;
  }
  return <h1>Por favor inicia sesión</h1>;
}

export default Mensaje;