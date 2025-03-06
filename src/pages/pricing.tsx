import Head from "next/head";
import React from 'react';
import { Container , Row, Col } from "react-bootstrap";
import Header from '@/components/Header';
import PricingHome from '@/components/PricingHome';
import BookChat from '@/components/BookChat';
import FAQs from '../components/FAQs';
import FeedbackSlider from '@/components/FeedbackSlider';
import AgentSection from '@/components/AgentSection';
import ContactUsComponent from "@/components/ContactUsComponent";
import Footer from '@/components/Footer';
import usePageTitle from "../hooks/usePageTitle";
import ProductSection from "@/components/ProductSection";

export default function Pricing() {
    // Page title
    usePageTitle("Pricing");

    // Contact Us Data
    // const contactData = {
    //     title : "Scale Your Prospecting As You Grow",
    //     description : "Flexible plans from $99/mo • No commitments • Start today"
    // }

    const contactData = {
        title : "PENDING (Stay Tuned)",
        description : "Draw your territory once, and Navigate continuously monitors your market. We'll help you spot opportunities while you focus on closing deals."
    }

    
    return (
        <section>
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            {/* <ProductSection /> */}
            <PricingHome />
            <AgentSection />
            <BookChat />
            <FAQs />
            <FeedbackSlider />
            <ContactUsComponent>
            <h1 className='fw-bold me-0 me-xl-5'>{contactData.title}</h1>
            <div className='me-5'>
            <p className='ms-5 ms-md-0 me-0 me-lg-5 pe-0 pe-xl-5'>{contactData.description}</p>
            </div>
            </ContactUsComponent>
            <Footer />
        </section>
    )
}