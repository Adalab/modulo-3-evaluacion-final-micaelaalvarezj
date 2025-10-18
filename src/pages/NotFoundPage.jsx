import "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <Link to="/">El personaje que buscas no existe, ir a la Home</Link>
        </>
    )
}

export default NotFoundPage;