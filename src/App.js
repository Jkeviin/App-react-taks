import './App.css';
import freeCodeCampLogo from './imagenes/logo.svg';
import Logo from './componentes/Logo.jsx';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo imagen={freeCodeCampLogo}></Logo>
    </div>
  );
}

export default App;
