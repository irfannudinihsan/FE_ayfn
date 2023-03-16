import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import instance from "../libs/axios";

const UnPublishNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState();
  const [isPublished, setIsPublished] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();


  console.log(isPublished)
  useEffect(() => {
    getCategory();
    getNewsById();
  }, []);

  const getCategory = async () => {
    const response = await instance.get("/category");
    setCategories(response.data);
  };

  const getNewsById = async () => {
    const response = await instance.get(`/news/detail/${id}`);
    setTitle(response.data.title);
    setContent(response.data.content);
    setSummary(response.data.summary);
    setCategoryName(response.data.Category.name);
    setIsPublished(response.data.isPublished);
    setImage(response.data.image);
  };

  const handleChecked = async () => {
    setIsPublished(!isPublished);
  };

  const data = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("summary", summary);
    formData.append("image", image),
    formData.append("categoryId", categoryName);
    formData.append("isPublished", isPublished);

    try {
      await instance.put(`/news/unproceed/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/FormAdmin");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="container">
        <div className="row justify-content-center">
          <div className="flex item-center justify-between my-4 text-center">
            <h2>Unpublish News</h2>
          </div>
          <Link to={"/formadmin"}>
            <button type="button" className="btn btn-lg">
              <MdArrowBack />
            </button>
          </Link>

          <div
            className="news-detail-background container px-5 py-4 rounded-4"
            style={{ backgroundColor: "#F9FBFF" }}>
            <form onSubmit={data}>
              <div className="field-3">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    className="input border-0 p-2"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="image">Image</label>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  className="form-control border-0"
                  placeholder="Image Link"
                  required
                />
              </div>
              <div className="field my-3">
                <label className="label">Content</label>
                <div className="control">
                  <textarea
                    type="text"
                    className="form-control input border-0"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    // placeholder="Email"
                  />
                </div>
              </div>
              <div className="field my-3">
                <label className="label">Summary</label>
                <div className="control">
                  <textarea
                    type="text"
                    className="input"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    // placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="categories">Category</label>
                <select
                  name="categoriesId"
                  id="categories"
                  className="form-select"
                  onChange={(e) => setCategoryName(e.target.value)}
                  required>
                  {categories.map((item, index) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group mb-3">please</div>
              <label htmlFor="categories">Publish</label>

              <input
                type="checkbox"
                id="isPublished"
                name="isPublished"
                checked={!isPublished}
                onChange={handleChecked}
              />
              <div className="mb-2 mt-4">
                <button type="submit" className="btn btn-success">
                  Unpublish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnPublishNews;
