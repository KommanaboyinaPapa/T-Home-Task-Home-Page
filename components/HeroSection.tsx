"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button, Rate } from "antd";
import {
  ArrowRightOutlined,
  HomeOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import CountUp from "react-countup";

const heroSlides = [
  {
    title: "Your Trusted Loan Partner for",
    highlight: "Smarter Borrowing",
    description:
      "Helping families, individuals, and businesses with smarter home loans for nearly 20 years. Trusted, recognized, and reliable.",
    badge: "ONE PLACE FOR HOME LOANS, TAXES & BUSINESS REGISTRATIONS.",
  },
  {
    title: "Secure Your Dream Home",
    highlight: "with Ease!",
    description:
      "Your journey to homeownership starts here! Whether you're buying your first home, upgrading to a bigger space, or refinancing your existing loan, we've got you covered.",
    badge: "Be happy to get home loan",
  },
  {
    title: "Affordable and Hassle-Free",
    highlight: "Personal Loan Solutions",
    description:
      "T-Home makes your financial journey quick and hassle-free. From credit checks to home loans, everything is simple, fast, and fully transparent—no hidden steps, just smart solutions.",
    badge: "PERSONAL LOAN SOLUTIONS",
  },
];

const floatingElements = [
  { icon: "🏠", delay: 0, duration: 6 },
  { icon: "💰", delay: 1, duration: 7 },
  { icon: "📋", delay: 2, duration: 5 },
  { icon: "✅", delay: 1.5, duration: 6.5 },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden w-full">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow delay-200" />
        <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow delay-400" />
      </div>

      {/* Floating Decorative Elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: el.delay, duration: 0.5 }}
          className="absolute text-4xl hidden lg:block"
          style={{
            top: `${20 + index * 15}%`,
            left: index % 2 === 0 ? `${5 + index * 3}%` : "auto",
            right: index % 2 !== 0 ? `${5 + index * 3}%` : "auto",
          }}
        >
          <motion.span
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="block"
          >
            {el.icon}
          </motion.span>
        </motion.div>
      ))}

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh] py-16">
            {/* Left Content */}
            <motion.div
              key={currentSlide}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-white"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 text-white/90">
                  {heroSlides[currentSlide].badge}
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                {heroSlides[currentSlide].title}{" "}
                <span className="text-secondary-400 animated-gradient-text bg-gradient-to-r from-red-400 via-red-500 to-orange-400">
                  {heroSlides[currentSlide].highlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed"
              >
                {heroSlides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 mb-12"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="primary"
                    size="large"
                    className="h-14 px-8 text-lg font-semibold bg-secondary-600 hover:bg-secondary-500 border-none rounded-xl shadow-lg hover:shadow-xl transition-all"
                    icon={<ArrowRightOutlined />}
                  >
                    Book Free Consultation
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="large"
                    className="h-14 px-8 text-lg font-semibold bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white rounded-xl backdrop-blur-sm"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-6"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Rate disabled defaultValue={4.5} allowHalf className="text-yellow-400 text-sm" />
                    <span className="font-semibold">4.5</span>
                  </div>
                  <p className="text-white/70 text-sm">from 200+ reviews</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              {/* Main Image Card */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                    <div className="text-center p-8">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="mb-4"
                      >
                        <HomeOutlined className="text-8xl text-white/80" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2">Your Dream Home Awaits</h3>
                      <p className="text-white/70">Find the perfect loan for your perfect home</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-elegant p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-secondary-100 flex items-center justify-center">
                      <HomeOutlined className="text-2xl text-secondary-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-700">
                        <CountUp end={95} duration={2.5} suffix="%" />
                      </div>
                      <p className="text-gray-500 text-sm">Success Rate</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
                >
                  <CheckCircleFilled className="text-3xl text-green-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-secondary-500"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
