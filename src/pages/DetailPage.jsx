import "react";
import { Link, useParams} from "react-router-dom";
import ls from "../services/localStorage"
import CharacterCard from "../components/CharacterCard";


const DetailPage = () => {
    const { id } = useParams();
    const characters = ls.get("characters", []);
    const characterData = characters.find(character => character.id === id);

    return (
        <>
        {characterData ? (
            <>
            <CharacterCard
            characterData={characterData}
            />
            <Link className="back-link" to="/">Volver</Link>
            </>
        ) : (<>
                <p>Usuario no encontrado</p>
                <Link to="/">Volver</Link>
                </>
            )}
        </>
    )
}

export default DetailPage;