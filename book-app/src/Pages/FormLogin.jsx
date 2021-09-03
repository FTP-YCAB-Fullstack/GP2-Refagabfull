import React, {useState} from "react"
import Gambar from "../Asset/imglogin.png"

const FormLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return(
        <div style={{marginTop: "100px"}}>
        <img src={Gambar} alt="imglogin" />
            <div style={{marginTop: "-450px"}} className="container">
                <div className="row justify-content-end">
                    <div  className="col-md-5">
                        <div className="card p-4">
                            <div className="card-body">
                                <div className="from-group">
                                    <input type="text" placeholder="Username" className="from-control" value={username} onChange={onChangeUsername}/>
                                </div>
                                
                                <div className="from-group">
                                    <input type="password" placeholder="Pasword" className="from-control" value={password} onChange={onChangePassword} />
                                </div>
                                
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormLogin