import React, { useState } from "react";

const labContent = [
  {
    title: "VIRTUAL BIOLOGY LAB",
    description:
      "Master the full spectrum of foundational biological concepts from the chemical and molecular basis of life to genetic engineering. Embark on an in-depth exploration into the building blocks of life. This course aims to equip students with an understanding of key biological concepts, from the chemical foundation of life to advanced topics in biotechnology and genomics. Through a series of interactive virtual simulations, students will analyze cellular structures, decipher metabolic pathways, and explore the mechanisms of gene expression and inheritance.",
    objectives: [
      "Illustrate and contextualize the chemical and molecular foundations of life",
      "Apply principles of metabolism, cellular respiration, and photosynthesis in energetic contexts",
      "Understand mechanisms of cell communication, reproduction, and genetic inheritance",
      "Evaluate advancements in biotechnology and genomics, considering their ethical, social, and practical implications",
    ],
    pricingPlan: "Book A Free Demo",
  },
  {
    title: "VIRTUAL CHEMISTRY LAB",
    description:
      "Examine the essentials of chemistry with General Chemistry I, covering atomic structure, chemical bonds, stoichiometry, gas laws, and more through interactive virtual labs. General Chemistry I serves as an introductory survey of the fundamental concepts in chemistry, providing a foundational understanding for students. It covers a broad range of topics designed to introduce the principles and methodologies that underpin the discipline. You can begin a comprehensive exploration of the basic principles that form the backbone of the chemical sciences. Through a series of engaging virtual lab simulations, learners will gain hands-on experience with atomic structure, chemical bonding, stoichiometry, gas laws, solution chemistry, and calorimetry.",
    objectives: [
      "Explain the structure of atoms and the periodic table",
      "Distinguish between ionic and covalent bonds and predict compound properties",
      "Apply stoichiometry to balance chemical equations and perform mass-to-mole conversions",
      "Describe the properties of gases and the laws that govern them",
      "Prepare solutions of specific concentrations and understand solution chemistry fundamentals",
      "Use calorimetry to measure the enthalpy changes in chemical reactions",
    ],
    pricingPlan: "Book A Free Demo",
  },
  {
    title: "VIRTUAL PHYSICS LAB",
    description:
      "Join the immersive journey through the world of Physics, mastering foundational concepts like forces, energy, and wave dynamics through cutting-edge virtual simulations. Discover the physics universe and unravel the mysteries of motion, energy, and gravitation! In this course, you'll explore fundamental physics concepts comprehensively, from the basics of scalars and vectors to the complexities of gravitational fields and satellite orbits. Our virtual simulations provide a unique, interactive learning environment where you can apply theoretical knowledge to practical scenarios, enhancing your understanding and retention of crucial physics principles.",
    objectives: [
      "Differentiate between scalar and vector quantities and apply scalar and vector products",
      "Explain gravitational fields, and gravitational potential, and apply Newton's law of gravitation",
      "Describe satellite orbits and apply Kepler's laws of planetary motion",
      "Analyze static equilibrium and calculate stress, strain, and Young's modulus",
      "Understand the principles of simple harmonic motion and the characteristics of progressive and sound waves",
    ],
    pricingPlan: "Book A Free Demo",
  },
];

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLab, setSelectedLab] = useState(labContent[0]);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleLabClick = (lab) => {
    setSelectedLab(lab);
  };

  return (
    <nav className="relative py-6 mb-2 bg-transparent">
      <div className="container px-4 mx-auto">
        <div className="flex items-center">
          <a className="inline-block text-lg font-bold" href="/">
            <img
              src="saturn-assets/logos/logo.webp"
              alt
              width="auto"
              height="10px"
              className="w-auto h-[30px]"
            />
          </a>
          <div className="lg:hidden ml-auto">
            <button className="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex ml-14 lg:w-auto lg:space-x-12">
            <li className="group relative">
              <a
                className="inline-block text-sm text-gray-900 hover:text-[#1980E7] font-medium"
                href="/"
              >
                Home
              </a>
            </li>
            <li
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className="inline-block text-sm text-gray-900 hover:text-[#1980E7] font-medium"
                href="#"
              >
                &nbsp;Virtual STEM Lab
              </a>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-[650px] bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4 flex">
                  <div className="w-1/4 space-y-5">
                    {labContent.map((lab, index) => (
                      <button
                        key={index}
                        onClick={() => handleLabClick(lab)}
                        className={`block w-full bg-[#1980E7] rounded-md text-left px-4 py-2 text-sm font-medium ${
                          selectedLab.title === lab.title
                            ? "text-[#1980E7] bg-white border-[#1980E7] border"
                            : "text-white"
                        } hover:text-[#1980E7] hover:bg-white hover:border-[#1980E7] hover:border`}
                      >
                        {lab.title}
                      </button>
                    ))}
                  </div>
                  <div className="w-3/4 pl-4">
                    <h3 className="text-lg font-semibold text-[#1980E7] mb-2">
                      {selectedLab.title}
                    </h3>
                    <p className="text-sm mb-2">{selectedLab.description}</p>
                    <h4 className="font-medium text-sm">Learning Objectives</h4>
                    <ul className="list-disc pl-5 mb-2">
                      {selectedLab.objectives.map((objective, index) => (
                        <li key={index} className="text-sm">
                          {objective}
                        </li>
                      ))}
                    </ul>
                    {/* <p className="text-sm font-medium">Pricing Plan</p> */}
                    <a
                      className="inline-block text-sm text-[#1980E7] hover:text-gray-900"
                      href="/request-demo"
                    >
                      {selectedLab.pricingPlan}
                    </a>
                  </div>
                </div>
              )}
            </li>
            <li>
              <a
                className="inline-block text-sm text-gray-900 hover:text-[#1980E7] font-medium"
                href="/#features"
              >
                &nbsp;Features
              </a>
            </li>
            <li>
              <a
                className="inline-block text-sm text-gray-900 hover:text-[#1980E7] font-medium"
                href="/#pricing"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="inline-block text-sm text-gray-900 hover:text-[#1980E7] font-medium"
                href="#"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="inline-block text-sm text-gray-900 hover:text-[#1980E7] font-medium"
                href="/#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="hidden lg:block ml-auto">
            <div className="flex items-center">
              <a
                className="relative group inline-block py-3 px-4 text-sm font-semibold text-[#1980E7] hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300"
                href="#"
              >
                <div className="absolute top-0 right-full w-full h-full bg-[#1980E7] transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                <span className="relative">Sign Up</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
