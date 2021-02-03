import { StyledSidebar } from './Sidebar.style';
import SidebarFooter from './SidebarFooter';
import SidebarLogo from './SidebarLogo';
import SidebarMenu from './SidebarMenu';

function Sidebar() {
  return (
    <StyledSidebar theme="light" width={271}>
      <SidebarLogo />
      <SidebarMenu />
      <SidebarFooter />
    </StyledSidebar>
  );
}

export default Sidebar;
