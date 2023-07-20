// import React, { useState } from "react";
// import styled from "styled-components";
// import ArrowLeft from "../../assets/ArrowLeft.svg";
// import ArrowRight from "../../assets/ArrowRight.svg";
// import data from "../../data.json";

// const ArrowStyleL = styled.img`
//   font-size: 50px;
// `;

// const ArrowStyleR = styled.img`
//   font-size: 50px;
// `;

// const SlideImage = styled.img`
//   width: 400px;
//   height: 300px;
//   object-fit: cover;
// `;

// const StyledSlider = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Slider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = 13;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };
//   return (
//     <StyledSlider>
//       <ArrowStyleL src={ArrowLeft} onClick={prevSlide} />
//       <ArrowStyleR src={ArrowRight} onClick={nextSlide} />
//       {slides.map((data, id) => {
//         return (
//           <div key={id}>
//             {id === current && <SlideImage src={data.cover} alt="" />}
//           </div>
//         );
//       })}
//     </StyledSlider>
//   );
// };

// export default Slider;
