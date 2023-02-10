import React from "react";
import '../css/style.css';

const Header = () => {
  return (
    <header> 
        <div className="logo-image">
          <img src={require("../images/Rock-Paper-Scissors.png")} />
        </div>
        <div className="main-heading">
          <h1>Rock Paper Scissor</h1>
        </div>
    </header>
  );
};

export default Header;
