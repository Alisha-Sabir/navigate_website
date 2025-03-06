import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import testimonialData from "@/data/testimonialData";
import { TiStarFullOutline } from "react-icons/ti";
// import { FaStarHalf } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";

export default function TestimonialDetails() {
  const [testimonialSectionData] = useState(testimonialData);

  // function to generate stars
  const generateStars : any = (rating: any) => {
      const cappedRating = Math.min(Math.floor(rating), 5);
    
      const stars = [];
      const fullStars = cappedRating;
      const halfStar = rating % 1 !== 0 && cappedRating < 5;
      
      for (let i = 0; i < fullStars; i++) {
        stars.push(<TiStarFullOutline key={i} size={19} color="FFD33C" />);
      }
    
      if (halfStar) {
        stars.push(<FaStarHalf size={21} key="half" color="FFD33C" className="mt-1 pb-2" />);
      }
      return stars;
    }

  return (
    <section>
      <Container className="d-flex align-items-center justify-content-center py-0 py-xl-5 position-realtive">
        <Row className="d-flex justify-content-center align-items-center">
          {testimonialSectionData.map((item: any, index: any) => (
             <Card className="mb-5 pb-5 border-0" key={index}>
             <Row className={`d-flex align-items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
               
               {/* Image Column */}
               <Col md={5} className="feedback-bg text-start">
                 <Image
                   src={item.image}
                   alt="User Testimonial"
                   width={450}
                   height={450}
                   quality={100}
                   className="img-fluid"
                   style={{ position : "relative" , zIndex : 2 }}
                 />
               </Col>
               {index % 2 === 1 && (
               <Col md={1}></Col>
               )}
               {/* Text Column */}
               <Col md={6}>
                 <Card.Body 
                 style={{ position : "relative" , zIndex : 2 }} 
                 className={`${index % 2 === 1 ? "ms-0 ms-md-3 ms-xl-5" : ""}`}>
                  <div className="d-flex flex-column flex-lg-row">
                  <Col xs={12} lg={1}>
                  <Image
                  src="/images/comment.png"
                  alt="comment"
                  width={30}
                  height={30}
                  className="img-fluid my-3 my-lg-0"
                  quality={100}
                  />
                  </Col>
                  <Col xs={12} lg={11}>
                   <h3 className="inter-home mb-3">
                     {item.heading}
                   </h3>
                   <div className="d-flex mt-3 text-center">
                     {generateStars(item.stars)}
                     {/* <small className="text-secondary ms-1 text-dark">{item.rating}</small> */}
                     <small className="text-secondary ms-1 text-dark">{item.rating.toFixed(1)}</small>
                   </div>
                   <p className="mt-2 home-description">
                     {item.description}
                   </p>
                   <Row className="pt-3 d-flex align-items-center">
                     <Col xs={3} md={2} lg={2}>
                       <Image
                         src={item.profileimage}
                         alt={item.username}
                         width={60}
                         height={60}
                         quality={100}
                         className="img-fluid"
                       />
                     </Col>
                     <Col xs={9} md={9} lg={7}>
                       <span className="fw-bold">{item.username}</span>
                       <br />
                       <span className="home-description">{item.designation}</span>
                     </Col>
                   </Row>
                   </Col>
                   </div>
                 </Card.Body>
               </Col>
               {index % 2 === 0 && (
               <Col md={1}></Col>
               )}
             </Row>
           </Card>           
          ))}
        </Row>
      </Container>
      <Image
            src="/images/layers.png"
            alt="layer-design"
            width={1500}
            height={300}
            quality={100}
            className="img-fluid position-absolute d-none pt-0 pt-md-5 pt-lg-0 d-md-block"
            style={{ marginTop : "-300px" , zIndex : 1 }}
            />
    </section>
  );
}
