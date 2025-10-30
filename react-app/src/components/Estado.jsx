// O con operador ternario:
function Estado({ activo }) {
  return (
    <div>
      {activo ? <span>✅ Activo</span> : <span>❌ Inactivo</span>}
    </div>
  );
}

export default Estado;