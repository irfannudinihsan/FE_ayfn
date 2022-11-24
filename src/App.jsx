// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import NewsDetail from "./pages/NewsDetail";
import Register from './pages/Register';
import Trending from "./pages/Trending";
import Economy from "./pages/categorypages/Economy";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsdetail/:id" element={<NewsDetail />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/economy/:id" element={<Trending />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
