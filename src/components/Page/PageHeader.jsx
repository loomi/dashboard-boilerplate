import PropTypes from 'prop-types';
import { Typography } from 'antd';

const PageHeader = ({ title }) => (
  <Typography.Title level={2}>{title}</Typography.Title>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
