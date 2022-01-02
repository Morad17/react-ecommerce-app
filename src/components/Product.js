import React from 'react'

const Product = ({product}) => {
    return (
        <div className="product-container">
            <img src={product.img} alt="" />
            <p className="product-title">{product.productName}</p>           
            <p className="product-price">{product.price}</p>
        </div>
    )
}

export default Product
