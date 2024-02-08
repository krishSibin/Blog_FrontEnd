import React from 'react'
import { useState } from 'react';
import './RegisterPage.scss'


function RegisterPage() {




    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    function register(ev) {
        ev.preventDefault();
    
        const resp = fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        resp.then(response => {
            if (response.status === 200) {
                alert('Registration successful');
            } else {
                alert('Registration failed');
                console.log(response);
            }
        }).catch(error => {
            console.error('Error during registration:', error);
            alert('Error during registration');
        });
    }
    

    return (
        <div className='registerpage'>
            <h2>Register</h2>
            <form onSubmit={register}>
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


export default RegisterPage;