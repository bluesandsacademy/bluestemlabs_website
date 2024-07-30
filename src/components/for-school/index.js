import React from "react";

const features = [
  {
    title: "3D Virtual Experiments & Immersive Interaction",
    description:
      "Looking to achieve your learning outcomes? With Blue Sands STEM Lab, you get that and much more! Offer your students interactive 3D virtual science experiments and realistic lab simulations that enhance time management, lab skills, and knowledge while covering any STEM curriculum.",
  },
  {
    title: "Awesome Game-Like Experience",
    description:
      "Engage students with game-like online experiment simulations in science without limits. With features like an engaging lab partner named Oxi, helpful hints, and the ability to skip ahead (with progress recorded in reports), you can make science learning intuitive and personalized.",
  },
  {
    title: "Virtual Experiments, Adaptive to Any Learning Style",
    description:
      "Whether your future scientists are visual, auditory, or kinesthetic learners, Blue Sands STEM Lab adapts to all styles with progress tracking, walkthrough videos, lab manuals, enrichment documents, immediate feedback, multiple-choice quizzes, and more.",
  },
  {
    title: "Fast, Easy, & Accurate Reports to Grow",
    description:
      "Gain insights into student progress anytime with comprehensive analytics reports, enabling data-driven teaching decisions.",
  },
  {
    title: "Science Experiments Simulations Lab & Blue Sands LMS Integration",
    description:
      "Integrate your LMS with our virtual science lab smoothly and for free within 24 hours. This seamless integration saves effort, time, and money for your finance and IT teams.",
  },
  {
    title: "Bilingual Simulation Lab",
    description:
      "For higher education digital science lab experiments in English or Arabic, Blue Sands STEM Lab has you covered. We ensure you are set up and ready to go in no time!",
  },
  {
    title: "Virtual Reality Headsets",
    description:
      "Blue Sands STEM Lab offers a fully integrated, classroom-ready VR headset with no additional hardware required to get started.",
  },
  {
    title: "Headset Management",
    description:
      "Our portal gives teachers the control to easily send content, direct, and monitor student attention, maximizing learning time.",
  },
  {
    title: "Curriculum Aligned Content",
    description:
      "Blue Sands STEM Lab provides thousands of virtual and augmented reality educational resources to enhance your lessons, regardless of the subject.",
  },
  {
    title: "Secure Storage & Charging",
    description:
      "All headsets come with a rugged storage and charging case to ensure your devices are always ready when you are.",
  },
  {
    title: "Set up & Training",
    description:
      "Our technicians set up and configure the headsets for you, and our educational team teaches you how to use them.",
  },
];

const ForSchool = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-4">
      {/* Hero Section */}
      <section className="bg-[url('/saturn-assets/images/lab/lab_class.jpg')] h-[350px] relative flex flex-col items-center justify-center text-white text-center py-16 px-4 rounded-lg shadow-2xl">
        <div className="bg-[#1980E7] bg-opacity-40 absolute inset-0 rounded-lg"></div>
        <h1 className="text-4xl font-bold mb-4 z-10 drop-shadow-2xl">
          Blue Sands Virtual Reality for Schools & Higher Institutions
        </h1>
        <p className="text-xl max-w-3xl mx-auto z-10 drop-shadow-2xl">
          Blue Sands STEM Lab comes complete with everything teachers need to
          improve student engagement and introduce virtual reality into the
          classroom.
        </p>
      </section>

      {/* Grid Layout for Features */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-700 cursor-pointer text-center"
            >
              <h2 className="text-2xl font-semibold text-[#1980E7] mb-4">
                {feature.title}
              </h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ForSchool;
