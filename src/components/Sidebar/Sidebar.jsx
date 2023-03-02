import React, { useEffect, useMemo, useState } from "react";
import "./sidebar.css";

import LogoIcon from "../../assets/images/logo.svg";
import {
  ChartPieIcon,
  TicketIcon,
  LightBulbIcon,
  UserGroupIcon,
  UserIcon,
  NewspaperIcon,
  Cog6ToothIcon,
  CheckBadgeIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";

import { motion } from "framer-motion";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(() => {
    const storedIndex = localStorage.getItem("selectedIndex");
    return storedIndex ? Number(storedIndex) : 0;
  });
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    localStorage.setItem("selectedIndex", selected);

    const handleClickOutside = (event) => {
      if (
        window.innerWidth <= 768 &&
        !event.target.closest(".sidebars") &&
        !event.target.closest(".bars") &&
        expanded
      ) {
        setExpanded(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [selected, expanded]);

  const location = useLocation();
  console.log(location.pathname, "::: pathname");

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  const list = useMemo(
    () => [
      {
        icon: <ChartPieIcon />,
        heading: "Overview",
        link: "/overview",
      },
      {
        icon: <TicketIcon />,
        heading: "Ticket",
        link: "/tickets",
      },
      {
        icon: <LightBulbIcon />,
        heading: "Idea",
        link: "/ideas",
      },
      {
        icon: <UserGroupIcon />,
        heading: "Contacts",
        link: "/contacts",
      },
      {
        icon: <UserIcon />,
        heading: "Agents",
        link: "/agents",
      },
      {
        icon: <NewspaperIcon />,
        heading: "Articles",
        link: "/articles",
      },
      {
        classname: "divider",
      },
      {
        icon: <Cog6ToothIcon />,
        heading: "Settings",
        link: "/settings",
      },
      {
        icon: <CheckBadgeIcon />,
        heading: "Subscription",
        link: "/subscription",
      },
    ],
    []
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "50%" } : { left: "5%", top: "4%" }}
        onClick={toggleSidebar}
      >
        <Bars2Icon />
      </div>
      <motion.div
        className="sidebars"
        variants={sidebarVariants}
        animate={
          window.innerWidth <= 768 ? (expanded ? "true" : "false") : "true"
        }
      >
        <div className="logo">
          <div className="logo_img">
            <img src={LogoIcon} alt="dashboard-kit" />
            <h3>Dashboard Kit</h3>
          </div>
        </div>
        <div className="menu">
          {list.map((item, index) => {
            if (item.classname === "divider") {
              return <div key={index} className="divider"></div>;
            } else {
              return (
                <div
                  className={
                    selected === index && location.pathname === item.link
                      ? "menuItem active"
                      : "menuItem"
                  }
                  key={index}
                  onClick={() => {
                    setSelected(index);
                    navigate(item.link);
                    if (window.innerWidth <= 768) {
                      setExpanded(false);
                    }
                  }}
                >
                  <div className="menuLists">
                    <div className="menu_icons">{item.icon}</div>
                    <span>{item.heading}</span>
                  </div>

                  <Routes>
                    {list.map((item) => (
                      <Route key={item.heading} path={item.link} />
                    ))}
                  </Routes>
                </div>
              );
            }
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
