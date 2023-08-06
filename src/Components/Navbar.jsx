import {
  ChatBubbleOutline,
  Login,
  PermIdentity,
  Search,
} from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUser } from "../Features/Auth/authSlice";

const Navbar = () => {
  const [clickBottomIcon, setClickBottomIcon] = useState(0);
  const user = useSelector(getUser);
  console.log("user :", user);
  return (
    <AppBar className="bg-white flex items-center justify-center ">
      <Toolbar className="container md:mx-8 flex lg:flex-col  ">
        <div className="flex items-center justify-between w-full">
          <div className="w-full flex items-center justify-start">
            <div className="text-xl md:text-2 lg:text-3xl font-bold italic text-primary">
              YaRa
            </div>
            <div className="mr-8 bg-secondary border-spacing-1 px-2 py-1 md:py-2 lg:py-3 rounded-md min-w-max w-2/3 md:w-1/2 hover:opacity-90">
              <Search className="text-textSecondary ml-2" />
              <input
                type="text"
                className="outline-none  text-textPrimary bg-secondary text-sm md:text-lg  "
                placeholder="جستجو در مزون ها"
              />
            </div>
          </div>
          <div className="hidden lg:flex ml-4 gap-x-4 items-center justify-center">
            <NavLink to="/account/chat">
              <IconButton className="flex flex-col items-center justify-center">
                <ChatBubbleOutline className="text-3xl font-bold text-textPrimary" />
                <Typography className="text-lg  text-textPrimary">
                  گفتوگو
                </Typography>
              </IconButton>
            </NavLink>
            {user.id ? (
              <NavLink to="/profile">
                <IconButton className="flex flex-col items-center justify-center">
                  <PermIdentity className="text-3xl font-bold text-textPrimary" />
                  <Typography className="text-lg text-textPrimary">
                    پروفایل
                  </Typography>
                </IconButton>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <IconButton className="flex flex-col items-center justify-center">
                  <Login className="text-3xl font-bold text-textPrimary" />
                  <Typography className="text-lg text-textPrimary">
                    ورود
                  </Typography>
                </IconButton>
              </NavLink>
            )}
          </div>
        </div>
        <Toolbar className="hidden lg:flex  items-center justify-start w-full gap-x-8 ">
          <Typography
            onClick={() => setClickBottomIcon(1)}
            className={
              clickBottomIcon === 1
                ? "text-primary text-xl font-bold cursor-pointer"
                : "text-xl font-bold cursor-pointer text-textPrimary"
            }
          >
            دسته بندی
          </Typography>

          {user.type === "meson" ? (
            <NavLink to="/dashboard">
              <Typography
                onClick={() => setClickBottomIcon(2)}
                className={
                  clickBottomIcon === 2
                    ? "text-primary text-xl font-bold cursor-pointer"
                    : "text-xl font-bold cursor-pointer text-textPrimary"
                }
              >
                مدیریت مزون
              </Typography>
            </NavLink>
          ) : (
            <NavLink to={user.id ? "/create-meson" : "/login"}>
              <Typography
                onClick={() => setClickBottomIcon(3)}
                className={
                  clickBottomIcon === 3
                    ? "text-primary text-xl font-bold cursor-pointer"
                    : "text-xl font-bold cursor-pointer text-textPrimary"
                }
              >
                ایجاد مزون
              </Typography>
            </NavLink>
          )}
          <NavLink to="/discovery">
            <Typography
              onClick={() => setClickBottomIcon(3)}
              className={
                clickBottomIcon === 3
                  ? "text-primary text-xl font-bold cursor-pointer"
                  : "text-xl font-bold cursor-pointer text-textPrimary"
              }
            >
              مزون گردی
            </Typography>
          </NavLink>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
