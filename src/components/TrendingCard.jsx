import { Link} from "react-router-dom";
import { format, parseISO } from "date-fns";



const TrendingCard = ({image, title, summary, id, createdAt, categoryName}) => {

  return(
      <>
        <div className="row g-0 mx-auto">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt=""/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title " style={{color: 'blue'}}>{title}</h4>

              <p className="card-text">{summary}</p>

              <h6 className="card-text primary" style={{color: 'blue'}}>{categoryName}</h6> 
              <p>{format(parseISO(createdAt), "MM-dd-yyyy")}</p>
            </div>
            <button type="button" className="btn btn-primary btn-sm mx-3" >
              <Link to={`${id}`} style={{color: 'white'}}>News Detail</Link>
            </button>
          </div>
        </div>
    </>
    )
}

export default TrendingCard;