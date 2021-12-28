import React from 'react'
import Categories from './Categories'

const CategoryItem = ({item}) => {
    return (
        <div className="category-items-container">
            <img className="category-image" src={item.img} />
            <div className="category-item-info">
                <h2 className="category-title">{item.title}</h2>
                <button className="shop-now-button">Shop Now</button>
            </div>
        </div>
    )
}

export default CategoryItem
