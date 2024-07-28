import React from "react";
import Navbar from "../navbar";
import { motion } from "framer-motion";

export default function IndexSectionHeaders6() {
  return (
    <React.Fragment>
      <>
        <section className="relative pb-20 overflow-hidden bs-section-dragged">
          <motion.img
            className="absolute top-40 -left-32 rotate-45"
            src="/saturn-assets/images/landing/headset.png"
            alt="Head Set"
            initial={{ y: -500, rotate: 45 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1.4 }}
          />
          <motion.img
            className="absolute top-28 right-10 w-auto h-[450px]"
            src="/saturn-assets/images/landing/microscope.svg"
            alt="Microscope"
            initial={{ y: -500, rotate: -45 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1.4 }}
          />
          <Navbar />
          <div className="relative container px-4 mx-auto">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-heading text-5xl xs:text-6xl md:text-8xl xl:text-10xl font-bold text-[#1980E7] drop-shadow-2xl shadow-[#1980E7] mb-8 sm:mb-14 removed">
                  <span className="drop-shadow-2xl">
                    Spark your child's curiosity with our Inclusive VR + AR
                    Platform! &nbsp;
                  </span>
                </h1>
                <p className="text-gray-900 text-3xl font-semibold mb-5">
                  Virtual Science Labs, Engaging STEM Courses. Accessible
                  Anywhere, Anytime!
                </p>
              </div>
              <div className="container w-full flex items-center justify-center mb-15 gap-x-5">
                <a
                  className="relative group inline-block py-4 px-6 text-white font-semibold rounded-md bg-[#1980E7] overflow-hidden"
                  href="#"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                  <span className="relative">Get Pricing</span>
                </a>
                <a
                  className="flex flex-row py-4 w-fit px-6 justify-center font-semibold rounded-md overflow-hidden items-center text-[#1980E7]"
                  href="/request-demo"
                >
                  <span className="relative">Request a Demo </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
            <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-16">
                <a
                  className="mr-auto text-2xl font-medium leading-none"
                  href="#"
                >
                  <img
                    className="h-10"
                    src="saturn-assets/logos/logo-saturn-dark.svg"
                    alt
                    width="auto"
                  />
                </a>
                <button className="navbar-close">
                  <svg
                    className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <ul className="mb-2">
                  <li>
                    <a
                      className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                      href="#"
                    >
                      Featured
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                      href="#"
                    >
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                      href="#"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                      href="#"
                    >
                      Articles
                    </a>
                  </li>
                </ul>
                <div className="py-8 px-6 mb-6 border-t border-b border-gray-200">
                  <a
                    className="flex items-center text-sm font-semibold text-[#1980E7] hover:text-orange-600"
                    href="#"
                  >
                    <svg
                      width={18}
                      height={16}
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3337 6.05833C17.2811 5.9059 17.1854 5.77202 17.0582 5.67292C16.931 5.57381 16.7777 5.51374 16.617 5.5L11.8754 4.80833L9.75038 0.499999C9.68215 0.359106 9.5756 0.240284 9.44296 0.157143C9.31031 0.074003 9.15693 0.0299072 9.00039 0.0299072C8.84384 0.0299072 8.69046 0.074003 8.55781 0.157143C8.42517 0.240284 8.31862 0.359106 8.25039 0.499999L6.12539 4.8L1.38372 5.5C1.22949 5.52192 1.08449 5.58663 0.96518 5.6868C0.845868 5.78696 0.757021 5.91856 0.708721 6.06666C0.664509 6.21139 0.660541 6.36543 0.697245 6.51224C0.733948 6.65905 0.809936 6.7931 0.917055 6.9L4.35872 10.2333L3.52539 14.9667C3.49564 15.1229 3.51121 15.2844 3.57028 15.432C3.62935 15.5797 3.72943 15.7074 3.85872 15.8C3.98474 15.8901 4.13337 15.9443 4.29055 15.9552C4.44774 15.9661 4.60401 15.9332 4.74122 15.8604L9.00038 13.6333L13.2587 15.8604C13.3948 15.9345 13.5544 15.9673 13.7105 15.9547C13.8667 15.9422 14.0142 15.8849 14.1367 15.79C14.266 15.6964 14.366 15.5701 14.4248 15.4232C14.4836 15.2764 14.4989 15.1155 14.4687 14.9583L13.6354 10.225L17.077 6.89167C17.1883 6.78443 17.2713 6.64687 17.3156 6.49368C17.3599 6.34049 17.3638 6.17649 17.3267 6.01898L17.3337 6.05833Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="ml-3">Get Pro Access</span>
                  </a>
                </div>
                <p className="pl-10 text-sm text-gray-500">
                  Start your free trial today. Upgrade at any time.
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-sm text-gray-500">
                  <span>© 2021 All rights reserved.</span>
                </p>
              </div>
            </nav>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
