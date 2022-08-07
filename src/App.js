import './App.css';
import freeCodeCampLogo from './imagenes/logo.svg';
import Logo from './componentes/Logo.jsx';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo imagen={freeCodeCampLogo}></Logo>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
