import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import Collection from "./Pages/Collection";
import ShoppingCard from "./Pages/ShoppingCard";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/collection" element={<Collection/>}></Route>
          <Route path="/shoppingcard" element={<ShoppingCard/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
