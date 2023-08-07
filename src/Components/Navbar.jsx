import {
  ChatBubbleOutline,
  Grading,
  Login,
  PermIdentity,
  Search,
  Storefront,
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
    <AppBar className="bg-white flex items-center justify-center sticky top-0 overflow-hidden">
      <Toolbar className="container flex lg:flex-col mt-4">
        <div className="flex flex-col items-center lg:flex-row justify-between w-full">
          <div className="w-full flex items-center md:min-w-[80%] mb-3 lg:mb-2">
            <div className="hidden lg:block text-2xl md:text-3xl lg:text-4xl font-bold italic text-primary">
              YaRa
            </div>
            <div className="text-xs md:text-lg lg:mr-8 bg-secondary border-spacing-1 px-2 py-2 md:py-2 lg:py-3 rounded-sm lg:max-w-3xl hover:opacity-90 w-full">
              <Search className="text-textSecondary ml-2" />
              <input
                type="text"
                className="outline-none text-textPrimary bg-secondary text-xs md:text-sm"
                placeholder="جستجو در مزون ها"
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-full -order-1 lg:-order-none mb-4">
            <div className="lg:hidden text-xl md:text-2 lg:text-3xl font-bold italic text-primary">
              YaRa
            </div>
            <div className="lg:hidden flex items-center ">
              <NavLink to="/account/chat">
                <IconButton className="flex flex-col items-center justify-center">
                  <Grading className="text-3xl font-bold text-colorIcon" />
                </IconButton>
              </NavLink>
              <NavLink to="/account/chat">
                <IconButton className="flex flex-col items-center justify-center">
                  <Storefront className="text-3xl font-bold text-colorIcon" />
                </IconButton>
              </NavLink>
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
