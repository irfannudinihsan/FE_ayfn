import {useEffect, useRef, useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import { MdCheckCircle, MdWarning } from 'react-icons/md';
const RegisterData = () => {
    const errorRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setName] = useState('');
    const [image, setImage] = useState(null);
    const [countryId, setCountryId] = useState('');
    const [countries, setCountries] = useState([]);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const clearAllForm = () => {
        setEmail(''); setCountryId(''); setName(''); setImage(null); setPassword('');
        document.getElementById('form').reset();
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target)
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('fullName', fullName);
        data.append('image', image);
        data.append('countryId', countryId);
        console.log(data.get('image'))
        axios.post(`https://ayfnfebe29.up.railway.app/auth/register`,data
        ).then(res => {
            console.log(res);
            console.log(res.data);
            setSuccess(true);
            clearAllForm();
        }).catch(err => {
            console.log(err.response)
            if(err.response.status === 401 || err.response.status === 422){
                setErrMsg('Registration failed! Please fill in all the required fields.');
            } else {
                setErrMsg('Error! Something went wrong.');
            }
            errorRef.current.focus();
        })
    }
    
    useEffect(() => {
        axios.get(`https://ayfnfebe29.up.railway.app/country`)
        .then(res => {
            setCountries(res.data)
        });
        setErrMsg('');
    }, [email, password, fullName, image, countryId]);
        
    console.log(countries)
    return(
        <>
        <div className="container-fluid">
                <div className="row justify-content-center">
                <h1 className='text-center fw-bolder my-5' style={{ color : "#0D6FFB" }}>Selamat Datang di ASEAN YOUTH FORUM NEWS</h1>
                <div className="card  col-xl-6 col-md-8 col-sm-10 p-4 border-0 " style={{ background: "#ECF2FF" }}>
                <h2 className='text-center fw-bolder' style={{ color : "#0D6FFB" }}>Register</h2>
                        {
                            success ? (
                                <div className={"alert alert-success alert-dismissible fade show d-flex align-items-center"} aria-live="assertive" role="alert">
                                    <MdCheckCircle className='me-1' size={25}></MdCheckCircle>
                                    <strong>Registration success!</strong>&nbsp;Your account has been created. Continue to&nbsp;<Link to={'/login'}>login</Link>&nbsp;page
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )
                            : ''
                        }
                        <div ref={errorRef} className={errMsg ? "alert alert-danger d-flex align-items-center" : "d-none"} aria-live="assertive" role="alert">
                            <MdWarning className='me-1' size={25}></MdWarning>
                            <div id='error'>
                                {errMsg}
                            </div>
                        </div>
                        <form onSubmit={onSubmitHandler} id="form">
                            <div className="form-group my-3">
                                <label htmlFor="name">Name</label>
                                <input value={fullName} onChange={(e) => setName(e.target.value)} type="name" className="form-control border-0 p-2" placeholder="Name"  required/>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="email">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control border-0 p-2" placeholder="Email"  required/>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control border-0 p-2" placeholder="Min.8 letters" required/>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="image">Image</label>
                                <input onChange={(e) => setImage(e.target.files[0])} type="file" className="form-control border-0 p-2" placeholder="Image Link" required/>
                            </div>
                            <div className='form-group my-3'>
                                <label htmlFor="countries">Country</label>
                                <select name="countryId" id="countries" className='form-select border-0 p-2' onChange={(e) => setCountryId(e.target.value)} required>
                                    <option value="" selected>Country</option>
                                    {
                                        countries.map((item, id) => {
                                            return <option value={item.id}>{item.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className='mt-3'>
                                <button type="submit" className="btn btn-primary bg-gradient btn-block me-1">Register</button>
                            </div>
                            <div className='mt-3'>
                                Sudah punya akun?<Link to={'/login'}> Login</Link>
                            </div>
                        </form>
                    </div>                       
                </div>
            </div> 
        </>

    )
}

export default RegisterData;