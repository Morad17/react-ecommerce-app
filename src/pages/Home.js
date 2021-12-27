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
            <img src={SuitBanner} />
            <Categories />
        </div>
    )
}

export default Home
