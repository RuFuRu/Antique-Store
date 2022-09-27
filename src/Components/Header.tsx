import '../Sass/Header.scss';
import shopping from '../img/shopping.svg';

function Header() {
  return (
    <nav>
      <h2>Antique Thunderstorm</h2>
      <div>
        <a href="#">Who are we ?</a>
      </div>
      <div className='collection'>
        <a href="#">Our Collection</a>
      </div>
      <div>
        <a href="#"><img src={shopping} alt="shopping card" /></a>
      </div>
    </nav>
  );
}

export default Header;