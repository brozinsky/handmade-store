import React from 'react'
import caro1 from '../../assets/caro-1.png'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'

const Carousel = () => {
    return (
        <div className='carousel'>
            <div className="carousel__info">
                <h2 className="carousel__info-title">Gotowe od ręki</h2>
                <p className="carousel__info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nesciunt.</p>
            </div>
            <img className='carousel__image' src={caro1} alt="" />
            <div className="carousel__button carousel__button--left">
                <ArrowLeftIcon />
            </div>
            <div className="carousel__button carousel__button--right">
                <ArrowRightIcon />
            </div>
            <div className="carousel__panel">
                <div className="carousel__panel-item"></div>
                <div className="carousel__panel-item"></div>
                <div className="carousel__panel-item"></div>
            </div>
        </div>
    )
}

export default Carousel