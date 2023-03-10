import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const EditProfile = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [image, setImage] = useState();
  const {id} = useParams
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default EditProfile;
