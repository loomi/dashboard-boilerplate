import * as Yup from 'yup';

const validator = (schema) => Yup.object().shape(schema);

export const email = () => Yup.string().email('Insira um e-mail válido');

export const password = () =>
  Yup.string()
    .trim()
    .matches(/\d/, 'A senha deve ter número(s)')
    .matches(/\W/, 'A senha deve ter caractere(s) especial(is)')
    .min(8, 'A senha deve ter pelo menos 8 caracteres');

export const phone = () =>
  Yup.string().matches(
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
    'Insira um número de celular válido',
  );

export const loginFormValidationSchema = validator({
  email: email().required('Insira um e-mail válido'),
  password: Yup.string().required('Insira uma senha'),
});

export { Yup };
export default validator;
