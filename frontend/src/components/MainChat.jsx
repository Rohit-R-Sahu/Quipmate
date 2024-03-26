import React from "react";
import SideBar from "./SideBar";
import ChatBox from "./ChatBox";
import Toolsbar from "./Toolsbar";

const MainChat = () => {
  return (
    <>
      <div className="main-container">
        <Toolsbar />
        <SideBar />
        <ChatBox />
      </div>
    </>
  );
};

export default MainChat;
