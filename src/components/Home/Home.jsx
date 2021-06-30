import React from 'react'
import './Home.scss'
import BigLogo from './BigLogo'
import Carousel from './Carousel'
import CarouselLoader from '../Loaders/CarouselLoader'
import Categories from './Categories'
import { useQuery } from '@apollo/client'
import { GET_SLIDER_DATA } from '../../queries/getSliderData'

const Home = () => {
    const { data } = useQuery(GET_SLIDER_DATA)
    const [sliderData, setSliderData] = React.useState(null)

    React.useEffect(() => {
        if (data) {
            setSliderData(data.slider_data)
        }
    }, [data])

    return (
        <>
            <div className="white-space" />
            <BigLogo />
            {sliderData !== null
                ? <Carousel sliderData={sliderData} />
                : <CarouselLoader />
            }
            <Categories />
        </>
    )
}

export default Home