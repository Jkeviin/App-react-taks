import React from "react";
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";  // Importar icono de react-icons (www.react-icons.io) y usarlo en el componente


function Tarea( { id, texto, completada, completarTarea, eliminarTarea } ) {
  return (
    <div className={completada ? "tarea-contenedor completada" : 'tarea-contenedor'}>
      <div
        className="tarea-texto"
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className="tarea-icono"/>  {/*  Usar el icono importado en el componente Tarea (AiOutlineCloseCircle) y usarlo en el componente || className="tarea-icono" para que se vea el icono */}
      </div>
    </div>
  );
}

export default Tarea;