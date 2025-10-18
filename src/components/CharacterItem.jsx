import "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterItem = ({character}) => {


    return (
        <>
            {character.image ? <img className="character-image-list" src={character.image} alt={character.name}/> : <img className="gap-image-list" src={"https://media.desenio.com/site_images/68631b0f92c536b9cc92b033_1852152599_WB0012-5.jpg"} />}
                <Link to={`/character/${character.id}`}><p className="paragraph-character-list-name">{character.name}</p></Link>
                <p className="paragraph-character-list-species"> {character.species}</p>
        </>
    )
}
export default CharacterItem;

CharacterItem.propTypes = {
    character: PropTypes.string.isRequired,
}