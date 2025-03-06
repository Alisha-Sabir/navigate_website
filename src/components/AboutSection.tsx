import React, { useState } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import Image from 'next/image';
import aboutData from '@/data/aboutData';

export default function AboutSection() {
    const [aboutSectionData] = useState(aboutData as any);

    return (
        <section className='mt-3 mt-md-5 pt-5'>
        <Container fluid className="mt-5">
            <>
            <div className="text-center overflow-hidden mt-3">
            <Col xs={12} md={10} xl={12} className="mx-auto text-center">
                <Image 
                src={aboutSectionData.image}
                alt="about_image"
                width={1300}
                height={1000}
                quality={100}
                className="img-fluid mt-0 mt-md-5"
                />  
            </Col>
            </div>
                {/* <Col md={12} className='text-center my-5'>
                <h2 className='fw-bold'>{item.heading}</h2>
                </Col> */}
                {/* <Row className="gy-4 align-items-stretch">
                    {item.cards.map((card : any) => (
                        <Col key={card.id} md={5} className='mx-auto'>
                        <Card className="border-0 rounded-5 shadow-lg px-5 py-5 d-flex flex-column h-100">
                            <div className="d-flex flex-column flex-grow-1">
                            <Col md={12} className="px-1">
                                <Image 
                                src={card.icon}
                                alt={card.title}
                                width={50}
                                height={50}
                                quality={100}
                                className="img-fluid"
                                />
                            </Col>
                            <Col md={12} className="px-1">
                                <h3 className="fw-bold my-2">{card.title}</h3>
                            </Col>
                            <Col className="px-1 flex-grow-1">
                                <p style={{ color: "#404D60" }}>
                                {card.description}
                                </p>
                            </Col>
                            </div>
                        </Card>
                        </Col>
                    ))}
                    </Row>

                    <Row className='my-5 mx-5 text-center px-5 pt-5'>
                    <Col>
                        <p style={{ color: "#404D60" }}>
                        {item.paragraph.split('/n')[0]}
                        </p>
                        <br />
                        <p style={{ color: "#404D60" }}>
                        {item.paragraph.split('/n')[1]}
                        </p>
                    </Col>
                    </Row> */}
                     <Row className="gy-0 align-items-stretch mt-0 mt-lg-5 mt-xl-0">
                     {aboutSectionData.card.map((card : any , index : any) => (
                       <Card
                    className={`mb-4 border-0 text-center text-lg-start position-relative`}
                    key={card.id}
                    >
                    <Row
                        className={`d-flex align-items-center
                        ${index === 0 ? "flex-row-reverse" : "flex-row"}`}
                    >
                        {/* Image Column */}
                        <Col xs={12} md={12} lg={6} xl={5} className="me-0 me-lg-5">
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
                             src={card.cardimage}
                             alt={card.title}
                             width={600}
                             height={600}
                             quality={100}
                             layout="intrinsic"
                             style={{ objectFit: "contain", borderRadius: "10px" }}
                             className={`${index === 1 ? "ms-0 ms-xl-5" : ""}`}
                        />
                            {/* {index === 2 && (
                             <div className="position-absolute d-flex align-items-center justify-content-center w-h-100 circle">
                             </div>
                             )} */}
                        </div>
                        </Col>
                        {/* <Col md={1}></Col> */}
                        {/* Text Column */}
                        <Col xs={12} md={12} lg={5} xl={5} className={`${index === 0 ? 'me-0 me-xl-5 pe-0 pe-xl-5' : "ms-0 ms-xl-5 ps-0 ps-xl-5"}`}>
                        <Card.Body>
                        <Image
                             src={card.icon}
                             alt={card.icon}
                             width={50}
                             height={50}
                             quality={100}
                             layout="intrinsic"
                             className='mb-2 mb-md-4 mb-lg-0'
                             style={{ objectFit: "contain", borderRadius: "10px" }}
                             />
                            <Card.Title className='d-block d-lg-flex align-items-start'>
                              <h3 className="fw-semibold mt-lg-2">{card.title}</h3>
                            </Card.Title>
                            <div className="mt-2" style={{ color : "#64748B" }}>
                              <p style={{ lineHeight : "30px" }} className="home-description pe-0 pe-xl-3">{card.description}</p>
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
                    </Row>
                </>
        </Container>
        </section>
    )
}