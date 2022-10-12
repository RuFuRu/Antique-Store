import '../Sass/Filter.scss';

function Filter() {
    return (
        <div className="filter-container">
            <h3 className="filter-h3">Filter</h3>
            <hr id="filter-hr1"/>
            <div className="filter-filter-type-btn-container">
                <button className="filter-type-button">Firearms</button>
                <button className="filter-type-button">Navigation</button>
            </div>
            <hr id="filter-hr2"/>
            <div className="filter-filter-btn">
                <button className="filter-button">Filter</button>
            </div>
        </div>
    )
}

export default Filter;