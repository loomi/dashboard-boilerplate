import {
  StyledSidebarMenuItemProfileName,
  StyledSidebarMenuItemFirstLetter,
  StyledSidebarMenuItemName,
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
