import React, { useState, useEffect } from "react";
import axios from "axios";
import instance from "../libs/axios";
import { useNavigate, useParams } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const EditCategory = () => {
  const [name, setName] = useState("");
  // const [content, setContent] = useState("");
  // const [summary, setSummary] = useState("");
  // const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateData = async (e) => {
    // e.preventDefault();
    // try {
    //   await axios.patch(`https://ayfnfebe29.up.railway.app/category/${id}`, {
    //     name,
    //     // content,
    //     // summary,
    //     // categoryId,
    //   });
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    // }

    const formData = new FormData();

    formData.append("name", name);
    // formData.append('content', content);
    // formData.append('summary', summary);
    // formData.append('image', image);
    // formData.append('categoryId', categoryName);
    // console.log(data.get('image'))
    try {
      await instance.put(`/category/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  const getUserById = async () => {
    const response = await instance.get(`/category/${id}`);
    console.log(response);
    setName(response.data.name);
    // setContent(response.data.content);
    // setName(response.data.name);
  };

  return (
    <>
      <NavbarAdmin />
      <div className="container">
        <div className="row justify-content-center">
          <div className="flex items-center justify-between my-4 text-center">
            <h2>Update Data Category</h2>
          </div>

          <Link to={"/category"}>
            <button type="button" class="btn btn-lg">
              <MdArrowBack />
            </button>
          </Link>

          <div
            className="news-detail-background container px-5 py-4 rounded-4"
            style={{ backgroundColor: "#F9FBFF" }}>
            <form onSubmit={updateData}>
              <div className="field my-3">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="form-control border-0"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2 mt-4">
                <button type="submit" className="btn btn-success">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditCategory;
