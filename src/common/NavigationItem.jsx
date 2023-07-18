import { KeyboardArrowLeft } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const NavigationItem = ({ to, icon, label }) => {
  return (
    <li className="flex items-center justify-between p-4 cursor-pointer hover:text-primary">
      <Link to={to}>
        <div className="flex items-center gap-4">
          <div>{icon}</div>
          <span>{label}</span>
        </div>
      </Link>
      <div>
        <KeyboardArrowLeft />
      </div>
    </li>
  );
};

export default NavigationItem;
