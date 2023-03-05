import {MdArrowBack} from "react-icons/md"
import { Link } from "react-router-dom";

const BackComponent = () => {
    return(
        <>
        <div className="container mt-4">
        <Link to={"/"}>
            <button type="button" className="btn btn-lg "><MdArrowBack/></button>
        </Link>
        </div>
        </>       
    )
}

export default BackComponent;