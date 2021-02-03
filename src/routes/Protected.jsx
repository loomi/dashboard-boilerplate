import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// import Sidebar from 'components/Sidebar';
import NProgress from 'components/NProgress';

const LazyDashboard = lazy(() => import('views/Dashboard'));

function Protected() {
  return (
    <>
      {/* <Sidebar /> */}

      <Suspense fallback={<NProgress />}>
        <Switch>
          <Route path="/" exact component={LazyDashboard} />
        </Switch>
      </Suspense>
    </>
  );
}

export default Protected;
