import "react";
import PropTypes from "prop-types";

const FilterByName = ({updateName, name}) => {

    const handleChangeName = (ev) => {
        updateName (ev.target.value)}
    
    return (
        <div className="filter filter-by-name">
            <label htmlFor="name">Busca por personaje: </label>
            <input name="name" id="name" value={name} onChange={handleChangeName}/>
        </div>
    )
}
export default FilterByName;

FilterByName.propTypes = {
    updateName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}