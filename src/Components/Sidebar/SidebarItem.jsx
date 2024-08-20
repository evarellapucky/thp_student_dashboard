import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SidebarItem = ({ link, text, icon, textColor = 'text-white', isSidebarMinimized, isMobile, onClick }) => (
  <li 
    className={`p-2 rounded ${isSidebarMinimized ? "hover:scale-125 transition-transform duration-200" : "hover:bg-blue-700"}`}
    onClick={isMobile ? onClick : null} // Fermer la sidebar si mobile
  >
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
  isMobile: PropTypes.bool, // Ajouter une prop pour détecter le contexte mobile
  onClick: PropTypes.func, // Ajouter une prop pour gérer la fermeture de la sidebar
};

export default SidebarItem;
