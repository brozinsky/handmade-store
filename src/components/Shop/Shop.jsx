import React from 'react'
import Product from './Product'
import './Shop.scss';
import { ReactComponent as Zigzag } from '../../assets/zigzag.svg'

const productData = [
    {
        name: 'Produkt 1', description: '', price: 200, id: 1,
        img: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/186730372_762874107759775_3378922120798467314_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=o4A8rg-9ibwAX_LEaub&edm=AABBvjUBAAAA&ccb=7-4&oh=ebc0143ce816ddd50950a34c7eb39f44&oe=60B569F2&_nc_sid=83d603'
    },
    {
        name: 'Produkt 2', description: '', price: 100, id: 2,
        img: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/139164234_223043752776150_4494770161823579753_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=64Pqo77ne6cAX_zsXQS&edm=AABBvjUBAAAA&ccb=7-4&oh=5dd294646079cf619e78c3373b2651e7&oe=60B59947&_nc_sid=83d603'
    },
    {
        name: 'Produkt 3', description: '', price: 50, id: 3,
        img: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/139164234_223043752776150_4494770161823579753_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=64Pqo77ne6cAX_zsXQS&edm=AABBvjUBAAAA&ccb=7-4&oh=5dd294646079cf619e78c3373b2651e7&oe=60B59947&_nc_sid=83d603'
    },
    {
        name: 'Produkt 4', description: '', price: 120, id: 4,
        img: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/139164234_223043752776150_4494770161823579753_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=64Pqo77ne6cAX_zsXQS&edm=AABBvjUBAAAA&ccb=7-4&oh=5dd294646079cf619e78c3373b2651e7&oe=60B59947&_nc_sid=83d603'
    },
    {
        name: 'Produkt 5', description: '', price: 80, id: 5,
        img: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/139164234_223043752776150_4494770161823579753_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=64Pqo77ne6cAX_zsXQS&edm=AABBvjUBAAAA&ccb=7-4&oh=5dd294646079cf619e78c3373b2651e7&oe=60B59947&_nc_sid=83d603'
    },
    {
        name: 'Produkt 6', description: '', price: 40, id: 6,
        img: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/139164234_223043752776150_4494770161823579753_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=64Pqo77ne6cAX_zsXQS&edm=AABBvjUBAAAA&ccb=7-4&oh=5dd294646079cf619e78c3373b2651e7&oe=60B59947&_nc_sid=83d603'
    },
]

const courseData = [
    {
        name: 'Kurs 1', description: '', price: 200, id: 7,
        img: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/186730372_762874107759775_3378922120798467314_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=o4A8rg-9ibwAX_LEaub&edm=AABBvjUBAAAA&ccb=7-4&oh=ebc0143ce816ddd50950a34c7eb39f44&oe=60B569F2&_nc_sid=83d603'
    },
    {
        name: 'Kurs 2', description: '', price: 150, id: 8,
        img: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/139164234_223043752776150_4494770161823579753_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=64Pqo77ne6cAX_zsXQS&edm=AABBvjUBAAAA&ccb=7-4&oh=5dd294646079cf619e78c3373b2651e7&oe=60B59947&_nc_sid=83d603'
    },
]

const Shop = () => {
    return (
        <div className="shop">

            <div className='shop__products'>
                <h2 className="shop__title">Produkty:</h2>
                <Zigzag />
                <div className="shop__container">
                    {productData.map(({ name, price, img, id }) => {
                        return <Product name={name} price={price} imgUrl={img} id={id} />
                    })}
                </div>
            </div>
            <div className="shop__courses">
                <h2 className="shop__title">Kursy:</h2>
                <Zigzag />
                <div className="shop__container">
                    {courseData.map(({ name, price, img, id }) => {
                        return <Product name={name} price={price} imgUrl={img} id={id} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Shop
