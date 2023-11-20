import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProtectedRoute from '../components/ProtectedRoute';
import ForgotPassword from '../pages/Auth/ForgotPassword/ForgotPassword';
import CreatePassword from '../pages/Auth/Register/CreatePassword';
import Register from '../pages/Auth/Register/Register';
import SignIn from '../pages/Auth/SignIn';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import SearchDetails from '../pages/SearchDetails/SearchDetails';
import Path from '../types/Path';

const routerConfig = createBrowserRouter([
  {
    path: Path.Home,
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: Path.Search,
        children: [
          {
            element: <Search />,
            index: true,
          },
          {
            path: ':searchId',
            element: <SearchDetails />,
          },
        ],
      },
      {
        path: Path.Checkout,
        element: <div>Checkout</div>,
      },
      {
        path: Path.BookingDetails,
        element: <div>Booking Details</div>,
      },
      {
        path: Path.Trips,
        element: <div>Trips</div>,
      },
    ],
  },
  {
    path: Path.SignIn,
    element: <SignIn />,
  },
  {
    path: Path.SignUp,
    element: <Register />,
  },
  {
    path: Path.CreatePassword,
    element: <CreatePassword />,
  },
  {
    path: Path.ForgotPassword,
    element: <ForgotPassword />,
  },
]);

export default routerConfig;
