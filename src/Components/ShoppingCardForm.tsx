import { useContext } from "react";
import AntiqueStoreContext from "../AntiqueStoreContext";
import shopItems from '../Data/shopItems.json';
import currencyFormat from "../OtherFunctions/currencyFormat";
import {Link} from "react-router-dom";

function ShoppingCardForm() {
    const context = useContext(AntiqueStoreContext);
    const reducedTotal = context!.shopProducts.reduce((total, shopProduct) => {
        const item = shopItems.find(itm => itm.id === shopProduct.id);
        return total + (item?.price || 0) * shopProduct.amount!;
    }, 0);
    const total = () => reducedTotal > 100 ? reducedTotal : reducedTotal + 50;

    return (
        <>
            <form className="scf-form">
                <div className="form-fullname">
                    <label htmlFor="fullname">Name & Surname</label>
                    <input type="text" id="fullname" name="fullname"/>
                </div>
                <div className="form-country-of-residence">
                    <label htmlFor="country-of-residence">Country of Residence</label>
                    <input type="text" id="country-of-residence" name="country-of-residence"/>
                </div>
                <div className="form-address">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address"/>
                </div>
                <div className="form-postal-code">
                    <label htmlFor="postal-code">Postal Code</label>
                    <input type="text" id="postal-code" name="postal-code"/>
                </div>
                <div className="form-phone-number">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="text" id="phone-number" name="phone-number"/>
                </div>
                <div className="form-email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"/>
                </div>
            </form>
            <div className="scf-amount-to-be-payed">
                <div className="scf-delivery">
                    <h4>Delivery: <span className="spacing"></span>{currencyFormat(reducedTotal > 100 ? 0 : 50)}</h4>
                </div>
                <div className="scf-total">
                    <h4>Total: <span className="spacing"></span>{currencyFormat(total())}</h4>
                </div>
            </div>
            <div className="scf-payment">
                <Link to={"/payment"}><button>Proceed to payment</button></Link>
            </div>
        </>
    )
}

export default ShoppingCardForm;