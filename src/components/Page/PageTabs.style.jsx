import { Row, Tabs } from 'antd';
import styled from 'styled-components';

export const StyledPageTabs = styled(Row)`
  h2.ant-typography {
    margin-right: 32px;
  }
`;

export const StyledTabs = styled(Tabs)`
  .ant-tabs {
    &-tab,
    &-tab-btn {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 1rem;
      padding: 0;
    }
  }
`;

StyledTabs.defaultProps = {
  size: 'large',
};

export default {
  PageTabs: StyledPageTabs,
  Tabs: StyledTabs,
};
