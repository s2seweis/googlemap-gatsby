import React from "react";
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <Link to="/" className="menu-item" >
        Item1
      </Link>

      <Link to="/page-2" className="menu-item" >
        Item2
        </Link>

        <Link to="/page-3" className="menu-item" >
        Item3
        </Link>

        <Link to="/page-4" className="menu-item" >
        Item4
        </Link>
    </Menu>
  );
};