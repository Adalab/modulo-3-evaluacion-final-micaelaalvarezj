const getCharacters = () => {
    return fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.map(character =>{
          return {
            id: character.id,
            name: character.name, 
            image: character.image,
            gender: character.gender,
            species: character.species,
            house: character.house,
            alive: character.alive,
          };
        })
        return cleanData
      });
  }
  export default getCharacters;