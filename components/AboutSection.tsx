"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button, Tag } from "antd";
import {
  CheckCircleFilled,
  ArrowRightOutlined,
  FileProtectOutlined,
  PercentageOutlined,
  FileTextOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const features = [
  {
    icon: FileProtectOutlined,
    title: "Personalized Loan Plans",
    description: "Tailored solutions that fit your unique needs",
  },
  {
    icon: PercentageOutlined,
    title: "Lowest Interest Rates",
    description: "Competitive rates that save you money",
  },
  {
    icon: FileTextOutlined,
    title: "Minimal Documentation",
    description: "Simple paperwork, faster processing",
  },
  {
    icon: CustomerServiceOutlined,
    title: "Expert Assistance",
    description: "24/7 support from dedicated professionals",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} className="section-padding bg-white overflow-hidden w-full">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Tag
                color="blue"
                className="px-4 py-1 text-sm font-semibold rounded-full border-0 bg-primary-100 text-primary-700"
              >
                About us
              </Tag>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Why Thousands Trust Us for Their{" "}
              <span className="text-primary-700">Home Loans?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg mb-8 leading-relaxed"
            >
              At T-Home, we are redefining how people find, design, and secure
              their dream homes. With a customer-first approach, we bring together
              real estate expertise, modern interiors, and reliable property
              services under one roof.
            </motion.p>

            {/* Features List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4 mb-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center group-hover:bg-primary-700 transition-colors duration-300">
                    <feature.icon className="text-xl text-primary-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="primary"
                  size="large"
                  className="h-14 px-8 text-lg font-semibold bg-primary-700 hover:bg-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Learn More About Us
                  <ArrowRightOutlined className="ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative">
              {/* Background Decorative */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-3xl transform rotate-3 opacity-50" />
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl overflow-hidden shadow-elegant card-hover">
                <div className="aspect-square p-8 flex items-center justify-center">
                  {/* Illustration Grid */}
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    {[
                      { icon: "🏠", label: "Home Loans", color: "bg-blue-400" },
                      { icon: "📊", label: "Financial Tools", color: "bg-green-400" },
                      { icon: "📋", label: "Documentation", color: "bg-purple-400" },
                      { icon: "🤝", label: "Expert Support", color: "bg-orange-400" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all cursor-pointer"
                      >
                        <span className="text-4xl mb-3 block">{item.icon}</span>
                        <p className="text-white text-sm font-medium">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-elegant p-4 flex items-center gap-3 card-hover"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircleFilled className="text-2xl text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Trusted by</p>
                  <p className="font-bold text-gray-900">5000+ Families</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
