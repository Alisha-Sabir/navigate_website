import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { RiCheckboxCircleFill } from "react-icons/ri";
import pricingData from '@/data/pricingData';
import { MdElectricBolt } from "react-icons/md";

export default function PricingHome () {

    // const [selected, setSelected] = useState<any>("Monthly");
    const [pricingSectionData] = useState<any>(pricingData);

    // const handleSelect = (selectedKey: string) => {
    //     setSelected(selectedKey);
    // };

    // const allPricingData: any = pricingSectionData[selected];

    // console.log("allPricingData" , pricingSectionData)


    return (
        <section className="pricing_bg pt-0 pt-md-2 pt-xl-2 mt-5">
        <Container fluid>
            <Row className="text-center d-flex align-items-stretch justify-content-center my-5 pt-5">
                <Col md={6} className="h-100 flex-column mt-5 mt-md-0">
                <h1 className="inter-home">
                 {pricingSectionData.title}
                </h1>
                <div className="px-0 px-xl-5 mx-0 mx-xl-5">
                <small className="home-description">
                 {pricingSectionData.description}
                </small> 
                </div>
                </Col>
                <Row className="mt-5 my-md-5">
                    <Col>
                        {/* <ButtonGroup aria-label="Pricing Toggle">
                        <Button
                            className="rounded-start-5 border-secondary fw-bold px-4 px-md-5"
                            variant="light"
                            style={selected === "Monthly" ? 
                                { backgroundColor: "white" , color : "black" } 
                                :
                                { backgroundColor: "#444BC6" , color : "white"}}
                            onClick={() => handleSelect("Annual")}
                        >
                            {pricingSectionData.annualbtn.text}
                            <br />
                            <small 
                            className="fw-light" 
                            style={{ fontSize: "13px" }}
                            >
                            {pricingSectionData.annualbtn.offer}
                            </small>
                        </Button> 
                        <Button 
                            className="rounded-end-5 border-secondary fw-bold px-4 px-md-5"
                            style={selected === "Annual" ? 
                                { backgroundColor: "white" , 
                                  color : "black", 
                                  border : "1px solid lightgray" } 
                                  :
                                { backgroundColor: "#444BC6" }}
                            onClick={() => handleSelect("Monthly")}
                        >
                            {pricingSectionData.monthlybtn.text}
                            <br />
                            {pricingSectionData.monthlybtn.offer ? ( 
                            <small 
                            className="fw-light" 
                            style={{ fontSize: "13px" }}>
                              {pricingSectionData.monthlybtn.offer}
                            </small>
                            ) : 
                            <br />
                            }
                        </Button>
                    </ButtonGroup> */}
                     <Button
                            className="rounded-5 border-secondary px-4 px-md-5"
                            variant="light"
                            style={{backgroundColor: "white" , color : "black" }}
                        >
                            <span className="fs-5 montserrat-uniqueExample">{pricingSectionData.annualbtn.text}</span>
                            <br />
                            <small 
                            className="fw-bold" 
                            style={{ fontSize: "15px" , color : "#1EAC5F" }}
                            >
                            {pricingSectionData.annualbtn.offer}
                            </small>
                        </Button> 
                    </Col>
                </Row>
                </Row>
                <Row className="gap-0 gap-xl-4 d-flex justify-content-md-center ">
                    {/* <Col xl={1} /> */}
                    {/* {allPricingData.cards.map((card : any , index : number) => ( */}
                    {pricingSectionData.cards.map((card : any , index : number) => (
                    <Col key={index} xs={12} md={6} lg={4} xl={3} className="mb-4">
                    {/* Card 1 */}
                    {/* <Card className="px-4" style={{`${index === 2 }`}}> */}
                    {/* <Card 
                    className={`shadow-lg border-0
                        ${index !== 1 ? 
                            "mt-0 mt-lg-5 pt-0 pt-lg-5" : "" }
                             px-4 rounded-4 flex-grow-1 h-100 shadow-sm`}
                    style={index === 1 ? 
                        { backgroundColor: '#1A1F3D' , 
                        color : "white"} 
                        :
                        {}}
                    > */}
                    <Card
                        className={`shadow-lg border-0
                            ${index !== 1 ? "mt-0 mt-lg-5 pt-0 pt-lg-5" : ""}
                            px-4 rounded-4 flex-grow-1 h-100 shadow-sm`}
                        style={{
                            ...(index === 1 && {
                            backgroundColor: '#1A1F3D',
                            color: 'white'
                            }),
                            ...(index === 2 && {
                            filter: 'drop-shadow(0 4px 80px rgba(0, 255, 0, 0.1))',
                            })
                        }}
                        >
                        <div className="px-3 pt-5">
                        {index === 1 ? (
                        <Row className="text-end">
                        <Col xs={6} md={7} />
                        <Col xs={6} md={5} 
                        className="border-0 rounded-5 p-0 p-xl-1" 
                        // style={{ backgroundColor : "#444BC6"}}
                        >
                            {/* Best Offer */}
                            <Badge pill style={{ backgroundColor : "#444BC6" }} className="pill">
                                <span className="fw-light">
                                {pricingSectionData.offer}
                                <MdElectricBolt className="mx-2" />
                                </span>
                            </Badge>
                        {/* <MdElectricBolt className="mx-2" /> */}
                        {/* </Button> */}
                        </Col>
                        </Row>
                        ) : ""}
                             {card.heading ? (
                                <h3 className="fw-bold">{card.heading}</h3>
                            ) : <br />}
                            <small 
                            style={index === 1 ? 
                            { color : "white" }
                             :
                            { color : "#55585D" }}>
                                {card.description}
                            </small>
                            {/* <div className="d-flex align-items-center my-3"> */}
                                <h2 className="fw-bold my-2">{card.price}<small style={{ fontSize : "20px" }}>/mo</small></h2>
                                    <small 
                                    style={{ 
                                        color: index === 1 ? "white" : "#55585D", 
                                        fontSize: "13px" 
                                    }} 
                                    >
                                    {card.bill}
                                </small>
                            {/* </div> */}
                            <br />
                            <b>{card.title}</b> 
                        </div>
                            <Row className="d-flex align-items-center px-3">
                            {card.list?.items?.map((item: any, itemIndex: number) => (
                            <div key={itemIndex} className="d-flex my-2">
                                    <Col md={2}><RiCheckboxCircleFill color="green" size="22" className="me-3 me-lg-0" /></Col>
                                    <Col md={10} className="flex-grow-1">{item}</Col>
                                </div>
                                ))}
                        </Row>
                        {/* </Card.Body> */}
                        <Row className="d-flex align-items-center justify-content-center mt-2 mb-1">
                            <Col md={7} className="my-4">
                            <Button 
                            variant="white" 
                            size="lg" 
                            className={`${index === 1 ? 
                            "navigate-btn text-white" 
                            :
                            "nav-btn"} text-dark border-secondary w-100`}
                            >
                                Get Started
                            </Button>
                            </Col>
                            <Col md={12} className="text-center mb-3 mb-xl-0">
                            <small style={index === 1 ? { color : "#7CBD1F"} : { color : "#444BC6" }}>
                                {card.offer}
                            </small>
                            </Col>
                        </Row>
                    </Card>
                    </Col>
                    ))}
                    {/* <Col xl={1} /> */}
                </Row>
            </Container>
        </section>
    )
}