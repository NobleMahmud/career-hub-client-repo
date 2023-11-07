import {
    createBrowserRouter} from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import AllJobs from "../components/AllJobs/AllJobs";
import PostJob from "../components/PostJob/PostJob";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";
import MyJobs from "../components/MyJobs/MyJobs";
import LogIn from "../components/LogIn/LogIn";
import Register from "../components/Register/Register";
import JobDetails from "../components/JobDetails/JobDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
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
          loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
      ],
    },
  ]);