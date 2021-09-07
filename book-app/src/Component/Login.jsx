import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Gambar from "../Asset/imglogin.png";
import {Link, useHistory} from "react-router-dom";
import {checkLogin} from '../reducer/typeAction'

const Login = () => {
    // let data = ''
    let history = useHistory()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const result = useSelector((state) => state.isAuth)
    const dispatch = useDispatch()
    // if (username && password){
    //     data = {
    //         username,
    //         password
    //     }
    // }

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)    
    }

    const Masuk = (e) => {
        if(username === '' || password === ''){
            alert ("Username Harus di Isi")
        }
        else{
            localStorage.setItem("status", true )
            dispatch(checkLogin(true))
            history.push('/')
        }
    }

    return(
        <div>
        {JSON.stringify(result)}
        <h1 className="font-extrabold text-pink p-5 font-sans text-indigo-400">Refagabfull</h1>
            <div className=" flex ">
                <img className="flex" src={Gambar} alt="imglogin" />
                    <div className="w-4/12 border border-gray-300 rounded p-10 bg-blue-200 grid-row-2">
                        <h1 className="text-2xl text-center text-white font-semibold p-1">LOGIN</h1>
                            <div className="h-2 bg-indigo-400 rounded-t-md"></div>
                                <div className="px-3 py-1 "></div>
                                    <h5 className="text-center ">Please enter your login and password</h5>
                                        <div className="mb-4">
                                            <input type="text" className="border border-gray-400 py-2 px-4 w-full" value={username} onChange={onChangeUsername} placeholder="Username" />
                                            {/* <img src={Contact} alt="icon contact"/> */}
                                        </div>
                                        <div className="mb-4">
                                            <input type="password" className="border border-gray-400 py-2 px-4 w-full" value={password} onChange={onChangePassword} placeholder="Password" />
                                            {/* <img src={Iconpass} alt="icon password"/> */}
                                        </div>
                                            <button  className="bg-pink-500 py-2 px-4 rounded text-white" type="button" onClick={Masuk}>Login</button>
                                            {/* <button className="bg-pink-500 py-2 px-4 rounded text-white" type="button" onClick= {getLocal} >Test</button> */}
                                            <Link to="/daftar" className="text-right">Sing Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login