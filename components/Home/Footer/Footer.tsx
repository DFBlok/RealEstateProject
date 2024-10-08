import React from "react";
import { FaFacebook, FaGithub, FaTwitch } from "react-icons/fa";
import { FaHouse, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
        {/* 1st footer part */}
        <div className="md:mx-auto">
          <div className="flex items-center space-x-2">
            <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
              <FaHouse />
            </div>
            <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
              HomeHub
            </h1>
          </div>
          <p className="text-gray-300 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, vitae assumenda, fuga quis aut amet natus ?
          </p>
          <p className="text-gray-300 mt-4 font-semibold">example@gmail.com</p>
          <p className="text-gray-300 mt-2 font-semibold">+12 458 1225</p>
          {/*  social links */}
          <div className="flex items-center space-x-4 mt-6 cursor-pointer">
            <FaFacebook className="w-6 h-6 text-blue-600" />
            <FaTwitch className="w-6 h-6 text-sky-400" />
            <FaGithub className="w-6 h-6 text-white" />
            <FaLinkedin className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        {/*  2nd footer */}
        <div className="md:mx-auto">
          <h1 className="footer__heading">Popular Search</h1>
          <p className="footer__link">Apartment For Rent</p>
          <p className="footer__link">Apartment Low to High</p>
          <p className="footer__link">Offices For Buy</p>
          <p className="footer__link">Offices For Rent</p>
        </div>
        {/* 3rd footer */}
        <div className="lg:mx-auto">
          <h1 className="footer__heading">Quick Link</h1>
          <p className="footer__link">Terms of use</p>
          <p className="footer__link">Privacy Policy</p>
          <p className="footer__link">Pricing Plans</p>
          <p className="footer__link">Our Services</p>
          <p className="footer__link">Contact Support</p>
          <p className="footer__link">Careers</p>
          <p className="footer__link">FAQs</p>
        </div>
        {/* 4th footer */}
        <div className="md:mx-auto">
          <h1 className="footer__heading">Discover</h1>
          <p className="footer__link">Maimi</p>
          <p className="footer__link">Los Angeles</p>
          <p className="footer__link">Chicago</p>
          <p className="footer__link">New York</p>
          <p className="footer__link">China</p>
        </div>
      </div>
      <p className="text-center mt-4 text-base text-white opacity-70">
        Copyright 2024 by Duwayne Blok
      </p>
    </div>
  );
};

export default Footer;
