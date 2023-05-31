import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Information from "../Components/Information";
import shopItems from "../Data/shopItems.json";
import '../Sass/pages/Product.scss';
import currencyFormat from "../OtherFunctions/currencyFormat";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../App/store";
import { setShopProduct } from "../Features/shopProductsSlice";


function Product() {
    const shopProduct = useSelector((state: RootState) => state.shopProducts.value);
    const dispatch = useDispatch();
    const params = useParams();
    const urlId = parseInt(params.id!);
    const [value, setValue] = useState<number>();

    type shopProduct = {
        id: number,
        amount: number | undefined;
    }

    function addToCart() {
        let returnVal: shopProduct[];
        if(shopProduct.find(item => item.id === urlId) == null) {
            returnVal = [...shopProduct, {id: urlId, amount: value!}];
        } else {
            returnVal = shopProduct.map(item => {
                if(item.id === urlId) {
                    return {...item, amount: item.amount! + value!}
                } else {
                    return item;
                }
            })
        }
        console.log(shopProduct);
        dispatch(setShopProduct(returnVal));
    };

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