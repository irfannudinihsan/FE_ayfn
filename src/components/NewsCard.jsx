import { useNavigate, Link } from "react-router-dom";

const NewsCard = ({image, title, content, id}) => {
//     const navigation = useNavigate();
//     const handleDetail = (id) => {
//         navigation(`/detail/${id}`);
//   };
return (
    <>
            <div className="m-2 card" style={{width: '18rem'}}>
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body" >
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <div className="btn btn-primary">
                    <Link to={`newsdetail/${id}` } style={{color: 'black'}} >Liat Berita</Link>
                    {/* <a href="NewsDetail" className="btn btn-dark">Liat Berita</a> */}
                    </div>
                </div>
            </div>
    </>
)}


export default NewsCard;