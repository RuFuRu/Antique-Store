import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Collection from "./Pages/Collection";
import ShoppingCard from "./Pages/ShoppingCard";
import Product from "./Pages/Product";
import Payment from "./Pages/Payment";


function App() {
  return (
    <BrowserRouter basename="/antique-store">
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/collection" element={<Collection/>}></Route>
          <Route path="/shoppingcard" element={<ShoppingCard/>}></Route>
          <Route path="/collection/:id" element={<Product/>}></Route>
          <Route path="/payment" element={<Payment/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
