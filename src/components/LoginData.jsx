import {useEffect, useRef, useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { MdWarning } from 'react-icons/md';

function Login ()  {
    const errorRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({email, password});
        axios.post(`https://ayfnfebe29.up.railway.app/auth/login`, { 
        email: email,
        password: password,
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        location.href='/';
      }).catch(err => {
        console.log(err.response.status)
        if(err.response.status === 401){
            setErrMsg('Login failed! Incorrect Email or Password.');
        }
        else {
            setErrMsg('Error! Something went wrong.');
        }
        errorRef.current.focus();
      })
    }   
    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    // const user = {
    //     email: email, setEmail,
    //     password: password, setPassword
    // }
    //   .catch(error=>{
    //     alert('service error')
    //     console.log(error)
    //   })
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="card col-md-6 p-5">
                    <h2>Login</h2>
                    <div ref={errorRef} className={errMsg ? "alert alert-danger d-flex align-items-center" : "d-none"} aria-live="assertive" role="alert">
                        <MdWarning className='me-1' size={25}></MdWarning>
                        <div id='error'>
                            {errMsg}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-2">
                            <label htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email"  required/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-check mb-2">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                        </div>
                        <button className="btn btn-primary bg-gradient btn-block" type="submit">Login</button>    
                    </form>
                    <p className='my-2'>Don't have an account? <Link to={"/register"}>Register here</Link></p> 
                    </div>
                </div>
            </div> 
         );
    }

 
export default Login ;