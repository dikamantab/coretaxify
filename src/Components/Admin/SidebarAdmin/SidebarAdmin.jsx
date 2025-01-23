import React, { useEffect } from 'react';
import {Sidebar, Menu, SubMenu} from 'react-pro-sidebar';

const SidebarAdmin = () => {
          return (
                    <Sidebar>
                              <Menu>
                                        <SubMenu label="Dashboard">
                                                  <Menu.Item>Dashboard</Menu.Item>
                                        </SubMenu>
                                        <SubMenu label="User">
                                                  <Menu.Item>User</Menu.Item>
                                        </SubMenu>
                              </Menu>
                    </Sidebar>
          );
};

export default SidebarAdmin;