import React, { useState , useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button, Row , Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import productData from '@/data/productData';


export default function Header() {


  const [productSectionData, setProductSectionData] = useState(productData);

  useEffect(() => {
    debugger;
    setProductSectionData(productData);
  }, []);

  console.log("productSectionData", productSectionData);

  // const handleToggleDropdown = () => {
  //   setIsOpen(prevIsOpen => !prevIsOpen);
  // };
  

  // const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" className="bg-white pt-4" style={{ color : "black" , zIndex : 100}}>
      <Container>
        <Navbar.Brand href="/">
          <Image 
            src="/images/navigate_logo.png"
            alt="navigate_logo"
            width={170}
            height={40}
            quality={100}
            className='me-5 img-fluid'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link     
            href="/"
            // onClick={() => handleNavigation("#home")}
            >
              Home
            </Nav.Link> */}
            {/* <Nav.Link href="#features" >Product</Nav.Link> */}
            {/* <NavDropdown title="Product" id="product-dropdown" onClick={() => setIsOpen(!isOpen)}> */}
            {/* <NavDropdown.Item style={{ cursor : " !important" }} className="custom-dropdown-item p-0 d-none d-xl-block">
              <div className="d-flex">
                <Col lg={2} className="d-none d-lg-block">
                  <h1
                    style={{
                      transform: "rotate(-90deg)",
                      color: "#1A1F3D",
                      marginTop: "90px",
                    }}
                    className="montserrat-uniqueExample text-break"
                  >
                    {productSectionData.heading}
                  </h1>
                </Col>

                <Col lg={3} className="text-start rounded-0 border-3 border-secondary d-none d-lg-block">
                  <Card className="rounded-0 border-top-0 border-bottom-0">
                    <Image
                      src={productSectionData.image}
                      alt="product_image"
                      width={382}
                      height={300}
                      quality={100}
                      className="img-fluid pt-5"
                    />
                    <Card.Body className='py-5'>
                      <Card.Text style={{ color : "#64748B" }} className="text-break">
                        {productSectionData.description}
                      </Card.Text>
                      <Button variant="transparent" className="border-1 px-5 pt-2 border-secondary nav-btn">
                        Get Started
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4} lg={7} className="text-start px-4">
                  <h2 className="montserrat-uniqueExample text-break pt-5">
                    {productSectionData.subheading}
                  </h2>
                  <Row className="d-flex align-items-stretch align-items-center py-5 gy-5">
                    {productSectionData.cards.map((card: any, index: any) => (
                      <Col key={index} md={12} lg={6} className="d-flex">
                        <Col lg={2} className="me-3">
                          <Image
                            src={card.icon}
                            alt="Product 1"
                            width={40}
                            height={40}
                            className="img-fluid"
                          />
                        </Col>
                        <Col lg={10}>
                          <p className="fw-semibold text-break">{card.title}</p>
                          <small style={{ color : "#64748B" }} className="text-break">{card.description}</small>
                        </Col>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </div>
            </NavDropdown.Item> */}

              <NavDropdown
                title="Product"
                id="product-dropdown"
                // tabIndex="0"
                role="button"
                // onClick={(event) => {
                 
                //   setIsOpen(!isOpen);
                // }}
              >
            {/* {!isOpen && ( */}
              <div className='d-block d-xl-flex scrollable-container'>
             <Col xl={2}>
              <h1
                className="montserrat-uniqueExample text-break rotate-text"
              >
                {productSectionData.heading}
              </h1>
            </Col>
            <Col lg={3} className="text-start rounded-0 border-3 border-secondary d-none d-xl-block">
              <Card className="rounded-0 border-top-0 border-bottom-0">
                <Image
                  src={productSectionData.image}
                  alt="product"
                  width={382}
                  height={300}
                  quality={100}
                  className="img-fluid pt-5"
                />
                <Card.Body className='pt-4 pb-5'>
                  <b style={{ color: "gray", fontSize: "14px" }} className="text-break">
                    {productSectionData.description}
                  </b>
                  <Button variant="transparent" 
                  className="border-1 px-5 pt-2 mt-xl-3 border-secondary nav-btn">
                    Get Started
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Row className="d-flex align-items-stretch align-items-center pt-0 pt-xl-5 gy-3 gy-xl-0 ps-0 ps-xl-3 mb-5 mb-xl-0">
            <h2 className="montserrat-uniqueExample text-break p-3">
                    {productSectionData.subheading}
                  </h2>
              {productSectionData.cards.map((card: any, index: any) => (
                <Col key={index} md={12} lg={6} xl={6} className="d-block d-xl-flex p-xl-4">
                  <Col lg={2}>
                    <Image
                      src={card.icon}
                      alt={`Product ${card.id}`}
                      width={40}
                      height={40}
                      className="img-fluid me-5 me-md-2"
                    />
                  </Col>
                  <Col lg={11}>
                    <b className="inter-home text-break fs-5">{card.title}</b><br />
                    <b style={{ color: "#55585D", fontSize: "14px" }} className="text-break">
                      {card.description}
                    </b>
                  </Col>
                </Col>
              ))}
            </Row>
            </div>
          {/* )} */}


            </NavDropdown>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/about-us">About</Nav.Link>
          </Nav>
          <Nav className='gap-3'>
            <Nav.Link href="/">Login</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Get Started
            </Nav.Link> */}
            <Button            
             className='border-0 navigate-btn'
            >
                Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}