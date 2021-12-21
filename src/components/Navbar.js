import React from 'react'
 

const Navbar = () => {
    return (
        <nav className="main-navbar">
            <ul>
                <li>
                    <div className="logo">
                        EsToRe
                    </div>
                </li>
                <li className="nav-main-links">
                    <a href="#" className="nav-link">Shop</a>
                    <a href="#" className="nav-link">Login</a>
                    <a href="#" className="nav-link">Basket</a>
                    <a href="#" className="nav-link">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
