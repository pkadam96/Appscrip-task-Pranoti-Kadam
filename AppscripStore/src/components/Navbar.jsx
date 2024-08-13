import { useState } from 'react';
import logo from '../images/logo.png';
import searchIcon from '../images/search-normal.png';
import heartIcon from '../images/heart.png';
import shoppingBagIcon from '../images/shopping-bag.png';
import profileIcon from '../images/profile.png';
import '../css/navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className="nav-content">
                <div>
                    <button className="hamburger" onClick={toggleMenu}>☰</button>
                    <img src={logo} alt="logo" />
                </div>
                <h1>LOGO</h1>
                <div className='icons'>
                    <img src={searchIcon} alt="search-icon" />
                    <img src={heartIcon} alt="heart-icon" />
                    <img src={shoppingBagIcon} alt="shopping-bag-icon" />
                    <img src={profileIcon} alt="profile-icon" />
                    <select>
                        <option>ENG</option>
                    </select>
                </div>
            </div>
            <ul className={menuOpen ? "menu-items" : ""}>
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>
        </nav>
    );
};

export { Navbar };
