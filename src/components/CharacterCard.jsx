import "react"

const CharacterCard = ({characterData}) => {

    return (
        <>
        {characterData.image ? <img className="characterImageDetail" src={characterData.image} alt={characterData.name}/> : <img className="gapImageDetail" src={"https://media.desenio.com/site_images/68631b0f92c536b9cc92b033_1852152599_WB0012-5.jpg"} />}
                <p>{characterData.name}</p>
                <p>{characterData.gender} | {characterData.species} | {characterData.house}</p>
        </>
    )
}
export default CharacterCard;