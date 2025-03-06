// import React, { useState } from "react";
// import { Container, Row, Col, Carousel } from "react-bootstrap";
// import { FaStar } from "react-icons/fa";
// import Image from "next/image";
// import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
// import wideSlider from "@/data/wideFeedbackData";
// import dynamic from "next/dynamic";
// import { LiaStarHalfSolid } from "react-icons/lia";


// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// export default function WideFeedbackSlider() {
//   const [wideFeedbackData] = useState(wideSlider);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // function to generate stars
//   const generateStars = (rating: any) => {
//     const cappedRating = Math.min(Math.floor(rating), 5);
  
//     const stars = [];
//     const fullStars = cappedRating;
//     const halfStar = rating % 1 !== 0 && cappedRating < 5;
    
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FaStar className="me-1" key={i} color="FFD33C" />);
//     }
  
//     if (halfStar) {
//       stars.push(<LiaStarHalfSolid className="me-1" size={18} key="half" color="FFD33C" />);
//     }

//     return stars; 
// }


//   const handleSelect = (selectedIndex: number) => {
//     setActiveIndex(selectedIndex);
//   };

//   return (
//     <section className="my-4 py-5">
//       <Container className="d-flex align-items-center justify-content-center py-5">
//         <Row className="d-flex justify-content-center align-items-center">
//         <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null} indicators={false} controls={false}>
//             {wideFeedbackData.map((item, index) => (
//               <Carousel.Item key={item.id}>
//                 <Row className="d-flex align-items-center">
//                   <Col md={5} className="feedback-bg text-center">
//                     <ReactPlayer
//                       url={item.video}
//                       className="w-100 circle"
//                       width="1  0%"
//                       height="400px"
//                       playing={index === item.id - 1}
//                       loop
//                       muted
//                       controls={false}
//                     />
//                   </Col>
//                   <Col md={6} className="pe-6">
//                     <h4 style={{ color: "#1A1F3D" }} className="fw-bold mb-3">
//                       "{item.comment}"
//                     </h4>
//                     <div className="d-flex mt-5">
//                     {generateStars(item.stars)}
//                       <small className="text-secondary ms-1 text-dark">{item.rating}</small>
//                     </div>
//                     <p className="mt-2 pe-5" style={{ color: "#64748B" }}>
//                       {item.description}
//                     </p>
//                     <Row className="pt-3 d-flex align-items-center">
//                       <Col md={2}>
//                         <Image
//                           src="/images/wide_slider_user.png"
//                           alt="user"
//                           width={60}
//                           height={60}
//                           quality={100}
//                           className="img-fluid ms-3"
//                         />
//                       </Col>
//                       <Col md={7}>
//                         <span className="fw-bold">{item.username}</span>
//                         <br />
//                         <span className="text-secondary">{item.designation}</span>
//                       </Col>
//                       <Col md={2} className="text-end">
//                         <GrLinkPrevious
//                           className="arrows-hover p-2 me-3"
//                           onClick={() => 
//                             setActiveIndex
//                             (activeIndex === 0 ? wideFeedbackData.length - 1 : activeIndex - 1)}
//                           size={35}
//                         />
//                         <GrLinkNext
//                           className="arrows-hover p-2"
//                           onClick={() => 
//                             setActiveIndex
//                             (activeIndex === wideFeedbackData.length - 1 ? 0 : activeIndex + 1)}
//                           size={35}
//                         />
//                       </Col>
//                     </Row>
//                   </Col>
//                 </Row>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </Row>
//       </Container>
//     </section>
//   );
// }
