import "./styles.css";
import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
        Inicio
        </Link>
        <Link className="li" to="/about">
        Quiénes Somos
        </Link>
        <Link className="li" to="/contact">
        Contactanos
        </Link>
        <Link className="li" to="/category/men's clothing">
         Hombres
        </Link>
        <Link className="li" to="/category/jewelery">
         Joyas
        </Link>
        <li className="cart-icon">
          <CardWidget/>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
