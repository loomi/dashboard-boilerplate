import { useEffect } from 'react';
import NProgressComp from 'nprogress';
import { createGlobalStyle } from 'styled-components';

import colors from 'styles/colors';

import 'nprogress/nprogress.css';

export const GlobalNProgressOverride = createGlobalStyle`
  #nprogress .bar {
    background: ${colors.primary} !important;
  }

  #nprogress .peg {
    box-shadow:
      0 0 10px ${colors.primary},
      0 0 5px ${colors.primary} !important
    ;
  }
`;

const NProgress = () => {
  useEffect(() => {
    NProgressComp.start();
    return () => {
      NProgressComp.done();
    };
  }, []);

  return <GlobalNProgressOverride />;
};

export default NProgress;
