import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

// import Toast, { showToast } from 'components/Toast/Toast';

const ToastContext = createContext({
  toast: null,
});

function ToastProvider({ children }) {
  return (
    <>{children}</>
    // <ToastContext.Provider value={{ toast: showToast }}>
    // {children}
    // <Toast />
    // </ToastContext.Provider>
  );
}

ToastProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useToast = () => useContext(ToastContext);

export default ToastProvider;
