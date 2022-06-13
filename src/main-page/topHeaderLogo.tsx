import React from 'react';
import './TopHeaderLogo.css';
import logoUrl from './giff-gaff-top-logo.png';

const TopHeaderLogo = () => (
    <div className="header">
        <img src={logoUrl} alt="Tesla" />
    </div>
);

export default TopHeaderLogo;
