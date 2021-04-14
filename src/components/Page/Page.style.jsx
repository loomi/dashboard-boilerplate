import { Layout } from 'antd';
import styled from 'styled-components';

import colors from 'styles/colors';

export const StyledPage = styled(Layout.Content)`
  padding: 2rem 2rem 2rem 2rem;
`;

export const StyledLayout = styled(Layout)`
  background-color: ${colors.darkerWhite} !important;
  border-radius: 1rem;
  min-height: 97vh;
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  margin-right: 1.5vh;
  align-self: center;
`;
