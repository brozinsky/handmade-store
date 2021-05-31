import React from 'react'
import CategoryItem from './CategoryItem'

import cat1Logo from '../../assets/categories/cat-1-logo.png'
import cat2Logo from '../../assets/categories/cat-2-logo.png'
import cat3Logo from '../../assets/categories/cat-3-logo.png'
import cat1Img from '../../assets/categories/cat-1-img.png'
import cat2Img from '../../assets/categories/cat-2-img.png'
import cat3Img from '../../assets/categories/cat-3-img.png'

const categoryData = [
    { name: 'Opaski', logo: cat1Logo, img: cat1Img },
    { name: 'Gotowe od ręki', logo: cat2Logo, img: cat2Img },
    { name: 'Koszyki', logo: cat3Logo, img: cat3Img },

]

const Categories = () => {
    return (
        <div className='category'>
            {categoryData.map(({ name, img, logo }) => {
                return <CategoryItem name={name} img={img} logo={logo} />
            })}
        </div>
    )
}

export default Categories
