import React, { useState } from "react";
import axios from "../libs/axios";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import instance from "../libs/axios";

const AddCountry = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const saveData = async (e) => {
    e.preventDefault();

    try {
      await instance.post("/country", { name });
      navigate("/country");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <NavbarAdmin />
      <div className="container">
        <div className="row justify-content-center">
          <div className="flex items-center justify-between my-4 text-center">
            <h2>Create Data Country</h2>
          </div>

          <Link to={"/country"}>
            <button type="button" className="btn btn-lg">
              <MdArrowBack />
            </button>
          </Link>

          <div
            className="news-detail-background container px-5 py-4 mb-5 rounded-4"
            style={{ backgroundColor: "#F9FBFF" }}>
            <form onSubmit={saveData}>
              <div className="field my-3">
                <label htmlFor="label" className="form-label">
                  Country
                </label>

                <div className="control">
                  <input
                    className="input border-0 p-2"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2 mt-4">
                <button type="submit" className="btn btn-success">
                  Create
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

export default AddCountry;
