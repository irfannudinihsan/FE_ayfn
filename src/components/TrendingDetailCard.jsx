import { format, parseISO } from "date-fns";

const TrendingDetailCard = ({title, createdAt, image, content}) => {
    return (
        <>
            <div className="container mt-3">
                <div className="berita-body container mx-5 mt-4">
                    <h1 className="col-sm-9 p-3" style={{color: 'blue'}}>{title}</h1>
                    {/* <h6 className="col-sm-9 p-3">{UserDetail_fullname}</h6> */}
                    <p className="col-7 p-3">{format(parseISO(createdAt), "MM-dd-yyyy")}</p>
                    <img className="col-7 p-3" src={image} alt="" />
                    <p className="berita-isi col-sm-9 p-3">{content}</p>
                </div>
            </div>
        </>
    )
}

export default TrendingDetailCard;