import { Menu } from 'antd';
import { useRouteMatch } from 'react-router-dom';

import { useAuth } from 'contexts/AuthProvider';

import * as Icons from 'components/icons';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarProfile from './SidebarProfile';

function SidebarMenu() {
  const { params } = useRouteMatch();
  const { user } = useAuth();
  const [selectedKey] = Object.values(params);

  return (
    <Menu theme="light" defaultSelectedKeys={[selectedKey]} mode="inline">
      <SidebarMenuItem
        key="/"
        path="/"
        label="Dashboard"
        icon={Icons.DashboardOutlined}
      />

      <SidebarMenuItem
        key="/perfil"
        path="/perfil"
        label="Perfil"
        icon={Icons.Profile}
      />

      <SidebarProfile name={user?.name} />

      <SidebarMenuItem
        key="/profile"
        path="/profile"
        label="My Profile"
        icon={Icons.Profile}
      />
    </Menu>
  );
}

export default SidebarMenu;
