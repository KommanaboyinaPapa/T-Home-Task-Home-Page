"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CertificationSection from "@/components/CertificationSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FloatButton } from "antd";
import { ArrowUpOutlined, WhatsAppOutlined } from "@ant-design/icons";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <StatsSection />
        <CertificationSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </motion.div>

      {/* Floating Buttons */}
      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        <FloatButton
          icon={<WhatsAppOutlined />}
          type="primary"
          style={{ backgroundColor: "#25D366" }}
          tooltip="Chat on WhatsApp"
          href="https://wa.me/917032183836"
          target="_blank"
        />
        <FloatButton.BackTop
          icon={<ArrowUpOutlined />}
          visibilityHeight={400}
          tooltip="Back to top"
        />
      </FloatButton.Group>
    </main>
  );
}
