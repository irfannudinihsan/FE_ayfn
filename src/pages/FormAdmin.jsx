import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import axios from "../libs/axios";
import NavbarAdmin from "../components/NavbarAdmin";
import { MdPublish, MdUnpublished } from "react-icons/md";

const FormAdmin = () => {
  const [published, setPublished] = useState([]);
  const [unPublished, setUnPublished] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getPublished();
    getUnPublished();
    getAllNews();
    setLoading(false);
  }, []);

  const getPublished = async () => {
    const response = await axios.get(
      "https://ayfnfebe29.up.railway.app/news/all"
    );
    setPublished(response.data);
  };

  const getUnPublished = async () => {
    const response = await axios.get(
      "https://ayfnfebe29.up.railway.app/news/needProceed"
    );
    setUnPublished(response.data);
  };

  const getAllNews = async () => {
    const response1 = await axios.get(
      "https://ayfnfebe29.up.railway.app/news/all"
    );
    const response2 = await axios.get(
      "https://ayfnfebe29.up.railway.app/news/needProceed"
    );
    let tempArr = response1.data.concat(response2.data);
    setAllNews(tempArr.sort((x, y) => x.id - y.id));
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`/news/${id}`);
      getPublished();
      getUnPublished();
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

  if (isLoading) {
    return <div className="">Loading...</div>;
  } else {
    return (
      <>

        <NavbarAdmin />
        <h2
          className="flex items-center justify-between my-4"
          style={{ textAlign: "center" }}>
          Dasboard Admin
        </h2>
        <div className="container-fluid p-3">
          <div className="">
            <table className="table my-3" style={{ textAlign: "center" }}>
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
                {allNews.map((news, index) => (
                  <tr key={news.id}>
                    <td>{index + 1}</td>
                    <td>{news.title}</td>
                    <td>{news.content}  </td>
                    <td>{news.summary}</td>
                    <td>
                      <img src={news.image} alt="" style={{ width: "150px" }} />
                    </td>
                    <td>{news.categoryId}</td>
                    <td>
                      <div className="">
                        {news.isPublished ? (

                          
                          <Link
                            style={{
                              backgroundColor: "purple",
                              color: "white",
                              textDecoration: "none",
                              borderRadius: "4px",
                              display : "inline-block",
                              padding : "6px",
                              margin : "6px"
                            }}
                            onClick={() => unpublishUser(news.id)}>
                            <MdUnpublished />
                            UnPublish
                          </Link>
                        ) : (
                          <Link className="" to={`/publishnews/${news.id}`}
                          
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            textDecoration: "none",
                            borderRadius: "4px",
                            display : "inline-block",
                            padding : "6px",
                            margin : "6px"
                          }}
                          >
                            <MdPublish />
                            Publish
                          </Link>
                        )}
                        <Link className="" onClick={() => deleteUser(news.id)}
                        
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          textDecoration: "none",
                          borderRadius: "4px",
                          display : "inline-block",
                          padding : "6px",
                          margin : "6px"
                        }}
                        
                        >
                          <FontAwesomeIcon icon={faTrash} />
                          Delete
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default FormAdmin;
