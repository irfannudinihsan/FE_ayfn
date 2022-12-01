import { format, parseISO } from "date-fns";

const NewsDetailCard = ({title, createdAt, image, content, userDetailFullname, countryName}) => {
    return (
        <>
            <div className="container mt-3">
                <div className="berita-body container mx-5 mt-4">
                    <h1 className="col-sm-9 mb-2" style={{color: 'blue'}}>{title}</h1>
                    <h5 className="col-sm-9 mb-5">{userDetailFullname}, {countryName}</h5>
                    <p className="col-7 ">{format(parseISO(createdAt), "MM-dd-yyyy")}</p>
                    <img className="col-7 mb-3" src={image} alt="" />
                    <p className="berita-isi col-sm-9 ">{content}</p>
                </div>
            </div>
        </>
    )
}

export default NewsDetailCard;