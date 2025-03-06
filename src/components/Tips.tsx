import React, { useState } from "react";
import Image from "next/image";
import { Container , Row , Col, Card } from "react-bootstrap";
import tipsData from "@/data/tipsData";


export default function Tips() { 
    const [tipsSectionData] = useState(tipsData);
    return (
        <section className="pt-5 tips-bg">
        <Container>
          <Row>
            {tipsSectionData.map((item: any) => (
              <Col key={item.id} xs={12} md={4} lg={4} className="my-3 pe-2 pe-xl-5">
                <Card className="py-3 d-flex flex-column flex-lg-row align-items-center align-items-lg-start gap-2 bg-transparent border-0">
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={50}
                    height={50}
                    className="img-fluid"
                    style={{ width: "50px", height: "50px" }}
                  />
  
                  {/* Text Content */}
                  <div className="text-center text-lg-start">
                    <b style={{ color : "black" }} className="fs-5 home-description">
                      {item.title}
                    </b>
                    <br />
                    <small className="home-description pe-0 pe-xl-5">{item.subtitle}</small>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    )
}