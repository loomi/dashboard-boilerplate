import PropTypes from 'prop-types';

import {
  StyledMessageRow,
  StyledMessageContainer,
  StyledTitle,
  StyledDivider,
  StyledText,
} from './Toast.styled';

const Message = ({ title, text, error, children }) => (
  <StyledMessageRow>
    <StyledMessageContainer>
      <StyledTitle error={error}>{title}</StyledTitle>
      <StyledDivider />
      <StyledText>{text}</StyledText>
      {children}
    </StyledMessageContainer>
  </StyledMessageRow>
);

Message.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  error: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

Message.defaultProps = {
  error: false,
};

export default Message;
