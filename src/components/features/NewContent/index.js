import React from "react";

const steps = [
  { icon: "🖊️", title: "User Sign Up/Registration" },
  { icon: "📚", title: "Access STEM Courses" },
  { icon: "🧪", title: "Practice in Virtual Science Labs" },
  { icon: "🔬", title: "AI + AR Integration" },
  { icon: "🏅", title: "Learning Badge & Certification" },
  { icon: "👥", title: "Industry Mentorship Support" },
  { icon: "🤝", title: "Peer to Peer Learning and Community Support" },
  { icon: "📊", title: "Milestone & Progress Tracking" },
];

const HowItWorks = () => {
  return (
    <div className="bg-[#1980E7]/10 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#1980E7] mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#1980E7]/70 mb-2">{`Step ${
                index + 1
              }`}</h3>
              <p className="text-gray-600">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
