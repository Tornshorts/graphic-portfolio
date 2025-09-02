import React from "react";

// Email icon
const EmailIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

// Phone icon
const PhoneIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

// LinkedIn icon
const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// GitHub icon
const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);


// WhatsApp icon
const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const contactInfo = {
  email: "kawewaalex@gmail.com",
  phone: "+254748511041",
};

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: <LinkedInIcon />,
    color: "hover:text-blue-500",
  },
  {
    name: "GitHub",
    url: "https://github.com/Tornshorts",
    icon: <GitHubIcon />,
    color: "hover:text-gray-300",
  },
 
  {
    name: "WhatsApp",
    url: `https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, "")}`,
    icon: <WhatsAppIcon />,
    color: "hover:text-green-500",
  },
];

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let's connect! Feel free to reach out through any of the channels
            below.
          </p>

          {/* Large background text */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[8rem] lg:text-[12rem] font-black text-gray-800/10 select-none pointer-events-none whitespace-nowrap"
            style={{ letterSpacing: "-0.05em" }}
          >
            CONTACT
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <div className="bg-gray-800/50 p-8 rounded-lg hover:bg-gray-800/70 transition-colors duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <EmailIcon />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Email</h3>
                  <p className="text-gray-400">Drop me a line</p>
                </div>
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-green-400 hover:text-green-300 transition-colors duration-200 font-semibold"
              >
                {contactInfo.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-gray-800/50 p-8 rounded-lg hover:bg-gray-800/70 transition-colors duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Phone</h3>
                  <p className="text-gray-400">Give me a call</p>
                </div>
              </div>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-green-400 hover:text-green-300 transition-colors duration-200 font-semibold"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h3 className="text-white text-2xl font-bold mb-8">
              Connect With Me
            </h3>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 flex-wrap">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:bg-gray-700 transform hover:scale-110 transition-all duration-300 group`}
                  title={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media Labels */}
            <div className="flex justify-center gap-6 flex-wrap mt-4">
              {socialLinks.map((social, idx) => (
                <span key={idx} className="text-gray-400 text-sm">
                  {social.name}
                </span>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;
