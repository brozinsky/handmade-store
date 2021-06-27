import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import { ZoomContext } from '../../contexts/ZoomContext'
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap'

const DetailsCarousel = ({ images }) => {
    const [currentImg, setCurrentImg] = React.useState(0);
    const [, setIsZoomed] = React.useContext(ZoomContext)

    const length = images.length
    const autoPlayRef = React.useRef()

    React.useEffect(() => {
        autoPlayRef.current = handleNext
    })

    //button functions
    const handlePrev = () => {
        setCurrentImg(currentImg === 0
            ? length - 1 : currentImg - 1)
    }

    const handleNext = () => {
        setCurrentImg(currentImg === length - 1
            ? 0 : currentImg + 1)
    }

    const handleImageClick = (index) => {
        setCurrentImg(index)
    }

    const handleZoomIn = () => {
        setIsZoomed(true)
    }

    return (
        <div className="details__carousel">

            <div className="details__carousel-img-container">
                <ZoomOutMapIcon className="details__carousel-icon"
                    onClick={handleZoomIn}
                />
                <button onClick={handlePrev}
                    className="details__carousel-button">
                    <ArrowLeftIcon />
                </button>
                <img onClick={handleZoomIn}
                    className="product__img" src={`${images[currentImg]}`} alt="Product" />
                <button onClick={handleNext}
                    className="details__carousel-button">
                    <ArrowRightIcon />
                </button>
            </div>
            <div className="details__image-small-container">
                {images.map((img, index) => {
                    return <img
                        onClick={() => handleImageClick(index)}
                        className={`details__image-small
                        ${index === currentImg ? 'details__image-small--active' : ''}
                        `}
                        src={`${img}`} alt="Produkt" />
                })}
            </div>
        </div>
    )
}

export default DetailsCarousel
