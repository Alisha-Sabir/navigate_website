import Head from "next/head";
import Header from '../components/Header';
import HomeSection from '../components/HomeSection';
import ContactUs from '../components/ContactUs';
import Counter from '../components/Counter';
import Tips from '../components/Tips';
import Journey from '../components/Journey';
import Services from '../components/Services';
import DiscoverThings from '../components/DiscoverThings';
import TestimonialDetails from '../components/TestimonialDetails';
// import WideFeedbackSlider from '../components/WideFeedbackSlider';
// import FeedbackSlider from '../components/FeedbackSlider';
import ContactUsComponent from "@/components/ContactUsComponent";
import BackgroundComponent from "@/components/BackgroundComponent";
import Footer from '../components/Footer';
import usePageTitle from "../hooks/usePageTitle";



export default function Home() {
  // Page title
  usePageTitle("Home");


  const contactData = {
    title : "PENDING (Stay Tuned)",
    description : "Draw your territory once, and Navigate continuously monitors your market. We'll help you spot opportunities while you focus on closing deals."
}

  
  return (
    <> 
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <HomeSection />
      {/* <BackgroundComponent /> */}
      <Tips />
      <Journey />
      <Services />
      <Counter />
      {/* <DiscoverThings /> */}
      <TestimonialDetails />
      {/* <FeedbackSlider /> */}
      {/* <ContactUs /> */}
      <ContactUsComponent>
         <h1 className='fw-bold'>{contactData.title}</h1>
          <p className='me-0 me-lg-5'>{contactData.description}</p>
        </ContactUsComponent>
      <Footer />
    </>
  );
}