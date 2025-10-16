import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import getCharacters from "../services/api";

const HomePage = () =>{
    const [characters, setCharacters] = useState([]);
    const [name, setName] = useState("");
    const [house, setHouse] = useState("");

    useEffect(() => {
        getCharacters().then(data =>{
        setCharacters(data);
        })
  }, []);

        const handleChangeName = (ev) => {
        setName (ev.target.value);
    }

        const handleChangeHouse = (ev) => {
        setHouse (ev.target.value);
    }

    const getHouses = () => {
    const characterHouses = characters
      .map((character) => character.house)
      .filter((h) => h && h.trim() !== "");
    return [...new Set(characterHouses)];
    };

    return (
        <>

            <label htmlFor="name">Busca por personaje: </label>
            <input name="name" id="name" value={name} onChange={handleChangeName}/>
            <label htmlFor="house">
                Selecciona la casa:
                <select name="house" id="house" value={house} onChange={handleChangeHouse}>
                    <option value="">Todas</option>
                    {getHouses().map((housesName, index) => (
                        <option key={index} value={housesName}>
                            {housesName}
                        </option>
                    ))}
                </select>
            </label>

            <ul>
                {characters
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
                .map((character, id) => (
                    <li key={id}>
                        <Link to={`/character/${character.id}`}><p>{character.name}</p></Link>
                        {character.image ? <img src={character.image} alt={character.name}/> : <img src={"https://media.desenio.com/site_images/68631b0f92c536b9cc92b033_1852152599_WB0012-5.jpg"} />}
                        <p>{character.gender} | {character.species} | {character.house}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default HomePage