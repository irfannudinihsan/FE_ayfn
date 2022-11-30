import {useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Login ()  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({email, password});

    }

    // const user = {
    //     email: email, setEmail,
    //     password: password, setPassword
    // }
    
    
    axios.post(`https://ayfnfebe29.up.railway.app/auth/login`, { 
        email: email,
        password: password,
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
      })
    //   .catch(error=>{
    //     alert('service error')
    //     console.log(error)
    //   })
        return (
            <div className="container">
                <div className="row justify-content-center">
                        <div className="col-md-6">
                        <h2>Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email"  required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                    </div>
                                    <button className type="submit btn btn-primary btn-lg btn-block"><Link to={"/"} style={{color: 'white'}}>Login</Link></button>
                                      
                            </form>
                            <p>Don't have an account? <Link to={"/register"}>Register here</Link></p> 
                        </div>
                        
                </div>
            </div> 
         );
    }

 
export default Login ;