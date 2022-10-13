import ShoppingItemsList from "./ShoppingItemsList";
import '../Sass/ShoppingItems.scss';
import shopItems from '../Data/shopItems.json';

function ShoppingItems() {
    return (
        <div className="shoppingitems-container">
            <div className="shoppingitems-list">
                {
                    shopItems.map(item => (
                        <ShoppingItemsList {... item} key={item.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ShoppingItems;