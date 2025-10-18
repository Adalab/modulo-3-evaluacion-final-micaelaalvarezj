import "react";
import { Link } from "react-router-dom";
import CharacterItem from "./CharacterItem";
import PropTypes from "prop-types";

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
        <div className="list">
            {filteredCharacters.length === 0 ? (<p>No hay ningún personaje que coincida con la palabra {`${name}`}</p>) :
            filteredCharacters.map((character, id) =>
                <li className="item-list" key={id}>
                    <CharacterItem
                    character={character}
                    />
                </li>
            )}
        </div>
    )
}
export default UsersList;

UsersList.propTypes = {
    characters: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
