import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import colors from 'styles/colors';
import { ReactComponent as GZEROLogo } from 'assets/gzero-logo.svg';

const brandColors = {
  default: colors.secondary,
  light: colors.white,
  dark: colors.black,
};

const Logo = styled(GZEROLogo)`
  ${({ size }) => css`
    width: ${size || '4rem'};
    height: ${size || '4rem'};
  `};

  path {
    fill: ${({ color }) => brandColors[color]};
  }
`;

Logo.propTypes = {
  color: PropTypes.oneOf(Object.keys(brandColors)),
  size: PropTypes.string,
};

Logo.defaultProps = {
  color: 'default',
  size: null,
};

export default Logo;
