import { useState } from 'react';
import { Formik } from 'formik';

import { useAuth } from 'contexts/AuthProvider';

import LayoutAuth from 'components/LayoutAuth';

import { loginFormValidationSchema } from 'helpers/validator';
import * as errors from 'variables';

import LoginForm from './LoginForm';

const Login = () => {
  const [feedback, setFeedback] = useState();
  const { login, loginMocked } = useAuth();

  const handleLoginMocked = async () => {
    await new Promise((r) => setTimeout(r, 3000));

    loginMocked();
  };

  // eslint-disable-next-line no-unused-vars
  const handleLogin = async (values) => {
    if (window.navigator.onLine) {
      setFeedback(null);
      const { type, code } = await login(values);

      if (type === 'error') {
        switch (code) {
          case 403:
            setFeedback(errors.ALERT_CREDENCIALS_ERROR);
            break;
          default:
            setFeedback(errors.ALERT_SERVER_ERROR);
        }
      }
    } else {
      setFeedback(errors.ALERT_NETWORK_ERROR);
    }
  };

  return (
    <LayoutAuth title="Login" feedback={feedback}>
      <Formik
        onSubmit={handleLoginMocked}
        component={LoginForm}
        initialValues={{ email: '', password: '' }}
        validationSchema={loginFormValidationSchema}
      />
    </LayoutAuth>
  );
};

export default Login;
