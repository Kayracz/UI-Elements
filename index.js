import Navbar from './components/navbar/Navbar';
import Cards from './components/cards/Cards';
import BarraDeHerramientas from './components/barradeherramientas/BarraDeHerramientas';
import Reviews from './components/reviews/Reviews';
import Movies from './Movies';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Cards /> 
      <BarraDeHerramientas /> 
      <Reviews />
      <Movies />
    </div>
  );
}

export default App;

// 1. Header: crea un header que contenga un logo a la izquierda y un menú de navegación a la derecha. Ver ejemplo
// 2. Tarjetas: crea una fila de tarjetas que mantenga una altura uniforme sin importar el contenido y que se adapte a varias filas en pantallas pequeñas. Ver ejemplo
// 3. Barra de Herramientas: Crear una barra de herramientas con iconos y texto, asegurando una adecuada alineación y espacio entre ellos. Ver ejemplo
// 4. Galería de reviews: implementar una galería que muestre las reviews de un producto por parte de 3 o 4 usuarios y el resumen de todos los usuarios. El diseño debe ser responsive. Ver ejemplo