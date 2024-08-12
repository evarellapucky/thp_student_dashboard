import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SidebarItem = ({ link, text, icon, textColor = 'text-white', isSidebarMinimized }) => (
  <li className={`p-2 rounded ${isSidebarMinimized ? "hover:scale-125 transition-transform duration-200" : "hover:bg-blue-700"}`}>
    <Link to={link} className={`flex items-center ${textColor}`}>
      {icon}
      {!isSidebarMinimized && text}
    </Link>
  </li>
);

SidebarItem.propTypes = {
  link: PropTypes.string.isRequired,  // link must be a string and is required
  text: PropTypes.string.isRequired,  // text must be a string and is required
  icon: PropTypes.node.isRequired,    // icon can be any renderable node (e.g., JSX element)
  textColor: PropTypes.string,        // textColor is optional and must be a string
  isSidebarMinimized: PropTypes.bool.isRequired // New prop to handle the minimized state
};

export default SidebarItem;
