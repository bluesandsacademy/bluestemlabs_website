import React, { useState } from "react";

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What is Blue Sands Virtual STEM Labs?",
        answer:
          "Blue Sands Virtual STEM Labs is an online platform that provides interactive, engaging, and educational STEM experiences for students of all ages using VR Headset.",
      },
      {
        question: "How does Blue Sands Virtual STEM Labs work?",
        answer:
          "Users can access a variety of virtual labs through a web browser. These labs simulate real-world experiments, allowing students to explore scientific concepts hands-on.",
      },
      {
        question:
          "Is Blue Sands Virtual STEM Labs suitable for all age groups?",
        answer:
          "Yes, Blue Sands Virtual STEM Labs offers a range of labs suitable for different age levels, from elementary to high school.",
      },
      {
        question:
          "Do I need any special equipment to use Blue Sands Virtual STEM Labs?",
        answer:
          "No, all you need is a computer or tablet with an internet connection to access and use Blue Sands Virtual STEM Labs.",
      },
    ],
  },
  {
    category: "Content and Curriculum",
    questions: [
      {
        question:
          "What STEM subjects are covered in Blue Sands Virtual STEM Labs?",
        answer:
          "Our platform covers a wide range of STEM subjects including biology, chemistry, physics, and engineering.",
      },
      {
        question: "Are the virtual labs aligned with educational standards?",
        answer:
          "Yes, our labs are designed to align with national and state education standards.",
      },
      {
        question:
          "Can teachers use Blue Sands Virtual STEM Labs for classroom instruction?",
        answer:
          "Absolutely! Teachers can incorporate our labs into their lesson plans to enhance student learning and engagement.",
      },
    ],
  },
  {
    category: "Technical Questions",
    questions: [
      {
        question: "Is there a cost to use Blue Sands Virtual STEM Labs?",
        answer:
          "There are both free and paid subscription options available to suit different needs.",
      },
      {
        question: "What happens if I encounter technical difficulties?",
        answer:
          "We offer comprehensive technical support to assist users with any issues they may experience.",
      },
      {
        question:
          "Can I access Blue Sands Virtual STEM Labs on mobile devices?",
        answer:
          "Yes, our platform is optimized for both desktop and mobile devices.",
      },
    ],
  },
  {
    category: "Parent and Student Concerns",
    questions: [
      {
        question: "Is Blue Sands Virtual STEM Labs safe for children to use?",
        answer:
          "Yes, we prioritize child safety and have implemented robust security measures to protect user data.",
      },
      {
        question: "How can parents monitor their child's progress?",
        answer:
          "We provide tools for parents to track their child's activities and achievements within the platform.",
      },
      {
        question: "Can students collaborate with others on virtual labs?",
        answer:
          "Yes, many of our labs support collaborative learning, allowing students to work together on experiments.",
      },
    ],
  },
  {
    category: "Additional Features",
    questions: [
      {
        question: "Does Blue Sands Virtual STEM Labs offer assessments?",
        answer:
          "Yes, we provide assessment tools to help students and teachers measure learning outcomes.",
      },
      {
        question:
          "Are there opportunities for students to share their findings?",
        answer:
          "We encourage students to share their discoveries through projects, presentations, or online portfolios.",
      },
    ],
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">FAQ</h1>
        <p className="text-lg mt-6">
          Find answers to frequently asked questions.
        </p>
      </div>
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
          {section.questions.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(`${sectionIndex}-${index}`)}
                className="w-full text-left bg-blue-500 text-white p-4 rounded-md focus:outline-none focus:ring"
              >
                {item.question}
              </button>
              <div
                className={`mt-2 transition-max-height duration-300 ease-in-out overflow-hidden ${
                  openIndex === `${sectionIndex}-${index}`
                    ? "max-h-screen"
                    : "max-h-0"
                }`}
              >
                <p className="p-4 bg-gray-100 rounded-md">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
