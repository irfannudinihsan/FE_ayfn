const AseanCard = ({image, title, content}) => {
    return(
        <>
        <div className="row g-0 mx-auto">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt=""/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{color: 'blue'}}>{title}</h5>
              <p className="card-text">{content}</p>
            </div>
          </div>
        </div>
        </>
    )
}

export default AseanCard