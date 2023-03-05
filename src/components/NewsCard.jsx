import { Link } from "react-router-dom";

const NewsCard = ({image, title, summary, id}) => {

return (
    <>
            <div className=" mt-5 mx-3 card p-3 border-0 rounded-3" >
                <img src={image} className="rounded-3" alt="" />
                <div className="card-body mt-3" style={{ padding : 0 }} >
                    <h5 className="card-title fw-bold" >{title}</h5>

                    <p className="card-text">{summary}</p>

                    <div className="btn " style={{ backgroundColor : "#0D6FFB" }}>
                    <Link to={`newsdetail/${id}`} style={{color: 'white', textDecoration : "none",  }} > <span>detail</span> </Link>
                    </div>
                </div>
            </div>
    </>
)}


export default NewsCard;