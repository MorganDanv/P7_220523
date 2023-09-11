import React, { useState } from "react";
import ArrowLeft from "../../assets/ArrowLeft.svg";
import ArrowRight from "../../assets/ArrowRight.svg";
import styled from "styled-components";

const SliderStyles = styled.img`
  height: 100%;
  position: relative;
`;

const LeftArrowStyles = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  z-index: 1;
  cursor: pointer;
`;

const RightArrowStyles = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  z-index: 1;
  cursor: pointer;
`;
const SlideStyles = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  background-image: url("${(props) => props.$slides.$currentIndex}");
`;
const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(slides);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      {slides.length > 1 && (
        <>
          <SliderStyles />
          <LeftArrowStyles
            src={ArrowLeft}
            onClick={goToPrevious}
            alt="previous"
          />
          <RightArrowStyles src={ArrowRight} onClick={goToNext} alt="next" />
          <SlideStyles $slides={slides} $currentIndex={currentIndex} />
        </>
      )}
      {slides.length <= 1 && (
        <>
          <SliderStyles />
          <SlideStyles $slides={slides} $currentIndex={currentIndex} />
        </>
      )}
    </>
  );
};

export default Slider;
