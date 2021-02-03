import styled from 'styled-components';
import { Form } from 'antd';

export const StyledFormItem = styled(Form.Item)`
  position: relative;
  padding-top: ${({ floatlabel }) => (floatlabel ? '1rem' : '0')};

  input.ant-input[name='password'] {
    border-radius: 0;
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 0.25rem;
  display: block;
`;

export const StyledFloatLabel = styled.label`
  position: absolute;
  margin-top: ${({ focused, filled }) => (focused || filled ? '-1.1rem' : '0')};
  transition: all 0.2s ease-in-out;
`;
