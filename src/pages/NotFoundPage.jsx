import "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <ul>
            <li><Link to="/">Página no encontrada, ir a la Home</Link></li>
        </ul>
    )
}

export default NotFoundPage;