import React from 'react'
 
import { Badge } from '@mui/material'
import { Search, Person, Chat, Notifications, ShoppingCartOutlined } from '@mui/icons-material/'

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
                        <input placeholder="search" type="text" className="search-input" />
                        <Search className="search-icon" />
                    </div>
                </li>
                <li className="nav-main-links">
                    <a href="/" className="nav-link">Shop</a>
                    <a href="/" className="nav-link">Login</a>
                    <a href="/" className="nav-link">Contact</a>
                    <a href="/" className="nav-link">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </a>
                    
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
