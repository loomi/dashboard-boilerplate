import { useState } from 'react';
import { Formik } from 'formik';

import { useAuth } from 'contexts/AuthProvider';
import { loginFormValidationSchema } from 'helpers/validator';

import LayoutAuth from 'components/LayoutAuth';

import LoginForm from './LoginForm';

const Login = () => {
  const [feedback] = useState();
  const { loginMocked } = useAuth();

  const handleLoginMocked = async () => {
    await new Promise((r) => setTimeout(r, 3000));

    loginMocked();
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
