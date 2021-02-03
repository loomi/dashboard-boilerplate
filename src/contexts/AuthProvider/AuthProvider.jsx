import { useState, useMemo, useEffect, useContext, createContext } from 'react';
import { useRequest } from '@umijs/hooks';
import Cookies from 'js-cookie';
import { AUTH_REFRESH_TOKEN, AUTH_ACCESS_TOKEN, USER } from 'variables';
import { AuthAPI } from 'api';

const {
  REACT_APP_MOCKED_AUTH_REFRESH_TOKEN,
  REACT_APP_MOCKED_AUTH_ACCESS_TOKEN,
  REACT_APP_MOCKED_AUTH_USER,
} = process.env;

const initialValues = {
  authenticated: null,
  token: null,
  user_id: null,
};

const AuthContext = createContext(initialValues);

function AuthProvider(props) {
  const [authenticated, setAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth, setAuth] = useState();

  useEffect(() => {
    const refresh = Cookies.get(AUTH_REFRESH_TOKEN);
    const userCookies = Cookies.get(USER);
    if (userCookies) {
      setUser(JSON.parse(userCookies));
    }
    setAuthenticated(Boolean(refresh));
  }, []);

  /** login */
  const { data: response, run: loginRequest } = useRequest(AuthAPI.login, {
    manual: true,
  });

  useEffect(() => {
    if (response && response.data && response.status === 200) {
      setAuth(response?.data?.data);
      setUser(response?.data?.data?.user);
    }
  }, [response]);

  useEffect(() => {
    if (auth) {
      Cookies.set(AUTH_REFRESH_TOKEN, auth.refreshToken, {
        expires: 15,
      });
      Cookies.set(AUTH_ACCESS_TOKEN, auth.token, {
        expires: 15,
      });
      Cookies.set(USER, JSON.stringify(user), {
        expires: 15,
      });
      setAuthenticated(true);
    }
  }, [auth, user]);

  const login = loginRequest;

  const loginMocked = () => {
    Cookies.set(AUTH_REFRESH_TOKEN, REACT_APP_MOCKED_AUTH_REFRESH_TOKEN);
    Cookies.set(AUTH_ACCESS_TOKEN, REACT_APP_MOCKED_AUTH_ACCESS_TOKEN);
    Cookies.set(USER, REACT_APP_MOCKED_AUTH_USER);
    setAuth({
      refreshToken: REACT_APP_MOCKED_AUTH_REFRESH_TOKEN,
      token: REACT_APP_MOCKED_AUTH_ACCESS_TOKEN,
      user: {
        email: 'dev@loomi.com.br',
        id: '5bbe33da-5035-4dc2-9e65-e90e6d397bb6',
        name: 'Dev',
        createdAt: '2021-01-22T17:59:00.287Z',
        updatedAt: '2021-01-22T17:59:00.287Z',
        profilePicture:
          'https://avatarfiles.alphacoders.com/168/thumb-1920-168291.png',
        role: 'Admin',
      },
    });
    setUser({
      email: 'dev@loomi.com.br',
      id: '5bbe33da-5035-4dc2-9e65-e90e6d397bb6',
      name: 'Dev',
      createdAt: '2021-01-22T17:59:00.287Z',
      updatedAt: '2021-01-22T17:59:00.287Z',
      profilePicture:
        'https://avatarfiles.alphacoders.com/168/thumb-1920-168291.png',
      role: 'Admin',
    });
    setAuthenticated(true);
  };

  const logout = async () => {
    Cookies.remove(USER);
    Cookies.remove(AUTH_REFRESH_TOKEN);
    Cookies.remove(AUTH_ACCESS_TOKEN);
    setAuthenticated(false);
  };

  /** provider */
  const value = useMemo(
    () => ({
      authenticated,
      user,
    }),
    [authenticated, user],
  );

  return (
    <AuthContext.Provider
      value={{ ...value, login, loginMocked, logout }}
      {...props}
    />
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
