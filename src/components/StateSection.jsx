import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "20", label: "Achievements" },
    { number: "30", label: "Projects" },
    { number: "1,000", label: "Mentored Students" },
    { number: "500", label: "Cups of coffee" },
  ];

  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-20 px-4 md:px-20 text-white" style={{ backgroundImage: "url('/images/mountain-bg.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
          {stats.map((item, index) => (
            <div key={index} className="bg-[#1c1c1c] p-6 rounded-md shadow-md">
              <p className="text-3xl font-bold text-yellow-500">{item.number}</p>
              <p className="text-sm text-gray-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Text */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          More projects on <span className="text-yellow-500">Github</span>
        </h2>
        <p className="text-center mt-4 text-gray-300 text-sm md:text-base">
          I love to solve business problems & uncover hidden data stories
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <a
            href="https://github.com/your-username" // Replace with actual GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold transition"
          >
            GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
