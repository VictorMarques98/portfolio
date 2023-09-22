import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { lazyImport } from '@/utils/lazyImport'
import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'

const { Home } = lazyImport(() => import("@/sections/Home/routes"), "Home");
const { AboutMe } = lazyImport(() => import("@/sections/AboutMe/routes"), "AboutMe");

const App = () => {
  return (
    <>
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
      <Footer />
    </>
  );
};

export const publicRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about-me', element: <AboutMe /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];