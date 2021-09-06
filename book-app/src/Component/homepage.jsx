import React from 'react'
import {Link, useHistory} from "react-router-dom";

const Home =() => {
    return (
        <div>
            <h1>Ini Halaman Home</h1>
            <Link to="/login" className="text-right">Login</Link>
        </div>
    )
}


export default Home
