import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Collection from "./Pages/Collection";
import ShoppingCard from "./Pages/ShoppingCard";
import AntiqueStoreContext from "./AntiqueStoreContext";
import { useState } from "react";
import Product from "./Pages/Product";


function App() {
  const [filter, setFilter] = useState<string | null>();
  const [unFilter, setUnFilter] = useState<boolean>(true);
  const [numOfItems, setNumOfItems] = useState<number>(0);

  return (
    <AntiqueStoreContext.Provider value={{filter, setFilter, unFilter, setUnFilter, numOfItems, setNumOfItems}}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/collection" element={<Collection/>}></Route>
            <Route path="/shoppingcard" element={<ShoppingCard/>}></Route>
            <Route path="/collection/:id" element={<Product/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AntiqueStoreContext.Provider>
  )
}

export default App;
