import React from 'react'
import CategoryItem from './CategoryItem'

import cat1Logo from '../../assets/categories/cat-1-logo.png'
import cat2Logo from '../../assets/categories/cat-2-logo.svg'
import cat3Logo from '../../assets/categories/cat-3-logo.svg'
import cat4Logo from '../../assets/categories/cat-4-logo.svg'
import cat5Logo from '../../assets/categories/cat-5-logo.png'
import cat6Logo from '../../assets/categories/cat-6-logo.svg'
import cat1Img from '../../assets/categories/cat-1-img.png'
import cat2Img from '../../assets/categories/cat-2-img.png'
import cat3Img from '../../assets/categories/cat-3-img.png'
import cat4Img from '../../assets/categories/cat-4-img.png'
import cat5Img from '../../assets/categories/cat-5-img.png'
import cat6Img from '../../assets/categories/cat-6-img.png'

const categoryData = [
    { name: 'Opaski', logo: cat1Logo, img: cat1Img, category: 'opaski' },
    { name: 'Koszyki', logo: cat2Logo, img: cat2Img, category: 'koszyki' },
    { name: 'Plecaki', logo: cat3Logo, img: cat3Img, category: 'plecaki' },
    { name: 'Torebki', logo: cat4Logo, img: cat4Img, category: 'torebki' },
    { name: 'Dostępne od ręki', logo: cat5Logo, img: cat5Img, category: 'dostepne-od-reki' },
    { name: 'Kursy', logo: cat6Logo, img: cat6Img, category: 'kursy' },
]

const Categories = () => {
    return (
        <div className='category'>
            {categoryData.map(({ name, img, logo, category }, index) => {
                return <CategoryItem key={index} name={name}
                    img={img} logo={logo} cat={category} />
            })}
        </div>
    )
}

export default Categories
