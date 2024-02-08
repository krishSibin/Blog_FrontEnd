import React, { useContext, useState } from 'react'
import './LoginPage.scss'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../../userContext'

function LoginPage() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [redirect,setRedirect]=useState(false);
    const {setUserInfo}=useContext(UserContext);
    const navigate=useNavigate();

    async  function login(ev){
      ev.preventDefault();
        
       const resp = await fetch('http://localhost:4000/login',{
            method:'POST',
            body:JSON.stringify({name,password}),
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        })

        if(resp.ok)
        {
            resp.json().then(userInf=>{
                setUserInfo(userInf);
                setRedirect(true)
            })
         
        }
        else{
            alert('invalid authentication')
        }
     }

     if(redirect)
     {
        return navigate('/');
            
     }

    return (
        <div className='loginpage'>
            <h2>Login</h2>
            <form onSubmit={login}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value);
                        }}
                        
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                       
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage;