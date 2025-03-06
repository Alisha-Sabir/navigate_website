import React, { useState } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import Image from"next/image";
import chatData from "@/data/chatData";

export default function BookChat () {
  const [chatSectionData]= useState(chatData);
    return (
        <Container style={{ backgroundColor : "#1A1F3D" }} className="text-white rounded-4 py-1 px-4 px-5">
            <Row className="justify-content-center align-items-center text-center text-md-start my-3">
                <Col md={3}>
                <Badge pill className="py-2 px-3 pill_bg fw-light my-3 my-md-0">
                 {chatSectionData.connection}
                </Badge>
                    <h1 className="rext-center text-md-start inter-home">{chatSectionData.title}</h1>
                </Col>
                <Col md={1}></Col>
                <Col md={4}>
                    <p className="text-center text-md-start">{chatSectionData.message}</p>
                    <Button style={{ backgroundColor : "#444BC6" }} className="border-0 px-4 py-2">
                       {chatSectionData.button}
                    </Button>
                </Col>
                <Col md={4} className="text-center text-md-end mt-5 mt-md-0">
                    <Image 
                    src={chatSectionData.image}
                    alt="chat_pic"
                    width={250}
                    height={250}
                    quality={100}
                    className="img-fluid"
                    />
                </Col>
            </Row>
        </Container>
    )
}