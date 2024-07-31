import React from 'react';
import HeaderTop from '../HeaderTop/HeaderTop';
import './Header.css';
import Navbar from '../../Shared/Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';


const Header = () => {
    return (
        <header>
            <Navbar></Navbar>
            <HeaderTop></HeaderTop>
            <BusinessInfo></BusinessInfo>
        </header>
    );
};

export default Header;