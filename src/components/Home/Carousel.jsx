import React from 'react'
import caro1 from '../../assets/caro-1.png'
import caro2 from '../../assets/caro-2.png'
import caroMob1 from '../../assets/caro-mob-1.png'
import caroMob2 from '../../assets/caro-mob-2.png'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import InfoContainer from './InfoContainer'
const sliderData = [
    {
        img: caro1, imgMob: caroMob1, title: 'Pierwszy tytuł',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        img: caro2, imgMob: caroMob2, title: 'Następny tytuł',
        text: 'Lorem jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. '
    }
]

function CarouselImage({ index, currentSlide, img, imgMob }) {
    return (
        <>
            <picture>
                <source className={index === currentSlide ?
                    "carousel__image carousel__image--active"
                    : "carousel__image"}
                    media="(min-width: 768px)"
                    srcSet={img} />
                {/* <source className="image"
                    media="(min-width: 768px)"
                    srcSet={props.image.imgUrlTablet} /> */}
                <img className={index === currentSlide ?
                    "carousel__image carousel__image--active"
                    : "carousel__image"}
                    src={imgMob} alt="Carousel item" />
            </picture>
        </>
    )
}

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const length = sliderData.length
    const autoPlayRef = React.useRef()

    React.useEffect(() => {
        autoPlayRef.current = handleNext
    })

    //auto change slides
    React.useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }
        const interval = setInterval(play, 5000)

        return () => clearInterval(interval)
    }, [])

    //button functions
    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0
            ? length - 1 : currentSlide - 1)
    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === length - 1
            ? 0 : currentSlide + 1)
    }

    const changeSlide = (index) => {
        setCurrentSlide(index)
    }

    return (
        <div className='carousel'>
            <InfoContainer sliderData={sliderData} currentSlide={currentSlide} />
            {sliderData.map((slide, index) => {
                return < CarouselImage
                    key={index}
                    index={index}
                    currentSlide={currentSlide}
                    img={slide.img}
                    imgMob={slide.imgMob} />
            })}
            <button onClick={handlePrev}
                className="carousel__button carousel__button--left">
                <ArrowLeftIcon />
            </button>
            <button onClick={handleNext}
                className="carousel__button carousel__button--right">
                <ArrowRightIcon />
            </button>
            <div className="carousel__panel">
                {sliderData.map((slide, index) => {
                    return <button
                        key={index}
                        onClick={() => changeSlide(index)}
                        className={`carousel__panel-item
                        ${currentSlide === index ? 'carousel__panel-item--active' : ''}`}
                    ></button>
                })}
            </div>
        </div >
    )
}

export default Carousel