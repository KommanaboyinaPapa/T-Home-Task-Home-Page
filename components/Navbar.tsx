"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  SearchOutlined,
  GlobalOutlined,
  MenuOutlined,
  CloseOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  DownOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Tilt from "@/components/Tilt";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  {
    name: "Service",
    href: "/services",
    dropdown: [
      { name: "Home Loans", href: "/services/home-loans", icon: "🏠" },
      { name: "Personal Loans", href: "/services/personal-loans", icon: "💰" },
      { name: "Balance Transfer", href: "/services/balance-transfer", icon: "🔄" },
      { name: "Business Registration", href: "/services/business-registration", icon: "📋" },
    ],
  },
  { name: "Careers", href: "/careers" },
  { name: "Financial Tools", href: "/financial-tools" },
  { name: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Premium Design */}
      <div className="hidden lg:block bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer" />
        
        <div className="container-custom py-2.5 relative z-10">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-8">
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 hover:text-secondary-300 transition-colors group"
              >
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <EnvironmentOutlined className="text-xs" />
                </span>
                <span className="text-white/90">H.No: 2-88/4, Hyderabad – 500055</span>
              </motion.a>
              <motion.a
                href="mailto:info@thome.co.in"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 hover:text-secondary-300 transition-colors group"
              >
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <MailOutlined className="text-xs" />
                </span>
                <span className="text-white/90">info@thome.co.in</span>
              </motion.a>
            </div>
            <div className="flex items-center gap-8">
              <motion.a
                href="tel:+917032183836"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 hover:text-secondary-300 transition-colors group"
              >
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <PhoneOutlined className="text-xs" />
                </span>
                <span className="text-white/90">+91 7032183836</span>
              </motion.a>
              <div className="flex items-center gap-2">
                <span className="text-white/60 text-xs uppercase tracking-wider">Follow Us</span>
                <div className="flex items-center gap-1">
                  {[
                    { icon: FacebookFilled, href: "#", label: "Facebook" },
                    { icon: InstagramFilled, href: "#", label: "Instagram" },
                    { icon: LinkedinFilled, href: "#", label: "LinkedIn" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-secondary-500 flex items-center justify-center transition-all duration-300"
                    >
                      <social.icon className="text-sm" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Premium Glass Design */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`sticky top-0 z-50 transition-all duration-500 w-full ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-b border-gray-100"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Tilt maxTilt={25} scale={1.1} className="relative rounded-full">
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  className="relative"
                >
                  {/* Logo with glow effect */}
                  <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl group-hover:bg-primary-500/40 transition-all" />
                  <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center border-[3px] border-white shadow-lg group-hover:shadow-2xl transition-all float-3d">
                    <div className="absolute inset-1 rounded-full border border-white/20" />
                    <div className="text-center">
                      <span className="text-white font-bold text-[10px] lg:text-xs tracking-wide">T-HOME</span>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold">
                  <span className="text-primary-700">T</span>
                  <span className="text-gray-800">-Home</span>
                </h1>
                <p className="text-[10px] lg:text-xs text-gray-500 -mt-0.5">Your Trusted Partner</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  whileHover={{ y: -3, rotateX: 8 }}
                  style={{ perspective: 600 }}
                >
                  <Link
                    href={item.href}
                    className={`nav-3d relative px-4 py-2 text-[15px] font-medium transition-all duration-300 flex items-center gap-1 rounded-xl group ${
                      activeDropdown === item.name
                        ? "text-primary-700"
                        : "text-gray-700 hover:text-primary-700"
                    }`}
                  >
                    {/* Hover background */}
                    <span className="absolute inset-0 bg-primary-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <span className="relative">{item.name}</span>
                    {item.dropdown && (
                      <motion.span
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative"
                      >
                        <DownOutlined className="text-[10px]" />
                      </motion.span>
                    )}
                  </Link>

                  {/* Dropdown Menu - Premium Design */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-2 z-50"
                        >
                          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden min-w-[260px] card-hover">
                            {/* Dropdown Header */}
                            <div className="bg-gradient-to-r from-primary-700 to-primary-600 px-5 py-3">
                              <p className="text-white font-semibold">Our Services</p>
                              <p className="text-white/70 text-xs">Choose what you need</p>
                            </div>
                            {/* Dropdown Items */}
                            <div className="p-2">
                              {item.dropdown.map((subItem, idx) => (
                                <motion.div
                                  key={subItem.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                >
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary-50 transition-all group"
                                  >
                                    <span className="text-2xl">{subItem.icon}</span>
                                    <div className="flex-1">
                                      <span className="text-gray-800 font-medium group-hover:text-primary-700 transition-colors">
                                        {subItem.name}
                                      </span>
                                    </div>
                                    <RightOutlined className="text-[10px] text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -4, rotateX: 10 }}
                whileTap={{ scale: 0.95, y: 2 }}
                className="hidden md:flex w-10 h-10 lg:w-11 lg:h-11 items-center justify-center rounded-xl bg-gray-100 hover:bg-primary-50 hover:text-primary-700 transition-all text-gray-600 btn-3d"
              >
                <SearchOutlined className="text-lg" />
              </motion.button>

              {/* CTA Button */}
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="hidden md:block"
              >
                <Tilt maxTilt={25} scale={1.08} className="rounded-xl">
                  <Button
                    type="primary"
                    size="large"
                    className="btn-3d bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 border-none rounded-xl px-5 lg:px-7 h-11 lg:h-12 font-semibold"
                  >
                    <span className="hidden lg:inline">Get In Touch</span>
                    <span className="lg:hidden">Contact</span>
                  </Button>
                </Tilt>
              </motion.div>

              {/* Language Button */}
              <motion.button
                whileHover={{ scale: 1.05, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex w-11 h-11 items-center justify-center rounded-xl bg-gray-100 hover:bg-primary-50 hover:text-primary-700 transition-all text-gray-600"
              >
                <GlobalOutlined className="text-lg" />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-primary-700 text-white shadow-lg"
              >
                <MenuOutlined className="text-lg" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Animated bottom border on scroll */}
        {isScrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent"
          />
        )}
      </motion.header>

      {/* Mobile Menu Drawer - Premium Design */}
      <Drawer
        placement="right"
        open={isMobileMenuOpen}
        onClose={() => {
          setIsMobileMenuOpen(false);
          setMobileSubmenu(null);
        }}
        width={320}
        closable={false}
        styles={{
          body: { padding: 0 },
        }}
      >
        <div className="h-full bg-white flex flex-col">
          {/* Drawer Header */}
          <div className="bg-gradient-to-r from-primary-700 to-primary-600 p-6 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">T-HOME</span>
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg">T-Home</h2>
                  <p className="text-white/70 text-xs">Your Trusted Partner</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <CloseOutlined className="text-lg" />
              </motion.button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-4 px-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.dropdown ? (
                  <div className="mb-1">
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === item.name ? null : item.name)}
                      className="w-full flex items-center justify-between py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-800 font-medium">{item.name}</span>
                      <motion.span
                        animate={{ rotate: mobileSubmenu === item.name ? 90 : 0 }}
                        className="text-gray-400"
                      >
                        <RightOutlined className="text-xs" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {mobileSubmenu === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-1">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 py-2.5 px-4 rounded-lg hover:bg-primary-50 transition-colors"
                              >
                                <span className="text-lg">{subItem.icon}</span>
                                <span className="text-gray-600 text-sm">{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors mb-1"
                  >
                    <span className="text-gray-800 font-medium">{item.name}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-gray-100 space-y-4">
            {/* Contact Info */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <PhoneOutlined className="text-primary-700" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Call us now</p>
                <a href="tel:+917032183836" className="text-primary-700 font-semibold">
                  +91 7032183836
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              type="primary"
              block
              size="large"
              className="bg-gradient-to-r from-primary-700 to-primary-600 border-none rounded-xl h-12 font-semibold shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get In Touch
            </Button>

            {/* Social Links */}
            <div className="flex justify-center gap-2">
              {[
                { icon: FacebookFilled, href: "#" },
                { icon: InstagramFilled, href: "#" },
                { icon: LinkedinFilled, href: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary-700 transition-all"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
