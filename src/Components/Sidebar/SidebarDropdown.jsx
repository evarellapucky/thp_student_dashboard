import React from 'react';
import { useState } from "react";
import PropTypes from "prop-types";
import toggler_logo from "../../Assets/toggler.svg";

const SidebarDropdown = ({ title, icon, isSidebarMinimized, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li
        className={`p-2 rounded cursor-pointer transition-transform duration-200 ${
          isSidebarMinimized ? "hover:scale-125" : "hover:bg-blue-700"
        } relative`}
        onClick={handleToggle}
      >
        <div className="flex items-center">
          {icon}
          {!isSidebarMinimized && (
            <span
              className={`flex items-center text-white justify-between w-full ml-2 transition-all duration-300 ${
                isSidebarMinimized ? "hidden" : "inline-block"
              } whitespace-nowrap overflow-hidden`}
            >
              {title}
              <img
                src={toggler_logo}
                alt="toggle"
                className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </span>
          )}
        </div>

        {isSidebarMinimized && isOpen && (
          <div className="absolute left-full bg-gray-800 top-0 rounded shadow-lg z-50">
            <ul className="text-white p-5">
              {React.Children.map(children, (child) =>
                React.cloneElement(child, { isSidebarMinimized: false })
              )}
            </ul>
          </div>
        )}
      </li>

      {!isSidebarMinimized && isOpen && (
        <ul className="ml-6 space-y-1 text-white">{children}</ul>
      )}
    </>
  );
};

SidebarDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  isSidebarMinimized: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default SidebarDropdown;
