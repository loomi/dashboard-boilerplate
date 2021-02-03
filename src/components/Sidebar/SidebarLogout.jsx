import { useAuth } from 'contexts/AuthProvider';
import { RightOutlined } from '@ant-design/icons';
import * as Icons from 'components/icons';
import {
  StyledSidebarMenuItemDivider,
  StyledLogoutButton,
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
