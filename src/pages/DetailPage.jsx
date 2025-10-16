import "react";
import { Link, useParams} from "react-router-dom";

const DetailPage = ({character}) => {
    const { id } = useParams();
    const characters = ls.get("characters", []);
    const characterData = character.find(character => character.id === id);

    console.log(character);
    console.log(id);

    return (
        <>
        {characterData ? (
            <>
                {character.image ? <img src={character.image} alt={character.name}/> : <img src={"https://media.desenio.com/site_images/68631b0f92c536b9cc92b033_1852152599_WB0012-5.jpg"} />}
                <p>{character.gender} | {character.species} | {character.house}</p>
            <Link to="/">Volver</Link>
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