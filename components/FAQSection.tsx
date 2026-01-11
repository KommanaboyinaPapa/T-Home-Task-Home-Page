"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  PlusOutlined,
  MinusOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const faqs = [
  {
    key: "1",
    question: "What services does T-home offer?",
    answer:
      "Home loans, personal loans, balance transfer, and business/regulatory services. We provide comprehensive financial solutions to help you achieve your dreams with ease and confidence.",
    icon: "🏠",
  },
  {
    key: "2",
    question: "How do I apply through the website?",
    answer:
      "Simply fill out our online application form with your details, upload the required documents, and our team will get in touch with you within 24 hours. The process is quick, simple, and completely online.",
    icon: "📝",
  },
  {
    key: "3",
    question: "Are the services safe and transparent?",
    answer:
      "Absolutely! T-Home is certified by DPIIT and the Government of India. We maintain complete transparency in all our dealings with no hidden charges. Your data is protected with bank-grade security.",
    icon: "🔒",
  },
  {
    key: "4",
    question: "Can I use T-Home for business or regulatory services?",
    answer:
      "Yes! Beyond home loans, we offer complete business registration services including GST registration, company formation, trademark registration, and tax filing services.",
    icon: "💼",
  },
  {
    key: "5",
    question: "What documents are required for a home loan?",
    answer:
      "Basic documents include ID proof (Aadhaar/PAN), income proof (salary slips/ITR), property documents, and bank statements. Our team will guide you through the exact requirements based on your profile.",
    icon: "📄",
  },
  {
    key: "6",
    question: "How long does the loan approval process take?",
    answer:
      "Our streamlined process ensures quick approvals. Most applications are processed within 24-48 hours after document submission. In some cases, instant approval is also available for eligible applicants.",
    icon: "⏱️",
  },
];

interface FAQItemProps {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem = ({ faq, isOpen, onToggle, index }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div
        onClick={handleClick}
        className={`relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer ${
          isOpen
            ? "bg-gradient-to-br from-primary-700 via-primary-800 to-slate-900 shadow-xl shadow-primary-700/20"
            : "bg-white hover:bg-gray-50 shadow-lg shadow-gray-100/50 border border-gray-100 hover:border-gray-200 card-hover"
        }`}
      >
        <div className="w-full p-6 flex items-center gap-4 text-left">
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
              isOpen ? "bg-white/20" : "bg-primary-50"
            }`}
          >
            {faq.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className={`text-lg font-semibold transition-colors duration-300 ${
                isOpen ? "text-white" : "text-gray-900"
              }`}
            >
              {faq.question}
            </h3>
          </div>
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isOpen ? "bg-white/20" : "bg-gray-100 group-hover:bg-primary-100"
            }`}
          >
            {isOpen ? (
              <MinusOutlined className="text-white text-lg" />
            ) : (
              <PlusOutlined className="text-primary-700 text-lg" />
            )}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <div className="pl-16">
                  <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openKey, setOpenKey] = useState<string | null>("1");

  const handleToggle = (key: string) => {
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 relative overflow-hidden w-full bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(90deg, #1e3a5f 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[5%] w-72 h-72 bg-blue-100/50 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[5%] w-80 h-80 bg-purple-100/50 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-32 right-[15%] text-6xl text-primary-100 font-bold opacity-50"
        >
          ?
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -10, 0], y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-40 left-[10%] text-5xl text-blue-100 font-bold opacity-50"
        >
          ?
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-700/10 border border-primary-700/20 mb-6"
          >
            <QuestionCircleOutlined className="text-primary-700" />
            <span className="text-primary-700 text-sm font-medium">Frequently Asked Questions</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Got{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary-700 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions?
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 -z-0 origin-left"
              />
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Find answers to common queries about our services, process, and more
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-4"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.key}
                faq={faq}
                isOpen={openKey === faq.key}
                onToggle={() => handleToggle(faq.key)}
                index={index}
              />
            ))}
          </motion.div>

          {/* Right Side - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-800 to-slate-900 p-8 text-white card-hover">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />

                <div className="relative z-10">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6"
                  >
                    <MessageOutlined className="text-3xl" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    Can't find what you're looking for? Our support team is here to help you 24/7.
                  </p>

                  <div className="space-y-3">
                    <motion.a
                      href="#contact"
                      whileHover={{
                        scale: 1.01,
                        y: -3,
                        rotateX: 4,
                        rotateY: -4,
                        transformPerspective: 1200,
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between w-full px-5 py-4 bg-white text-primary-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors group"
                    >
                      <span className="flex items-center gap-3">
                        <MessageOutlined />
                        Send us a message
                      </span>
                      <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    <motion.a
                      href="tel:+919876543210"
                      whileHover={{
                        scale: 1.01,
                        y: -3,
                        rotateX: 4,
                        rotateY: -4,
                        transformPerspective: 1200,
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between w-full px-5 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20 group"
                    >
                      <span className="flex items-center gap-3">
                        <PhoneOutlined />
                        Call us directly
                      </span>
                      <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-white/60 text-sm">Support</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">&lt;24hrs</div>
                      <div className="text-white/60 text-sm">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-3 left-3 right-3 h-full bg-primary-900/20 rounded-3xl blur-sm" />
            </div>

            {/* Additional Info Cards */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-5 shadow-lg shadow-gray-100/50 border border-gray-100 card-hover"
              >
                <div className="text-3xl mb-2">📞</div>
                <div className="font-semibold text-gray-900">Call Support</div>
                <div className="text-sm text-gray-500">9AM - 7PM IST</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-5 shadow-lg shadow-gray-100/50 border border-gray-100 card-hover"
              >
                <div className="text-3xl mb-2">💬</div>
                <div className="font-semibold text-gray-900">Live Chat</div>
                <div className="text-sm text-gray-500">Always Online</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}