import "react"

const CharacterItem = ({character}) => {


    return (
        <>
        {character.image ? <img className="characterImageList" src={character.image} alt={character.name}/> : <img className="GapImageList" src={"https://media.desenio.com/site_images/68631b0f92c536b9cc92b033_1852152599_WB0012-5.jpg"} />}
        <p>{character.gender} | {character.species} | {character.house}</p>
        </>
    )
}
export default CharacterItem;