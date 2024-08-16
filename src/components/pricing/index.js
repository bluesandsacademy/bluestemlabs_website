import React from "react";

const PricingSection = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-4" id="pricing">
      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#1980E7] mb-4">Pricing</h1>
          <p className="text-lg">
            Explore flexible pricing that fits your program budget.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Individual/School Free Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1980E7] mb-2">
              Individual/School
            </h2>
            <h3 className="text-xl font-bold text-[#1980E7] mb-4">FREE</h3>
            <p className="text-lg mb-4">
              Outstanding value, because we believe in enhancing science ed
              everywhere!
            </p>
            <p className="text-4xl font-bold mb-2">
              ₦0 <span className="text-xl">/month</span>
            </p>
            <p className="mb-4">
              1 Month <br />
              Full Access to 10 Simulations <br />
              No Credit Card Required
            </p>
            <h4 className="text-lg font-semibold mb-2">Includes:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>14-Day Money-Back Guarantee</li>
              <li>Unlimited repetitions of laboratory practicals</li>
              <li>Instant guidance</li>
              <li>Complementary content</li>
              <li>English interface</li>
              <li>Access to all updates</li>
            </ul>
          </div>

          {/* Semester Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#1980E7] mb-2">
              Semester
            </h2>
            <h3 className="text-xl font-bold text-[#1980E7] mb-4">
              Amazing for starting 3D virtual labs for your students fast, with
              all the features & access you need
            </h3>
            <p className="text-4xl font-bold mb-2">
              ₦35,000 <span className="text-xl">/month</span>
            </p>
            <p className="mb-4">
              4 Months Plan <br />
              Full Access to ALL Simulations <br />
              7-Day Money-Back Guarantee
            </p>
            <h4 className="text-lg font-semibold mb-2">Includes:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>7-Day Money-Back Guarantee</li>
              <li>Unlimited Laboratory Exercise</li>
              <li>Instant guidance</li>
              <li>Complementary content</li>
              <li>English interface</li>
              <li>Access to all updates</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
