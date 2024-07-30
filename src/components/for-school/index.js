import React from "react";

const features = [
  {
    title: "3D Virtual Experiments & Immersive Interaction",
    description:
      "Looking to achieve your learning outcomes? With Blue Sands STEM Lab, you get that and much more! Offer your students interactive 3D virtual science experiments and realistic lab simulations that enhance time management, lab skills, and knowledge while covering any STEM curriculum.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="32"
        viewBox="0 0 640 512"
      >
        <path
          fill="currentColor"
          d="M576 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h120.4c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4H576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64M96 240a64 64 0 1 1 128 0a64 64 0 1 1-128 0m384-64a64 64 0 1 1 0 128a64 64 0 1 1 0-128"
        />
      </svg>
    ),
  },
  {
    title: "Awesome Game-Like Experience",
    description:
      "Engage students with game-like online experiment simulations in science without limits. With features like an engaging lab partner named Oxi, helpful hints, and the ability to skip ahead (with progress recorded in reports), you can make science learning intuitive and personalized.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M8.5 11v3M7 12.5h3"
          />
          <path
            stroke="currentColor"
            stroke-width="1.5"
            d="m21.92 17.377l-1.085-4.517c-.613-2.553-.92-3.83-1.79-4.666c-.22-.212-.463-.4-.725-.56C17.284 7 15.937 7 13.243 7h-2.486c-2.694 0-4.041 0-5.077.634c-.262.16-.505.348-.725.56c-.87.837-1.177 2.113-1.79 4.666L2.08 17.377c-.381 1.587.633 3.175 2.264 3.546c1.376.312 2.791-.342 3.413-1.576l.128-.255c.57-1.133 1.754-1.852 3.051-1.852h2.128c1.297 0 2.48.719 3.051 1.852l.128.255c.622 1.234 2.037 1.888 3.413 1.575c1.631-.37 2.645-1.958 2.264-3.545Z"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M12 7V6a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V3"
          />
          <path
            fill="currentColor"
            d="M16 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Virtual Experiments, Adaptive to Any Learning Style",
    description:
      "Whether your future scientists are visual, auditory, or kinesthetic learners, Blue Sands STEM Lab adapts to all styles with progress tracking, walkthrough videos, lab manuals, enrichment documents, immediate feedback, multiple-choice quizzes, and more.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 14v8H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m2.595 5.811a3.5 3.5 0 0 1 0-1.622l-.992-.573l1-1.732l.992.573A3.5 3.5 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573l1 1.732l-.991.573a3.5 3.5 0 0 1 0 1.622l.991.573l-1 1.732l-.992-.573a3.5 3.5 0 0 1-1.405.812V22.5h-2v-1.145a3.5 3.5 0 0 1-1.405-.812l-.992.573l-1-1.732zM18 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
        />
      </svg>
    ),
  },
  {
    title: "Fast, Easy, & Accurate Reports to Grow",
    description:
      "Gain insights into student progress anytime with comprehensive analytics reports, enabling data-driven teaching decisions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m2 19.99l7.5-7.51l4 4l7.09-7.97L22 9.92l-8.5 9.56l-4-4l-6 6.01zm1.5-4.5l6-6.01l4 4L22 3.92l-1.41-1.41l-7.09 7.97l-4-4L2 13.99z"
        />
      </svg>
    ),
  },
  {
    title: "Science Experiments Simulations Lab & Blue Sands LMS Integration",
    description:
      "Integrate your LMS with our virtual science lab smoothly and for free within 24 hours. This seamless integration saves effort, time, and money for your finance and IT teams.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M9.5 21v-3L6 14.5V9q0-.825.588-1.412T8 7h1L8 8V3h2v4h4V3h2v5l-1-1h1q.825 0 1.413.588T18 9v5.5L14.5 18v3z"
        />
      </svg>
    ),
  },
  {
    title: "Bilingual Simulation Lab",
    description:
      "For higher education digital science lab experiments in English or Arabic, Blue Sands STEM Lab has you covered. We ensure you are set up and ready to go in no time!",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M15.5 23q-2.6 0-4.587-1.55T8.275 17.5q1.125.05 2.225-.225t2.1-.775h4.1q.025-.275.038-.537t.012-.538q0-.225-.012-.462T16.7 14.5h-1.475q.4-.45.738-.95t.612-1.05H20.1q-.5-.75-1.2-1.312t-1.575-.863q.125-.5.163-1.025t.012-1.025q2.4.65 3.95 2.638T23 15.5q0 3.125-2.187 5.313T15.5 23m-2.375-2.55q-.175-.5-.312-.975t-.238-.975H10.9q.425.625.987 1.125t1.238.825m2.375.35q.3-.55.513-1.125t.362-1.175h-1.75q.15.6.375 1.175t.5 1.125m2.375-.35q.675-.325 1.238-.825T20.1 18.5h-1.675q-.125.5-.25.975t-.3.975m.825-3.95h2.2q.05-.25.075-.488T21 15.5t-.025-.513t-.075-.487h-2.2q.025.225.038.463t.012.462q0 .275-.012.538t-.038.537M8.5 16q-3.125 0-5.313-2.187T1 8.5t2.188-5.312T8.5 1t5.313 2.188T16 8.5t-2.187 5.313T8.5 16M6 8q.425 0 .713-.288T7 7t-.288-.712T6 6t-.712.288T5 7t.288.713T6 8m2.5 4.4q1.2 0 2.138-.675T12 10H5q.425 1.05 1.363 1.725T8.5 12.4M11 8q.425 0 .713-.288T12 7t-.288-.712T11 6t-.712.288T10 7t.288.713T11 8"
        />
      </svg>
    ),
  },
  {
    title: "Virtual Reality Headsets",
    description:
      "Blue Sands STEM Lab offers a fully integrated, classroom-ready VR headset with no additional hardware required to get started.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 23v-2h7v-1h-4v-8h4v-1q0-2.9-2.05-4.95T12 4T7.05 6.05T5 11v1h4v8H5q-.825 0-1.412-.587T3 18v-7q0-1.85.713-3.488T5.65 4.65t2.863-1.937T12 2t3.488.713T18.35 4.65t1.938 2.863T21 11v10q0 .825-.587 1.413T19 23z"
        />
      </svg>
    ),
  },
  {
    title: "Headset Management",
    description:
      "Our portal gives teachers the control to easily send content, direct, and monitor student attention, maximizing learning time.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 36 36"
      >
        <path
          fill="currentColor"
          d="M29.29 34H6.71A1.7 1.7 0 0 1 5 32.31V6.69A1.75 1.75 0 0 1 7 5h2v2H7v25h22V7h-2V5h2.25A1.7 1.7 0 0 1 31 6.69v25.62A1.7 1.7 0 0 1 29.29 34"
          class="clr-i-outline clr-i-outline-path-1"
        />
        <path
          fill="currentColor"
          d="M16.66 25.76L11.3 20.4a1 1 0 0 1 1.42-1.4l3.94 3.94l8.64-8.64a1 1 0 0 1 1.41 1.41Z"
          class="clr-i-outline clr-i-outline-path-2"
        />
        <path
          fill="currentColor"
          d="M26 11H10V7.33A2.34 2.34 0 0 1 12.33 5h1.79a4 4 0 0 1 7.75 0h1.79A2.34 2.34 0 0 1 26 7.33ZM12 9h12V7.33a.33.33 0 0 0-.33-.33H20V6a2 2 0 0 0-4 0v1h-3.67a.33.33 0 0 0-.33.33Z"
          class="clr-i-outline clr-i-outline-path-3"
        />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
    ),
  },
  {
    title: "Curriculum Aligned Content",
    description:
      "Blue Sands STEM Lab provides thousands of virtual and augmented reality educational resources to enhance your lessons, regardless of the subject.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H20v15q-.625 0-1.062.438T18.5 18.5t.438 1.063T20 20v2zm.5-7h2V4H8zm-.5 5h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"
        />
      </svg>
    ),
  },
  {
    title: "Secure Storage & Charging",
    description:
      "All headsets come with a rugged storage and charging case to ensure your devices are always ready when you are.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"
        />
      </svg>
    ),
  },
  {
    title: "Set up & Training",
    description:
      "Our technicians set up and configure the headsets for you, and our educational team teaches you how to use them.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m17.875 21.225l-6.9-6.9q-.575.225-1.187.35t-1.263.125q-2.725 0-4.612-1.888T2.025 8.3q0-1.05.313-2.025t.912-1.8L7.075 8.3L8.5 6.9L4.675 3.05q.85-.625 1.825-.937t2-.313q2.725 0 4.612 1.888T15 8.3q0 .65-.125 1.288T14.5 10.8l6.875 6.875q.575.575.588 1.413T21.4 20.5l-.675.7q-.575.6-1.413.613t-1.437-.588Z"
        />
      </svg>
    ),
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
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-700 cursor-pointer text-center flex items-center flex-col justify-start"
            >
              {feature.icon ? feature.icon : ""}
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
