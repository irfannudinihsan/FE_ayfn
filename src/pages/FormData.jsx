import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "../libs/axios";

const FormData = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("/news");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`/news/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }

    var config = {
      method: "post",
      url: `/news`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios(config).then(function (response) {
      log("ini respon create: ", response);
      swal({
        title: "Program berhasil dibuat!",
        icon: "success",
        button: "OK!",
      });
      Navigate("/organization");
    });
    // .catch(function (eror) {
    //   log('ini eror create: ', error);
    // });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2
          className="flex items-center justify-between my-4"
          style={{ textAlign: "center" }}>
          <h2 className="my-5 fw-bold">Dasboard</h2>
        </h2>
        <Link
          to={`/add`}
          style={{
            padding: "5px",
            backgroundColor: "#0D6FFB",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
          }}>
          <FontAwesomeIcon icon={faPlus} /> Add Data
        </Link>

        <table className="table my-3 rounded" style={{ textAlign: "center" }}>
          <thead style={{ backgroundColor: "#0D6FFB", color: "white" }}>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Content</th>
              <th>Summary</th>
              <th>Image</th>
              <th>CategoryId</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "#F9FBFF" }}>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.title}</td>
                <td>{user.content}</td>
                <td>{user.summary}</td>
                <td>
                  <img
                    src={user.image}
                    alt=""
                    className="img-fluid"
                    style={{ width: "150px" }}
                  />
                </td>
                <td>{user.categoryId}</td>
                <td>
                  <Link
                    className="mx-1"
                    to={`/edit/${user.id}`}
                    style={{
                      padding: "5px",
                      backgroundColor: "green",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "4px",
                      display : "inline-block",
                      margin : "10px"
                    }}>
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </Link>
                  <Link
                    className="mx-1"
                    onClick={() => deleteUser(user.id)}
                    style={{
                      padding: "5px",
                      backgroundColor: "red",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "4px",
                      display : "inline-block",
                      margin : "10px"
                    }}>
                    <FontAwesomeIcon icon={faTrash}/>Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default FormData;
