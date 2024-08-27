import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import logo from "../../Assets/thpLogoMinimised.svg";
import logoText from "../../Assets/thpLogoText.svg";
import "./logo.css";

const Logo = ({ isMinimized }) => {
  const [minimized, setMinimized] = useState(isMinimized);

  useEffect(() => {
    setMinimized(isMinimized);
  }, [isMinimized]);

  return (
    <a href="https://www.thehackingproject.org">
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo"
          className={`logo-part ${minimized ? "minimized" : ""}`}
        />
        {!minimized && (
          <img
            src={logoText}
            alt="Logo Text"
            className="logo-text-part"
          />
        )}
      </div>
    </a>
  );
};

Logo.propTypes = {
  isMinimized: PropTypes.bool.isRequired,
};

export default Logo;
