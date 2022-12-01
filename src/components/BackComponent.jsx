import {MdArrowBack} from "react-icons/Md"
import { Link } from "react-router-dom";

const BackComponent = () => {
    return(
        <>
        <div className="container mt-4">
        <Link to={"/"}>
            <button type="button" class="btn btn-primary"><MdArrowBack/>Back</button>
        </Link>
        </div>
        </>       
    )
}

export default BackComponent;