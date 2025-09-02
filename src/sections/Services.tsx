import React from "react";

// Service icons as SVG components for better styling control
const WebDevIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
    <path
      d="M8 11h8M8 15h8M8 7h8"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

const DesignIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const TrendsIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M7 20v-4M12 20v-8M17 20v-12"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M15 10c0-1.657-1.343-3-3-3s-3 1.343-3 3M12 17h.01"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path d="M12 14v-1" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const BrandingIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <rect
      x="2"
      y="6"
      width="20"
      height="12"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M6 10h4M6 14h2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const MarketingIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="2" />
    <circle cx="9" cy="9" r="1" fill="currentColor" />
    <circle cx="15" cy="15" r="1" fill="currentColor" />
  </svg>
);

const services = [
  {
    icon: <WebDevIcon />,
    title: "Web Development",
    desc: "Building responsive, user-friendly websites with modern tools and clean design principles.",
  },
  {
    icon: <DesignIcon />,
    title: "UI/UX Design",
    desc: "Crafting intuitive interfaces and engaging user experiences using Figma, Canva, and Adobe tools.",
  },
  {
    icon: <TrendsIcon />,
    title: "Design Trends",
    desc: "Staying ahead with the latest UI/UX and graphic design trends to deliver fresh, innovative solutions.",
  },
  {
    icon: <SupportIcon />,
    title: "Customer Support",
    desc: "Ensuring seamless communication and client satisfaction through reliable, user-focused support.",
  },
  {
    icon: <BrandingIcon />,
    title: "Branding",
    desc: "Helping businesses stand out with strong visual identities and memorable brand assets.",
  },
  {
    icon: <MarketingIcon />,
    title: "Digital Marketing",
    desc: "Creating designs and strategies that boost online presence and connect brands with their audience.",
  },
];

const Services: React.FC = () => (
  <section className="bg-gray-900 py-20 px-6 lg:px-12 relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
          My Services
        </h2>
        {/* Large background text */}
        <div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 text-[8rem] lg:text-[12rem] font-black text-gray-800/20 select-none pointer-events-none whitespace-nowrap"
          style={{ letterSpacing: "-0.05em" }}
        >
          SERVICES
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gray-800/50 p-8 hover:bg-gray-800/70 transition-colors duration-300 group cursor-pointer"
          >
            {/* Icon */}
            <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-white text-xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
