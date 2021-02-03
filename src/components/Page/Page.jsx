import { Tabs } from 'antd';
import { StyledPage, StyledLayout } from './Page.style';
import PageHeader from './PageHeader';
import PageSubtitle from './PageSubtitle';
import PageTabs from './PageTabs';

const Page = (props) => (
  <StyledLayout>
    <StyledPage {...props} />
  </StyledLayout>
);

Page.Header = PageHeader;
Page.Subtitle = PageSubtitle;
Page.Tabs = PageTabs;
Page.Tab = Tabs.TabPane;

export default Page;
