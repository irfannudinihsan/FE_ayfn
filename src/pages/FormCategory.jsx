import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit,faTrash,faCartPlus,} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FormCategory = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
      var config = {
        method: 'get',
        url: `/news`,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
      };
      const response = await axios(config);
      setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://ayfnfebe29.up.railway.app/category/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Navbar/>
    <h2 style={{textAlign: 'center'}}>Dasboard Category</h2>
      <Link to={`/addCategory`} ><FontAwesomeIcon icon={faCartPlus}/>
          Add New
        </Link>
        <table className="table table-secondary table-striped" style={{textAlign: 'center'}}>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              {/* <th>Content</th>
              <th>Summary</th>
              <th>CategoryId</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                {/* <td>{user.content}</td>
                <td>{user.summary}</td>
                <td>{user.categoryId}</td> */}
                <td>
                  <Link
                    to={`/editCategory/${user.id}`}>
                    
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

export default FormCategory;