import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AntiqueStoreContext from '../AntiqueStoreContext';
import shopItems from '../Data/shopItems.json';
import currencyFormat from '../OtherFunctions/currencyFormat';

function ShoppingItemsList() {
    const context = useContext(AntiqueStoreContext);
 
    const listedItems = shopItems.filter(item => item.tag === context?.filter || context?.unFilter).map(item => (
        <div className="shoppingitemslist-container" key={item.id}>
            <Link to={`/collection/${item.id}`} className="sil-link">
                <img src={`${item.url}`} alt="item picture" className="sil-img"/>
                <div className="sil-span-container">
                    <span className="sil-span-1">{item.name}</span>
                    <span className="sil-span-2">{currencyFormat(item.price)}</span>
                </div>
            </Link>
        </div>
    ))

    return (
        <>
        {listedItems}
        </>
    )
}

export default ShoppingItemsList;