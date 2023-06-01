import currencyFormat from '../OtherFunctions/currencyFormat';
import { useSelector, useDispatch } from "react-redux";
import { setShopProduct } from "../Features/shopProductsSlice";
import { RootState } from "../App/store";
import { shopProduct } from '../Types/types';

interface Props {
    id: number;
    name: string;
    price: number;
    url: string;
}

function ShoppingCardProducts({id, name, price, url}: Props) {
    const shopProduct = useSelector((state: RootState) => state.shopProducts.value);
    const dispatch = useDispatch();

    function handleDelete(id: number) {
        dispatch(setShopProduct(shopProduct.filter(item => item.id !== id)))
    }

    function increaseAmount(id: number) {
        dispatch(setShopProduct(shopProduct.map(item => {
            if(item.id === id) {
                return {...item, amount: item.amount! + 1}
            } else {
                return item;
            }
        })))
    }

    function decreaseAmount(id: number) {
        let returnVal: shopProduct[];
        if(shopProduct.find(item => item.id === id)!.amount === 0) {
            returnVal = shopProduct.filter(item => item.id !== id);
        } else {
            returnVal = shopProduct.map(item => {
                if(item.id === id) {
                    return {...item, amount: item.amount! - 1}
                } else {
                    return item;
                }
            })
        }
        dispatch(setShopProduct(returnVal))
    }

    return (
        <>
        {
            shopProduct.filter(item => item.id === id).map(item => (
                <div className="scp-container" key={item.id}>
                    <img src={url} alt="product-image" className="scp-img"/>
                    <div className="scp-name-price-container">
                        <h4>{name}</h4>
                        <p>{currencyFormat(price)}
                        <span className="scp-np-span">x{item.amount}
                            <span className="scp-np-inc-dec-container">
                                <button className="scp-np-button-increase" onClick={() => increaseAmount(id)}>+</button>
                                <button className="scp-np-button-decrease" onClick={() => decreaseAmount(id)}>-</button>
                            </span>
                        </span>
                        </p>
                    </div>
                    <div className="scp-delete">
                        <button title="delete the product" onClick={() => {handleDelete(id)}}>X</button>
                    </div>
                </div>
            ))
        }
        </>
    )
}

export default ShoppingCardProducts;