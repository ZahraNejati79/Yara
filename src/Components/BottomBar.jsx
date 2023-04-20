import { Forum, Home, Person, Search } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

const BottomBar = () => {
  const [clickBottomIcon, setClickBottomIcon] = useState(0);
  return (
    <AppBar className=" fixed top-auto bottom-0 bg-white text-textSecondary flex items-center justify-center md:hidden ">
      <Toolbar className="w-full flex items-center justify-between gap-x-5 ">
        <IconButton
          onClick={() => setClickBottomIcon(1)}
          className="flex flex-col items-center justify-center"
        >
          <Home className={clickBottomIcon === 1 && "text-primary"} />
          <Typography>خانه</Typography>
        </IconButton>
        <IconButton
          onClick={() => setClickBottomIcon(2)}
          className="flex flex-col items-center justify-center"
        >
          <Search className={clickBottomIcon === 2 && "text-primary"} />
          <Typography>مزون گردی</Typography>
        </IconButton>
        <IconButton
          onClick={() => setClickBottomIcon(3)}
          className="flex flex-col items-center justify-center"
        >
          <Forum className={clickBottomIcon === 3 && "text-primary"} />
          <Typography>گفتوگو</Typography>
        </IconButton>
        <IconButton
          onClick={() => setClickBottomIcon(4)}
          className="flex flex-col items-center justify-center"
        >
          <Person className={clickBottomIcon === 4 && "text-primary"} />
          <Typography>پروفایل</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default BottomBar;
