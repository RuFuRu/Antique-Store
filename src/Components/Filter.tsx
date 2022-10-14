import { useContext, MouseEvent } from 'react';
import AntiqueStoreContext from '../AntiqueStoreContext';
import '../Sass/components/Filter.scss';



function Filter() {
    const context = useContext(AntiqueStoreContext);

    const filterOut = (e: MouseEvent) => {
        const eventTarget = e.target as HTMLButtonElement;
        if(eventTarget.getAttribute('name') !== 'reset-filter') {
            context?.setFilter(eventTarget.getAttribute('name'));
            context?.setUnFilter(false);
        } else {
            context?.setUnFilter(true);
        }
    }

    return (
        <div className="filter-container">
            <h3 className="filter-h3">Filter</h3>
            <hr id="filter-hr1"/>
            <div className="filter-filter-type-btn-container">
                <button className="filter-type-button" name="firearm" onClick={(e) => (filterOut(e))}>Firearms</button>
                <button className="filter-type-button" name="navigation" onClick={(e) => (filterOut(e))}>Navigation</button>
                <button className="filter-type-button" name="reset-filter" onClick={(e) => (filterOut(e))}>Reset</button>
            </div>
            <hr id="filter-hr2"/>
            <div className="filter-filter-btn">
                <button className="filter-button">Filter</button>
            </div>
        </div>
    )
}

export default Filter;