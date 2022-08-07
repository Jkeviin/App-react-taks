import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../hojas-de-estilo/ListaDeTareas.css";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]); // Crear un array vacio de tareas y lo guardamos en un estado de react

  const agregarTarea = (tarea) => { // Funcion para agregar una tarea al array de tareas y actualizar el estado de react
    if(tarea.texto.trim()) { // Si el texto de la tarea es vacio, no se agrega
      tarea.texto = tarea.texto.trim(); // Eliminar espacios en blanco al inicio y al final
      const tareasActualizadas = [tarea, ...tareas]; // Agregar la tarea al array de tareas actualizado con el spread operator (...) para que no se pierdan las tareas anteriores al array
      setTareas(tareasActualizadas);  // Actualizar el estado de la lista de tareas por medio de un setTareas que recibe un nuevo array
    }
  }

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); // Filtrar el array de tareas actualizado para que no se elimine la tarea que se quiere eliminar
    setTareas(tareasActualizadas); // Actualizar el estado de la lista de tareas por medio de un setTareas que recibe un nuevo array
  }

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => { // Recorrer el array de tareas actualizado para que se cambie el estado de la tarea que se quiere cambiar
      if(tarea.id === id) {
        tarea.completada = !tarea.completada;  // Cambiar el estado de la tarea que se quiere cambiarS
        console.log(tarea.completada);
      }
      return tarea;
    });
    setTareas(tareasActualizadas); // Actualizar el estado de la lista de tareas por medio de un setTareas que recibe un nuevo array
  }
  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} /> {/* Pasar la función agregarTarea como propiedad onSubmit */}
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea = {eliminarTarea} // Pasar la función eliminarTarea como propiedad eliminarTarea
              />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;
