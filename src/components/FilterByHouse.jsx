import "react";

const FilterByHouse = ({updateHouse, house, getHouses}) => {

        const handleChangeHouse = (ev) => {
        updateHouse (ev.target.value)}
    
    return (
        <>
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
        </>
    )
}
export default FilterByHouse