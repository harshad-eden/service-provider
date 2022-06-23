import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoaderComponenet from './components/Loader';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const PreAuth = lazy(() => import('./pages/PreAuth'));
const Login = lazy(() => import('./pages/Login'));
const RestPassword = lazy(() => import('./pages/RestPassword'));
const NotFound = lazy(() => import('./pages/404'));

const RouteSetup = () => {
  return (
    <Suspense fallback={<LoaderComponenet />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pre-auth" element={<PreAuth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<RestPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouteSetup;
