import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import counterData from "@/data/counterData";

// New CounterCard component to handle individual cards
const CounterCard = ({
  title,
  count,
  subValue,
  index,
}: {
  title: string;
  count: number;
  subValue?: any;
  index : number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
    <Col xs={12} md={3}>
    <Card className={`border-0 rounded-0 ${index !== 3 ? "border-end" : ""} h-75`} ref={ref}>
        <Row className="my-0 my-xl-3">
            <div className="p-3 p-lg-5">
              <>
              {/* <h1 className="fw-bold">
              {inView && (typeof count === "number" ? (
                <CountUp start={0} end={count} duration={2} />
              ) : (
                count
              ))}
            </h1> */}
            {/* {inView && typeof count === "number" && (
                <h1 className="fw-bold">
                  <CountUp start={0} end={count} duration={2} />
                </h1>
              )} */}
              {inView && (
                  <h1 className="fw-bold">
                    <CountUp start={0} end={count} duration={2} />
                    {index === 1 && (
                      <span>
                        +
                      </span>
                    )}
                    {subValue ? ` / ` : ""} 
                    {subValue && <CountUp start={0} end={subValue} duration={2} />}
                  </h1>
                )}
                  <p className="pe-4 home-description">{title}</p>
              </>
            </div>
        </Row>
      </Card>
    </Col>
    </>
  );
};

// Main Counter component
const Counter = () => {
  
  const [counterSectionData] = useState(counterData);

  console.log("data", counterSectionData);

  return (
    <Container
      className="border-2 rounded-4 w-75 position-relative"
    >
      <Row className="d-flex flex-row justify-content-center mt-5">
        {counterSectionData.map((item, index) => (
          <CounterCard
            key={index}
            count={item.count}
            title={item.title}
            subValue={item.subValue}
            index={index}
          />
        ))}
      </Row>
      <div className="position-absolute bottom-50 end-50 d-none d-lg-block">
              <Image
                src="/images/overlay_1.png"
                alt="overlay_img"
                width={230}
                height={200}
                className="img-fluid"
                quality={100}
              />
            </div>
    </Container>
  );
};

export default Counter;
