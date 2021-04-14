import PropTypes from 'prop-types';

import PageHeader from './PageHeader';
import Styled from './PageTabs.style';

const PageTabs = ({ title, children, ...props }) => (
  <Styled.Tabs
    {...props}
    renderTabBar={(tabBarProps, DefaultTabBar) => (
      <Styled.PageTabs>
        <PageHeader title={title} />
        <DefaultTabBar {...tabBarProps} />
      </Styled.PageTabs>
    )}
  >
    {children}
  </Styled.Tabs>
);

PageTabs.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default PageTabs;
