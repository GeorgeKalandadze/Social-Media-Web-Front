import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../../Redux/sidebarSlice";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PersonAvatar from "../../assets/personimg.jpg";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { openModal } from "../../Redux/postModalSlice";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";


const routes = [
  {
    path: "/home",
    name: "Home",
    icon: <HomeOutlinedIcon />,
  },
  {
    path: "/favorite-posts",
    name: "Bookmarks",
    icon: <BookmarkBorderOutlinedIcon />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <PieChartOutlineOutlinedIcon/>
  },

 
];

const SideBar = ({ children }) => {
  const isOpenSidebar = useSelector((state) => state.sidebar.isOpenSidebar);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const toggleSidebar = () => {
    if (isOpenSidebar) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };


  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  console.log(user,"userrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");

  return (
    <>
      <div className="main-container block sm:hidden ">
        <motion.div
          animate={{
            width: isOpenSidebar ? "200px" : "85px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div
            className="top_section"
            style={{
              justifyContent: `${isOpenSidebar ? "" : "center"}`,
            }}
          >
            <AnimatePresence>
              <div className="flex items-center gap-4">
                <img
                  src={PersonAvatar}
                  className="h-10 w-10 rounded-md object-cover"
                />
                {isOpenSidebar && (
                  <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                  >
                    {user.name}
                  </motion.h1>
                )}
              </div>
            </AnimatePresence>
            <button
              onClick={toggleSidebar}
              className="bg-[#3a3a3a] rounded-full flex items-center justify-center absolute right-0 translate-x-2"
            >
              {isOpenSidebar ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </button>
          </div>
          <div className="search">
            <div className="flex justify-center">
              <SearchIcon />
            </div>
            <AnimatePresence>
              {isOpenSidebar && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section
            className="routes"
            style={{ alignItems: `${isOpenSidebar ? "" : "center"}` }}
          >
            <div
              className="flex items-center"
              onClick={() => dispatch(openModal())}
            >
              <button className="link" activeClassName="active">
                <PostAddIcon />
              </button>
              {isOpenSidebar ? <p>Create Post</p> : ""}
            </div>
            <div className="flex items-center">
              <button className="link" activeClassName="active">
                <NotificationsOutlinedIcon />
              </button>
              {isOpenSidebar ? <p>Notifications</p> : ""}
            </div>
            {routes.map((route, index) => {
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                  style={{
                    justifyContent: `${isOpenSidebar ? "" : "center"}`,
                  }}
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpenSidebar && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          <div
            className="flex items-center  w-full mt-[185px]"
            style={{ justifyContent: `${isOpenSidebar ? "" : "center"}` }}
          >
            <button className="link" activeClassName="active">
              <LogoutIcon />
            </button>
            {isOpenSidebar ? <p>Log out</p> : ""}
          </div>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
