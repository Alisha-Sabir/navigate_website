import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import agentData from "@/data/agentData";
import { TbPlayerPauseFilled, TbPlayerPlayFilled } from "react-icons/tb";

export default function AgentSection() {
  const [agentSectionData] = useState(agentData);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Container className="p-4 my-5">
      <Row className="align-items-center">
        {/* Video Column */}
        <Col xs={12} md={12} lg={8} xl={8} className="text-center position-relative mb-4 mb-lg-0">
          <div className="rounded-4 overflow-hidden position-relative">
            <video
              ref={videoRef}
              src={agentSectionData.video}
              style={{ borderRadius: "30px", overflow: "hidden" }}
              width="100%"
              height="auto"
              loop={false}
              controls={false}
              aria-label="Video about our agents"
            />
            {/* <div
              className="position-absolute text-white text-start"
              style={{
                bottom: "20px",
                left: "25%",
                transform: "translateX(-50%)",
                background: "transparent",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              <p className="fs-5 m-0">
              {agentSectionData.videoDescription}
              </p>
              <span className="ms-2">
              {agentSectionData.videoSubDescription}
              </span>
            </div>
          </div> */}
            <div
              className="agent-text"
            >
              <p className="agent-font m-0">
              {agentSectionData.videoDescription}
              </p>
              <span className="agent-font ms-0 ms-xl-2">
              {agentSectionData.videoSubDescription}
              </span>
            </div>
          </div>

          {/* Play/Pause Icon */}
          <div
            className="position-absolute bottom-0 mb-5 end-0 me-4 me-md-5  p-2 rounded-circle text-white"
            style={{
              cursor: "pointer",
              backgroundColor: "white",
              opacity: "0.75",
            }}
            onClick={videoPlay}
          >
            {isPlaying ? (
              <TbPlayerPauseFilled color="#444BC6" size={26} />
            ) : (
              <TbPlayerPlayFilled color="#444BC6" size={26} />
            )}
          </div>
        </Col>
        {/* <Col xl={1} /> */}
        {/* Text Column */}
        <Col 
        xs={12} 
        md={12} 
        lg={4} 
        xl={4} 
        className="text-start rounded-5 p-4 p-lg-0 px-xl-5 py-xl-5" 
        style={{ backgroundColor: "#444BC6" }}>
          <Row className="d-flex align-items-center justify-content-center mb-3 p-4">
            <Col xs={3} md={2} lg={3}>
              <Image
                src={agentSectionData.userprofile}
                alt="agent"
                width={80}
                height={80}
                quality={100}
                className="img-fluid rounded-5"
              />
            </Col>
            <Col xs={9} md={10} lg={9} className="px-0 px-lg-3 px-xl-0">
              <span className="text-white fw-bold">{agentSectionData.name}</span>
              <br />
              <small className="text-white">{agentSectionData.designation}</small>
            </Col>
          </Row>
          <Row className='me-1 me-lg-0 mt-4 mt-lg-0 mt-xl-4 text-white px-0 px-lg-3'>
          <h2 className='display-1 fw-bold'>{agentSectionData.percentage}<span className="display-5 fw-bold">%</span></h2>
          <small style={{ fontWeight : "normal" }} className="fs-4 mb-0 mb-lg-1 mb-xl-0 ms-0 ms-lg-2">{agentSectionData.description}</small>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
