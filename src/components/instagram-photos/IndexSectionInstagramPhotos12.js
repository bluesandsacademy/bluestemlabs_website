import React from "react";

export default function IndexSectionInstagramPhotos12() {
  return (
    <React.Fragment>
      <>
        <section className="relative py-20 md:py-32 overflow-hidden">
          <img
            className="absolute top-0 left-0 mt-4 -ml-20 md:-ml-0"
            src="saturn-assets/images/content/stars-left-top.svg"
            alt
          />
          <div className="relative container px-4 mx-auto">
            <div className="text-center mb-18">
              <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                GROWTH
              </span>
              <h1 className="font-heading text-4xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-4">
                <span>Partner &amp;</span>
                <span className="font-serif italic">Awards</span>
              </h1>
              <p className="text-gray-500">
                Recognized Excellence and Trusted Collaborations.
              </p>
            </div>
            <div className="relative max-w-sm sm:max-w-7xl mx-auto">
              <button className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white rounded-full border border-gray-200 hover:border-orange-900 transition duration-200">
                <img
                  src="saturn-assets/images/instagram-photos/left-arrow.svg"
                  alt
                />
              </button>
              <button className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white rounded-full border border-gray-200 hover:border-orange-900 transition duration-200">
                <img
                  src="saturn-assets/images/instagram-photos/right-arrow.svg"
                  alt
                />
              </button>
              <div className="px-6">
                <div className="flex -mx-4">
                  <div className="w-full md:w-1/3 lg:w-1/4 px-4">
                    <a
                      className="group block max-w-sm mx-auto md:max-w-none h-full"
                      href="#"
                    >
                      <div className="relative w-full h-72 mb-3">
                        <div className="hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-40">
                          <img
                            src="saturn-assets/images/instagram-photos/icon-insta-white.svg"
                            alt
                          />
                        </div>
                        <img
                          className="block w-full h-full"
                          src="saturn-assets/images/instagram-photos/photos-insta-color3.png"
                          alt
                        />
                      </div>
                      <span className="text-sm text-black">@saturn_ui</span>
                    </a>
                  </div>
                  <div className="hidden sm:block w-full md:w-1/3 lg:w-1/4 px-4">
                    <a
                      className="group block max-w-sm mx-auto md:max-w-none h-full"
                      href="#"
                    >
                      <div className="relative w-full h-72 mb-3">
                        <div className="hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-40">
                          <img
                            src="saturn-assets/images/instagram-photos/icon-insta-white.svg"
                            alt
                          />
                        </div>
                        <img
                          className="block w-full h-full"
                          src="saturn-assets/images/instagram-photos/photos-insta-color4.png"
                          alt
                        />
                      </div>
                      <span className="text-sm text-black">@saturn_ui</span>
                    </a>
                  </div>
                  <div className="hidden md:block md:w-1/3 lg:w-1/4 px-4">
                    <a
                      className="group block max-w-sm mx-auto md:max-w-none h-full"
                      href="#"
                    >
                      <div className="relative w-full h-72 mb-3">
                        <div className="hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-40">
                          <img
                            src="saturn-assets/images/instagram-photos/icon-insta-white.svg"
                            alt
                          />
                        </div>
                        <img
                          className="block w-full h-full"
                          src="saturn-assets/images/instagram-photos/photos-insta-color1.png"
                          alt
                        />
                      </div>
                      <span className="text-sm text-black">@saturn_ui</span>
                    </a>
                  </div>
                  <div className="hidden lg:block lg:w-1/4 px-4">
                    <a
                      className="group block max-w-sm mx-auto md:max-w-none h-full"
                      href="#"
                    >
                      <div className="relative w-full h-72 mb-3">
                        <div className="hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-40">
                          <img
                            src="saturn-assets/images/instagram-photos/icon-insta-white.svg"
                            alt
                          />
                        </div>
                        <img
                          className="block w-full h-full"
                          src="saturn-assets/images/instagram-photos/photos-insta-color2.png"
                          alt
                        />
                      </div>
                      <span className="text-sm text-black">@saturn_ui</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
