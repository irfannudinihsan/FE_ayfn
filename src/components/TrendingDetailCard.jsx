import { format, parseISO } from "date-fns";

const TrendingDetailCard = ({
  title,
  createdAt,
  image,
  content,
  userDetailFullname,
  countryName,
}) => {
  return (
    <>
      <div
        className="news-detail-background container px-5 py-4 rounded-4"
        style={{ backgroundColor: "#F9FBFF" }}>
        <h1 className="fw-bolder">{title}</h1>

        <p className="">{format(parseISO(createdAt), "MM-dd-yyyy")}</p>
        <img className=" mb-3 rounded-4 img-fluid" src={image} alt="" />
        <h5 className="fw-light">
          {userDetailFullname}, {countryName}
        </h5>
        <p className=" col-sm-9 ">{content}</p>
      </div>
    </>
  );
};

export default TrendingDetailCard;
