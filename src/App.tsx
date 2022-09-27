import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import './Sass/App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <div className="content">
          <Routes>

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
