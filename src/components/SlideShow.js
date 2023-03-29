import React from 'react'
import ImageSlider from './ImageSlider';
import './SlideShow.css';

function SlideShow() {
    const slides = [
        {
            url:'https://rukminim1.flixcart.com/fk-p-flap/1680/280/image/5d196529166a8700.jpg?q=50',
            title:'img1'
        },
        {
            url:'https://rukminim1.flixcart.com/fk-p-flap/1680/280/image/43afe532a275efae.jpg?q=50',
            title:'img1'
        },
        {
            url:'https://rukminim1.flixcart.com/fk-p-flap/1680/280/image/9b53bd00f765e2d7.jpg?q=50',
            title:'img1'
        },
    ]
  return (
    <div className='slideshow'>
        <ImageSlider slides = {slides}/>
    </div>
  )
}

export default SlideShow
