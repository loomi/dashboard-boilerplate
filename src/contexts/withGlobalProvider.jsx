/* eslint-disable react/display-name */
import GlobalProvider from './GlobalProvider';

const withGlobalProvider = (Component) => (props) => (
  <GlobalProvider>
    <Component {...props} />
  </GlobalProvider>
);

export default withGlobalProvider;
