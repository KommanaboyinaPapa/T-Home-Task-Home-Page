"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Tag, Rate } from "antd";
import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Srinivasa Acharya",
    location: "Hyderabad",
    rating: 5,
    quote:
      "Dear Mr. Ravinder, Your assistance in applying for, processing, and disbursing my SVC Indraprastha Apartments housing loan is amazing. You gave the list at once to prevent document submission disturbances. You also prevented bank-hopping for e-documents. I appreciate your support and wish you and Ambak prosperity.",
    avatar: "/images/customer-1.png",
  },
  {
    id: 2,
    name: "Pankaj Agarwal",
    location: "Mumbai",
    rating: 5,
    quote:
      "I had a wonderful and seamless experience with Ravinder. They have managed the entire documentation and Coordination with Bank without any hassle of multiple visit to the bank for home loan. Additionally, they have shortlisted best home loan offers from a bouquet of home loan which always has been a biggest pain point.",
    avatar: "/images/customer-2.png",
  },
  {
    id: 3,
    name: "Murugan R",
    location: "Hyderabad",
    rating: 5,
    quote:
      "Dear Mr. Ravinder, This is regarding my home loan for the flat purchased at svc indraprastha. The process of the house loan, starting from the application until the disbursement, you had done an outstanding performance to get the job done. Keep up the good work. Thank you.",
    avatar: "/images/customer-3.png",
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    location: "Bangalore",
    rating: 5,
    quote:
      "T-Home made our dream of owning a house come true. Their team was professional, responsive, and guided us through every step. The interest rates were competitive and the approval was quick. Highly recommended for anyone looking for home loans!",
    avatar: "/images/customer-1.png",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <section ref={ref} className="section-padding bg-gray-50 overflow-hidden w-full">
      <div className="container-custom">
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
            Testimonials
          </Tag>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Client Say's
          </h2>
          <p className="text-gray-600 text-lg">
            Our clients trust us for hassle-free home loans with quick approvals
            and excellent service!
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            onSwiper={setSwiper}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div className="bg-white rounded-3xl p-8 h-full shadow-soft hover:shadow-elegant transition-all duration-500 relative overflow-hidden border border-gray-100">
                    {/* Quote Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-primary-700 flex items-center justify-center mb-6 group-hover:bg-secondary-600 transition-colors duration-300">
                      <span className="text-white text-2xl font-serif">"</span>
                    </div>

                    {/* Quote Text */}
                    <p className="text-gray-600 mb-8 leading-relaxed text-sm line-clamp-6">
                      {testimonial.quote}
                    </p>

                    {/* Rating */}
                    <div className="mb-6">
                      <Rate
                        disabled
                        defaultValue={testimonial.rating}
                        className="text-yellow-400 text-sm"
                      />
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-primary-600">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => swiper?.slidePrev()}
              className="w-12 h-12 rounded-full bg-white shadow-soft hover:shadow-lg flex items-center justify-center text-primary-700 hover:bg-primary-700 hover:text-white transition-all border border-gray-200"
            >
              <LeftOutlined />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => swiper?.slideNext()}
              className="w-12 h-12 rounded-full bg-secondary-600 shadow-soft hover:shadow-lg flex items-center justify-center text-white hover:bg-secondary-700 transition-all"
            >
              <RightOutlined />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
