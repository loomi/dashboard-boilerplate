import {
  StyledSidebarMenuItemFirstLetter,
  StyledSidebarMenuItemName,
  StyledSidebarMenuItemProfileName,
} from './Sidebar.style';

const SidebarProfile = ({ name = '' }) => (
  <StyledSidebarMenuItemProfileName>
    <StyledSidebarMenuItemFirstLetter>
      {name[0]}
    </StyledSidebarMenuItemFirstLetter>
    <StyledSidebarMenuItemName>{name}</StyledSidebarMenuItemName>
  </StyledSidebarMenuItemProfileName>
);

export default SidebarProfile;
