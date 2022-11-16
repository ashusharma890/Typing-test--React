import React from "react";
// import { AccountCircleRounded } from "@mui/icons-material";
import AccountIcon from "./AccountIcon";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">logo</div>
      <div className="icons">
        <AccountIcon />
      </div>
    </div>
  );
};

export default Header;
