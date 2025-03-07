import React, { useState, ReactNode } from "react";
import Image from "next/image";
import { Container , Button, Col } from "react-bootstrap";
import contactData from '@/data/contactData';

interface ContactUsProps {
    children?: ReactNode;
  }
  
  const ContactUsComponent: React.FC<ContactUsProps> = ({ children }) => {
    const [contactSectionData] = useState(contactData);

    return (
        <section className='my-0 my-xl-5 pb-5 position-relative' style={{ zIndex : 1 }}>
        <Container className='py-5 text-light contact-us border rounded-4 px-0 px-md-5 text-center text-md-start'
         style={{ backgroundColor: "#444BC6" }}>
            {/* <Row> */}
                <Col xs={12} md={6} lg={6} className='ms-0 ms-xl-5 my-5 pe-xl-5'>
                {children}
                    {/* <h1 className='fw-bold'>{contactSectionData.title}</h1>
                    <p className='me-0 me-lg-5'>{contactSectionData.description}</p> */}
                    <div className='my-4'>
                        <Button className='bg-transparent fw-bold border-light px-5 py-4'>
                        {contactSectionData.button}
                        </Button>
                    </div>
                </Col>
                 <Col xs={12} md={6} lg={6} className="position-absolute bottom-0 end-0 d-none d-md-block contact-us-img">
                    <Image 
                    src={contactSectionData.image}
                    alt="contact_us"
                    width={800}
                    height={800}
                    className='img-fluid'
                    quality={100}
                    />
                </Col>
            {/* </Row> */}
        </Container>
        </section>
    );
}

export default ContactUsComponent;