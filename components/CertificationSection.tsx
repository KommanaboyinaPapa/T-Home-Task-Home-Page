"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SafetyCertificateOutlined } from "@ant-design/icons";

export default function CertificationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Officially Recognized. Nationally Trusted.
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {/* DPIIT Startup India */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <SafetyCertificateOutlined className="text-5xl text-primary-700" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-primary-700">DPIIT</h3>
              <p className="text-green-600 font-semibold text-lg">#startupindia</p>
            </div>
          </motion.div>

          {/* Govt of India Certified */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <SafetyCertificateOutlined className="text-5xl text-primary-700" />
            </div>
            <div className="text-left">
              <p className="text-gray-600 text-sm">Certified by</p>
              <h3 className="text-xl font-bold text-gray-900">Govt. of India</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
