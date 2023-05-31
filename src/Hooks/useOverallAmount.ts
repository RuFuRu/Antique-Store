import { useSelector } from "react-redux";
import { RootState } from "../App/store";

function useOverallAmount(): number {
    const shopProduct = useSelector((state: RootState) => state.shopProducts.value);
    return shopProduct.reduce((amount, item) => item.amount! + amount, 0);
} 

export default useOverallAmount;