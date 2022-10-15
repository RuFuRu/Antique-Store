import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Information from "../Components/Information";
import shopItems from "../Data/shopItems.json";
import '../Sass/pages/Product.scss';
import currencyFormat from "../OtherFunctions/currencyFormat";
import { useContext, useState } from "react";
import AntiqueStoreContext from "../AntiqueStoreContext";


function Product() {
    const context = useContext(AntiqueStoreContext);
    const params = useParams();
    const urlId = parseInt(params.id!);
    const [value, setValue] = useState<number>();

    function addToCart() {
        context?.setShopProducts([...context.shopProducts, {id: urlId, amount: value}]);
    }

    return (
        <div className="product-page-container">
            <Header/>
            <Information/>
                {shopItems.filter(item => item.id === urlId).map(item => (
                    <div className="second-product-page-container" key={item.id}>
                        <div className="product-page-left-side">
                            <img src={item.url} alt="product-image" className="ppls-img" />
                        </div>
                        <div className="product-page-right-side">
                            <h3 className="pprs-h3">{item.name}</h3>
                            <p className="pprs-p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Reiciendis eaque nostrum aliquam dicta deserunt recusandae voluptates mollitia rerum quae cupiditate! 
                                Quidem quo porro dolore enim, libero possimus accusantium nisi corporis.
                            </p>
                            <div className="pprs-price">
                                <p>{currencyFormat(item.price)}</p>
                            </div>
                            <div className="pprs-add-to-cart-container">
                                <input type="number" className="pprs-input" name="pprs-input" onChange={(e) => setValue(parseInt(e.target.value))}/>
                                <button className="pprs-button" onClick={addToCart}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Product;