import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import MenuIcon from "@mui/icons-material/Menu";
const routes = [
  {
    path: "/",
    name: "Dashboard",

  },
  {
    path: "/users",
    name: "Users",
  },
  {
    path: "/messages",
    name: "Messages",
  },
  {
    path: "/analytics",
    name: "Analytics",
  },
  {
    path: "/file-manager",
    name: "File Manager",
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
      },
      {
        path: "/settings/2fa",
        name: "2FA",
      },
      {
        path: "/settings/billing",
        name: "Billing",
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
  },
  {
    path: "/settings",
    name: "Settings",
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
      },
      {
        path: "/settings/2fa",
        name: "2FA",
      },
      {
        path: "/settings/billing",
        name: "Billing",
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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

  return (
    <>
      <div className="main-container  block sm:hidden ">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  DoSomeCoding
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <button onClick={toggle}>
                <MenuIcon />
              </button>
            </div>
          </div>
          <div className="search">
            <div className="search_icon">{/* <BiSearch /> */}</div>
            <AnimatePresence>
              {isOpen && (
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
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
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
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
