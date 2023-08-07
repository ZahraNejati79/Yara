import { Forum, Home, Login, Person, Search } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../Features/Auth/authSlice";

const BottomBar = () => {
  const [clickBottomIcon, setClickBottomIcon] = useState(0);
  const user = useSelector(getUser);
  return (
    <AppBar className="stiky top-auto bottom-0 bg-white text-textSecondary flex items-center justify-center lg:hidden ">
      <Toolbar className="w-full flex items-center justify-between gap-x-5 ">
        <Link to="/">
          <IconButton
            onClick={() => setClickBottomIcon(1)}
            className="text-colorIcon flex flex-col items-center justify-center"
          >
            <Home className={clickBottomIcon === 1 && "text-primary"} />
            <Typography>خانه</Typography>
          </IconButton>
        </Link>
        <Link to="/discovery">
          <IconButton
            onClick={() => setClickBottomIcon(2)}
            className="text-colorIcon flex flex-col items-center justify-center"
          >
            <Search className={clickBottomIcon === 2 && "text-primary"} />
            <Typography>مزون گردی</Typography>
          </IconButton>
        </Link>
        <Link to="/account/chat">
          <IconButton
            onClick={() => setClickBottomIcon(3)}
            className="text-colorIcon flex flex-col items-center justify-center"
          >
            <Forum className={clickBottomIcon === 3 && "text-primary"} />
            <Typography>گفتوگو</Typography>
          </IconButton>
        </Link>
        {user.id ? (
          <Link to="/profile">
            <IconButton
              onClick={() => setClickBottomIcon(4)}
              className="text-colorIcon flex flex-col items-center justify-center"
            >
              <Person className={clickBottomIcon === 4 && "text-primary"} />
              <Typography>پروفایل</Typography>
            </IconButton>
          </Link>
        ) : (
          <Link to="/login">
            <IconButton
              onClick={() => setClickBottomIcon(4)}
              className="text-colorIcon flex flex-col items-center justify-center"
            >
              <Login className={clickBottomIcon === 4 && "text-primary"} />
              <Typography>ورود</Typography>
            </IconButton>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default BottomBar;
