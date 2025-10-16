import "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <ul>
            <li><Link to="/">El personaje que buscas no existe, ir a la Home</Link></li>
        </ul>
    )
}

export default NotFoundPage;