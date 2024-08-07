import { Link } from 'react-router-dom';

const SidebarItem = ({ link, text, icon, textColor = 'text-white' }) => (
  <li className="p-2 hover:bg-blue-700 rounded">
    <Link to={link} className={`flex items-center ${textColor}`}>
    {icon}
      {text}
    </Link>
  </li>
);

export default SidebarItem;
