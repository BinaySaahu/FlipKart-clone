import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
import { AnimatePresence, motion } from "framer-motion";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const goToPrev = () => {
    setDirection(-1)
    const index = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };
  const goToNext = () => {
    setDirection(1)
    const index = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const variants = {
    initial: direction => {
      return{
        x: direction>0?200:-200,
        opacity:0,
        overflow:'hidden'
      }
    },
    animate: {
      x: 0,
      opacity:1,
      transition: {
        x:{type:'spring', stiffness:300, damping:30}
      },
      overflow:'hidden'
    },
    exit: direction => {
      return{
        x: direction>0?-200:200,
        opacity:0,
        transition: {
          x:{type:'spring', stiffness:300, damping:30}
        },
        overflow:'hidden'
      }
    },
  };
  const autoscroll = true;
  let slideTime = 5000;
  let interval;
  function auto(){
    interval = setInterval(goToNext,slideTime)
  }
  useEffect(()=>{
    if(autoscroll)
    {
      auto();
    }
    return ()=> clearInterval(interval)
  },[currentIndex])
  
  return (
    <div className="imageslider">
      <button className="prevButton imageslider_btn" onClick={goToPrev}>
        &#60;
      </button>
      <AnimatePresence initial = {false} custom = {direction} mode = 'popLayout'>
        <motion.img
          variants={variants}
          initial='initial'
          animate='animate'
          exit='exit'
          src={slides[currentIndex].url}
          alt=""
          className="slides"
          key={slides[currentIndex].url}
          custom = {direction}
        />
      </AnimatePresence>
      <button className="nextButton imageslider_btn" onClick={goToNext}>
        &#62;
      </button>
    </div>
  );
}

export default ImageSlider;
