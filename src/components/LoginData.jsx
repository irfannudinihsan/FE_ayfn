import React, { useState } from 'react'
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image,setImage] = useState('');
    const [countryId,setCountryId] = useState('')
    const [msg, setMsg] = useState('');
    // const history = useHistory();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://ayfnfebe29.up.railway.app/auth/login', {
                email: email,
                password: password
            });
            navigate('/')
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                            <p>Don't have an account? <Link to={"/register"}>Register here</Link></p> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

 
export default Login ;