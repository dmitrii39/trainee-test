
import {ReactComponent as SearchIcon} from './assets/icons/searchIcon.svg'
import { ReactComponent as Vector} from './assets/icons/Vector.svg';
import './App.css';
import './components/UsersComponent'

import UsersComponent from './components/UsersComponent';
import ErrorComponent from './components/ErrorComponent';


function App() {


  return (
    <div className="App">
    <h1 className='screen_title'>Поиск</h1>
    <div className='input_container'>
      <div className='search_icon'><SearchIcon /></div>
      <div className='vector'><Vector /></div>
    
    <input className='input_styles' type="text" placeholder="Введи имя, тег, почту..."/>
  </div>
    
  <div className='menu_block'>
    <button onClick={(evt)=> evt.preventDefault()}><p>Все</p></button>
    <button href=''><p>Designers</p></button>
    <button href=''><p>Analysts</p></button>
    <button href=''><p>Managers</p></button>
    <button href=''><p>iOS</p></button>
    <button href=''><p>Android</p></button>
  </div>

<UsersComponent/>
{/* <ErrorComponent/> */}
  
    </div>
  );
}

export default App;
