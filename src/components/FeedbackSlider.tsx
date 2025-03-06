import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { IoMdStar } from "react-icons/io";
import { LiaStarHalfSolid } from "react-icons/lia";
import Image from "next/image";
import feedBackData from "@/data/feedbackData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Counter() {
  const [allFeedbackData] = useState(feedBackData);
  const settings = {
    infinite: true,
    slidesToShow: 4, // Default for xl and above (≥1200px)
    slidesToScroll: 2,
    dots: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 576, // xs (≤576px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: true,
          pauseOnFocus: true,
        },
      },
      {
        breakpoint: 768, // md (≤768px)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          pauseOnHover: true,
          pauseOnFocus: true,
        },
      },
      {
        breakpoint: 992, // lg (≤992px)
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 3,
          infinite: true,
          pauseOnHover: true,
          pauseOnFocus: true,
        },
      },
      {
        breakpoint: 1440, // xl (≤1440px)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          pauseOnHover: true,
          pauseOnFocus: true,
        },
      },
    ],
  };
  

//   if (!allFeedbackData || allFeedbackData.length === 0) {
//     return <p>No feedback available</p>;
//   }

// function to generate stars
// const generateStars = (rating: any) => {
//     const cappedRating = Math.min(Math.floor(rating), 5);
  
//     const stars = [];
//     const fullStars = cappedRating;
//     const halfStar = rating % 1 !== 0 && cappedRating < 5;
    
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<IoMdStar key={i} color="FE8B75" />);
//     }
  
//     if (halfStar) {
//       stars.push(<LiaStarHalfSolid size={18} key="half" color="FE8B75" />);
//     }
  
//     return stars;
//   };
  

  return (
    <section className="my-5">
      <Container fluid className="pb-5 overflow-hidden">
      {/* <Image
            src="/images/layer_design.png"
            alt="layer-design"
            width={1500}
            height={300}
            quality={100}
            className="img-fluid"
            style={{ marginBottom : "-200px" }}
            /> */}
        <Row>
          <Col className="text-center mb-5">
            <p style={{ color : "#444BC6" }} className="fw-semibold fs-5 text-uppercase">{allFeedbackData.heading}</p>
            <h2 style={{ color : "#1A1F3D" }} className="fw-bold">{allFeedbackData.subheading}</h2>
          </Col>
        </Row>
        <div className="slider-wrapper mt-3 mt-lg-5 border-4 border-secondary">
          <Slider {...settings}>
            {allFeedbackData.card.map((items, index) => (
             <div key={index} className=" border-4 border-secondary">
                <Image
                    src={items.remarksIcon}
                    alt="remarks"
                    width={50}
                    height={50}
                    quality={100}
                    className="img-fluid"
                    style={{ 
                        marginBottom : "-20px", 
                        zIndex: 1 , 
                        position : "relative", 
                        marginLeft : "20px"  
                    }}
                    />
                <Card key={items.id} style={{ width: "auto"}} className="border rounded-0 shadow-sm mb-2 me-4 mb-5">
                <Card.Body>
                    {/* <Card.Title className="mt-4">
                    {generateStars(items.stars)}
                    </Card.Title> */}
                    <Card.Text className="my-3">{items.remarks}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush py-2">
                    <Row className="px-1 py-2 text-break">
                      <Col xs={3} md={2} lg={12} xl={2} className="text-break">
                        <Image
                          src={items.profile}
                          alt={items.userName}
                          width={50}
                          height={30}
                          quality={100}
                          className="img-fluid ms-3"
                          style={{ borderRadius : "50%" }}
                        />
                      </Col>
                      <Col xs={9} md={9} lg={10} xl={10} className="ms-0 ms-lg-3 ms-xl-0 text-break">
                        <span>{items.userName}</span>
                        <br />
                        <span style={{ color : "#55585D" }}>{items.userInfo}</span>
                      </Col>
                    </Row>
                  </ListGroup>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}
