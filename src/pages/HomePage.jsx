import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import getCharacters from "../services/api";
import ls from "../services/localStorage";
import Filters from "../components/Filters";
import CharacterList from "../components/CharacterList";


const HomePage = () =>{
    const [characters, setCharacters] = useState(ls.get("characters",[]));
    const [name, setName] = useState("");
    const [house, setHouse] = useState("");

    useEffect(() => {
        if (characters.length === 0) {
        getCharacters().then(data => {
        setCharacters(data);
        ls.set("characters", data);
        })
    }
  }, []);

        const updateName = (value) => {
        setName (value);
    }

        const updateHouse = (value) => {
        setHouse (value);
    }

    const getHouses = () => {
    const characterHouses = characters
      .map((character) => character.house)
      .filter((h) => h && h.trim() !== "");
    return [...new Set(characterHouses)];
    };

    return (
        <>
            <img src="./src/images/harry-potter-logo.png"/>
            <Filters 
            updateName={updateName}
            name={name}
            updateHouse={updateHouse}
            house={house}
            getHouses={getHouses}
            />

            <CharacterList
            characters={characters}
            house={house}
            name={name}
            />

        </>
    )
}
export default HomePage