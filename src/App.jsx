import './App.css'
import { Routes, Route, Form } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Login from "./pages/Login";
import NewsDetail from "./pages/NewsDetail";
import Register from "./pages/Register";
import Trending from "./pages/Trending";
import Category from "./pages/Category";
import Asean from "./pages/Asean";
import About from "./pages/About";
import FormData from "./pages/FormData";
import ProfileData from "./pages/ProfileData";
import ProfileEdit from "./pages/ProfileEdit";
import AddData from "./pages/AddData";
import EditData from "./pages/EditData";
import FormCategory from "./pages/FormCategory";
import EditCategory from "./pages/EditCategory";
import AddCategory from "./pages/AddCategory";
import FormCountry from "./pages/FormCountry";
import AddCountry from "./pages/AddCountry";
import EditCountry from "./pages/EditCountry";
import TrendingDetail from "./pages/TrendingDetail";
import CategoryDetail from "./pages/CategoryDetail";
import AseanDetail from "./pages/AseanDetail";
import LoginAdmin from "./pages/LoginAdmin";
import FormAdmin from "./pages/FormAdmin";
import PublishNews from "./pages/PublishNews";
import UnPublishNews from './pages/UnPublishNews';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/newsdetail/:id" element={<NewsDetail />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/trending/:id" element={<TrendingDetail />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/category/:id/:id" element={<CategoryDetail />} />
        <Route path="/country/:id" element={<Asean />} />
        <Route path="/country/:id/:id" element={<AseanDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data" element={<FormData />} />
        <Route path="/profileData" element={<ProfileData />} />
        <Route path="/profileEdit" element={<ProfileEdit />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/edit/:id" element={<EditData />} />
        <Route path="/category" element={<FormCategory />} />
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/editCategory/:id" element={<EditCategory />} />
        <Route path="/country" element={<FormCountry />} />
        <Route path="/addCountry" element={<AddCountry />} />
        <Route path="/editCountry/:id" element={<EditCountry />} />
        <Route path="/formAdmin" element={<FormAdmin />} />
        <Route path="/publishnews/:id" element={<PublishNews />} />
        <Route path="/unpublishnews/:id" element={<UnPublishNews/>} />
      </Routes>
    </>
  );
}

export default App;
