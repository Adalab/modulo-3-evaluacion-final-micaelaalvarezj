import "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <ul>
            <Link to="/">El personaje que buscas no existe, ir a la Home</Link>
        </ul>
    )
}

export default NotFoundPage;