import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import aboutTrackData from '@/data/aboutTrackData'

export default function AboutHomeSection () {
    const [trackSectionData] = useState(aboutTrackData);

    return (
        <section className='px-5'>
            <Container fluid className='px-0 px-lg-5 pt-3 pb-1'>
                    <Col xs={12} md={12}>
                        <Image 
                        src={trackSectionData.image} 
                        alt="track" 
                        width={1300} 
                        height={500} 
                        className='img-fluid'
                        />
                    </Col>
                    <Row className='my-3 my-lg-5'>
                        <Col md={12}>
                          <h2 className='inter-home'>{trackSectionData.title}</h2>
                        </Col>
                        {/* <Col md={1} /> */}
                        <Col md={11}>
                        <p className='home-description' style={{ lineHeight: "29px" }}>
                            {trackSectionData.paragraph.split('\n')[0]}
                        </p>
                        <p className='home-description' style={{ lineHeight: "29px" }}>
                            {trackSectionData.paragraph.split('\n')[1]}
                        </p>
                    </Col>
                    </Row>
            </Container>
        </section>

    )
}