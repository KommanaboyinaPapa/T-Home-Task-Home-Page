"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Tag, Button } from "antd";
import {
  CheckCircleFilled,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  FileProtectOutlined,
  CustomerServiceOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

const benefits = [
  {
    icon: DollarOutlined,
    title: "Personalized Plans",
    description: "Loan plans tailored to your specific needs and budget",
  },
  {
    icon: SafetyCertificateOutlined,
    title: "Low Interest Rates",
    description: "Competitive rates that help you save more",
  },
  {
    icon: ThunderboltOutlined,
    title: "Quick Approvals",
    description: "Fast processing with minimal waiting time",
  },
  {
    icon: FileProtectOutlined,
    title: "Minimal Paperwork",
    description: "Simple documentation requirements",
  },
  {
    icon: EyeInvisibleOutlined,
    title: "No Hidden Charges",
    description: "Complete transparency in all fees",
  },
  {
    icon: CustomerServiceOutlined,
    title: "24/7 Support",
    description: "Expert assistance whenever you need",
  },
];

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white overflow-hidden w-full">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-gray-100 rounded-[40px] transform -rotate-3" />
              
              {/* Image Frame */}
              <div className="relative rounded-[32px] overflow-hidden shadow-elegant">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* Team Illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="flex justify-center -space-x-4 mb-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                            className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-4 border-white flex items-center justify-center text-white font-bold text-lg shadow-lg"
                          >
                            {String.fromCharCode(64 + i)}
                          </motion.div>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Expert Team
                      </h3>
                      <p className="text-white/70">
                        Dedicated professionals at your service
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-elegant p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <CheckCircleFilled className="text-2xl text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Govt. Certified</p>
                    <p className="text-sm text-gray-500">DPIIT Recognized</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Section Tag */}
            <Tag
              color="blue"
              className="px-4 py-1 text-sm font-semibold rounded-full border-0 bg-primary-100 text-primary-700 mb-4"
            >
              Why choose us
            </Tag>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why You Should Choose Our{" "}
              <span className="text-primary-700">Home Loan Services</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At T-Home, we make your home loan journey simple and stress-free
              with personalized plans, low interest rates, and quick approvals.
              Our transparent process ensures minimal paperwork and no hidden
              charges, while our team supports you every step of the way—helping
              you move into your dream home with ease and confidence.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-700 transition-colors duration-300">
                    <benefit.icon className="text-lg text-primary-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-0.5">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-500 text-xs">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="primary"
                  size="large"
                  className="h-14 px-8 text-lg font-semibold bg-primary-700 hover:bg-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Get Started Today
                  <ArrowRightOutlined className="ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
