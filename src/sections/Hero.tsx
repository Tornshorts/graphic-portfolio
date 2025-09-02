import React from "react";
import ProfilePicture from "../assets/images/profile.jpeg";


const Hero: React.FC = () => (
  <section className="min-h-screen bg-gray-900 text-white flex items-center relative overflow-hidden">
    {/* Main content container */}
    <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
      {/* Left content */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-lg font-light mb-2 text-gray-300">Hi There!</h2>
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          I am Alexander Kawewa Muithi
          <span className="text-green-400"> Developer </span>
          <span className="text-green-400">| Graphic Designer</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">I make the complex simple.</p>

     

        {/* Contact info section */}
        <div className="flex gap-8 mt-16">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-1">Email</h3>
            <p className="text-sm text-gray-300">kawewaalex@gmail.com</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-1">Phone</h3>
            <p className="text-sm text-gray-300">+254 748 511 041</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-1">
              Location
            </h3>
            <p className="text-sm text-gray-300">Nairobi, Imara Daima</p>
          </div>
        </div>
      </div>

      {/* Right side - Profile image */}
      <div className="flex-1 flex justify-end relative">
        <div className="relative">
          <img
            src={ProfilePicture}
            alt="Profile"
            className="w-96 h-auto object-cover rounded-none"
          />
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-green-400 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Vertical line on the right */}
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-px h-32 bg-gray-600"></div>

    {/* Side navigation dots */}
    <div className="absolute right-12 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
    </div>
  </section>
);

export default Hero;
