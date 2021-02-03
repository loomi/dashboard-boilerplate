import PropTypes from 'prop-types';
import { useState } from 'react';
import { useField } from 'formik';

import {
  StyledFormItem,
  StyledLabel,
  StyledFloatLabel,
} from './InputBase.style';

const InputBase = ({
  component: Component,
  label,
  name,
  floatLabel,
  value,
  required,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const [field, { error, touched }, { setTouched }] = useField(name);

  const hasError = touched && error;

  return (
    <StyledFormItem
      labelCol={{ span: 24 }}
      validateStatus={hasError && 'error'}
      help={hasError && error}
      floatlabel={floatLabel.toString()}
    >
      {floatLabel ? (
        <StyledFloatLabel
          htmlFor={name}
          focused={focused}
          filled={(field.value && field.value.length) || value}
          {...props}
        >
          {label}
          {required && ' *'}
        </StyledFloatLabel>
      ) : (
        <StyledLabel htmlFor={name} focused={focused} {...props}>
          {label}
          {required && ' *'}
        </StyledLabel>
      )}
      <Component
        {...field}
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          setTouched(true);
        }}
      />
    </StyledFormItem>
  );
};

InputBase.propTypes = {
  component: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  floatLabel: PropTypes.bool,
  value: PropTypes.node,
  required: PropTypes.bool,
};

InputBase.defaultProps = {
  floatLabel: false,
  value: null,
  required: null,
};

export default InputBase;
