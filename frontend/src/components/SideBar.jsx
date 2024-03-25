import { IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SideBar = () => {
  return (
    <div className="side-bar-container">
      <div className="quickmenus side-bar-box">
        <div>
          <IconButton>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddAltOutlinedIcon />
          </IconButton>
          <IconButton>
            <GroupAddOutlinedIcon />
          </IconButton>
          <IconButton>
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <DarkModeOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="side-bar-box conversations">chat list</div>
      <div className="side-bar-box search-box">
        <input type="text" placeholder="search" />
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SideBar;
