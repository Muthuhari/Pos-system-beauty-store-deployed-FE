import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

export default function HomeLanding() {
    return (
        <div style={{ backgroundColor: "#F7DDE2" }}>
            {/* ========== HERO SECTION ========== */}
            <section className="text-center py-24">
                <h1
                    className="text-5xl font-extrabold mb-4"
                    style={{ color: "#3A1F43" }}
                >
                    BeautifyMe, Made Just For You
                </h1>
                <p className="text-lg font-medium mb-8" style={{ color: "#3A1F43" }}>
                    Skincare and makeup crafted for the next generation of confidence 💄✨
                </p>

                <button
                    className="px-10 py-4 rounded-full text-white font-semibold transition-transform hover:scale-105"
                    style={{ backgroundColor: "#EC5C8B" }}
                >
                    Explore Collection
                </button>
            </section>

            {/* ========== ABOUT SECTION ========== */}
            <section id="about" className="py-20 px-6 bg-white rounded-t-[3rem]">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2
                            className="text-4xl font-bold mb-4"
                            style={{ color: "#3A1F43" }}
                        >
                            About Our Brand
                        </h2>
                        <p className="text-base leading-7" style={{ color: "#3A1F43" }}>
                            We believe beauty should be expressive, fun, and unapologetically
                            YOU. Our products are cruelty-free, dermatologically tested, and
                            made with shades designed for every skin tone. Glow with confidence —
                            your beauty, your rules!
                        </p>
                    </div>

                    <div
                        className="h-64 rounded-3xl"
                        style={{ backgroundColor: "#FFB8A5" }}
                    ></div>
                </div>
            </section>



            {/* ========== FOOTER ========== */}
<footer
    id="contact"
    className="py-16 px-6"
    style={{ backgroundColor: "#3A1F43" }}
>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-left">

        {/* BRAND */}
        <div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: "#FFFFFF" }}>
                BeautifyMe Cosmetics
            </h3>
            <p className="text-sm leading-6" style={{ color: "#FFFFFF" }}>
                We create modern, cruelty-free beauty products designed to bring out
                your inner glow. Beauty isn’t about perfection — it’s about confidence,
                self-love, and expressing who you really are. 💕
            </p>
        </div>

        {/* QUICK LINKS */}
        <div>
            <h4 className="text-lg font-semibold mb-3" style={{ color: "#FFFFFF" }}>
                Quick Links
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "#FFFFFF" }}>
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Shop Products</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>

        {/* CUSTOMER CARE */}
        <div>
            <h4 className="text-lg font-semibold mb-3" style={{ color: "#FFFFFF" }}>
                Customer Care
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "#FFFFFF" }}>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Track Order</a></li>
                <li><a href="#">Contact Support</a></li>
            </ul>
        </div>

        {/* CONTACT */}
        <div>
            <h4 className="text-lg font-semibold mb-3" style={{ color: "#FFFFFF" }}>
                Get in Touch
            </h4>
            <p className="text-sm mb-2" style={{ color: "#FFFFFF" }}>
                Email: support@beautyme.com
            </p>
            <p className="text-sm mb-2" style={{ color: "#FFFFFF" }}>
                Hotline: +94 71 234 5678
            </p>

            <div className="flex space-x-5 mt-4">
    <a href="#" aria-label="Instagram">
        <FaInstagram
            size={24}
            className="text-white hover:scale-110 transition-transform"
        />
    </a>
    <a href="#" aria-label="Facebook">
        <FaFacebookF
            size={24}
            className="text-white hover:scale-110 transition-transform"
        />
    </a>
    <a href="#" aria-label="YouTube">
        <FaYoutube
            size={24}
            className="text-white hover:scale-110 transition-transform"
        />
    </a>
    <a href="#" aria-label="TikTok">
        <FaTiktok
            size={24}
            className="text-white hover:scale-110 transition-transform"
        />
    </a>
</div>
        </div>
    </div>

    {/* COPYRIGHT */}
    <div className="text-center mt-12">
        <p className="text-xs" style={{ color: "#FFFFFF" }}>
            © 2025 BeautifyMe — All rights reserved.
        </p>
    </div>
</footer>

        </div>
    );
}
