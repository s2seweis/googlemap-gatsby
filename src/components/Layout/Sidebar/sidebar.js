import React, { useState, useEffect, useRef } from 'react';
import socialLinks from '../../../constans/social_links';
import { FaTimes } from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const Sidebar = ({ isOpen, toggleSidebar, toggleHideSidebar }) => {

  return (
    <aside className={isOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <button
        className="close-btn"
        alt="close"
        type="button"
        onClick={isOpen ? toggleHideSidebar : toggleSidebar}
      >
        <FaTimes />
      </button>
      <div
        className="side-container"
        style={{ marginTop: '60px', width: '100%' }}
      >
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
        <div
          className="sidebar-social-links-margin"
          style={{ marginTop: '30px' }}
        >
          <ul className={isOpen ? 'social-links sidebar-icons' : null}>
            {socialLinks.map(link => {
              return (
                <li key={link.id}>
                  <a aria-label="link" href={link.url} className="social-link">
                    {link.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
