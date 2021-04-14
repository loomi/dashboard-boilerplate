import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PasswordField from 'components/inputs/PasswordField';
import TextField from 'components/inputs/TextField';

import Styled, { SpacerLinks } from './LoginForm.style';

const LoginForm = ({ isSubmitting }) => (
  <Styled.Form className="login">
    <TextField name="email" label="E-mail" />
    <PasswordField name="password" label="Password" />

    <SpacerLinks />

    <Styled.Paragraph>
      <Link to="/esqueci-a-senha">Esqueci a senha</Link>
    </Styled.Paragraph>

    <Styled.Button
      block
      size="large"
      type="primary"
      htmlType="submit"
      loading={isSubmitting}
    >
      Entrar na plataforma
    </Styled.Button>
  </Styled.Form>
);

LoginForm.propTypes = {
  isSubmitting: PropTypes.bool,
};

LoginForm.defaultProps = {
  isSubmitting: false,
};

export default LoginForm;
