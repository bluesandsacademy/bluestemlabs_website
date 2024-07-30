import React from "react";

const VRSolution = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-4">
      {/* Hero Section */}
      <section className="bg-[url('/saturn-assets/images/lab/lab_class_2.jpg')] h-[350px] text-white text-center relative flex flex-col items-center justify-center py-16 px-4 rounded-lg shadow-lg">
        <div className="bg-[#1980E7] bg-opacity-40 absolute inset-0 rounded-lg"></div>
        <h1 className="text-4xl font-bold mb-4 z-10 drop-shadow-2xl">
          Looking for a VR Solution?
        </h1>
        <p className="text-xl max-w-3xl mx-auto z-10 drop-shadow-2xl">
          Discover how our Blue Sands STEM Lab can transform education with
          virtual reality. Request a free demo today!
        </p>
      </section>

      {/* Steps for Requesting a Demo */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex justify-start items-start">
            <div className="w-12 h-12 text-lg p-5 font-bold bg-[#1980E7] text-white flex items-center justify-center rounded-full mr-4">
              1
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#1980E7] mb-2">
                Request a Free Demo
              </h2>
              <p>
                Request a free demo with us, and we'll take care of everything.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
            <div className="w-12 h-12 p-5 font-bold text-lg bg-[#1980E7] text-white flex items-center justify-center rounded-full mr-4">
              2
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#1980E7] mb-2">
                Expert Contact
              </h2>
              <p>
                Our Blue Sands STEM Lab experts will contact you and demonstrate
                how virtual simulations can benefit your child, students, and
                institution.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
            <div className="w-12 h-12 p-5 font-bold text-lg bg-[#1980E7] text-white flex items-center justify-center rounded-full mr-4">
              3
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#1980E7] mb-2">
                Create Institutional Accounts
              </h2>
              <p>We'll create institutional accounts for you to try out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Free Demo Button */}
      <section className="text-center py-8">
        <a
          href="/request-demo"
          className="bg-[#1980E7] text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
        >
          Book a Free Demo
        </a>
      </section>
    </div>
  );
};

export default VRSolution;
