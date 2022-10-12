interface Props {
    id: number;
    name: string;
    price: number;
    url: string;
    tag: string;
}

function ShoppingItemsList(item: Props) {
    return (
        <div className="shoppingitemslist-container">
            <img src={item.url} alt="item picture" />
            <span>{item.name}</span>
            <span>{item.price}</span>
        </div>
    )
}

export default ShoppingItemsList;