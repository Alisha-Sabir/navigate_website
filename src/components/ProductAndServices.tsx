// import React, { useState } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import Image from 'next/image';
// import productAndServices from '@/data/productAndServices';


// export default function ProductAndServices() {


//   const [servicesData, setServicesData] = useState(productAndServices);

//     return (
//       <section>
//         <Container>
//       <Row className="pt-4">
//       <div className='w-100 text-center my-5'>
//                 <h1 className='fw-bold'>
//                 What makes us special
//                 </h1>
//                 <p className='fw-semibold text-secondary'>Generating leads is hard. Small businesses often rely on expensive and ineffective
//                   <br /> traditional and online marketing for lead generation.</p>
//                 </div>
//         {servicesData.map((items , index) => (
//           <Col 
//            key={index} 
//            md={6} 
//            lg={4}>
//           <Card
//             style={{ width: '26rem', height: '15rem' }}
//             className="mb-3 rounded-2 product-card justify-content-start nav-btn"
//             >
//             <Row className="mx-2 mt-2">
//               <Col
//               xs={12} 
//               md={3} 
//               className="d-flex justify-content-center icon align-items-center ms-0 ms-md-2 ms-xl-0">
//                 <Image
//                   width={62}
//                   height={60}
//                   src={items.icon}
//                   alt={items.title}
//                   />
//                 </Col>
//                 <div className="text-center text-md-start">
//                   <Card.Title 
//                   className="fw-semibold fs-5 my-3 product-title">
//                     {items.title}
//                     </Card.Title>
//                     <p>{items.description}</p>
//                   </div>
//                 </Row>
//               </Card>
//             </Col>
//             ))}
//       </Row>      
//     </Container>
//     </section>
//     )
// }