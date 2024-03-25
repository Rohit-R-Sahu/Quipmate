import React from "react";
import SideBar from "./SideBar";
import ChatBox from "./ChatBox";

const MainChat = () => {
  return (
    <>
      <div className="main-container">
        <SideBar />
        <ChatBox />
      </div>
    </>
  );
};

export default MainChat;
