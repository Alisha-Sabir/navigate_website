import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Form, Carousel } from "react-bootstrap";
import Image from "next/image";
import { useForm } from "react-hook-form";
import homeData from "@/data/homeData";
import { HiOutlineVolumeUp, HiOutlineVolumeOff } from "react-icons/hi";

export default function HomeSection() {
  const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);
  const [homeSectionData] = useState(homeData);
  const [isMuted, setIsMuted] = useState(true);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const handleSubmitData = (data: any) => {
    console.log(data);
    reset();
  };

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play();
    }
  }, [index]);

  const handleSelect = (selectedIndex: number) => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === selectedIndex) {
          video.muted = isMuted; 
          video.play(); 
        } else {
          video.pause(); 
        }
      }
    });

    setIndex(selectedIndex);
  };

  return (
    <section className="mt-2 mt-lg-5 pb-2 home-bg">
      <Container className="text-start text-lg-end pt-5 mb-xl-5">
        <Row className="mt-5">
          <Col xs={12} lg={6} className="mt-5 pt-4">
            <h1 className="inter-home me-0 me-lg-5" style={{ color: "#444BC6" }}>
              {homeSectionData.title}
            </h1>
            <h1 className="inter-home me-0 me-lg-5 mt-0 mt-xl-2" style={{ lineHeight: "38px" }}>
              {homeSectionData.subtitle}
            </h1>
            <p style={{ fontSize: "22px", lineHeight: "28px", color: "#55585D", }} className="pt-4 mx-0 mx-lg-5">
              {homeSectionData.description}
            </p>
            <Row className="py-2 py-md-5 py-lg-3 py-xl-5 d-flex align-items-center justify-content-center text-center text-md-start">
              <Col xs={12} md={12} className="mb-3 mb-md-0">
              <Form onSubmit={handleSubmit(handleSubmitData)}>
                <Row>
                  <Col xl={2} />
                  <Col xs={12} md={8} lg={7} xl={6}>
                    <Form.Control
                      id="emailInput"
                      type="email"
                      // name="Email"
                      placeholder="@ Enter your email"
                      aria-label="Email Address"
                      // className="border-0 border-bottom rounded-0 bg-transparent mt-0 mt-md-2 mt-xl-2"
                      className="bg-transparent form-control-lg ms-0 ms-xl-3"
                      {...register("Email", {
                        required: "This field is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email format",
                        },
                      })}
                      maxLength={100}
                      // aria-describedby="emailError" // Associate error message with input
                    />
                    {errors.Email && (
                    <div id="emailError" className="text-start pt-2 ps-2 ps-xl-4 text-danger">
                      {errors.Email?.message as string}
                    </div>
                  )}
                  </Col>
                  <Col xs={12} md={4} lg={5} xl={4} className="text-start">
                    <Button type="submit" size="lg" className="navigate-btn mt-3 mt-md-0 ms-md-3 ms-lg-0 ms-xl-1">
                      Get Started
                    </Button>
                  </Col>
                </Row>
              </Form>
              </Col>
            </Row>
          </Col>

          {/* Image Section */}
          <Col xs={12} lg={6}>
            <div className="position-relative">
              {/* Carousel */}
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                indicators={true}
                controls={false}
                className="position-absolute w-100 d-flex justify-content-center mt-0 mt-lg-5 mt-xl-3"
                style={{
                  zIndex: 2,
                  top: "10%", 
                  left: "50%",
                  transform: "translateX(-50%)",
                  maxWidth: "99%",
                  maxHeight: "100%",
                  border : "4px solid white",
                  borderRadius : "25px",
                  overflow: "hidden",
                  filter: 'drop-shadow(0 40px 100px rgba(0, 255, 0, 0.1))',
                }}
              >
                {homeSectionData.videos.map((video: any) => (
                  <Carousel.Item
                    key={video.id}
                    id={`video-${video.id}`} // Add a unique ID for SEO
                    className="position-relative overflow-hidden"
                    style={{
                      borderRadius: "20px",
                      // border: "3px solid white",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    {/* <video
                      src={video.src}
                      autoPlay
                      loop
                      muted={isMuted}
                      className="w-100 h-100 mt-0 mt-lg-5 mt-xl-0"
                      style={{
                        borderRadius: "20px",
                        objectFit: "cover",
                      }}
                    /> */}
                    <video
                    ref={(el) => {
                      if (el && !videoRefs.current.includes(el)) {
                        videoRefs.current.push(el);
                      }
                    }}
                    src={video.src}
                    autoPlay={index === video.id}
                    loop={false}                  
                    muted={isMuted}
                    className="w-100 h-100"
                    style={{
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                    onEnded={() => {
                      setIndex((prevIndex) => (prevIndex + 1) % homeSectionData.videos.length);
                    }}
                    title={`Video: ${video.title}`}
                  />
                    <Button
                      className="position-absolute bottom-0 mb-4 start-0 m-3 p-2 rounded-circle text-white"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "lightgray",
                        opacity: "0.75",
                        backdropFilter: "blur(5px)",
                        border: "1px solid white",
                      }}
                      onClick={() => setIsMuted(!isMuted)}
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? (
                        <HiOutlineVolumeOff color="#444BC6" size={26} />
                      ) : (
                        <HiOutlineVolumeUp color="#444BC6" size={26} />
                      )}
                    </Button>
                  </Carousel.Item>
                ))}
              </Carousel>

              {/* Background Image */}
              <Image
                src="/images/background.png"
                alt="home_background"
                width={800}
                height={650}
                quality={100}
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
