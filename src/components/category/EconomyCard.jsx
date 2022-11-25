const EconomyCard = ({image, title, content}) => {
    return(
        <>
        <div className="card mb-3">
        <div className="row g-0 mx-auto" style={{width: "1200px"}}>
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt=""/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{content}</p>
              {/* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
        </div>
        </div>
        </>
    )
}

export default EconomyCard