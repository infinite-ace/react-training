import React from 'react';
import logo from './giffgaff-logo.png';
import secondary_logo from './sim-card-giff-gaff.png'
import './main-page.css';

function Index() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={secondary_logo} className="App-secondary-logo" alt="logo" />
        <p>
            Lorem Ipsum is simply text of the printing and typesetting industry.
        </p>
      </header>
    </div>
  );
}

export default Index;
