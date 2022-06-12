import logo from './giffgaff-logo.png';
import secondary_logo from "./sim-card-giff-gaff.png";
import React from "react";

const Header = () => (
    <div className="header">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={secondary_logo} className="App-secondary-logo" alt="logo" />
        </header>
    </div>
);

export default Header;
