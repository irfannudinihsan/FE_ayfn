import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

const NewsCard = ({ image, title, summary, id, CategoryName, createdAt,  }) => {
  return (
    <>
      <div
        className=" mt-5 card p-3 border-0 rounded-3"
        style={{ background: "#ECF2FF" }}>
        <img src={image} className="rounded-3" alt="" />
        <div className="card-body mt-3" style={{ padding: 0 }}>
          <h5 className="card-title fw-bold">{title}</h5>

          <p className="card-text">{summary}</p>

          <h6 className="card-text primary" style={{ color: "blue" }}>
            {CategoryName}
          </h6>
          <p>{format(parseISO(createdAt), "MM-dd-yyyy")}</p>
          <div className="btn " style={{ backgroundColor: "#0D6FFB" }}>
            <Link
              to={`newsdetail/${id}`}
              style={{ color: "white", textDecoration: "none" }}>
              {" "}
              <span>detail</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
