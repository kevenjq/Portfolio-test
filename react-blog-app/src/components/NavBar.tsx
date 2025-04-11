import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/*

Built components

*/
import { FixedLogo } from "./FixedLogo";

/*

BaseUI components

*/
import { Tabs } from "@base-ui-components/react/tabs";
import { Separator } from "@base-ui-components/react/separator";

/*

React Router Stuff

*/
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentPath = () => {
    if (location.pathname.startsWith("/about")) return "about";
    if (location.pathname.startsWith("/projects")) return "projects";
    if (location.pathname.startsWith("/contact")) return "contact";
    if (location.pathname.startsWith("/blog")) return "contact";
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);

    setIsScrolled(window.scrollY > 1);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`
        sticky top-0 
        flex h-23
        justify-end
        px-10 py-3 
        bg-[#343333]
        text-[#183059]
        transition-all duration-0 ease-out
        ${isScrolled ? "z-[-1]" : "z-20"}`}
    >
      {/* Logo component */}
      <FixedLogo />
      {/* List of links to go to other pages */}
      <Tabs.Root value={getCurrentPath()} className="top-0">
        <Tabs.List className="relative rounded-md border-2 border-white flex gap-10 px-2 py-2 z-0">
          <Tabs.Tab
            value="about"
            className="px-4 py-2 duration-300 font-semibold dark:bg-[#56c4cc]/65  hover:bg-[#56c4cc]"
            onClick={() => navigate("/about")}
          >
            About
          </Tabs.Tab>

          <Tabs.Tab
            value="projects"
            className="px-4 py-2 duration-300 font-semibold dark:bg-[#56c4cc]/65 hover:bg-[#56c4cc]"
            onClick={() => navigate("/projects")}
          >
            Projects
          </Tabs.Tab>

          <Tabs.Tab
            value="contact"
            className=" px-4 py-2 duration-300 font-semibold bg-[#56c4cc]/65 hover:bg-[#56c4cc]"
            onClick={() => navigate("/contact")}
          >
            <span className="">Contact Me</span>
          </Tabs.Tab>

          <Separator orientation="vertical" className="w-0.5 bg-white" />

          <Link to={"/blog"} color="inherit">
            <button className="rounded-md px-5 py-2 bg-[#9B6F8C] text-white font-semibold hover:bg-[#cba3be] overflow-hidden">
              My Blog
            </button>
          </Link>

          {location.pathname !== "/blog" && location.pathname !== "/" && (
            <Tabs.Indicator className="absolute top-1/2 left-0 z-[-1] w-[var(--active-tab-width)] h-[var(--active-tab-height)] -translate-y-1/2 translate-x-[var(--active-tab-left)] bg-[#56c4cc] transition-all duration-500 ease-in-out" />
          )}
        </Tabs.List>
      </Tabs.Root>
    </nav>
  );
};

export default Navbar;
