import { ToastContainer } from 'react-toastify';
import { Divider } from 'antd';
import styled from 'styled-components';

import colors from 'styles/colors';

import Paragraph from 'components/Paragraph';

import 'react-toastify/dist/ReactToastify.min.css';

export const StyledToast = styled(ToastContainer)`
  .Toastify__toast {
    width: 23rem;
    right: 2rem;
    border-radius: 10px;
    min-height: 4.5rem;
    padding-left: 24px;
  }

  .Toastify__toast--error {
    background: white;
  }

  .Toastify__toast-body {
    margin: 0;
  }

  .Toastify__progress-bar {
    height: 7px;
    bottom: 1em;
    right: 24px;
    left: 24px;
    background: ${colors.primary};
    border-radius: 10px;
  }

  .Toastify__progress-bar--error {
    background: ${colors.primary};
  }

  .Toastify__close-button--error {
    color: grey;
  }
`;

export const StyledMessageRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const StyledMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
export const StyledTitle = styled(Paragraph)`
  color: ${(props) => (props.error ? colors.roseRed : colors.black)};
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.64px;
`;

export const StyledDivider = styled(Divider)`
  margin: 6px -24px 15px;
  border-top: 1px solid #c7ccd8;
  width: 550px;
`;

export const StyledText = styled(Paragraph)`
  color: ${colors.black};
  letter-spacing: 0.64px;
`;

export default {
  StyledToast,
  MessageRow: StyledMessageRow,
  MessageContainer: StyledMessageContainer,
  Title: StyledTitle,
  Divider: StyledDivider,
  Text: StyledText,
};
