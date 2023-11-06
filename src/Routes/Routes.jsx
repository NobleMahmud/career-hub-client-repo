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
          element: <PostJob></PostJob>,
        },
        {
          path: "/appliedjobs",
          element: <AppliedJobs></AppliedJobs>,
        },
        {
          path: "/myjobs",
          element: <MyJobs></MyJobs>,
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
          element: <JobDetails></JobDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
      ],
    },
  ]);