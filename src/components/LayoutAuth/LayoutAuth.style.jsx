import { Col, Layout } from 'antd';
import bgAuth from 'assets/bg-auth.png';
import styled from 'styled-components';

import colors from 'styles/colors';

export const StyledContent = styled(Layout.Content)`
  background-color: white;
`;

export const StyledBox = styled(Col)`
  max-width: 18rem;
  width: 90%;
`;

export const StyledColBackground = styled(Col)`
  min-height: 100vh;
  background-color: transparent;
  background-image: url(${bgAuth});
  background-position: center;
  background-size: 90%;
  background-repeat: no-repeat;
`;

export const StyledTitle = styled.h3`
  color: ${colors.primary};
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 3rem;
  text-align: center;
`;

export default {
  Content: StyledContent,
  ColBackground: StyledColBackground,
  Box: StyledBox,
  Title: StyledTitle,
};
