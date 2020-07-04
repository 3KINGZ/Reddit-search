import React from "react";
import "./Header.css";
import { Icon } from "@blueprintjs/core";

function Header({ search, refInput, onRedditSearch }) {
  return (
    <div className="header">
      <span className="reddit-title">r/{search}</span>
      <input type="input" ref={refInput} />
      <button onClick={onRedditSearch} className="search-btn">
        <Icon icon="search" size="20" />
      </button>
    </div>
  );
}

export default Header;
