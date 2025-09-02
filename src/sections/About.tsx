import React from "react";
import ProfilePicture2 from "../assets/images/profile2.jpeg";



const About: React.FC = () => (
  <section className="bg-gray-900 py-16 px-6 lg:px-12">
    <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center">
      {/* Left side - Profile image */}
      <div className="flex-1 flex justify-center lg:justify-start">
        <div className="relative">
          <img
            src={ProfilePicture2}
            alt="Alexander Kawewa"
            className="w-80 h-96 lg:w-96 lg:h-[500px] object-cover rounded-none shadow-2xl"
          />
          {/* Optional overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="flex-1 text-white">
        <h2 className="text-green-400 text-lg font-semibold mb-3">Who am I?</h2>
        <h3 className="text-white text-3xl lg:text-4xl font-bold mb-6 leading-tight">
          I'm Alexander Kawewa Muithi, an aspiring UI/UX Designer and Computer Science
          Student
        </h3>
        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
          Creative and detail-oriented UI/UX designer with strong skills in
          Adobe Illustrator, Photoshop, Figma, and Canva. Experienced in
          building intuitive and visually appealing interfaces using design
          thinking. Currently pursuing a degree in Computer Science and
          passionate about blending design and technology to deliver outstanding
          digital experiences.
        </p>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <div className="text-gray-400 text-sm font-semibold mb-1">
              Name:
            </div>
            <div className="text-white text-base">Alexander Kawewa Muithi</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm font-semibold mb-1">
              From:
            </div>
            <div className="text-white text-base">Nairobi, Imara Daima</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm font-semibold mb-1">
              Role:
            </div>
            <div className="text-white text-base">
              Student
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-sm font-semibold mb-1">
              Email:
            </div>
            <div className="text-white text-base">kawewaalex@gmail.com</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm font-semibold mb-1">
              Phone:
            </div>
            <div className="text-white text-base">+254 748 511 041</div>
          </div>
        </div>

        {/* Download CV Button */}
        
      </div>
    </div>
  </section>
);

export default About;
