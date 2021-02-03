import PropTypes from 'prop-types';
import { Radio as AntRadio } from 'antd';
import { useField } from 'formik';

import InputBase from './InputBase';

const RadioGroup = ({
  value: fieldValue,
  setValue: setFieldValue,
  ...props
}) => {
  const [, { value }, { setValue }] = useField(props);

  return (
    <InputBase
      {...props}
      value={value || fieldValue}
      setValue={setValue || setFieldValue}
      component={AntRadio.Group}
    />
  );
};

RadioGroup.Radio = AntRadio;
RadioGroup.RadioButton = AntRadio.Button;

RadioGroup.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};

RadioGroup.defaultProps = {
  value: null,
  setValue: null,
};

export default RadioGroup;
