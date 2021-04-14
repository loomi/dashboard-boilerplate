import PropTypes from 'prop-types';

import { StyledPageSubtitle } from './PageSubtitle.style';

const PageSubtitle = ({ children, ...props }) => (
  <StyledPageSubtitle {...props}>{children}</StyledPageSubtitle>
);

PageSubtitle.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageSubtitle;
