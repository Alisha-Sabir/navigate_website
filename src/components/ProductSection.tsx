import React, { useState } from 'react';
import { Container , Col, Row , Button, Card } from 'react-bootstrap';
import Image from 'next/image';
import productData from '@/data/productData';

export default function ProductSection() {
    const [productSectionData] = useState<any>(productData);

    console.log(productSectionData);

    return (
        <Container style={{ border : "1px solid lightgray" }} className="rounded-4">
            <Row>
                <Col md={1} className='mx-2 py-5'>
                    <h1 style={{ transform : 'rotate(-90deg)', color : "#1A1F3D", marginTop : "150px" }} className="montserrat-uniqueExample display-5">{productSectionData.heading}</h1>
                </Col>
                <Col md={4} className='text-start rounded-0 border-3 border-secondary'>
                     <Card className='py-5 rounded-0 border-top-0 border-bottom-0'>
                     <Image 
                    src={productSectionData.image}
                    alt="product_image"
                    width={382}
                    height={300}
                    quality={100}
                    className="img-fluid"
                    />
                    <Card.Body>
                        <Card.Text style={{ color : "#64748B" }}>
                        {productSectionData.description}
                        </Card.Text>
                        <Button variant="transparent" className='border-1 px-5 py-2 border-secondary'>Get Started</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className='text-start py-5'>
                    <h2 style={{ color : "#1A1F3D" }} className='montserrat-uniqueExample'>{productSectionData.subheading}</h2>
                     <Row className='d-flex align-items-stretch py-5 gy-5'>
                        {productSectionData.cards.map((card : any, index : any ) => (
                        <Col key={index} md={6} className='d-flex'>
                        <Col lg={2} className='me-3'>
                        <Image 
                        src={card.icon}
                        alt="Product 1"
                        width={50}
                        height={50}
                        className="img-fluid"
                        />
                        </Col>
                     <Col lg={10}>
                        <p style={{ fontSize : "17px" }} className="fw-semibold">{card.title}</p>
                        <small style={{ fontSize : "17px" , color : "#64748B" }}>{card.description}</small>
                    </Col>
                    </Col>
                    ))}
                    </Row>
                </Col> 
            </Row>
        </Container>
    )
}