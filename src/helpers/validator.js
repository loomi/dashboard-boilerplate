import * as Yup from 'yup';

const validator = (schema) => Yup.object().shape(schema);

export const email = () => Yup.string().email('Enter a valid email');

export const password = () =>
  Yup.string()
    .trim()
    .matches(/\d/, 'Password must have at least 1 number')
    .matches(/\W/, 'Password must have at least 1 special caracter')
    .min(8, 'Password must have at least 8 caracters');

export const url = () =>
  Yup.string().matches(
    /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,
    'Enter a valid url',
  );

export const phone = () =>
  Yup.string().matches(
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
    'Enter a valid phone number',
  );

export { Yup };
export default validator;
