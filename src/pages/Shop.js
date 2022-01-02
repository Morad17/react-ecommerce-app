import React from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import PromoBanner from '../components/PromoBanner'
import { products } from '../Data'

const Shop = () => {
    return (
        <div className="shop-container">
            <PromoBanner />
            <Navbar />
            <h1 className="shop-title">Our Products</h1>
            <div className="main-content">
                <div className="row">
                    <div className="filter-container">
                        <p>Filter</p>
                        <select>
                            <option disabled selected>Size</option>
                            <option>Xs</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                        <select>
                            <option disabled selected>Color</option>
                            <option>Red</option>
                            <option>Black</option>
                            <option>White</option>
                            <option>Yellow</option>
                            <option>Blue</option>
                        </select>
                    </div>
                    <div className="sort-container">
                        <p>Sort</p>
                        <select>
                            <option disabled selected>Sort</option>
                            <option>Price high to Low</option>
                            <option>Price Low to High</option>
                        </select>
                    </div>
                </div>
                <div className="product-row">
                    {products.map(product => (
                        <Product product={product} key={product.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop
