import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    useTheme,
  } from "@material-tailwind/react";
  import React, { useContext, useEffect, useState } from "react";
  import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from '../../../public/Career Hub 7.mp4'
import './nav.css'

  
  const NavBar2 = () => {
  
    // const [mode, setMode] = useState("light");
  
    // function themeChange() {
    //   const html = document.documentElement;
    //   if (mode == "light") {
    //     html.classList.remove("light")
    //     html.classList.add("dark")
    //     setMode("dark")
    //     localStorage.setItem("mode", "dark")
    //   } else {
    //     html.classList.remove("dark")
    //     html.classList.add("light")
    //     setMode("light")
    //     localStorage.setItem("mode", "light")
    //   }
  
    // }
    // useEffect(() => {
    //   const currentMode = localStorage.getItem("mode") || "light";
    //   document.documentElement.classList.add(currentMode)
    //   setMode(currentMode);
    // }, [])
  
    
  
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
  
    const handleLogOut = () => {
      logOut()
        .then(result => {
          console.log(result.user);
        })
        .catch(error => console.error(error))
    }
  
    const [openNav, setOpenNav] = React.useState(false);
  
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    }, []);
  
    const navList = (
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
        
        <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/" 
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? " font-bold  rounded text-blue-600 py-2 px-3 bg-gray-200" : "font-bold text-gray-600 "
      }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/blogs" 
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? " font-bold  rounded text-blue-600 py-2 px-3 bg-gray-200" : "font-bold text-gray-600 "
       }
        >
          Blogs
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/alljobs" 
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? " font-bold  rounded text-blue-600 py-2 px-3 bg-gray-200" : "font-bold text-gray-600 "
       }
        >
          All Jobs
        </NavLink>
      </Typography>
      {
        user?.email ? <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/postjob" 
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? " font-bold  rounded text-blue-600 py-2 px-3 bg-gray-200" : "font-bold text-gray-600 "
       }
        >
          Post Job
        </NavLink>
      </Typography>
      :
      ""
      }
      {
        user?.email ? <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/appliedjobs" 
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? " font-bold  rounded text-blue-600 py-2 px-3 bg-gray-200" : "font-bold text-gray-600 "
       }
        >
          Applied Jobs
        </NavLink>
      </Typography> 
      : ""
      }
      {
        user?.email ? <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/myjobs" 
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " font-bold  rounded text-blue-600 py-2 px-3 bg-gray-200" : "font-bold text-gray-600 "
        }
        >
          My Jobs
        </NavLink>
      </Typography>
      : ""
      }

      </ul>
    );
  
  
    return (
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-0 px-0 lg:px-0 lg:py-0">
        <div className="flex items-center text-blue-gray-900 bg-white">
  
          {/* logo */}
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <video controls autoPlay muted loop className='appearance-none w-1/5'>
                            <source src={logo} type="video/mp4"/>
                                Your browser does not support the video tag.
                        </video>
          </Typography>
          {/* logo end */}
  
  
          {/* nav options mechanism */}
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
            <div className="mr-4 hidden lg:block">{navList}</div>


            {/* <div className="flex items-center gap-x-1">
              <Link to="/login"><Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button></Link>
            </div> */}

            {
              user ?
            <div className="items-center flex justify-between">
              <div className="group relative">
              <img  className="md:w-1/2 w-4/5 rounded-full" src={user.photoURL} alt="" />
                <p className="absolute opacity-0   transition-opacity top-12 -left-3 group-hover:opacity-100 duration-300 hover:opacity-100 text-xs">{user?.displayName}</p>
              </div>
              <Button
              onClick={handleLogOut}
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign Out</span>
              </Button>
              
            </div>
            :
            <div className="flex items-center gap-x-1">
              <Link to="/login"><Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button></Link>
            </div>
            }

           
  
          
            
  
  
  
  
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
                {
                  user?
                  <Button onClick={handleLogOut} fullWidth variant="gradient" size="sm" className="">Sign Out
                  </Button>
                  :
                  <Link to="/login"><Button fullWidth variant="gradient" size="sm" className="">Sign In
                  </Button></Link>
                }
          </div>
          {/* {
            user ?
              <div>
                <button onClick={handleLogOut}>
                  <a className="flex items-center lg:inline px-6 py-3 text-gray-500  rounded-md hover: hover:bg-gray-200 hover:text-gray-600 ">
                    Log Out
                  </a>
                </button>
              </div>
              :
              ""
          } */}
        </Collapse>
      </Navbar>
    );
  };
  
  export default NavBar2;