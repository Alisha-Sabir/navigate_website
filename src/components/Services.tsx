import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";
import servicesData from "@/data/servicesData";

export default function Services() {
  const [allServicesData] = useState(servicesData)

  return (
    <section>
      <Container fluid>
        <div className="w-100 text-center my-5">
          <small className="text-uppercase fw-semibold" style={{ color : '#444BC6' }}>
            Define Your Market Once
          </small>
          <h1 className="inter-home">
          Draw boundaries and set criteria 
          </h1>
          <small className="home-description" style={{ color : "#55585D" }}>
          Navigate continuously monitors your target areas
          </small>
        </div>
        {/* <h1 className="text-center my-5 py-5 fw-semibold">Boosting Business. Today & Tomorrow.....</h1> */}
        {allServicesData.map((item : any, index : any) => (
          <Card
            className={`mb-4 border-0 text-center text-lg-start`}
            key={item.id}
          >
            <Row
              className={`d-flex align-items-center
                ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Image Column */}
              <Col xs={12} lg={7} xl={8}>
                <div>
                  {/* <Image
                    src={item.image}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    className={`img-fluid ${index === 1 ? "mt-5 pt-5" : ""}`}
                    quality={100}
                  /> */}
                  <Image
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  quality={100}
                  layout="intrinsic"
                  style={{ objectFit: "contain", borderRadius: "10px" }}
                  className={index === 1 ? "ms-0 ms-xl-5" : ""}
                />

                  {/* {index === 2 && (
                    <div className="position-absolute d-flex align-items-center justify-content-center w-100 h-100 circle">
                    </div>
                  )} */}
                </div>
              </Col>
              {/* <Col md={1}></Col> */}
              {/* Text Column */}
              <Col xs={12} md={12} lg={4} xl={3}>
                  <Card.Body className="position-relative">
                    {/* Overlay Image at the Top */}
                    {index === 1 && (
                    <Image
                    src="/images/overlay_3.png"
                    alt="overlay_image"
                    width={200} 
                    height={200} 
                    quality={100}
                    className="position-absolute bottom-50 start-0 d-none d-lg-block"
                    style={{ 
                      zIndex: 1,
                      transform: "rotate(20deg) translateX(-80px)"
                    }} 
                  />                  
                  )}
                  <Card.Title>
                    <h2 className="fw-bold" style={{ color : "#1A1F3D" }}>{item.title}</h2>
                  </Card.Title>
                  <div className="mt-4">
                    <p className="fs-4 pe-0" style= {{ color : "#55585D" }}>{item.description}</p>
                  </div>
                   {/* <Button
                    variant="white"
                    size="lg"
                    className="mt-4 px-4 py-2 fw-semibold border-1 border-secondary nav-btn"
                  >
                    {item.button}
                  </Button>  */}
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </section>
  );
}
