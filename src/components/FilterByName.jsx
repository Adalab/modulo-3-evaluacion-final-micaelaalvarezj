import "react";

const FilterByName = ({updateName, name}) => {

    const handleChangeName = (ev) => {
        updateName (ev.target.value)}
    
    return (
        <>
        <label htmlFor="name">Busca por personaje: </label>
        <input name="name" id="name" value={name} onChange={handleChangeName}/>
        </>
    )
}
export default FilterByName