import { ChatBubbleOutline, PermIdentity, Search } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [clickBottomIcon, setClickBottomIcon] = useState(0);
  const [profileMenu, setProfileMenu] = useState(false);
  const handleClose = () => {
    setProfileMenu(false);
  };
  return (
    <AppBar className="bg-white flex items-center justify-center">
      <Toolbar className="container md:mx-8 flex flex-col ">
        <div className="flex items-center justify-between w-full">
          <div className="w-full flex items-center justify-start">
            <div className="text-3xl font-bold italic text-primary">YaRa</div>
            <div className="mr-8 bg-secondary border-spacing-1 px-2 py-3 rounded-md min-w-max md:w-1/2 hover:opacity-90">
              <Search className="text-textSecondary ml-2" />
              <input
                type="text"
                className="outline-none  text-textPrimary bg-secondary   "
                placeholder="جستوجو در مزون ها"
              />
            </div>
          </div>
          <div className="hidden md:flex ml-4 gap-x-4 items-center justify-center">
            <IconButton className="flex flex-col items-center justify-center">
              <ChatBubbleOutline className="text-3xl font-bold text-textPrimary" />
              <Typography className="text-lg  text-textPrimary">
                گفتوگو
              </Typography>
            </IconButton>
            <IconButton
              onClick={() => setProfileMenu(true)}
              className="flex flex-col items-center justify-center"
            >
              <PermIdentity className="text-3xl font-bold text-textPrimary" />
              <Typography className="text-lg text-textPrimary">
                پروفایل
              </Typography>
            </IconButton>
            <Menu onClose={handleClose} open={profileMenu}>
              <MenuItem onClick={handleClose}>پروفایل</MenuItem>
              <MenuItem onClick={handleClose}>سفارشات</MenuItem>
              <MenuItem onClick={handleClose}>خزوج از حساب کاربری</MenuItem>
            </Menu>
          </div>
        </div>
        <Toolbar className="hidden md:flex  items-center justify-start w-full gap-x-8 ">
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
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
