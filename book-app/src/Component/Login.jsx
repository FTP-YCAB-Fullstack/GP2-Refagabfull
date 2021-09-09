import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory} from "react-router-dom";
import {checkLogin} from '../reducer/typeAction'
import './home.css'

const Login = () => {
    // let data = ''
    let history = useHistory()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)    
    }

    const Masuk = (e) => {
        e.preventDefault();
        if(username === '' || password === ''){
            alert ("Can't access, Username or password is incorrect")
        }
        else{
            localStorage.setItem("status", true )
            dispatch(checkLogin(true))
            history.push('/')
        }
    }

    return(
        <div>
            <div class="back-color h-screen w-full flex justify-center items-center bg-gradient-to-tr ">
                <div class="book-login w-full sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0 shadow-md flex flex-col md:flex-row items-center rounded z-10 overflow-hidden bg-center bg-cover bg-blue-600">
                    <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-opacity-25 bg-yellow-700 backdrop">
                        <h1 class="text-3xl md:text-4xl font-extrabold text-white my-2 md:my-0">
                            RefaGabfull
                        </h1>
                        <p class="mb-2 text-white hidden md:block font-mono">
                        search a book here
                        </p>
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col items-center bg-white py-5 md:py-8 px-4">
                        <h3 class="mb-4 font-bold text-3xl flex items-center text-yellow-700">
                        LOGIN
                        </h3>
                        <form onSubmit={Masuk} class="px-3 flex flex-col justify-center items-center w-full gap-3">
                            <input 
                                value={username} onChange={onChangeUsername} 
                                placeholder="Username..."
                                type="text" 
                                class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                            />
                            <input 
                                value={password} onChange={onChangePassword} 
                                placeholder="Password..."
                                type="password" 
                                class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                            />
                            <button class="flex justify-center items-center bg-yellow-700 hover:bg-yellow-300 text-white focus:outline-none focus:ring rounded px-3 py-1">
                                <svg class="w-5 h-5 inline"fill="none"stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                </svg>
                                <p class="ml-1 text-lg">
                                Login
                                </p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login