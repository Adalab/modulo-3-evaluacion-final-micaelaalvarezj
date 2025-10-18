import "react";
import PropTypes from "prop-types";


const CharacterCard = ({characterData}) => {

    return (
        <div className="detail-card">
        {characterData.image ? <img className="character-image-detail" src={characterData.image} alt={characterData.name}/> : <img className="gap-image-detail" src={"https://media.desenio.com/site_images/68631b0f92c536b9cc92b033_1852152599_WB0012-5.jpg"} />}
                <div className="detail-info">
                <p>{characterData.name}</p>
                <p> {characterData.alive ? "vivo" : "muerto"} | {characterData.gender} | {characterData.species} | {characterData.house}</p>
                </div>
        </div>
    )
}
export default CharacterCard;

CharacterCard.propTypes = {
    characterData: PropTypes.string.isRequired,
}