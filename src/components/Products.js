import React from 'react'
import { popularProducts } from '../Data'

const Products = () => {
    return (
        <div className="products-container">
            {popularProducts.map(item=>(
                <Product item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Products
