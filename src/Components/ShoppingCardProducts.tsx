import { useContext } from "react";
import AntiqueStoreContext from "../AntiqueStoreContext";
import currencyFormat from '../OtherFunctions/currencyFormat';

interface Props {
    id: number;
    name: string;
    price: number;
    url: string;
}

function ShoppingCardProducts({id, name, price, url}: Props) {
    const context = useContext(AntiqueStoreContext);

    function handleDelete(id: number) {
        context?.setShopProducts(items => {
            return items.filter(item => item.id !== id);
        })
    }

    return (
        <>
        {
            context?.shopProducts.filter(item => item.id === id).map(item => (
                <div className="scp-container" key={item.id}>
                    <img src={url} alt="product-image" className="scp-img"/>
                    <div className="scp-name-price-container">
                        <h4>{name}</h4>
                        <p>{currencyFormat(price)}
                        <span className="scp-np-span">x{item.amount}
                            <span className="scp-np-inc-dec-container">
                                <button className="scp-np-button-increase">+</button>
                                <button className="scp-np-button-decrease">-</button>
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