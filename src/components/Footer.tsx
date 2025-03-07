import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import footerLinks from "@/data/footerLinks";
import Link from 'next/link';

export default function Footer() {

  const [footerLinksData] = useState(footerLinks);


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = footerLinksData.TermsConditions;
    link.download = 'TermsConditions'; 
    link.click();
  }



  return (
    <footer className="text-center text-md-start text-muted position-relative"
    style={{ backgroundColor: "#1A1F3D" , color : "white", zIndex: 1}}>
      <Container className="d-block d-md-flex align-items-center justify-content-center text-light justify-content-lg-between py-5 px-3">
        {/* <div className="me-5 d-none d-lg-block"> */}
        <Col xs={12} md={8} lg={8} xl={6}>
        <div className="me-0 me-md-5 my-4">
          <h2 className='fw-bold'>Your prospecting engine that never sleeps.</h2>
          <p className='pt-2' 
            style ={{ color : "#D0D4E0" }}
            >
            Contact us today to learn more about how Navigate can help you unlock your next opportunity.</p>
        </div>
        </Col>
        <Col xs={12} md={4} lg={3} xl={2}>
        <div className='my-4'>
         <Button className='bg-transparent fw-light border-light px-5 py-4'>
          Sign up now
         </Button>
        </div>
        </Col>
      </Container>

      <section>
        {/* <Col className='ms-0 ms-lg-5 ps-0 ps-md-3 ps-lg-0 ps-xl-3 text-md-start'>
        <Image
              src="/images/navigate_white_logo.png"
              alt="Logo"
              width={200}
              height={200}
              quality={100}
              className="img-fluid ms-0 ms-md-3 ms-lg-0 ms-xl-2"
              />
              </Col> */}
        <Container className="text-center text-md-start mt-3 text-light border-bottom border-secondary">
        <Col className='text-md-start'>
        {/* <Image
              src="/images/navigate_white_logo.png"
              alt="Logo"
              width={200}
              height={200}
              quality={100}
              className="img-fluid"
              /> */}
              <Image
              src="/images/navigate_logo.png"
              alt="navigate_logo"
              width={200}
              height={200}
              quality={100}
              className="img-fluid"
              />
        </Col>
          <Row className="mt-3">
            <Col md={12} lg={12} xl={3} className="mb-4 ms-0 ms-lg-2 ms-xl-0">
              <p className='mt-3' style={{ color : "#D0D4E0" }}>
                {/* Discover A Simpler Way to Prospect. */}
                1265 Leona Drive 
                <br />
                Beverly Hills, CA 90210 
                <br />
                </p>
                <span style={{ color : "#D0D4E0" }}>
                Toll Free: 1-800-926-9680
                </span>
            </Col>

            <Col md={3} lg={3} xl={2} className="mx-auto mx-md-0 mx-lg-2 mx-xl-auto mb-4">
              <p className="text-uppercase fw-bold mb-4">Company</p>
              <Link legacyBehavior href="/about-us">
              <p style={{ cursor : "pointer", color : "#D0D4E0" }}>About</p>
            </Link>
            <Link legacyBehavior href="/pricing">
              <p style={{ cursor : "pointer", color : "#D0D4E0" }}>Pricing</p>
            </Link>
            </Col>

            <Col md={3} lg={3} xl={2} className="mx-auto mb-4">
              <p className="text-uppercase fw-bold mb-4">Product</p>
              <Link legacyBehavior href="/">
              <p style={{ cursor : "pointer", color : "#D0D4E0" }}>Features</p>
            </Link>
            <Link legacyBehavior href="/">
              <p style={{ cursor : "pointer", color : "#D0D4E0" }}>Login</p>
            </Link>
            </Col>

            <Col md={3} lg={3} xl={2} className="mx-auto mb-4">
              <p className="text-uppercase fw-bold mb-4">Legal</p>
              <p
                style={{ cursor : "pointer", color : "#D0D4E0" }}
                onClick={() =>
                  window.open(`${footerLinksData.TermsConditions}#page=7`, "_blank")
                }
              >
                Privacy Policy
              </p>
              <p 
                onClick={handleDownload} 
                style={{ cursor : "pointer", color : "#D0D4E0" }}
              >
                Terms & Conditions
              </p>

            </Col>

            {/* <Col md={3} lg={3} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p className='text-secondary'>About</p>
              <p className='text-secondary'>Pricing</p>
              <p className='text-secondary'>Jobs</p>
              <p className='text-secondary'>Blog</p>
            </Col>

            <Col md={3} lg={3} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p className='text-secondary'>Sales Software</p>
              <p className='text-secondary'>Marketplace</p>
              <p className='text-secondary'>Terms & Conditions</p>
              <p className='text-secondary'>Privacy Policy</p>
            </Col>

            <Col md={3} lg={3} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Discover</h6>
              <p className='text-secondary'>CRM Comparision</p>
              <p className='text-secondary'>Partner Program</p>
              <p className='text-secondary'>What is CRM</p>
              <p className='text-secondary'>Resource</p>
            </Col>

            <Col md={3} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Help Center</h6>
              <p className='text-secondary'>Community</p>
              <p className='text-secondary'>Knowledge Base</p>
              <p className='text-secondary'>Academy</p>
              <p className='text-secondary'>Support</p>
            </Col> */}
          </Row>
        </Container>
      </section>


      <div
        className="text-center text-light p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        <Row>
          <Col xs={12} md={3} lg={3}>
            <Link legacyBehavior href={footerLinksData.facebook} target="_blank">
            <FaFacebook style={{ cursor : "pointer" }} size={22} className='me-3'/>
            </Link>
            <Link legacyBehavior href={footerLinksData.twitter} target="_blank">
            <FaXTwitter style={{ cursor : "pointer" }}  size={22} className='me-3'/>
            </Link>
            
            <Link legacyBehavior href={footerLinksData.insta} target="_blank">
            <BsInstagram style={{ cursor: "pointer" }} size={22} className="me-3" />
          </Link>
          <Link legacyBehavior href={footerLinksData.linkedin} target="_blank">
            <IoLogoLinkedin style={{ cursor : "pointer" }} size={22} className='me-3' />
          </Link>
        {/* <a href={footerLinksData.youtube} target="_blank">
          <FaYoutube style={{ cursor : "pointer" }} size={22} className='me-3' />
        </a>   */}
         </Col>
         {/* <Col xs={12} md={6} lg={5} className='d-block d-md-flex gap-3 mt-5 mt-md-0'>
         <p>Privacy Policy</p>
         <p>Terms & Conditions</p>
         <p>Support</p>
         </Col> */}
         <Col md={3} lg={5} />
         <Col xs={12} md={6} lg={4} className='mt-3 mt-md-0'>
            @ 2025 Navigate Way L.L.C.
        </Col>
        </Row>
      </div>
    </footer>
  );
}