import './App.css';
// import FormLogin from "./Pages/FormLogin";
// import Footer from "./Pages/Footer";
import Login from './Component/Login'
// import Daftar from './Component/Daftar'
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Home from './Component/homepage'
import { useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";

function App() {
  // const result = useSelector((state) => state.isAuth)
  // let history = useHistory()
  // const status = localStorage.getItem("status")
  // localStorage.setItem("login", (data))
//   useEffect(()=>{ 
//     // let contoh =  localStorage.getItem("status")
//     if (status == true){
//         history.push('/home')
//     }
//     console.log(result);
// },[])

  return (
    <div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      {/* <Route exact path="/daftar" component={Daftar}/> */}
    </Switch>
      {/* <FormLogin /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
