import React from 'react';
import Navbar from '../components/Navbar';
import PromoBanner from '../components/PromoBanner';
import SuitBanner from '../assets/images/main-suit-banner.jpeg';

const Home = () => {
    return (
        <div>
            <PromoBanner />
            <Navbar />
            <img src={SuitBanner} />
        </div>
    )
}

export default Home
