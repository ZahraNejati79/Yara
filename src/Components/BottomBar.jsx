import { Forum, Home, Login, Person, Search } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../Features/Auth/authSlice";
import { isEmptyObject } from "../common/isEmptyObject";

const BottomBar = () => {
  const user = useSelector(getUser);
  return (
    <AppBar className="stiky top-auto bottom-0 bg-white text-textSecondary flex items-center justify-center lg:hidden ">
      <Toolbar className="w-full flex items-center justify-between gap-x-5 ">
        <Link to="/">
          <IconButton className="text-colorIcon flex flex-col items-center justify-center">
            <Home className="hover:text-primary" />
            <Typography>خانه</Typography>
          </IconButton>
        </Link>
        <Link to="/discovery">
          <IconButton className="text-colorIcon flex flex-col items-center justify-center">
            <Search className="hover:text-primary" />
            <Typography>مزون گردی</Typography>
          </IconButton>
        </Link>
        <Link to="/account/chat">
          <IconButton className="text-colorIcon flex flex-col items-center justify-center">
            <Forum className="hover:text-primary" />
            <Typography>گفتوگو</Typography>
          </IconButton>
        </Link>
        {!isEmptyObject(user) ? (
          <Link to="/profile">
            <IconButton className="text-colorIcon flex flex-col items-center justify-center">
              <Person className="hover:text-primary" />
              <Typography>پروفایل</Typography>
            </IconButton>
          </Link>
        ) : (
          <Link to="/login">
            <IconButton className="text-colorIcon flex flex-col items-center justify-center">
              <Login className="hover:text-primary" />
              <Typography>ورود</Typography>
            </IconButton>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default BottomBar;
