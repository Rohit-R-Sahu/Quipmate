import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Conversation from "./Conversation";
import { useState } from "react";
const SideBar = () => {
  const [conversations, setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Rest#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    ,
    {
      name: "Fest#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="side-bar-container">
      <div className="side-bar-box search-box">
        <input type="text" placeholder="search" />
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
      </div>
      <div className="side-bar-box conversations">
        {conversations.map((conversation, index) => (
          <Conversation conversations={conversation} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
