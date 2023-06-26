import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

import * as GrIcons from 'react-icons/gr';
import * as CiIcons from 'react-icons/ci';
import * as GiIcons from 'react-icons/gi';


// ### JSON Object
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'Users',
    //     path: '/overview/users',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Revenue',
    //     path: '/overview/revenue',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'Content',
    // path: '/',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'useEffect',
        path: '/useEffect',
        icon: <GiIcons.GiPirateHook />,
        cName: 'sub-nav'
      },
      {
        title: 'useMemo',
        path: '/contact',
        icon: <GiIcons.GiPirateHook />,
        cName: 'sub-nav'
      },
      {
        title: 'useReft',
        path: '/copyright',
        icon: <GiIcons.GiPirateHook />
      },
      {
        title: 'useCallback',
        path: '/copyright',
        icon: <GiIcons.GiPirateHook />
      }
    ]
  },
  // {
  //   title: 'Products',
  //   path: '/products',
  //   icon: <FaIcons.FaCartPlus />
  // },
  // {
  //   title: 'Team',
  //   path: '/team',
  //   icon: <IoIcons.IoMdPeople />
  // },
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
      },
      {
        title: 'Copyright',
        path: '/copyright',
        icon: <FaIcons.FaCopyright />
      }
    ]
  },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />
  // }
];