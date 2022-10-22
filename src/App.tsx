import {HashRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Collection from "./Pages/Collection";
import ShoppingCard from "./Pages/ShoppingCard";
import AntiqueStoreContext from "./AntiqueStoreContext";
import { useState } from "react";
import Product from "./Pages/Product";
import Payment from "./Pages/Payment";


function App() {
  type shopProduct = {
    id: number,
    amount: number | undefined;
  }

  const [filter, setFilter] = useState<string | null>();
  const [unFilter, setUnFilter] = useState<boolean>(true);
  const [shopProducts, setShopProducts] = useState<shopProduct[]>([{id: 0, amount: 0}]);

  function getOverallAmount(): number {
    return shopProducts.reduce((amount, item) => item.amount! + amount, 0);
  }

  return (
    <AntiqueStoreContext.Provider value={{filter, setFilter, unFilter, setUnFilter, shopProducts, setShopProducts, getOverallAmount}}>
      <HashRouter basename="/antique-store">
        <div className="app">
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/collection" element={<Collection/>}></Route>
            <Route path="/shoppingcard" element={<ShoppingCard/>}></Route>
            <Route path="/collection/:id" element={<Product/>}></Route>
            <Route path="/payment" element={<Payment/>}></Route>
          </Routes>
        </div>
      </HashRouter>
    </AntiqueStoreContext.Provider>
  )
}

export default App;
