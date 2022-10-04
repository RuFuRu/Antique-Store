import '../Sass/Homepage.scss';
import { Link } from "react-router-dom";
 
function Homepage() {
  return (
    <main>
      <h1>Antique <span className="yellow">Thunderstorm</span></h1>
      <div className="homepage-an-container">
        <Link to="/Collection">See our Collection</Link>
      </div>
    </main>
  )
}

export default Homepage;