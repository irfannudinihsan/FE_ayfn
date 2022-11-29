// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import NewsDetail from "./pages/NewsDetail";
import Register from './pages/Register';
import Trending from "./pages/Trending";
import Category from "./pages/Category";
import Asean from "./pages/Asean";
import About from "./pages/About";
import FormData from "./pages/FormData";
import AddData from "./pages/AddData";
import EditData from "./pages/EditData";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsdetail/:id" element={<NewsDetail />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/country/:id" element={<Asean/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data" element={<FormData />} />
        <Route path="/add" element={<AddData/>}/>
        <Route path="/edit/:id" element={<EditData/>}/>
      </Routes>
    </>
  )
}

export default App
