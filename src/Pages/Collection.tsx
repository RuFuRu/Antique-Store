import Disclaimer from "../Components/Disclaimer";
import Filter from "../Components/Filter";
import Footer from "../Components/Footer";
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
            <Disclaimer/>
            <Footer/>
        </div>
    )
}

export default Collection;