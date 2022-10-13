import '../Sass/ShoppingItems.scss';
import shopItems from '../Data/shopItems.json';

function ShoppingItems() {
    return (
        <div className="shoppingitems-container">
            {
                shopItems.map(item => (
                    <div className="shoppingitemslist-container" key={item.id}>
                        <img src={`${item.url}`} alt="item picture" className="sil-img"/>
                        <div className="sil-span-container">
                            <span className="sil-span-1">{item.name}</span>
                            <span className="sil-span-2">{item.price}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ShoppingItems;