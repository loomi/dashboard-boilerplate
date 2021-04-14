import { NavLink } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import PropTypes from 'prop-types';

import { StyledSidebarMenuItemDivider } from './Sidebar.style';

const SidebarMenuItem = ({ path, label, icon: Icon, ...props }) => (
  <Menu.Item key={path} icon={<Icon />} {...props}>
    <NavLink to={path}>{label}</NavLink>
    <RightOutlined />
    <StyledSidebarMenuItemDivider />
  </Menu.Item>
);

SidebarMenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default SidebarMenuItem;
