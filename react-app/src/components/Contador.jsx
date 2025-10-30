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

export default Contador;