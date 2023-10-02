import React, { useState } from "react";
import ArrowLeft from "../../assets/ArrowLeft.svg";
import ArrowRight from "../../assets/ArrowRight.svg";
import styled from "styled-components";

const SliderStyles = styled.div`
  height: 100%;
  position: relative;
  border-radius: 20px;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.$pictures[props.$currentIndex]});
`;

const LeftArrowStyles = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  z-index: 1;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 1200px) {
    height: 3rem;
  }
`;

const RightArrowStyles = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  z-index: 1;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 1200px) {
    height: 3rem;
  }
`;

const Slider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {pictures.length > 1 && (
        <>
          <SliderStyles $pictures={pictures} $currentIndex={currentIndex} />
          <LeftArrowStyles
            src={ArrowLeft}
            onClick={goToPrevious}
            alt="previous"
          />
          <RightArrowStyles src={ArrowRight} onClick={goToNext} alt="next" />
        </>
      )}
      {pictures.length <= 1 && (
        <>
          <SliderStyles $pictures={pictures} $currentIndex={currentIndex} />
        </>
      )}
    </>
  );
};

export default Slider;
