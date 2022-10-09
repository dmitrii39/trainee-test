import ErrorComponent from './ErrorComponent';
import './UsersComponent.css';
import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react';
import React from 'react';



function UsersComponent() {


  const RenderItem = ({item})=> {
    return (
      <div className='user_component container'>
    <img className='avatar_container' src={item.avatarUrl} alt='user' />
    <div className='user_content'>
      <div className='user_tag_name'>
        <p className='user_name'>{`${item.firstName} ${item.lastName}`}</p>
        <p className='user_tag'>{item.userTag}</p>
      </div>
      <p className='user_position'>{item.position}</p>
    </div>
  
  </div>
    )
  }


  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false)

console.log(error)
useEffect(()=>  async () => {
  const apiUrl = 'https://stoplight.io/mocks/kode-frntend-team/koder-stoplight/86566464/users?__dynamic=true';
try {
 await axios.get(apiUrl).then((resp) => {
    setUsers(resp.data.items);     
})
} catch (err) {
   setError(true)
   console.log(err)
}

  }, [])
return (
 (error ? <ErrorComponent/>  :   users.map(((item) => <RenderItem key={item.id} item={item}/>)))

)

}

export default UsersComponent;