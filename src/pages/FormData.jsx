import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit,faTrash,faCartPlus,} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FormData = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Navbar/>
    <h2 style={{textAlign: 'center'}}>Dasboard Berita</h2>
      <Link to={`/add`} ><FontAwesomeIcon icon={faCartPlus}/>
          Add New
        </Link>
        <table className="table table-secondary table-striped" style={{textAlign: 'center'}}>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Content</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.title}</td>
                <td>{user.content}</td>
                <td>{user.name}</td>
                <td>
                  <Link
                    to={`/edit/${user.id}`}>
                    
                      <FontAwesomeIcon icon={faEdit}/>Edit
                   
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}>
                   <FontAwesomeIcon icon={faTrash}/>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    <Footer/>
    </>
  );
};

export default FormData;