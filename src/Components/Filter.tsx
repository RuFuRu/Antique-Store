import { useContext, MouseEvent } from 'react';
import AntiqueStoreContext from '../AntiqueStoreContext';
import '../Sass/Filter.scss';



function Filter() {
    const context = useContext(AntiqueStoreContext);

    const filterOut = (e: MouseEvent) => {
        const eventTarget = e.target as HTMLButtonElement;
        if(eventTarget.className === 'fb-clicked') {
            context?.setFilter(null);
            eventTarget.classList.toggle('fb-clicked');
        }
        context?.setFilter(eventTarget.getAttribute('name'));
        eventTarget.classList.toggle('fb-clicked');
    }

    return (
        <div className="filter-container">
            <h3 className="filter-h3">Filter</h3>
            <hr id="filter-hr1"/>
            <div className="filter-filter-type-btn-container">
                <button className="filter-type-button" name="firearm" onClick={(e) => (filterOut(e))}>Firearms</button>
                <button className="filter-type-button" name="navigation" onClick={(e) => (filterOut(e))}>Navigation</button>
            </div>
            <hr id="filter-hr2"/>
            <div className="filter-filter-btn">
                <button className="filter-button">Filter</button>
            </div>
        </div>
    )
}

export default Filter;