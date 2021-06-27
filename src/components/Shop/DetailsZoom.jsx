import React from 'react'
import { ZoomContext } from '../../contexts/ZoomContext'
import CloseIcon from '@material-ui/icons/Close'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'

const DetailsZoom = ({ images }) => {
    const [currentImg, setCurrentImg] = React.useState(0);
    const [isZoomed, setIsZoomed] = React.useContext(ZoomContext)

    const length = images.length

    const handleImageClick = (index) => {
        setCurrentImg(index)
    }

    const handleExit = () => {
        setIsZoomed(false)
    }

    const handlePrev = () => {
        setCurrentImg(currentImg === 0
            ? length - 1 : currentImg - 1)
    }

    const handleNext = () => {
        setCurrentImg(currentImg === length - 1
            ? 0 : currentImg + 1)
    }

    return (
        <div className="details__zoom-background" >
            <div className="details__zoom-counter">
                {currentImg + 1}  / {length}
            </div>
            <CloseIcon onClick={handleExit} className="details__zoom-close" />
            <button onClick={handlePrev}
                className="details__zoom-button details__zoom-button-left">
                <ArrowLeftIcon />
            </button>
            <button onClick={handleNext}
                className="details__zoom-button details__zoom-button-right">
                <ArrowRightIcon />
            </button>
            <div className="details__zoom">
                <img className="product__img-zoomed" src={`${images[currentImg]}`} alt="Product" />

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
        </div>
    )
}

export default DetailsZoom
