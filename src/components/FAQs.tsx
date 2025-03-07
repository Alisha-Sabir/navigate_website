import Head from "next/head";
import React, { useState } from "react";
import { Container, Accordion, Col, Row } from "react-bootstrap";
import faqsData from "@/data/faqsData";

const FAQs = () => {
    const [FaqsSectionData] = useState(faqsData);
    const [activeKey, setActiveKey] = useState("0");

    const handleSelect = (eventKey : any) => {
        setActiveKey(eventKey);
    };

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Container className="my-5">
                <Row className="d-flex flex-column align-items-center mb-4">
                    <Col style={{ color : "#1A1F3D" }} className="mb-5 mt-3 text-center fw-bold">
                        <h2 className="inter-home">Navigate Pricing FAQs</h2>
                    </Col>
                    <Col md={10} xl={9} className="text-start">
                        <Accordion activeKey={activeKey} onSelect={handleSelect}>
                            {FaqsSectionData.map((faq, index) => (
                                // <Accordion.Item eventKey={String(index)} key={index}>
                                //     <Accordion.Header>
                                //         <div className="d-flex justify-content-between w-100">
                                //             <p className="fw-bold" style={{ fontSize: "19px" }}>
                                //                 {index + 1}. {faq.question}
                                //             </p>
                                //             <span className="fs-4">
                                //                 {activeKey === String(index) ? "−" : "+"}
                                //             </span>
                                //         </div>
                                //     </Accordion.Header>
                                //     <Accordion.Body style={{ fontSize: "16px", color: "#64748B" }}>
                                //         {faq.answer}
                                //     </Accordion.Body>
                                // </Accordion.Item>
                                <Accordion.Item eventKey={String(index)} key={index}>
                                <Accordion.Header className="no-focus">
                                    <div className="d-flex justify-content-between w-100">
                                        <h3 className="home-title" style={{ fontSize: "19px" }}>
                                            {index + 1}. {faq.question}
                                        </h3>
                                        <span style={{ fontSize : "20px" }}>{activeKey === String(index) ? "−" : "+"}</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>{faq.answer}</p>
                                    {faq.list.length > 0 && (
                                        <ul>
                                            {faq.list.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {faq.added && <p className="fw-medium">{faq.added}</p>}
                                </Accordion.Body>
                            </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default FAQs;
