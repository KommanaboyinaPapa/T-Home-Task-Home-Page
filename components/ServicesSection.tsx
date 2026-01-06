"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Tag, Button } from "antd";
import {
  HomeOutlined,
  DollarOutlined,
  SwapOutlined,
  BankOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const services = [
  {
    icon: HomeOutlined,
    title: "Home Loans",
    description:
      "Get the best home loan rates with minimal documentation. Our experts guide you through every step of your home buying journey.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    features: ["Low Interest Rates", "Quick Approval", "Flexible Tenure"],
  },
  {
    icon: DollarOutlined,
    title: "Personal Loans",
    description:
      "Quick personal loans with competitive interest rates. No collateral required, instant approval for your urgent needs.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    features: ["No Collateral", "Quick Disbursement", "Minimal Documents"],
  },
  {
    icon: SwapOutlined,
    title: "Balance Transfer",
    description:
      "Transfer your existing loan to us and save more with lower interest rates and better terms.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    features: ["Lower EMI", "Save Interest", "Easy Process"],
  },
  {
    icon: BankOutlined,
    title: "Business Registration",
    description:
      "Complete business registration and regulatory services. GST, company formation, and compliance made easy.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    features: ["GST Registration", "Company Formation", "Tax Filing"],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gray-50 overflow-hidden relative w-full">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-primary-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-secondary-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Tag
            color="blue"
            className="px-4 py-1 text-sm font-semibold rounded-full border-0 bg-primary-100 text-primary-700 mb-4"
          >
            Our Services
          </Tag>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Financial{" "}
            <span className="text-primary-700">Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            From home loans to business registration, we provide end-to-end
            financial services to help you achieve your goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl p-8 h-full shadow-soft hover:shadow-elegant transition-all duration-500 card-hover overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl ${service.bgColor} group-hover:bg-white/20 flex items-center justify-center mb-6 transition-all duration-500`}
                  >
                    <service.icon
                      className={`text-3xl ${service.iconColor} group-hover:text-white transition-colors duration-500`}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-white/90 mb-6 transition-colors duration-500 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-500"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-600 group-hover:bg-white transition-colors" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-primary-700 group-hover:text-white font-semibold transition-colors duration-500"
                  >
                    Learn More
                    <ArrowRightOutlined />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="primary"
              size="large"
              className="h-14 px-10 text-lg font-semibold bg-primary-700 hover:bg-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              View All Services
              <ArrowRightOutlined className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
