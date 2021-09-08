import React, { useState } from "react";
import axios from "axios";
import CardModal from "./CardModal";
import { useHistory } from "react-router";
import './home.css'

const Home = () =>{
    const history = useHistory()
    const [book,SetBook] = useState("");
    const [result, setResult] = useState([]);
    const [keyApi, setKey] = useState("AIzaSyBYAu01gaUQyI7sBJrtZNNy7bVumVZwr1Y");

    const handleForm = async e =>{
        e.preventDefault();
        try {
            let data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${keyApi}`)
            data = data.data.items;
            setResult(data)
            
        } catch (error) {
            alert("we're sorry, book you're looking for doesn't exist");
            
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
            <div className="image-home ">
                <div className="bg-blue-300 mt-5 flex justify-end mr-10">
                <button className="" type="button" onClick={handleSignOut}>SignOut</button>
                </div>
                
                <div className="flex justify-center items-center flex-col">
                    <div>
                        <form onSubmit={handleForm}>
                            <div class="mt-10 font-black text-6xl text-red-700">
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
        </div>
    </div>
            
        )
}

export default Home