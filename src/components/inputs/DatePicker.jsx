import { useField } from 'formik';
import { DatePicker as AntDatePicker } from 'antd';

import InputBase from './InputBase';

const DatePicker = (props) => {
  const [, { value }, { setValue }] = useField(props);

  return (
    <InputBase
      {...props}
      value={value}
      onChange={(date) => {
        setValue(date);
      }}
      component={AntDatePicker}
    />
  );
};

export default DatePicker;
