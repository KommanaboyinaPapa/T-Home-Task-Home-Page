"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button, Input, Select, Form, message } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  SendOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  WhatsAppOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

const { TextArea } = Input;

const services = [
  { value: "home-loans", label: "Home Loans" },
  { value: "personal-loans", label: "Personal Loans" },
  { value: "balance-transfer", label: "Balance Transfer" },
  { value: "business-registration", label: "Business Registration" },
];

const contactInfo = [
  {
    icon: PhoneOutlined,
    label: "Call Us",
    value: "+91 98765 43210",
    subtext: "Mon-Sat, 9AM-7PM",
    gradient: "from-blue-500 to-blue-600",
    href: "tel:+919876543210",
  },
  {
    icon: MailOutlined,
    label: "Email Us",
    value: "support@thome.in",
    subtext: "We reply within 24hrs",
    gradient: "from-purple-500 to-purple-600",
    href: "mailto:support@thome.in",
  },
  {
    icon: WhatsAppOutlined,
    label: "WhatsApp",
    value: "+91 98765 43210",
    subtext: "Quick responses",
    gradient: "from-green-500 to-green-600",
    href: "https://wa.me/919876543210",
  },
];

const features = [
  "No hidden charges",
  "Expert guidance",
  "Quick response",
  "Secure & confidential",
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    message.success("Thank you! We'll contact you within 24 hours.");
    form.resetFields();
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 lg:py-32 relative overflow-hidden w-full bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1e3a5f 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-[15%] w-20 h-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-white/30"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-32 right-[10%] w-16 h-16 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full backdrop-blur-sm border border-white/30"
        />
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
            <span className="w-2 h-2 rounded-full bg-primary-700 animate-pulse" />
            <span className="text-primary-700 text-sm font-medium">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Start Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary-700 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Journey
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
            Have questions? We're here to help you achieve your dream home
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="text-2xl text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{info.label}</span>
                    <p className="text-gray-900 font-semibold text-lg">{info.value}</p>
                    <span className="text-sm text-gray-500">{info.subtext}</span>
                  </div>
                  <ArrowRightOutlined className="text-gray-300 group-hover:text-primary-700 group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>

            {/* Office Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-700 via-primary-800 to-slate-900 p-6 text-white"
            >
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <EnvironmentOutlined className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Visit Our Office</h4>
                    <p className="text-white/60 text-sm">We'd love to meet you</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  123 Financial District,<br />
                  Hyderabad, Telangana 500032
                </p>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <ClockCircleOutlined />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl" />
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircleFilled className="text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-8 md:p-10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-20 rounded-3xl"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircleFilled className="text-4xl text-green-500" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-600">We'll contact you within 24 hours</p>
                    </div>
                  </motion.div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                  <p className="text-gray-500">Fill the form below and our team will reach out to you shortly</p>
                </div>

                <Form form={form} layout="vertical" onFinish={handleSubmit} className="space-y-1">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Form.Item name="name" rules={[{ required: true, message: "Name is required" }]}>
                      <Input
                        placeholder="Your Name"
                        size="large"
                        prefix={<UserOutlined className="text-gray-400 mr-2" />}
                        className="h-14 rounded-xl border-gray-200 hover:border-primary-400 focus:border-primary-700 transition-colors"
                      />
                    </Form.Item>

                    <Form.Item name="phone" rules={[{ required: true, message: "Phone is required" }]}>
                      <Input
                        placeholder="Phone Number"
                        size="large"
                        prefix={<PhoneOutlined className="text-gray-400 mr-2" />}
                        className="h-14 rounded-xl border-gray-200 hover:border-primary-400 focus:border-primary-700 transition-colors"
                      />
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Email is required" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input
                      placeholder="Email Address"
                      size="large"
                      prefix={<MailOutlined className="text-gray-400 mr-2" />}
                      className="h-14 rounded-xl border-gray-200 hover:border-primary-400 focus:border-primary-700 transition-colors"
                    />
                  </Form.Item>

                  <Form.Item name="service">
                    <Select
                      placeholder="Select Service You Need"
                      size="large"
                      options={services}
                      className="h-14 rounded-xl"
                      popupClassName="rounded-xl"
                    />
                  </Form.Item>

                  <Form.Item name="message">
                    <TextArea
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className="rounded-xl border-gray-200 hover:border-primary-400 focus:border-primary-700 transition-colors resize-none"
                    />
                  </Form.Item>

                  <Form.Item className="mb-0 pt-2">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        loading={loading}
                        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary-700 to-blue-600 hover:from-primary-600 hover:to-blue-500 border-0 rounded-xl shadow-lg shadow-primary-700/30 hover:shadow-xl hover:shadow-primary-700/40 transition-all duration-300"
                      >
                        {loading ? "Sending..." : "Send Message"}
                        {!loading && <SendOutlined className="ml-2" />}
                      </Button>
                    </motion.div>
                  </Form.Item>
                </Form>

                <p className="text-center text-gray-400 text-sm mt-6">
                  🔒 Your information is secure and will never be shared
                </p>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}