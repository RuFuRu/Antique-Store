import { useContext } from 'react';
import AntiqueStoreContext from '../AntiqueStoreContext';
import Header from '../Components/Header';
import Information from '../Components/Information';
import '../Sass/pages/ShoppingCard.scss';
import shopItems from '../Data/shopItems.json';
import ShoppingCardProducts from '../Components/ShoppingCardProducts';
import ShoppingCardForm from '../Components/ShoppingCardForm';
import Footer from '../Components/Footer';

function ShoppingCard() {
    const context = useContext(AntiqueStoreContext);
    const amount = context!.getOverallAmount();

    return (
        <div className="shoppingcard-container">
            <Header/>
            <Information/>
            {amount === 0 &&
                <>
                    <div className="sc-no-amount-information">
                        <p className="sc-no-amount-p">
                            It seems you haven't added anything to cart yet.
                        </p>
                    </div>
                </>
            }
            {amount > 0 &&
            <>
                <h3 className="sc-h3">Checkout</h3>
                <div className="sc-items-container">
                    <div className="sc-items">
                        {
                            shopItems.map(item => (
                                <ShoppingCardProducts {...item}/>
                            ))
                        }
                    </div>
                    <div className="sc-item-payment">
                        <ShoppingCardForm/>
                    </div>
                </div>
            </>
            }
            <Footer/>
        </div>
    )
}

export default ShoppingCard;