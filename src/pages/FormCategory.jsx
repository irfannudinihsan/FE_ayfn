import React, { useState, useEffect } from "react";
import axios from "../libs/axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import NavbarAdmin from "../components/NavbarAdmin";
import instance from "../libs/axios";
const FormCategory = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await instance.get("/category");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await instance.delete(`/category/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }

  
  };

  return (
    <>
      <NavbarAdmin />
      <div className="container-fluid">
      <h2
        className="flex items-center justify-between my-4"
        style={{ textAlign: "center" }}>
        Dasboard Category
      </h2>
      <Link
          to={`/addCategory`}
          style={{
            padding: "5px",
            backgroundColor: "#0D6FFB",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
          }}>
          <FontAwesomeIcon icon={faPlus} /> Add Data
        </Link>

      <table
        className="table my-3"
        style={{ textAlign: "center" }}>
        <thead  style={{ backgroundColor: "#0D6FFB", color: "white" }}>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#F9FBFF" }}>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>
                <Link
                  to={`/editCategory/${user.id}`}
                  className="mx-1"
                  style={{
                    padding: "5px",
                    backgroundColor: "green",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "4px",
                  }}>
                  <FontAwesomeIcon icon={faEdit} />
                  Edit
                </Link>
                <Link
                  onClick={() => deleteUser(user.id)}
                  className="mx-1"
                  style={{
                    padding: "5px",
                    backgroundColor: "red",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "4px",
                  }}>
                  <FontAwesomeIcon icon={faTrash} />
                  Delete
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

export default FormCategory;
