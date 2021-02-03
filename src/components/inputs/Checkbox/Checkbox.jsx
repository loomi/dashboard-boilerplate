import PropTypes from 'prop-types';
import { Form } from 'antd';
import { useField } from 'formik';

import { StyledCheckbox } from './Checkbox.style';

const Checkbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { error, touched } = meta;
  const hasError = touched && error;

  return (
    <Form.Item
      labelCol={{ span: 24 }}
      validateStatus={hasError && 'error'}
      help={hasError && error}
    >
      <StyledCheckbox {...field} {...props}>
        {label}
      </StyledCheckbox>
    </Form.Item>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Checkbox;
