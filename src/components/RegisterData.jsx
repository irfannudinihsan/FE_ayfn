import {useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

const RegisterData = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({email, password, name});
    }

    const user = {
        email: email, setEmail,
        password: password, setPassword,
        name: name, setName
    }

    const handleAPI =()=>{
        axios.post(`https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
                localStorage.setItem("https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/users", JSON.stringify(user));
              })
    }

    return(
        <>
        <div className="container">
                <div className="row justify-content-center">
                        <div className="col-md-6">
                        <h2>Register</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="name" className="form-control" placeholder="Name"  required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email"  required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
                                </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleAPI}><Link to={"/login"} style={{color: 'white'}}>Register</Link></button>                                     
                            </form>
                        </div>                       
                </div>
            </div> 
        </>

    )
}

export default RegisterData;