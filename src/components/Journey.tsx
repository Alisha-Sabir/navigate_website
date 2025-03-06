import React, { useState, useRef } from "react";
import Slider, { Settings } from "react-slick";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import journeyData from "@/data/journeyData";

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const [journeySectionData] = useState(journeyData);

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, newIndex) => setActiveIndex(newIndex),
  };

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setActiveIndex(index);
    }
  };

  return (
    // <section style={{ backgroundColor: "#FAFAFA" }}>
    <section>
      <Container className="py-5">
        <div className="w-100 text-center my-5">
          <small className="text-uppercase fw-semibold" style={{ color : '#444BC6' }}>
            Your Property Prospecting Journey Made Simple
          </small>
          <h1 className="inter-home">
          From Search to Connection in Minutes
          </h1>
        </div>
        <Row className="d-flex align-items-center">
          <Col md={12} lg={4}>
            {journeySectionData.map((item, index) => (
              <Card
                key={index}
                className="py-1 border-0 mb-2 w-96"
                onClick={() => goToSlide(index)}
                style={{
                  cursor: "pointer",
                  // backgroundColor: index === activeIndex ? "#fff" : "#FAFAFA",
                  boxShadow: index === activeIndex ? "2px 2px 2px lightgray" : "none",
                  transition: "background-color 0.3s ease",
                }}
              >
                <Card.Body>
                  <Row>
                    <Col xs={12} xl={2} className="d-flex align-items-top">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={50}
                        height={50}
                        quality={100} 
                      />
                    </Col>
                    <Col xs={12} xl={9}>
                      <span style={{ color : "black" }} className="fs-5 home-description">{item.title}</span>
                      <br />
                      <small className="home-description">{item.description}</small>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
            <Row className="text-start ms-2 ms-xl-2 mt-4">
              <Col>
               <Button size="lg" className="navigate-btn">Join Now</Button>
              </Col>
            </Row>
          </Col>

          {/* Right Side Slider */}
          <Col md={12} lg={8} className="rounded-4 overflow-hidden ps-2 ps-xl-5">
          <Slider ref={sliderRef} {...sliderSettings}>
            {journeySectionData.map((item, index) => (
              <div key={index} className="rounded-4 overflow-hidden p-2">
                <Image
                  src={item.slide}
                  alt={item.title}
                  quality={100}
                  layout="responsive" 
                  width={item.width} 
                  height={item.height}
                  className="rounded-4 my-4 shadow"
                />
              </div>
            ))}
          </Slider>
        </Col>
        </Row>
      </Container>
    </section>
  );
}
