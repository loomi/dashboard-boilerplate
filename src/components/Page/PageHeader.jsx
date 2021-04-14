import { Typography } from 'antd';
import PropTypes from 'prop-types';

const PageHeader = ({ title }) => (
  <Typography.Title level={2}>{title}</Typography.Title>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
