import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    window.localStorage.setItem("bluesands_newsletter_viewed", 23232)

    const status = window.localStorage.getItem("bluesands_newsletter_viewed")

    console.info(typeof status)
  },[])




  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex justify-end w-full">
              <button
                onClick={toggleModal}
                className=" text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-[#1980E7]">
              Stay Ahead with Blue Sands STEM Labs!
            </h2>
            <p className="text-lg mb-4">
              Join Our Community and Get the Latest Updates!
            </p>
            <p className="mb-4">
              Be the first to know about our latest features, educational
              resources, and exclusive offers. Subscribe to our newsletter and
              stay informed on how Blue Sands STEM Labs can enhance your STEM
              teaching experience.
            </p>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1980E7] focus:border-[#1980E7] sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#1980E7] text-white font-semibold rounded-lg shadow-md hover:bg-[#1a6bc1] focus:outline-none inline-flex justify-center items-center"
              >
                {loading ? (
                  <Puff color="#fff" width={30} height={30} />
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterModal;
