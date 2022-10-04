/* eslint-disable react-hooks/exhaustive-deps */
import {ReactComponent as SearchIcon} from './assets/icons/searchIcon.svg'
import { ReactComponent as Vector} from './assets/icons/Vector.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';



function App() {
  const [users, setUsers] = useState([]);
  const fetchUsers =  () => {
    const apiUrl = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__dynamic=true';
    axios.get(apiUrl).then((resp) => {
      setUsers(resp.data.items);
      
})};

useEffect(()=> fetchUsers(), [])
 console.log(users)
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

{users.map((item => <div className='user_component'>
  <img className='avatar_container' src={item.avatarUrl} alt='user' />
  <div className='user_content'>
    <div className='user_tag_name'>
      <p className='user_name'>{`${item.firstName} ${item.lastName}`}</p>
      <p className='user_tag'>{item.userTag}</p>
    </div>
    <p className='user_position'>{item.position}</p>
  </div>

</div>))}



  {/* <div className='user_component'>
    <div className='avatar_container'><img src={item.avatarUrl} alt='user'/></div>
    <div className='user_content'>
      <div className='user_tag_name'>
        <p className='user_name'></p>
        <p className='user_tag'></p>
      </div>
    </div>
  </div> */}


  
    </div>
  );
}

export default App;
