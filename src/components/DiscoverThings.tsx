import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import discoverData from "@/data/discoverData";

export default function DiscoverThings() {
  const [selected, setSelected] = useState("driving-for-dollars");
  const [discoverContent] = useState(discoverData as any);

  const handleSelect = (selectedKey: string | null) => {
    if (selectedKey) setSelected(selectedKey);
  };

  return (
    <section className="my-5">
      <Container className="border-secondary shadow-lg rounded-4 p-5">
        <Row>
          <Col md={12} lg={6}>
            <h2 className="fw-bold my-5">
              Discover everything <span style={{ color: "#444BC6" }}>navigate</span><br /> can do for you
            </h2>
            <Nav variant="tabs" activeKey={selected} className="custom-navbar my-4 border-bottom-0" onSelect={handleSelect}>
              <Nav.Item as="li" className="border-end">
                <Nav.Link eventKey="driving-for-dollars" className="p-0 me-2 discover-text">
                  Driving For Dollars
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="border-end">
                <Nav.Link eventKey="list-builder" className="p-0 mx-2 discover-text">
                  List Builder
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="border-end">
                <Nav.Link eventKey="unlimited-contact-info" className="p-0 mx-2 discover-text">
                  Unlimited Contact Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="border-end">
                <Nav.Link eventKey="dialer" className="p-0 mx-2 discover-text">
                  Dialer
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="mail-marketing" className="p-0 ms-2 discover-text">
                  Mail Marketing
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Displaying content dynamically */}
            <div className="pe-5">
            <h4 className="pt-3 pe-5 me-5">{discoverContent[selected].title}</h4>
            <p className="mt-4" style={{ color : "#64748B" }}>{discoverContent[selected].description}</p>

            <div className="mt-5">
            <Button style={{ backgroundColor: "white", border: "1px solid lightgray" }} size="lg" className="text-dark">
              Learn More
            </Button>
            <Button size="lg" className="navigate-btn ms-3">
              Get Started
            </Button>
            </div>
            </div>
          </Col>

          <Col md={12} lg={6}>
            <Image
              src={discoverContent[selected].image}
              alt={discoverContent[selected].alt}
              width={1200}
              height={1200}
              quality={100}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
