import React from 'react'
import { Link } from 'react-router-dom'
 
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
                    <Link to="/Shop" className="nav-link">Shop</Link>
                    <Link to="/" className="nav-link">Login</Link>
                    <Link to="/" className="nav-link">Contact</Link>
                    <Link to="/" className="nav-link">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </Link>
                    
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
