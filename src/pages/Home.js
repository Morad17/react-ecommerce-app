import React from 'react';
import Navbar from '../components/Navbar';
import PromoBanner from '../components/PromoBanner';
import SuitBanner from '../assets/images/main-suit-banner.jpeg';
import Categories from '../components/Categories';

const Home = () => {
    return (
        <div>
            <PromoBanner />
            <Navbar />
            <div className="content">
                <div className="hero-image">
                    <img alt="suit-banner" className="suit-banner" src={SuitBanner} />
                </div>
                <h1 className="home-title">Shop Now</h1>
                <Categories  className="categories"/>
            </div>
            
        </div>
    )
}

export default Home
