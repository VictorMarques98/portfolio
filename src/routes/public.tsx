import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { lazyImport } from '@/utils/lazyImport'
import { Header } from '@/components/Layout/Header'

const { Home } = lazyImport(() => import("@/pages/Home"), "Home");

const App = () => {
  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <div>
            {/* <Spinner size="xl" /> */}
            loading
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export const publicRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];