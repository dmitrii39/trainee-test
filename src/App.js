import {ReactComponent as SearchIcon} from './assets/icons/searchIcon.svg'
import { ReactComponent as Vector} from './assets/icons/Vector.svg';
import './App.css';
function App() {
  return (
    <div className="App">
    <h1 className='screen_title'>Поиск</h1>
    <div className='input_container'>
      <div className='search_icon'><SearchIcon /></div>
      <div className='vector'><Vector /></div>
    
    <input className='input_styles' type="text" placeholder="Введи имя, тег, почту..."/>
  </div>
    
  
    </div>
  );
}

export default App;
