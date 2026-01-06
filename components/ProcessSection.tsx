"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileAddOutlined,
  SafetyCertificateOutlined,
  FileSearchOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const steps = [
  {
    number: "01",
    icon: FileAddOutlined,
    title: "Upload Documents",
    description: "Submit ID, income & property proofs securely online.",
    gradient: "from-blue-400 to-blue-600",
    shadowColor: "shadow-blue-500/30",
  },
  {
    number: "02",
    icon: SafetyCertificateOutlined,
    title: "Check Eligibility",
    description: "Quick verification of your loan eligibility status.",
    gradient: "from-emerald-400 to-emerald-600",
    shadowColor: "shadow-emerald-500/30",
  },
  {
    number: "03",
    icon: FileSearchOutlined,
    title: "Get Offer",
    description: "Know your loan options instantly with best rates.",
    gradient: "from-violet-400 to-violet-600",
    shadowColor: "shadow-violet-500/30",
  },
  {
    number: "04",
    icon: CheckCircleOutlined,
    title: "Quick Approval",
    description: "Fast, hassle-free verification and approval.",
    gradient: "from-orange-400 to-orange-600",
    shadowColor: "shadow-orange-500/30",
  },
  {
    number: "05",
    icon: DollarCircleOutlined,
    title: "Instant Disbursement",
    description: "Get funds directly in your account within 24hrs.",
    gradient: "from-teal-400 to-teal-600",
    shadowColor: "shadow-teal-500/30",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 relative overflow-hidden w-full bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-[150px]"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Our Process</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How it{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Works
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-2 left-0 h-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 -z-0"
              />
            </span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Simple & Hassle-Free Home Loan Process in just 5 easy steps
          </p>
        </motion.div>

        {/* Timeline Process - Desktop */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[72px] left-[10%] right-[10%] h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
            />
          </div>

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="relative group"
              >
                <div className="relative">
                  <div className="relative mx-auto mb-8">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.gradient} blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500`} />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative w-36 h-36 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto group-hover:border-white/40 transition-all duration-500"
                    >
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl ${step.shadowColor} transform group-hover:scale-110 transition-all duration-500`}>
                        <step.icon className="text-4xl text-white" />
                      </div>
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="72" cy="72" r="68" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                        <motion.circle
                          cx="72"
                          cy="72"
                          r="68"
                          fill="none"
                          stroke="url(#processGradient)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={isInView ? { pathLength: 1 } : {}}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                          style={{ strokeDasharray: "1 1" }}
                        />
                        <defs>
                          <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#60a5fa" />
                            <stop offset="100%" stopColor="#c084fc" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                      className={`absolute -top-2 -right-2 w-10 h-10 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg ${step.shadowColor}`}
                    >
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </motion.div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/30 group-hover:bg-white group-hover:scale-150 transition-all duration-300" />
                  </div>
                  <div className="text-center px-2">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-[72px] -right-3 transform translate-x-1/2 z-20 hidden xl:block">
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 1 + index * 0.2 }}>
                      <ArrowRightOutlined className="text-white/30 text-xl" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Process Cards */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg ${step.shadowColor}`}>
                  <step.icon className="text-2xl text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md bg-gradient-to-r ${step.gradient} text-white`}>Step {step.number}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>
                <div className="flex-shrink-0 self-center">
                  <ArrowRightOutlined className="text-white/30" />
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-white/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats/Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 lg:mt-20"
        >
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {[
              { value: "24hrs", label: "Average Processing Time" },
              { value: "99%", label: "Approval Rate" },
              { value: "0%", label: "Hidden Charges" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}