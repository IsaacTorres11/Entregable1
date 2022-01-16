
import './App.css';

//Componentes
import Datos from './Componentes/Datos';
import Hobies from './Componentes/Hobies';
import Conocimientos from './Componentes/Conocimientos';
import Comida from './Componentes/Comida';

function App() {

const datos = {
  nombre: 'Isaac',
  edad: 26,
  pelicula: 'Spider-Man',
  musica: 'Rock'
}
const conocimientos = {
  item1: 'Html',
  item2: 'Css',
  item3: 'Sass',
  item4: 'JavaScript'
}

const comida = {
  item1: 'Enchiladas',
  item2: 'Pizza',
  item3: 'Sushi',
  item4: 'Tacos'
}

  return (
    <div className="App">
      <div className='datos'>
        <Datos datos ={datos}/>
      </div>
      <div className='hobies'>
        {/* Esta es otra forma de pasar propiedades sin que estas sean declaradas como objetos o arreglos  */}
        <Hobies  item1={'dibujar'} item2={'Escuchar Musica'} item3={'Jugar'}  item4 = {'Leer'}/>
      </div>
      <div className='conocimiento'>
        <Conocimientos conocimientos ={conocimientos}/>
      </div>
      <div className='comida'>
        <Comida comida = {comida} />
      </div>
    </div>
    
  );
}

export default App;
