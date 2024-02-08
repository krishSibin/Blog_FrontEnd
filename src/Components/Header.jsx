
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext';


function Header() {
  const {setUserInfo,userInfo}=useContext(UserContext)
useEffect(()=>{
  fetch('http://localhost:4000/profile',{
    credentials:'include',
  }).then(resp=>{
    resp.json().then(userInfos=>{
      setUserInfo(userInfos)
      
    });
  });
},[]);

function logout() {
  fetch('http://localhost:4000/logout',{
    credentials:'include',
    method:'POST',

  });
  setUserInfo(null)

}

const username=userInfo?.name;

  return ( 
    <div>
         <header>
        <Link to='/'><h1 className='title'>My Blog</h1></Link>
        <nav>        
           {
            username && (
              <>
              <Link to="/create">Create new post</Link>
              <a onClick={logout}>Log out</a>
              </>
            )
          }
          {
            !username && (
              <>
               <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
              </>
            )
          }  

</nav>

          
      </header>

    </div>
  )
}

export default Header;