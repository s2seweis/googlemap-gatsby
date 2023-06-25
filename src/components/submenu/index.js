import React from 'react';

import {SidebarData} from '../sidebar6/SidebarData';
import SubMenu from '../sidebar6/SubMenu';

const SubmenuTest = () => {
  console.log ('line:100', SidebarData);
  return (
    <div>

      <div>SubmenuTest</div>

      {SidebarData.map ((item, index) => {
        return <SubMenu item={item} key={index} />;
      })}

    </div>
  );
};

export default SubmenuTest;
