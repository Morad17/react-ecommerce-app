import React from 'react'
 
import { Search, Person, Chat, Notifications } from '@mui/icons-material/'

const Navbar = () => {
    return (
        <nav className="main-navbar">
            <ul>
                <li>
                    <div className="logo">
                        EsToRe
                    </div>
                </li>
                <li>
                    <div className="searchbar">
                        <Search className="search-icon" />
                        <input placeholder="search" type="text" className="search-input" />
                    </div>
                </li>
                <li className="nav-main-links">
                    <a href="/" className="nav-link">Shop</a>
                    <a href="/" className="nav-link">Login</a>
                    <a href="/" className="nav-link">Basket</a>
                    <a href="/" className="nav-link">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
