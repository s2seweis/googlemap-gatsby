import React from "react";
import { slide as Menu } from "react-burger-menu";
// import { Link, useLocation } from 'react-router-dom';

// import logo from 'images/logo-full.png';
// import dignlogo from '../../../static/dign-logo.png';

// import { Icon } from '../common/Icon';


// import { ADMIN_PRODUCTS, ADMIN_ORDERS, ADMIN_POSTS, ADMIN_USERS1, ADMIN_SETTINGS, ADMIN_DASHBOARD, SHOP } from 'constants/routes';



// onClick={onClickLink} to="/"



const MenuBurger = () => {






  return (





    <Menu width={'30%'} {...MenuBurger}>

      <div className="logo">


        {/* <Link



        
        >
          <img alt="Logo" src={dignlogo}
            style={{ width: '100%', borderTop: "none" }}
          />



        </Link> */}


      </div>







      <a className="menu-item" href="/"

      >
        Home
      </a>

      <a className="menu-item" href="/signin">
        Breakfast
      </a>

      <a className="menu-item" href="/">
        Lunch
      </a>

      <a className="menu-item" href="/shop">
        Dinner
      </a>

      <a className="menu-item" href="/post">
        Desserts
      </a>

      <a className="menu-item" href="/post">
        Fiesta
      </a>

      <a className="menu-item" href="/post">
        Beverage
      </a>

      <a className="menu-item" href="/post">
        Contact
      </a>
    </Menu>



  );

};

export default MenuBurger;
