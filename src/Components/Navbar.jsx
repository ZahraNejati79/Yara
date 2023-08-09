import {
  ChatBubbleOutline,
  Grading,
  Login,
  PermIdentity,
  Search,
  Storefront,
} from "@mui/icons-material";
import { AppBar, Toolbar } from "@mui/material";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUser } from "../Features/Auth/authSlice";
import { isEmptyObject } from "../common/isEmptyObject";

const Navbar = () => {
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
            <div className="lg:hidden flex items-center gap-4">
              <NavLink to="/account/chat">
                <div className="flex flex-col items-center justify-center hover:text-primary">
                  <Grading className="text-3xl font-bold text-colorIcon" />
                </div>
              </NavLink>
              <NavLink to="/account/chat">
                <div className="flex flex-col items-center justify-center">
                  <Storefront className="text-3xl font-bold text-colorIcon hover:text-primary" />
                </div>
              </NavLink>
            </div>
          </div>
          <div className="hidden lg:flex ml-4 gap-x-10 items-center justify-center">
            <NavLink to="/account/chat">
              <div className="flex flex-col items-center justify-center gap-2 text-textPrimary hover:text-primary">
                <ChatBubbleOutline className="text-3xl" />
                <div className="text-base cursor-pointer">گفتوگو</div>
              </div>
            </NavLink>
            {!isEmptyObject(user) ? (
              <NavLink to="/profile">
                <div className="flex flex-col items-center justify-center gap-2 text-textPrimary hover:text-primary ">
                  <PermIdentity className="text-3xl" />
                  <div className="text-base cursor-pointer">پروفایل</div>
                </div>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <div className="flex flex-col items-center justify-center gap-2 text-textPrimary hover:text-primary ">
                  <Login className="text-3xl" />
                  <div className="text-base cursor-pointer">ورود</div>
                </div>
              </NavLink>
            )}
          </div>
        </div>
        <Toolbar className="hidden lg:flex  items-center justify-start w-full gap-x-8 ">
          <NavLink to="/">
            <div className="hover:text-primary text-textPrimary text-lg font-bold cursor-pointer">
              خانه
            </div>
          </NavLink>
          <div className="hover:text-primary text-textPrimary text-lg font-bold cursor-pointer">
            دسته بندی
          </div>

          {user.type == "meson" ? (
            <NavLink to="/dashboard">
              <div className="hover:text-primary text-textPrimary text-lg font-bold cursor-pointer">
                مدیریت مزون
              </div>
            </NavLink>
          ) : (
            <NavLink to={!isEmptyObject(user) ? "/create-meson" : "/login"}>
              <div className="hover:text-primary text-textPrimary text-lg font-bold cursor-pointer">
                ایجاد مزون
              </div>
            </NavLink>
          )}
          <NavLink to="/discovery">
            <div className="hover:text-primary text-textPrimary text-lg font-bold cursor-pointer">
              مزون گردی
            </div>
          </NavLink>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
