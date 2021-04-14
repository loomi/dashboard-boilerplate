import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import NProgress from 'components/NProgress';
import Sidebar from 'components/Sidebar';

const LazyDashboard = lazy(() => import('views/Dashboard'));

function Protected() {
  return (
    <>
      <Sidebar />

      <Suspense fallback={<NProgress />}>
        <Switch>
          <Route path="/" exact component={LazyDashboard} />
        </Switch>
      </Suspense>
    </>
  );
}

export default Protected;
