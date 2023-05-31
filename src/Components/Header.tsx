import '../Sass/components/Header.scss';
import shopping from '../img/shopping.svg';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import useOverallAmount from '../Hooks/useOverallAmount';


function Header() {
  const amount = useOverallAmount();

  return (
    <nav>
      <h2><Link to="/">Antique Thunderstorm</Link></h2>
      <div className='collection header-a-con'>
        <Link to="/collection">Our Collection</Link>
      </div>
      <div className='header-a-con'>
        <Link to="/shoppingcard">
          <img src={shopping} alt="shopping card" className="shopping-cart-img"/>
          {amount > 0 &&
          <div className="num-of-items-circle">
            <p>{amount!}</p>
          </div>
          }
        </Link>
      </div>
    </nav>
  );
}

export default Header;