import "react";
import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";

const Filters = ({updateName, name, updateHouse, house, getHouses}) => {

    return (
        <section>
            <h1>Filtros</h1>
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