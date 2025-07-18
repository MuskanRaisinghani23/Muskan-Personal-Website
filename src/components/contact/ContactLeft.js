import React from 'react'
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full max-w-[70%] mx-auto h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-lg shadow-shadowOne flex flex-col justify-center">
      <div className="flex flex-col lgl:flex-row gap-12 items-center">
        {/* Left Column - Image */}
        <div className="w-full lgl:w-1/2 flex justify-center">
          <img
            className="h-64 object-cover rounded-lg"
            src={contactImg}
            alt="contactImg"
          />
        </div>

        {/* Right Column - Text Content */}
        <div className="w-full lgl:w-1/2 flex flex-col gap-4 mt-5">
          <p className="text-base text-gray-400 flex items-center gap-2">
            Name: <span className="text-lightText">Muskan Deepak Raisinghani</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: <span className="text-lightText">+1 (857) 334-1429</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span className="text-lightText">raisinghani.muskan@gmail.com</span>
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="text-base uppercase font-titleFont mt-5">Find me in</h2>
            <div className="flex gap-4">
              <a href='https://www.linkedin.com/in/muskan-raisinghani/'>
                <span className="bannerIcon">
                  <FaLinkedinIn />
                </span>
              </a>
              <a href='https://github.com/muskanRaisinghani23/'>
                <span className="bannerIcon">
                  <FaGithub />
                </span>
              </a>
              <a href='https://www.instagram.com/muskan_raisinghani/'>
                <span className="bannerIcon">
                  <FaInstagram />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
