import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

function Login() {
    const history = useHistory()
    const [login, setLogin] = useState({})

    const loginHandler = (e) =>{
        let {value, name} = e.target;

        setLogin({
            ...login,
            [name]: value
        });
        
        
    }
    const submit = async e =>{
        e.preventDefault();
        try {
            let respond = await axios.get(`https://6136e7df8700c50017ef56ec.mockapi.io/users?username=${login.username}&password=${login.password}`)
            respond = respond.data

            console.log(respond)

            if(respond.length === 1){
                history.push('/')
            }
            else{
                alert("login gagal")
                return 
            }
        } catch (error) {
            console.log(error)
        }


    }


    const toRegist = () => {
    history.push("/regis")       
    }
    
    return (
        <div>
            <form onSubmit={submit}>
                <label>Username</label>
                <input onChange={loginHandler} type="text" name="username" placeholder="masukan username..." /> <br />
                <label>Password</label>
                <input onChange={loginHandler} type="password" name="password" placeholder="masukan password..." />
                <input type="submit" value="Sign In" />
                <input type="button" value="Sign Up" onClick={toRegist}/>
            </form>
        </div>
    )
}

export default Login
