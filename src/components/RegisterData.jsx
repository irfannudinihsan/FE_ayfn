import {useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

const RegisterData = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, name);
    }

    const handleAPI =()=>{
        axios.post("https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/users"), {
            name: name,    
            email: email,
            password: password,
        }
        // .then(result => {
        //     console.log(result.data)
        //     alert('success done')
        // })
        .catch(err => {
            console.log(err)
            alert('error')
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
                                    <Link to={"/"} type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleAPI}>Register</Link>                                     
                            </form>
                        </div>                       
                </div>
            </div> 
        </>

    )
}

export default RegisterData;