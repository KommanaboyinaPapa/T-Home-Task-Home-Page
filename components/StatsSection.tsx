"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Tilt from "@/components/Tilt";
import {
  UserOutlined,
  TrophyOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

const stats = [
  {
    icon: UserOutlined,
    value: 5000,
    suffix: "+",
    label: "SATISFIED CLIENTS",
    description: "Happy customers worldwide",
  },
  {
    icon: TrophyOutlined,
    value: 95,
    suffix: "%",
    label: "SUCCESS RATE",
    description: "Loan approval rate",
  },
  {
    icon: FieldTimeOutlined,
    value: 9,
    suffix: "+",
    label: "YEARS OF EXPERIENCE",
    description: "Industry expertise",
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden w-full">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-primary-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-secondary-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
                <Tilt className="relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 border border-gray-100 card-hover">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-6 group-hover:from-primary-700 group-hover:to-primary-600 transition-all duration-500"
                >
                  <stat.icon className="text-3xl text-primary-700 group-hover:text-white transition-colors" />
                </motion.div>

                {/* Counter */}
                <div className="mb-2">
                  <span className="text-5xl font-bold text-primary-700 counter-number">
                    {isInView && (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix}
                      />
                    )}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 tracking-wide">
                  {stat.label}
                </h3>
                <p className="text-gray-500 text-sm">{stat.description}</p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-700 to-secondary-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
