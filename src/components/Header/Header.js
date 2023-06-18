import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import imagen from "./descargar.jpg";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={imagen} alt="logo" width={200} />
      </Link>
    </div>
  );
};

export default Header;
