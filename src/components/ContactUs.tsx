import React, { useState } from 'react';
import Image from "next/image";
import { Container , Button , Row, Col } from "react-bootstrap";
import contactData from '@/data/contactData';

export default function Services() {
    const [contactSectionData] = useState(contactData)
    // const data = {
    //     image : "/images/contact-us.png",
    //     title: 'Think Beyond the Wave',
    //     description: 'We build a fully integrated sales and marketing solution for SMBs'
    //   }
    return (
        <section className='my-5 pb-5 mx-5'>
        <Container className='py-5 text-light border rounded-4 px-3 px-md-5 w-75 text-center text-lg-start'
         style={{ backgroundColor: "#444BC6"}}>
            <Row>
                <Col xs={12} md={12} lg={7} className='ms-5'>
                    <h1 className='fw-bold'>{contactSectionData.title}</h1>
                    <p className='me-0 me-lg-5'>{contactSectionData.description}</p>
                    <div className='my-4'>
                        <Button className='bg-transparent fw-bold border-light px-5 py-4'>
                        {contactSectionData.button}
                        </Button>
                    </div>
                </Col>
                 <Col xs={12} md={12} lg={5} className='position-absolute d-none d-lg-block' 
                 style={{ right : "65px" , marginTop : "-42px"}}>
                {/* > */}
                    <Image 
                    src={contactSectionData.image}
                    alt="contact_us_image"
                    width={650}
                    height={650}
                    className='img-fluid mb-4'
                    quality={100}
                    />
                </Col>
            </Row>
        </Container>
        </section>
    );
}