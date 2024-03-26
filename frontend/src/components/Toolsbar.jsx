import { IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
const Toolsbar = () => {
  return (
    <>
      <div className="quickmenus side-bar-box">
        <div>
          <IconButton>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </div>
        <div className="quickmenus">
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
    </>
  );
};

export default Toolsbar;
