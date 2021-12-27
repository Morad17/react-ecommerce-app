import React from 'react'
import CategoryItem from './CategoryItem'
import { categories } from '../Data'

const Categories = () => {
    return (
        <div className="categories-container">
            {categories.map(item =>(
                <CategoryItem item={item}/>
            ))}
        </div>
    )
}

export default Categories
