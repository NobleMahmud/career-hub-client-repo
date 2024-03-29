import {
    createBrowserRouter} from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../components/Home/Home";
import AllJobs from "../components/AllJobs/AllJobs";
import PostJob from "../components/PostJob/PostJob";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";
import MyJobs from "../components/MyJobs/MyJobs";
import LogIn from "../components/LogIn/LogIn";
import Register from "../components/Register/Register";
import JobDetails from "../components/JobDetails/JobDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Update from "../components/Update/Update";
import BlogLayOut from "../components/Blogs/BlogLayOut";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/blogs",
          element: <BlogLayOut></BlogLayOut>
        },
        {
          path: "/alljobs",
          element: <AllJobs></AllJobs>,
        },
        {
          path: "/postjob",
          element: <PrivateRoute><PostJob></PostJob></PrivateRoute>,
        },
        {
          path: "/appliedjobs",
          element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
        },
        {
          path: "/myjobs",
          element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>,
        },
        {
          path: "/login",
          element: <LogIn></LogIn>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/jobs/:id",
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params})=>fetch(`https://career-hub-server-steel.vercel.app/jobs/${params.id}`)
        },
        {
          path: "/update/:id",
          element: <Update></Update>,
          loader: ({params})=>fetch(`https://career-hub-server-steel.vercel.app/jobs/${params.id}`)
        },
      ],
    },
  ]);