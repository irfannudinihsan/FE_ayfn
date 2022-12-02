import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit,faTrash,faCartPlus,} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavbarAdmin from "../components/NavbarAdmin";

const FormCountry = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("https://ayfnfebe29.up.railway.app/country");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://ayfnfebe29.up.railway.app/country/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <NavbarAdmin/>
    <h2 className="flex items-center justify-between my-4" style={{textAlign: 'center'}}>Dasboard Country</h2>
    <button className="primary mb-3 mx-3"><Link to={`/addCountry`} ><FontAwesomeIcon icon={faCartPlus}/>
          Add New
        </Link>
    </button>
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
                    to={`/editCountry/${user.id}`}>
                    
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

export default FormCountry;