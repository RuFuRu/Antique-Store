import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Collection from "./Pages/Collection";
import ShoppingCard from "./Pages/ShoppingCard";
import AntiqueStoreContext from "./AntiqueStoreContext";
import { useState } from "react";


function App() {
  const [filter, setFilter] = useState<string | null>();
  
  return (
    <AntiqueStoreContext.Provider value={{filter, setFilter}}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/collection" element={<Collection/>}></Route>
            <Route path="/shoppingcard" element={<ShoppingCard/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AntiqueStoreContext.Provider>
  )
}

export default App;
