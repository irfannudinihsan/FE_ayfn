import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdWarning } from "react-icons/md";

function Login() {
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    axios
      .post(`https://be.aseanyouthforumnews.my.id/auth/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        location.href = "/";
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 401) {
          setErrMsg("Login failed! Incorrect Email or Password.");
        } else {
          setErrMsg("Error! Something went wrong.");
        }
        errorRef.current.focus();
      });
  };
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  // const user = {
  //     email: email, setEmail,
  //     password: password, setPassword
  // }
  //   .catch(error=>{
  //     alert('service error')
  //     console.log(error)
  //   })
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <h1 className="text-center fw-bolder my-5" style={{ color: "#0D6FFB" }}>
          Selamat Datang di ASEAN YOUTH FORUM NEWS
        </h1>
        <div
          className="card  col-xl-6 col-md-8 col-sm-10 p-4 border-0 "
          style={{ background: "#ECF2FF" }}>
          <h2 className="text-center fw-bolder" style={{ color: "#0D6FFB" }}>
            Login
          </h2>
          <div
            ref={errorRef}
            className={
              errMsg ? "alert alert-danger d-flex align-items-center" : "d-none"
            }
            aria-live="assertive"
            role="alert">
            <MdWarning className="me-1" size={25}></MdWarning>
            <div id="error">{errMsg}</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group my-3">
              <label htmlFor="email">
                <h4>Email</h4>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control border-0 p-2"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">
                <h4>Password</h4>
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control border-0 p-2"
                placeholder="Password"
              />
            </div>
            <button
              className="btn bg-gradient btn-block mt-1 text-light"
              type="submit"
              style={{ background: "#0D6FFB" }}>
              Login
            </button>
          </form>
          <p className="mt-5">
            Belum punya akun? <Link to={"/register"}>Register here</Link>
          </p>
          <p className="">
            <Link to={"/loginadmin"}>Login admin</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
