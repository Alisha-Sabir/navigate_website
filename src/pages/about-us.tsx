// import ProductAndServices from "../components/ProductAndServices";
import Header from "@/components/Header";
import Head from "next/head";
import AboutHomeSection from "@/components/AboutHomeSection";
import AboutSection from "@/components/AboutSection";
import AboutTrackSection from "@/components/AboutTrackSection";
import FeedbackSlider from '@/components/FeedbackSlider';
// import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import ContactUsComponent from "@/components/ContactUsComponent";
import usePageTitle from "../hooks/usePageTitle";



export default function AboutUs () {
  // Page title
  usePageTitle("About Us");

  // const contactData = {
  //   title: "Contact us today and let us know what you need",
  //   description:  "When does a mere internet 'SEO' company grow into a trusted partner that stays in front of the latest industry trends? When it's time to partner with Mocer, that's when."
  // }

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
    <AboutHomeSection />
    {/* <ProductSection /> */}
    <AboutSection />
    <AboutTrackSection />
    {/* <BookChat /> */}
    <FeedbackSlider />
    {/* <ContactUs /> */}
    <ContactUsComponent>
    <h1 className='fw-bold'>{contactData.title}</h1>
    <p className='me-0 me-lg-5'>{contactData.description}</p>
    </ContactUsComponent>
    <Footer />
    </>
  )
}