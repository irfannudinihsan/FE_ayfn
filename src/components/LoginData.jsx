import React, { useState, useEffect } from "react";
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../services/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );


  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

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

export default Login;