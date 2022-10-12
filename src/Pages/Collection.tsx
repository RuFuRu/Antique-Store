import Filter from "../Components/Filter";
import Header from "../Components/Header";
import Information from "../Components/Information";
import ShoppingItems from "../Components/ShoppingItems";
import '../Sass/Collection.scss';

function Collection() {
    return (
        <div className="collection-container">
            <Header/>
            <Information/>
            <div className="collection-filter-container">
                <Filter/>
                <ShoppingItems/>
            </div>
        </div>
    )
}

export default Collection;