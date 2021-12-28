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
            <div className="hero-image">
                <img alt="suit-banner" className="suit-banner" src={SuitBanner} />
            </div>
            <Categories />
        </div>
    )
}

export default Home
