import React, { useState } from "react";
import "../Styles/headerdash.css";
import add from "./assests/add.svg";
import search from "./assests/search.svg";

const HeaderDash = () => {
  return (
    <>
      <div className="sidebar_main">
        <div className="sidebar_logo">Chat GPT</div>
        <div className="add_new">
          <div>
            <img src={add} />
          </div>
          <div className="new_chat">New Chat</div>
        </div>

        <div className="chat_history">
          Chat History
          <div class="search-box">
            <input
              class="search-input"
              type="text"
              placeholder="Search something.."
            />
            <div class="search-btn">
              <img src={search}/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDash;
