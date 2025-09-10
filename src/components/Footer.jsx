import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#16353b] text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <div className="text-2xl text-coral font-bold">Aquila</div>
          <p className="mt-3 text-sm text-white/80">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at
          </p>
          <div className="flex gap-4 mt-4 text-coral text-xl">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-white font-semibold mb-3 relative">
            Services
            <span className="block w-10 h-0.5 bg-coral mt-1"></span>
          </h5>
          <ul className="text-sm space-y-1">
            <li>Web Design/Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>HubSpot Integration</li>
            <li>Email Marketing</li>
            <li>Website Migration</li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h5 className="text-white font-semibold mb-3 relative">
            Location
            <span className="block w-10 h-0.5 bg-coral mt-1"></span>
          </h5>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-coral" /> Email: Aquila@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-coral" /> Phone: 12345678901
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-coral" /> Aquila Tech Solutions
              Pvt Ltd <br /> B3 -226-227, SPAZE iTech Park, sec 49 ,Gurugram -
              122018
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h5 className="text-white font-semibold mb-3 relative">
            Subscribe Us
            <span className="block w-10 h-0.5 bg-coral mt-1"></span>
          </h5>
          <p className="text-sm mb-3">
            Stay updated with the latest listings and rental tips.
          </p>
          <div  className="flex flex-col gap-3">
            <input id="f1"
              className="rounded-full px-4 py-2 text-[coral] outline-none border border-[coral]"
              placeholder="Email Address"
            />
            <button className="bg-[#e36c58] hover:bg-[#d85b47] rounded-full px-6 py-2 text-white font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-10 pt-6 pb-6 text-center text-sm text-white/60 bg-[gray]">
        Copyright 2025 Aquila Tech Solutions | All Rights Reserved.
      </div>
    </footer>
  );
}
