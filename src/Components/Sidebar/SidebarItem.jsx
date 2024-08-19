import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SidebarItem = ({ link, text, icon, textColor = 'text-white', isSidebarMinimized }) => (
  <li className={`p-2 rounded ${isSidebarMinimized ? "hover:scale-125 transition-transform duration-200" : "hover:bg-blue-700"}`}>
    <Link to={link} className={`flex items-center ${textColor} `}>
      {icon}
      <span
        className={`ml-2 transition-all duration-300 ${isSidebarMinimized ? "hidden" : "inline-block"} whitespace-nowrap overflow-hidden ${textColor}`}
        style={{ flexShrink: 0 }}
      >
        {text}
      </span>
    </Link>
  </li>
);

SidebarItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  textColor: PropTypes.string,
  isSidebarMinimized: PropTypes.bool.isRequired,
};

export default SidebarItem;
