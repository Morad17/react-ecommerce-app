import React from 'react'
import Navbar from '../components/Navbar'
import PromoBanner from '../components/PromoBanner'
import { products } from '../Data'

const ProductPage = () => {
    

    if (products.id === 1 ) {
        return <div classname="product-page-container">
            <PromoBanner />
            <Navbar />
            {console.log(products )}
            <h1>{products.productName}</h1>
        </div>
    }
}

export default ProductPage
