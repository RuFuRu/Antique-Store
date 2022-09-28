import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Collection from "./Components/Collection";
import ShoppingCard from "./Components/ShoppingCard";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/Collection" element={<Collection/>}></Route>
            <Route path="/" element={<ShoppingCard/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
