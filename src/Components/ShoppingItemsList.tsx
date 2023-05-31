import { Link } from 'react-router-dom';
import shopItems from '../Data/shopItems.json';
import currencyFormat from '../OtherFunctions/currencyFormat';
import { useSelector } from 'react-redux';
import { RootState } from '../App/store';

function ShoppingItemsList() {
    const filter = useSelector((state: RootState) => state.filtering.value);
    const unFilter = useSelector((state: RootState) => state.unFiltering.value);
 
    const listedItems = shopItems.filter(item => item.tag === filter || unFilter).map(item => (
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