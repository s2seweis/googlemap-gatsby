import React, {useState, useEffect, useRef} from 'react';
import {FaAlignJustify} from 'react-icons/fa';
import pageLinks from '../../../constans/links';
import {Link} from 'gatsby';
import Sidebar from '../Sidebar/sidebar';
import Button from 'react-bootstrap/Button';
import classnames from 'classnames';
import Dropdown from 'react-bootstrap/Dropdown';
import {SiGooglemaps} from 'react-icons/si';
import '../../../styles/bootstrap.css';

const Navbar = ({
  isOpen,
  toggleSidebar,
  toggleHideSidebar,
  handleShow,
  sidebar,
  setSidebar,
  visible,
}) => {

  const [style1, setStyle] = useState ('overlay');

  const hideSidebar = () => {
    setSidebar (!sidebar);

    setStyle ('overlay');
  };

  return (
    <nav
      style={{zIndex: '5'}}
      className={classnames ('navbar', {'navbar--hidden': !visible})}
    >
      <div className={style1} onClick={hideSidebar} />
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <span style={{fontSize: '5rem'}}>
              <SiGooglemaps style={{color: 'black'}} />
            </span>
          </a>
        </div>
        <div style={{marginLeft: '10px'}} className="nav-title">
          <Button
            className="toggle-btn"
            onClick={isOpen ? toggleHideSidebar : toggleSidebar}
          >
            <FaAlignJustify />
          </Button>
          <h2
            className="h2-nav-title"
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              margin: 'auto',
              fontSize: 'revert',
            }}
          >
            G-Map Playground
          </h2>
        </div>
        <div className="nav-links" style={{alignItems:"center"}}>
          {pageLinks.map (link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            );
          })}
          <Dropdown>
            <Dropdown.Toggle style={{fontSize:"x-large"}} // variant="success"
            id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle >
            <Dropdown.Menu style={{width:"-webkit-fill-available"}}>
              {/* <Dropdown.Item style={{marginLeft:"20px"}} href="/hooks">Hooks</Dropdown.Item> */}
              <Dropdown.Item style={{marginLeft:"20px"}} href="/about">About</Dropdown.Item>
              <Dropdown.Item style={{marginLeft:"20px"}} href="/contact">Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Sidebar />
      </div>
    </nav>
  );
};

export default Navbar;