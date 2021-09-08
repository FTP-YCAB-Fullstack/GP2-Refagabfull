import React, { useState } from "react";
import axios from "axios";
import CardModal from "./CardModal";
import { useHistory } from "react-router";
import './home.css'
// import Footer from "../Pages/Footer"


const Home = () =>{
    const history = useHistory()
    const [book,SetBook] = useState("");
    const [result, setResult] = useState([]);
    const [keyApi] = useState("AIzaSyBYAu01gaUQyI7sBJrtZNNy7bVumVZwr1Y");

    const handleForm = async e =>{
        e.preventDefault();
        try {
            let data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${keyApi}`)
            data = data.data.items;
            console.log();
            setResult(data)
            if(data === undefined){
                alert("we're sorry, book you're looking for doesn't exist");
            }
            
        } catch (error) {
            alert("we're sorry. Something error happen");
        }
    }
    
    const input = (e) => {
        SetBook(e.target.value)
    }

    const handleSignOut = (e) => {
        localStorage.removeItem("status", false)
        history.push('/login')
    }
        return(
            <div className="w-screen h-screen flex ">
            <div className="image-home flex justify-center items-center flex-col">
            <button className="absolute top-5 right-20 h-10 w-20 bg-yellow-700 hover:bg-yellow-300 text-white focus:outline-none focus:ring rounded px-3 py-1" type="button" onClick={handleSignOut}>SignOut</button>
                <form onSubmit={handleForm}>
                    <div class="mt-10 font-black text-6xl text-red-700 text-center">
                        <h1>Welcome to RefaGabfull Library</h1>
                    </div>
            
                    <div class="p-8 flex justify-center"> 
                        <div class="bg-white flex items-center rounded-full shadow-xl w-4/5">
                            <input class="rounded-l-full w-full py-4 px-6 text-yellow-800 font-bold leading-tight focus:outline-none bg-white" id="search" type="text" onChange={input} value={book} placeholder="Search the book here..."/>
                            <div class="p-4">
                                <button class="bg-yellow-600 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"><i class="fas fa-search text-white"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
                <CardModal listBook={result}/>
            </div>
        </div>
    )
}

export default Home