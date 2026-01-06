"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Input } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  SendOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Financial Tools", href: "/financial-tools" },
  { name: "Careers", href: "/careers" },
  { name: "Contact us", href: "/contact" },
];

const socialLinks = [
  { icon: FacebookFilled, href: "#", label: "Facebook" },
  { icon: InstagramFilled, href: "#", label: "Instagram" },
  { icon: LinkedinFilled, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-700 text-white relative overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="text-3xl font-bold">
                <span className="text-secondary-400">T</span>
                <span className="text-white">-HOME</span>
              </div>
            </Link>

            <p className="text-white/70 mb-6 leading-relaxed">
              T-HOME is dedicated to providing innovative and reliable solutions
              for your home. We blend quality, technology, and design to enhance
              your living experience. Stay connected with us for updates, offers,
              and expert insights.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-600 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Quick links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRightOutlined className="text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Official Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <PhoneOutlined className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:+917032183836"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    +91 7032183836
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MailOutlined className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold">Mail Us</p>
                  <a
                    href="mailto:info@thome.co.in"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    info@thome.co.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <EnvironmentOutlined className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-white/70">
                    H.No: 2-88/4, Quthbullapur Village, Opposite to Government
                    Veterinary Hospital, Hyderabad - 500055
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Subscribe Us Today</h3>
            <p className="text-white/70 mb-6">
              Subscribe Us & Receive Our Offers and Updates to Your Inbox
              Directly.
            </p>

            <div className="space-y-4">
              <Input
                placeholder="Enter your email"
                size="large"
                className="rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="primary"
                  size="large"
                  block
                  className="h-12 bg-secondary-600 hover:bg-secondary-500 border-none rounded-xl font-semibold"
                >
                  Subscribe
                  <SendOutlined className="ml-2" />
                </Button>
              </motion.div>
            </div>

            <p className="text-white/50 text-sm mt-4">
              * We do not share your email id
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              Copyright © 2025 T-Home. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/terms"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
