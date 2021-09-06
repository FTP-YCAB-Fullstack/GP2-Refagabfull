import React, { useState } from "react";
import reactDom from "react-dom";
import axios from "axios";
import CardModal from "./CardModal";
import './home.css'

const Home = () =>{
    const [book,SetBook] = useState("");
    const [result, setResult] = useState([]);
    const [keyApi, setKey] = useState("AIzaSyBYAu01gaUQyI7sBJrtZNNy7bVumVZwr1Y")

    const handleForm = (e) =>{
        e.preventDefault();
        
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+keyApi)
        .then(data => {
            // console.log(data.data.items)
            setResult(data.data.items)
        })
        SetBook("")
    }
    
    const input = (e) => {
        SetBook(e.target.value)
    }
        return(
            <div className="w-screen h-screen">
                <div className="image-home flex justify-center items-center flex-col">
                    <form onSubmit={handleForm}>
                        <div class="mt-24  font-black text-6xl text-red-800">
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
                </div>
                    <CardModal listBook={result}/>
            </div>
              
        )
}

export default Home