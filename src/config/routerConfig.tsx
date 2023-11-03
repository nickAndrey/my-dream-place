import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ForgotPassword from '../pages/Auth/ForgotPassword/ForgotPassword';
import CreatePassword from '../pages/Auth/Register/CreatePassword';
import Register from '../pages/Auth/Register/Register';
import SignIn from '../pages/Auth/SignIn';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Path from '../types/Path';

const routerConfig = createBrowserRouter([
  {
    path: Path.Home,
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: Path.Search,
        element: <Search />,
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
      {
        path: Path.Discover,
        element: <div>Discover</div>,
      },
      {
        path: Path.Activities,
        element: <div>Activities</div>,
      },
      {
        path: Path.About,
        element: <div>About</div>,
      },
      {
        path: Path.Contact,
        element: <div>Contact</div>,
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
