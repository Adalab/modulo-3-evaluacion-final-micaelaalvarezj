import "react";
import { Link, useParams} from "react-router-dom";
import { useState, useEffect} from "react";
import ls from "../services/localStorage"
import CharacterCard from "../components/CharacterCard";
import getCharacters from "../services/api";



const DetailPage = () => {
    const { id } = useParams();
    const [characters, setCharacters] = useState(ls.get("characters",[]));
    const characterData = characters.find(character => character.id === id);
    
    useEffect(() => {
        if (characters.length === 0) {
        getCharacters().then(data => {
        setCharacters(data);
        ls.set("characters", data);
        })
    }
  }, []);

    return (
        <>
        {characterData ? (
            <>
                <CharacterCard characterData={characterData}/>
                <Link className="back-link" to="/">Volver</Link>
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