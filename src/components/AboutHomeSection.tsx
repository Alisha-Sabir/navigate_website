import React, { useState } from "react";
import { Container, Row, Col,} from "react-bootstrap";
import Image from "next/image";
import aboutHomeData from "@/data/aboutHomeData";


export default function AboutHomeSection() {
    const [aboutHomeSectionData] = useState(aboutHomeData);

  return (
    <section className="mt-5 pb-2 home-bg">
      <Container fluid className="text-start text-lg-end pt-1 pt-lg-5">
        <Row className="mt-5 d-flex align-items-center align-items-xl-start">
          <Col xs={12} lg={6} className="mt-5 pt-4">
            <h1 className="inter-home ms-0 ms-md-4 ms-lg-0 me-lg-1 me-xl-4" style={{ color: "#444BC6" }}>
              {aboutHomeSectionData.title}
            </h1>
            <h1 className="inter-home ms-0 ms-md-4 ms-lg-0 me-0 me-lg-1 me-xl-4" style={{ lineHeight: "38px" }}>
              {aboutHomeSectionData.subtitle}
            </h1>
            <p style={{ lineHeight: "31px" }} className="home-description pt-3 mx-0 mx-md-4 mx-lg-1 mx-xl-4">
              {aboutHomeSectionData.description}
            </p>
            {/* <div className="ms-0 ms-md-4 ms-lg-0 me-xl-4 position-relative">
              <Col xs={12} md={12}  style={{ color : "#444BC6" }}>
               {aboutHomeSectionData.person.heading}
              </Col>
              <Col xs={12} md={12}>
               {aboutHomeSectionData.person.name}
              </Col>
              <Col xs={12} md={12} style={{ color : "#64748B" }}>
               {aboutHomeSectionData.person.designation}
              </Col>
            </div>
            <Image
              src="/images/overlay_3.png"
              alt="overlay_image"
              width={200}
              height={200}
              quality={100}
              className="img-fluid position-absolute bottom-0"
            /> */}
             <div className="ms-0 ms-md-4 ms-lg-0 me-xl-4 position-relative mb-5">
                {/* Background Image */}
                <Image
                src="/images/overlay_3.png"
                alt="overlay_image"
                width={300}
                height={300}
                quality={100}
                className="position-absolute start-0 top-25 translate-y ms-5 ps-5 d-none d-lg-block"
                style={{ zIndex: "1" }}
                />
                <Col xs={12} md={12} className="fw-bold" style={{ color: "#444BC6" }}>
                {aboutHomeSectionData.person.heading}
                </Col>
                <Col xs={12} md={12} className="fw-bold">
                {aboutHomeSectionData.person.name}
                </Col>
                <Col xs={12} md={12} className="home-description">
                {aboutHomeSectionData.person.designation}
                </Col>
            </div>
          </Col>

          {/* Image Section */}
          <Col xs={12} lg={5}>
            <div className="position-relative">
              <Image
                src={aboutHomeSectionData.person.image}
                alt="homesection-image"
                width={800}
                height={650}
                quality={100}
                className="img-fluid position-absolute ms-3 ms-md-4"
                style={{
                  filter: 'drop-shadow(0 4px 40px rgba(0, 255, 0, 0.1))',
                }}
              />
              {/* Background Image */}
              <Image
                src="/images/background.png"
                alt="home-section-image"
                width={800}
                height={650}
                quality={100}
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
}
