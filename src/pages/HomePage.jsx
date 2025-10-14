import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import getCharacters from "../services/api";

const HomePage = () =>{
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters().then(data =>{
        setCharacters(data);
        })
  }, []);

    return (
        <>
            <ul>
                {characters.map((character, id) => (
                    <li key={id}>
                        {character.name}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default HomePage