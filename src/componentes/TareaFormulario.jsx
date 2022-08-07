import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';  // Importar uuid (www.uuidjs.com) y usarlo en el componente para generar un id de manera aleatoria

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value);
  }

  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  }

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Agrega una tarea"
        name = "texto"
        onChange={manejarCambio}
        autoComplete="off" />
      <button className="tarea-boton" type="submit">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
