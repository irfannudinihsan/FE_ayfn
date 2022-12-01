import { Link, useNavigate } from "react-router-dom";


const TrendingCard = ({image, title, content, id}) => {
  const navigate = useNavigate();  
  return(
      <>
        <div className="row g-0 mx-auto">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt=""/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title " style={{color: 'blue'}}>{title}</h5>
              <p className="card-text">{content}</p>
            </div>
            <button type="button" className="btn btn-primary  btn-sm" onClick={()=> navigate(`${id}`)}>News Detail
              {/* <Link to={`detail/w${id}`} style={{color: 'white'}}></Link> */}
            </button>
          </div>
        </div>
    </>
    )
}

export default TrendingCard;