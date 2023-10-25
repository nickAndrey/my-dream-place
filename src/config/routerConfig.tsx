import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Path from '../types/Path';

const routerConfig = createBrowserRouter([
  {
    path: Path.Home,
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        element: <div>Home</div>,
        index: true,
      },
      {
        path: Path.Search,
        element: <div>Search</div>,
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
        path: Path.BookingComplete,
        element: <div>Booking Complete</div>,
      },
    ],
  },
  {
    path: Path.SignIn,
    element: <div>Sign In</div>,
  },
  {
    path: Path.SignUp,
    element: <div>Sign Up</div>,
  },
  {
    path: Path.ForgotPassword,
    element: <div>Forgot Password</div>,
  },
]);

export default routerConfig;
