import * as axios from 'axios';
import Cookies from 'js-cookie';
import { AUTH_REFRESH_TOKEN } from 'variables';
import { AUTH_ACCESS_TOKEN } from 'variables';

const { REACT_APP_API_URL } = process.env;

const defaultConfig = {
  baseURL: REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
};

export const unathenticatedInstance = axios.create(defaultConfig);
export const authenticatedInstance = axios.create(defaultConfig);

export default {
  /**
   * Makes an unauthenticated request
   */
  unauthorized() {
    unathenticatedInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        Promise.reject(error);
        return {
          type: 'error',
          code: error.response?.status ?? undefined,
        };
      },
    );

    return unathenticatedInstance;
  },

  /**
   * Makes a authenticated request
   */
  authorized() {
    authenticatedInstance.defaults.headers.common.Authorization = `Bearer ${Cookies.get(
      AUTH_ACCESS_TOKEN,
    )}`;
    authenticatedInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        // Refresh Token
        if (error.response?.status === 401) {
          console.log(
            'Token expirado, tentando renovar...',
            error.response.config,
          );
          try {
            const { data } = await authenticatedInstance.post('auth/token', {
              refreshToken: Cookies.get(AUTH_REFRESH_TOKEN),
            });
            if (data) {
              Cookies.set(AUTH_ACCESS_TOKEN, data.data.token);
              authenticatedInstance.defaults.headers.common.Authorization = `Bearer ${data.data.token}`;
              console.log('Token renovado com sucesso!');

              try {
                const newConfig = {
                  ...error.response.config,
                };
                newConfig.headers.Authorization = data.data.token;
                const newResponse = authenticatedInstance(newConfig);
                return newResponse; // Maybe send Promise.resolve(newResponse);
              } catch (newError) {
                console.error(
                  'Error na requisição com token renovado',
                  newError,
                );
                Cookies.remove(AUTH_REFRESH_TOKEN);
                Cookies.remove(AUTH_ACCESS_TOKEN);
                window.location.href = '/login';
                return null;
              }
            } else {
              console.error('Refresh token expirado');
              Cookies.remove(AUTH_REFRESH_TOKEN);
              Cookies.remove(AUTH_ACCESS_TOKEN);
              window.location.href = '/login';
              return null;
            }
          } catch (refreshError) {
            console.error('Refresh token expirado');
            Cookies.remove(AUTH_REFRESH_TOKEN);
            Cookies.remove(AUTH_ACCESS_TOKEN);
            window.location.href = '/login';
            return null;
          }
        } else if (
          error.response?.status === 422 &&
          error.response?.config.url === '/auth/token'
        ) {
          console.error('Refresh token expirado');
          Cookies.remove(AUTH_REFRESH_TOKEN);
          Cookies.remove(AUTH_ACCESS_TOKEN);
          window.location.href = '/login';
          return null;
        }

        Promise.reject(error);
        return error;
      },
    );

    return authenticatedInstance;
  },
};
