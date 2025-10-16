import "react";
import { Link } from "react-router-dom";
import CharacterItem from "./CharacterItem";

const UsersList = ({characters, house, name}) => {

     const filteredCharacters =  characters
                .filter(character => character.name.toLowerCase().includes(name.toLowerCase()))
                .filter(character =>{
                        if (house === "") {
                            return true;
                        } else {
                            return house === character.house;
                        }
                    })
                .sort((a, b) =>{
                    return a.name.localeCompare(b.name)
                })

    return (
        <ul>
                {filteredCharacters.length === 0 ? (<p>No hay ningún personaje que coincida con la palabra {`${name}`}</p>) :
                filteredCharacters.map((character, id) =>
                    <li key={id}>
                        <Link to={`/character/${character.id}`}><p>{character.name}</p></Link>
                        <CharacterItem
                        character={character}
                        />
                    </li>
                )}
            </ul>
    )
}
export default UsersList
