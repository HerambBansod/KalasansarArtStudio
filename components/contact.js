"use client";

import React from "react";
import {
    Navigation,
    Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white text-gray-800 font-sans">
            {/* Header */}
            <header className="py-6 px-4 sm:px-8 bg-white shadow-md flex justify-center">
                <div className="max-w-7xl w-full flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                    <img
                        src="/KALogo.webp"
                        alt="Kalāsanskar Art Studio Logo"
                        className="h-14 w-14 object-contain"
                    />
                    <h1 className="text-2xl sm:text-4xl font-bold tracking-widest"
                        style={{ fontFamily: 'var(--font-heading)' }}>
                        Kalasanskar Studio & Art Institute
                    </h1>
                </div>
            </header>

            {/* Contact Section */}
            <section
                className="relative py-16 px-4 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/BG_KA.webp')" }}
            >
                <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        {[
                            {
                                icon: <FaPhoneAlt className="text-blue-600 text-xl" />,
                                title: "Phone Number",
                                value: "+91 8830721216",
                                href: "tel:+918830721216",
                            },
                            {
                                icon: <FaEnvelope className="text-blue-600 text-xl" />,
                                title: "Email Address",
                                value: "kalasanskarstudio@gmail.com",
                                href: "mailto:kalasanskarstudio@gmail.com",
                            },
                            {
                                icon: <FaMapMarkerAlt className="text-blue-600 text-xl" />,
                                title: "Location",
                                value:
                                    "Jayalaxmi building, 3rd floor, opp. HP petrol pump, Malegaon road, Kasba, Baramati, Dist:Pune pin:413102",
                                href: "https://maps.app.goo.gl/Azk7pbBrfcbbw5aU7",
                            },
                        ].map(({ icon, title, value, href }, i) => (
                            <a key={i} href={href} className="block" target="_blank" rel="noopener noreferrer">
                                <div className="flex items-start gap-4 bg-white p-5 shadow rounded-xl hover:bg-blue-50 transition">
                                    {icon}
                                    <div>
                                        <h4 className="font-semibold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h4>
                                        <p className="text-sm sm:text-base">{value}</p>
                                    </div>
                                </div>
                            </a>
                        ))}

                        {/* Socials */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: <FaInstagram className="text-blue-600 text-xl" />,
                                    title: "Instagram",
                                    value: "kalasanskar_studio_baramati",
                                    href: "https://www.instagram.com/kalasanskar_studio_baramati?igsh=ejl3Zzd3M2Ewcm4=",
                                },
                                {
                                    icon: <FaFacebookF className="text-blue-600 text-xl" />,
                                    title: "Facebook",
                                    value: "Kalasanskar Art Studio",
                                    href: "https://facebook.com/KalasanskarArtStudio",
                                },
                                {
                                    icon: <FaWhatsapp className="text-blue-600 text-xl" />,
                                    title: "WhatsApp",
                                    value: "+91 8830721216",
                                    href: "https://wa.me/918830721216",
                                },
                            ].map(({ icon, title, value, href }, i) => (
                                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="flex items-start gap-4 bg-white p-5 shadow rounded-xl hover:bg-blue-50 transition">
                                        {icon}
                                        <div>
                                            <h4 className="font-semibold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h4>
                                            <p className="text-sm sm:text-base">{value}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="bg-white shadow-md rounded-xl p-6 sm:p-8">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Find Us on Google Maps</h3>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Kalasanskar Art Studio is located at the heart of creativity. Come visit us!
                            </p>
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <iframe
                                className="w-full h-[300px] sm:h-[400px] border-none"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.4360864167734!2d74.55950827495337!3d18.143814382878162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a10810896e21%3A0x9fea024738fe8ae!2sKalasanskar%20Studio!5e0!3m2!1sen!2sin!4v1748422835307!5m2!1sen!2sin"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Kalasanskar Art Studio Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >Our Art Moments</h2>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        navigation
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {[
                            "/Img_Two.webp",
                            "/Img_one.webp",
                            "/Img_Nine.webp",
                            "/Img_Four.webp",
                            "/Img_Five.webp",
                            "/Img_Six.webp",
                            "/Img_Seven.webp",
                            "/Img_Eight.webp",
                        ].map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-xl overflow-hidden shadow-md">
                                    <img
                                        src={src}
                                        alt={`Art ${index + 1}`}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </main>
    );
}
