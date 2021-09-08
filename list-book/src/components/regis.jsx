import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

function Regis() {
    const [form,setForm] = useState({})
    const history = useHistory()
    const formHandler = e => {
        let {value, name} = e.target;

        setForm({
            ...form,
            [name]: value
        });
        
    }
    
    useEffect(()=>{
        console.log(form)
    },[form])

    const submitHandler = async e => {
        e.preventDefault();
        await axios.post('https://6136e7df8700c50017ef56ec.mockapi.io/users',form);
        history.push("/login")
    }    

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={formHandler} type="text" placeholder="username" name="username"/>
                <input onChange={formHandler} type="text" placeholder="email" name="email"/>
                <input onChange={formHandler} type="password" placeholder="password" name="password"/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}

export default Regis
