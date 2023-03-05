import { Link} from "react-router-dom";
import { format, parseISO } from "date-fns";



const CategoryCard = ({image, title, summary, id, createdAt, categoryName}) => {

  return(
      <>
        <div className="row mx-auto my-3 p-3 rounded-4" style={{ background : "#ECF2FF" }}>
          <div className="col-xl-4">
            <img src={image} className="img-fluid rounded-3" alt=""/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title fw-bold ">{title}</h4>

              <p className="card-text my-3">{summary}</p>

              <h6 className="card-text primary" style={{color: 'blue'}}>{categoryName}</h6> 
              <p>{format(parseISO(createdAt), "MM-dd-yyyy")}</p>
            </div>
            <div  className="btn" style={{ backgroundColor : "#0D6FFB" }} >
              <Link to={`${id}`} style={{color: 'white', textDecoration : "none"}}>Detail</Link>
            </div>
          </div>
        </div>
    </>
    )
}

export default CategoryCard;