import styled from 'styled-components';
import { Layout, Button } from 'antd';

import fonts from 'styles/fonts';
import colors from 'styles/colors';

export const StyledSidebar = styled(Layout.Sider)`
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 16.9rem;
    background-color: white;
  }

  .ant-menu {
    background-color: transparent;
    border: none;
  }

  .ant-menu-inline .ant-menu-selected::after,
  .ant-menu-inline .ant-menu-item-selected::after {
    display: none;
  }

  .ant-menu-item {
    font-weight: bold;
    font-size: 0.95rem;
    height: 3rem;
    display: flex;
    align-items: center;
    line-height: 3.5rem;
    margin-top: 0;
    margin-bottom: 0 !important;
    margin-left: 0.625rem;
    position: relative;
    background-color: ${colors.primary};
    width: calc(90% + 0.06rem);
    backdrop-filter: blur(0.31rem);

    &.ant-menu-item-selected {
      background-color: rgba(85, 80, 81, 0.8) !important;

      & > span:nth-child(2) > span:nth-child(2) {
        color: ${colors.white};
      }

      & > span > a {
        ${fonts.helveticaNeueBold};
        letter-spacing: 0.06rem;
      }
    }

    &:last-child {
      border-radius: 10px;
    }

    &:nth-child(2),
    &:nth-child(4) {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      & > span > span:nth-child(3) {
        display: none;
      }
    }

    &:first-child {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .anticon {
      font-size: 1.15rem;
      margin-right: 1.5rem;
    }

    & > span > a {
      color: ${colors.white};
      ${fonts.helveticaNeueThin};
      letter-spacing: 0.125rem;
      font-size: 0.9rem;
    }

    & > span:nth-child(2) > span:nth-child(2) {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      color: ${colors.antdArrowDefaultColor};

      & > svg {
        height: 0.8rem;
        width: 0.8rem;
      }
    }
  }
`;

export const StyledSidebarMenuItemDivider = styled.span`
  width: 80%;
  display: block;
  height: 0.06rem;
  background-color: ${colors.sidebarButtonBorder};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledSidebarFooter = styled.div`
  height: 8rem;
  /* Add background asset */
  margin-top: auto;
  margin-bottom: 2.5rem;
  .ant-btn {
    font-weight: 'bold';
    font-size: 0.9rem;
  }
`;

export const StyledSidebarMenuItemProfileName = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3.1rem;
  margin-bottom: 1.25rem;
`;

export const StyledSidebarMenuItemFirstLetter = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.primary};
  color: ${colors.black};
  font-size: 1.1rem;
  text-transform: uppercase;
`;

export const StyledSidebarMenuItemName = styled.p`
  color: ${colors.black};
  margin-bottom: 0;
  margin-left: 1rem;
  font-size: 0.9rem;
`;

export const StyledAuteurButton = styled.a`
  position: relative;
  padding-left: 4rem;
  width: calc(90% + 0.06rem);
  border-radius: 10px;
  height: 3rem;
  margin-left: 0.625rem;
  background-color: ${colors.sidebarButtonBackground};
  color: ${colors.white};
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.9rem;
  backdrop-filter: blur(0.31rem);
  border-radius: 10px;

  & > span:first-child {
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);

    & > svg {
      width: 1.15rem;
      height: 1.15rem;
    }
  }

  & > span:nth-child(2) {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${colors.antdArrowDefaultColor};

    & > svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  & > span:last-child {
    display: none;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.sidebarButtonBackground};
    color: ${colors.white};
  }
`;

export const StyledLogoutButton = styled(Button)`
  position: relative;
  padding-left: 1.5rem;
  height: 3rem;
  margin-left: 0.625rem;
  background-color: ${colors.sidebarButtonBackground};
  color: ${colors.white};
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: calc(90% + 0.06rem);
  margin-top: 2rem;
  backdrop-filter: blur(0.31rem);
  border-radius: 10px;

  & > span:first-child {
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);

    & > svg {
      width: 1.15rem;
      height: 1.15rem;
    }
  }

  & > span:nth-child(2) {
    margin-left: 2.625rem;
  }

  & > span:nth-child(3) {
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${colors.antdArrowDefaultColor};

    & > svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  & > span:last-child {
    display: none;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.sidebarButtonBackground};
    color: ${colors.white};
  }
`;
