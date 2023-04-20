import { Home, Search } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar className="bg-white flex items-center justify-center">
      <Toolbar className="container md:mx-8">
        <div className="text-2xl font-bold italic text-primary">YaRa</div>
        <div className="md:mr-8 mr-2 bg-secondary border-spacing-1 p-2 rounded-md md:w-1/2 hover:opacity-80">
          <Search className="text-textSecondary ml-2" />
          <input
            type="text"
            className="outline-none  text-textPrimary bg-secondary   "
            placeholder="جستوجو"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
