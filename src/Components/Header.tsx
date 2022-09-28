import '../Sass/Header.scss';
import shopping from '../img/shopping.svg';
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h2><Link to="/">Antique Thunderstorm</Link></h2>
      <div className='collection header-a-con'>
        <Link to="/collection">Our Collection</Link>
      </div>
      <div className='header-a-con'>
        <Link to="/shoppingcard"><img src={shopping} alt="shopping card" /></Link>
      </div>
    </nav>
  );
}

export default Header;