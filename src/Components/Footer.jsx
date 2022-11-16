import React from "react";
import Select from "react-select";
import { themeOptions } from "../Styles/theme";
import { useTheme } from "../Context/ThemeContext";

const Footer = () => {
  const { setTheme } = useTheme();
  const handleThemeChange = (e) => {
    setTheme(e.value);
  };

  return (
    <div className="footer">
      <div className="footer-links">links</div>
      <div className="theme-options">
        <Select
          options={themeOptions}
          menuPlacement="top"
          onChange={handleThemeChange}
        />
      </div>
    </div>
  );
};

export default Footer;
