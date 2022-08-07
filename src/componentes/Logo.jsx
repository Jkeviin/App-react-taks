import React from "react";
import '../hojas-de-estilo/Logo.css';

function Logo( {imagen} ) {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={imagen}
        className="freecodecamp-logo"
        alt="freecodecamp logo"
      />
    </div>
  );
}

export default Logo;
