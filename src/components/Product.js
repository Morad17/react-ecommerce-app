import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
    return (
        <div className="product-container">
            <Link to={'/ProductPage'+product.id}>
                <img src={product.img} alt="" />
                <p className="product-title">{product.productName}</p>           
                <p className="product-price">{product.price}</p>
            </Link>
        </div>
    )
}

export default Product
