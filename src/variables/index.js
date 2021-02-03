export const AUTH_REFRESH_TOKEN = '_[project_name]_session';
export const AUTH_ACCESS_TOKEN = '_[project_name]_access';

export const USER = '_user_[project_name]';

export const ALERT_SERVER_ERROR = {
  type: 'error',
  message: 'Oops! Ocorreu um erro com a requisição.',
};

export const ALERT_CREDENCIALS_ERROR = {
  type: 'error',
  message: 'Usuário e/ou senha inválida',
};

export const ALERT_NETWORK_ERROR = {
  type: 'error',
  message:
    'Erro de conexão, verifique se está conectado à internet e tente novamente.',
};
