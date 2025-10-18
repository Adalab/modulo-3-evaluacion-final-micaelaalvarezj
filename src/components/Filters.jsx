import "react";
import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import PropTypes from "prop-types";

const Filters = ({updateName, name, updateHouse, house, getHouses}) => {

    return (
        <section className="filters">
            <FilterByName
            updateName={updateName}
            name={name}
            />
            <FilterByHouse
            updateHouse={updateHouse}
            house={house}
            getHouses={getHouses}
            />
        </section>
    )
}
export default Filters;

Filters.propTypes = {
    updateName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    updateHouse: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    getHouses: PropTypes.string.isRequired,
}