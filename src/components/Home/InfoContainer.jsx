import React from 'react'

const InfoContainer = ({ sliderData, currentSlide }) => {
    return (
        <div className="carousel__info-container">
            {sliderData.map((slide, index) => {
                return <div
                    key={index}
                    className={index === currentSlide ?
                        "carousel__info carousel__info--active"
                        : "carousel__info"}>
                    <h2 className="carousel__info-title">
                        {slide.title}</h2>
                    <p className="carousel__info-text">
                        {slide.text}</p>
                </div>
            })}
        </div>

    )
}

export default InfoContainer