import { useState, useEffect } from 'react';

function Reloj() {
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

export default Reloj;