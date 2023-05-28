import React from 'react';
// import logo from '../assets/images/logo.svg';
import logo5 from '../assets/images/logo5.png';

// ###open
import {FaAlignRight} from 'react-icons/fa';
import {HiMenuAlt2} from 'react-icons/hi';

import pageLinks from '../constans/links';
// import pageLinks from '../constans/links-sidemenu';
import {Link} from 'gatsby';

// ###
import MenuBurger from './burger-menu';

import Sidebar from '../components/sidebar';

import '../styles/burger.css';
// ###

const Navbar1 = ({toggleSidebar}) => {
  return (
    <nav style={{position: 'sticky'}} className="navbar">
      <div className="nav-center">

        <div className="nav-header">

          {/* <img src={logo} alt="web dev" /> */}
          <a href="/">
            <img src={logo5} alt="web dev" />
          </a>

          {/* <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button> */}

        </div>




        <div className="nav-title">


        <button style={{marginLeft:"15px"}} type="button" className="toggle-btn" onClick={toggleSidebar}>
            <HiMenuAlt2 />
          </button>


          <h2
            className="h2-nav-title"
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontFamily: 'Lobster Two',
              width:"100%"
            }}
          >
            {/* The Solace Life */}
            Trust in Food
          </h2>
        </div>

        
          
        

        <div className="nav-links">
          {pageLinks.map (link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            );
          })}
        </div>

        <Sidebar />

        {/* <MenuBurger /> */}

      </div>
    </nav>
  );
};

export default Navbar1;
