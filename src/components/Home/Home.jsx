import React from 'react'
import './Home.scss'
import BigLogo from './BigLogo'
import Carousel from './Carousel'
import Categories from './Categories'

const Home = () => {
    return (
        <>
            <div className="white-space" />
            <BigLogo />
            <Carousel />
            <Categories />
        </>
    )
}

export default Home