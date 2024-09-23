
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';



import Home from './pages/home'
import JoinUs from './pages/join-us'
import LogIn from './pages/log-in'
import NewProject from './pages/new-project'
import CreatePainPoint from './pages/create-pain-point'
import Board from './pages/board';
import Pricing from './pages/pricing';
import Payment from './pages/payment';
import {useAuth} from './providers/authProvider';
import {ProtectedRoute} from './ProtectedRoute';

const Routes=()=>{
  
  const { token } = useAuth();
  const routesForPublic = [

    {
      path: "/pricing",
      element: <Pricing />,
    },
    
  ];
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/newproject",
          element: <NewProject />,
        },
        {
          path: "/board",
          element: <Board />,
        },
        {
          path: "/createpainpoint",
          element: <CreatePainPoint />,
        },
       
      ],
    },
  ];
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/joinus",
      element: <JoinUs />,
    },
  ];
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);
 return <RouterProvider router={router} />
}

export default Routes
