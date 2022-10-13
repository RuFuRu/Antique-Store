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
            <div className="second-collection-container">
                <h3 className="sc-h3">Collection</h3>
                <div className="collection-shop-item-filter-container">
                    <Filter/>
                    <ShoppingItems/>
                </div>
            </div>
        </div>
    )
}

export default Collection;