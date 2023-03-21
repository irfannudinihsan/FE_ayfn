import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import axios from "../libs/axios";
import NavbarAdmin from "../components/NavbarAdmin";
import { MdPublish, MdUnpublished } from "react-icons/md";
import instance from "../libs/axios";

const FormAdmin = () => {
  const [published, setPublished] = useState([]); /* berita sudah dipublish */
  const [unPublished, setUnPublished] = useState(
    []
  ); /* berita belum di publish */
  const [allNews, setAllNews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  console.log(unPublished, "berita belum di publish");
  console.log(published, "berita sudah di publish");
  useEffect(() => {
    getPublished();
    getUnPublished();
    getAllNews();
    setLoading(false);
  }, []);

  const getUnPublished = async () => {
    const response = await instance.get("/news/needProceed");
    setUnPublished(response.data);
  };

  const getPublished = async () => {
    const response = await instance.get("/news/proceeded");
    setPublished(response.data);
  };

  const getAllNews = async () => {
    const response1 = await instance.get("/news/all");
    const response2 = await instance.get("/news/needProceed");
    let tempArr = response1.data.concat(response2.data);
    setAllNews(tempArr.sort((x, y) => x.id - y.id));
  };

  const deleteUser = async (id) => {
    try {
      await instance.delete(`/news/${id}`);
      // getPublished();
    /*   getUnPublished(); */
    } catch (error) {
      console.log(error);
    }
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
                    <td>{news.content} </td>
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
                              display: "inline-block",
                              padding: "6px",
                              margin: "6px",
                            }}
                            to={`/unpublishnews/${news.id}`}>
                            <MdUnpublished />
                            UnPublish
                          </Link>
                        ) : (
                          <Link
                            className=""
                            to={`/publishnews/${news.id}`}
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              textDecoration: "none",
                              borderRadius: "4px",
                              display: "inline-block",
                              padding: "6px",
                              margin: "6px",
                            }}>
                            <MdPublish />
                            Publish
                          </Link>
                        )}
                        <Link
                          className=""
                          onClick={() => deleteUser(news.id)}
                          style={{
                            backgroundColor: "red",
                            color: "white",
                            textDecoration: "none",
                            borderRadius: "4px",
                            display: "inline-block",
                            padding: "6px",
                            margin: "6px",
                          }}>
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
