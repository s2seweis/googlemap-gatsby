import React from 'react';
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import {Link} from 'react-router-dom';

// import Seo from "../components/seo"

// import Layout from '../components/layout';

const Sidebar4 = () => {
  return (
    <div>

      <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <MenuItem >
            {' '}Documentation
          </MenuItem>
          <MenuItem > Calendar</MenuItem>
          <MenuItem > E-commerce</MenuItem>
        </Menu>
      </Sidebar>

    </div>
  );
};

export default Sidebar4;
