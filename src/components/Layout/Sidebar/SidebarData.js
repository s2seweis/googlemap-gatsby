import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';
import * as CiIcons from 'react-icons/ci';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Maps',
    // path: '/',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'KML',
        path: '/kml',
        icon: <GiIcons.GiPirateHook />,
        cName: 'sub-nav'
      },
      {
        title: 'Buttons & Boxes',
        path: '/buttons-and-boxes',
        icon: <GiIcons.GiPirateHook />
      },
      {
        title: 'Clustering',
        path: '/clustering',
        icon: <GiIcons.GiPirateHook />,
        cName: 'sub-nav'
      },
      {
        title: 'Current Location',
        path: '/current-locaion',
        icon: <GiIcons.GiPirateHook />
      },
      {
        title: 'Auto Complete',
        path: '/auto-complete',
        icon: <GiIcons.GiPirateHook />
      }
    ]
  },
  {
    title: 'About',
    // path: '/messages',
    icon: <CiIcons.CiCircleMore />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaHatWizard />
      },
      {
        title: 'Contact',
        path: '/contact',
        icon: <GrIcons.GrContact />
      }
    ]
  },
];