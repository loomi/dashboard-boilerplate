import { RightOutlined } from '@ant-design/icons';

import { useAuth } from 'contexts/AuthProvider';

import * as Icons from 'components/icons';

import {
  StyledLogoutButton,
  StyledSidebarMenuItemDivider,
} from './Sidebar.style';

const { Logout } = Icons;

function SidebarLogout() {
  const { logout } = useAuth();

  return (
    <StyledLogoutButton block size="large" type="text" onClick={logout}>
      <Logout />
      Logout
      <RightOutlined />
      <StyledSidebarMenuItemDivider />
    </StyledLogoutButton>
  );
}

export default SidebarLogout;
