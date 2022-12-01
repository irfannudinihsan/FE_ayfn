// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { Routes, Route, Form } from "react-router-dom";
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
import FormCategory from "./pages/FormCategory";
import EditCategory from "./pages/EditCategory";
import AddCategory from "./pages/AddCategory";
import FormCountry from "./pages/FormCountry";
import AddCountry from "./pages/AddCountry";
import EditCountry from "./pages/EditCountry";
import TrendingDetail from "./pages/TrendingDetail";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsdetail/:id" element={<NewsDetail />} />
        <Route path="/trending/" element={<Trending />} >
          <Route path=":id" element={<TrendingDetail/>} />
        </Route>
        <Route path="/category/:id" element={<Category />} />
        <Route path="/country/:id" element={<Asean/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data" element={<FormData />} />
        <Route path="/add" element={<AddData/>}/>
        <Route path="/edit/:id" element={<EditData/>}/>
        <Route path="/category" element={<FormCategory />} />
        <Route path="/addCategory" element={<AddCategory/>}/>
        <Route path="/editCategory/:id" element={<EditCategory/>}/>
        <Route path="/country" element={<FormCountry />} />
        <Route path="/addCountry" element={<AddCountry/>}/>
        <Route path="/editCountry/:id" element={<EditCountry/>}/>
      </Routes>
    </>
  )
}

export default App
