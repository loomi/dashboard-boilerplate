import request from './request';

export const login = async ({ email, password }) =>
  request.unauthorized().post('/auth/login', {
    email,
    password,
  });

export const forgetPassword = async (email) =>
  request.unauthorized().post('/auth/send-email-reset', { email });
