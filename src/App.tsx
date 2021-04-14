import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

import withGlobalProvider from 'contexts/withGlobalProvider';
import Main from 'routes/Main';

import PageLoading from 'components/PageLoading';

const App = () => (
  <Layout>
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <Main />
      </Suspense>
    </BrowserRouter>
  </Layout>
);

export default withGlobalProvider(App);
