import { MouseEvent } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../App/store';
import '../Sass/components/Filter.scss';
import { setFilter } from '../Features/filterSlice';
import { setUnFilter } from '../Features/unFilterSlice';



function Filter() {
    const filter = useSelector((state: RootState) => state.filtering.value);
    const dispatch = useDispatch();

    const filterOut = (e: MouseEvent) => {
        const eventTarget = e.target as HTMLButtonElement;
        if(eventTarget.getAttribute('name') !== 'reset-filter') {
            dispatch(setFilter(eventTarget.getAttribute('name')!))
            dispatch(setUnFilter(false));
            console.log(filter)
        } else {
            dispatch(setUnFilter(true));
        }
    }

    return (
        <div className="filter-container">
            <h3 className="filter-h3">Filter</h3>
            <hr id="filter-hr1"/>
            <div className="filter-filter-type-btn-container">
                <button className="filter-type-button" name="firearm" onClick={(e) => (filterOut(e))}>Firearms</button>
                <button className="filter-type-button" name="navigation" onClick={(e) => (filterOut(e))}>Navigation</button>
                <button className="filter-type-button" name="clock" onClick={(e) => (filterOut(e))}>Clocks</button>
            </div>
            <hr id="filter-hr2"/>
            <div className="filter-filter-btn">
                <button className="filter-button" name="reset-filter" onClick={(e) => (filterOut(e))}>Reset</button>
            </div>
        </div>
    )
}

export default Filter;