function Lista( {tareas} ) {

    return (
        <ul>
            {tareas.map((tarea, index) => (
                <li key={index}>{tarea}</li>
            ))}
        </ul>
    );
}

export default Lista;