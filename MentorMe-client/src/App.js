import { createContext } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Footer from './components/Shared/Footer/Footer';
// import PreLoad from "./components/Shared/Preload/PreLoad";
// import PageNotFound from "./components/Shared/PageNotFound/PageNotFound";
import Home from "./components/Home/Home/Home";
import SignInForm from "./components/Login/LoginMain/SignInForm";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AppointMent from "./components/AppointMent/AppointMent/AppointMent";
import AllPatients from "./components/AppointMent/AllPatients/AllPatients";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";
import DoctorList from "./components/Dashboard/DoctorList/DoctorList";
import AddReview from "./components/Dashboard/MyReview/AddReview";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

// import PageNotFound from './components/Shared/PageNotFound/PageNotFound.jsx';

// const Home = lazy(() => import('./components/Home/Home/Home'))

export const UserContext = createContext();

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <SignInForm /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/patients", element: <AllPatients /> },
  { path: "/addDoctor", element: <AddDoctor /> },
  { path: "/doctors", element: <DoctorList /> },
  { path: "/auth/review", element: <AddReview /> },
  {
    path: "/appointment",
    element: (
      <PrivateRoute>
        <AppointMent />
      </PrivateRoute>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
