import styled from 'styled-components';
import { Button } from 'antd';
import { Form } from 'formik';

// import Paragraph from 'components/Paragraph';

import colors from 'styles/colors';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;

  .ant-form-item {
    width: 100%;
    margin-bottom: 1.25rem;
  }
`;

export const StyledParagraph = styled.p`
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease-in-out;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    background: ${colors.primary};
    bottom: 0px;
    left: 0;
    transition: width 0.2s ease-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const SpacerLinks = styled.div`
  margin-top: 1.25rem;
`;

export const StyledButton = styled(Button)`
  margin-top: 0.94rem;
  box-shadow: 0.625rem 0.625rem 2.5rem #34343433;
  min-width: 8.5rem;
  max-width: 16rem;
  font-size: 0.85rem;
`;

export default {
  Form: StyledForm,
  Paragraph: StyledParagraph,
  Button: StyledButton,
};
