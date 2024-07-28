import React from "react";
import { socialMedia } from "../../data";

export default function IndexSectionFooters7() {
  return (
    <React.Fragment>
      <>
        <section className="relative pt-20 pb-8 overflow-hidden">
          <img
            className="absolute top-0 left-0 min-w-max xs:min-w-0 w-112 xs:w-full h-full"
            src="saturn-assets/images/footers/background-dark.png"
            alt
          />
          <div className="relative container px-4 mx-auto">
            <div className="max-w-3xl mb-24 sm:mb-52 pr-8 sm:pr-0">
              <h1 className="font-heading text-4xl xs:text-5xl md:text-6xl font-semibold text-white mb-20 removed">
                <span>Connect with us</span>
              </h1>
              <div className="flex items-start justify-center">
                <div className="flex flex-col gap-y-3 items-start justify-start">
                  <div className="">
                    <p className="text-[#1980E7] text-xl font-bold">EDO STATE</p>
                    <span className="block text-orange-50">
                      No 7 Omokhale Street, Off Federal Government Girls College
                      Road. UBTH Back Gate, Benin City.
                    </span>
                  </div>
                  <div className="">
                    <p className="text-[#1980E7] text-xl font-bold">LAGOS STATE</p>
                    <span className="block text-orange-50">
                      House 10 Subuola Abu Street, ​Greenland Estate, Lagos
                      State.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-y-3 justify-start">
                  <div className="">
                    <p className="text-[#1980E7] text-xl font-bold">EMAIL</p>
                    <span className="block text-orange-50">
                      <a href="mailto:info@bluesandstemlabs.com">
                        info@bluesandstemlabs.com
                      </a>
                    </span>
                  </div>
                  <div className="">
                    <p className="text-[#1980E7] text-xl font-bold">PHONE NUMBER</p>
                    <span className="block text-orange-50">
                      <a href="tel:+234-905-493-0215">+234-905-493-0215</a>
                    </span>
                    <span className="block text-orange-50">
                      <a href="tel:+234-703-419-4669">+234-703-419-4669</a>
                    </span>
                  </div>
                  <div className="">
                    <p className="text-[#1980E7] text-xl font-bold uppercase">Follow Us</p>
                    <span className="inline-flex items-center justify-center text-orange-50">
                      {socialMedia.map((media, index) => {
                        return (
                          <a href={media.link} key={index}>
                            <media.icon />
                          </a>
                        );
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10 border-t-2 border-gray-400 border-opacity-50">
              <div className="sm:flex items-center justify-between">
                <span className="inline-block mb-4 sm:mb-0 text-gray-50">
                  2024© All rights reserved
                </span>
                <div className="sm:flex mb-6 sm:mb-0 items-center">
                  <a
                    className="inline-block mr-6 sm:mr-12 text-gray-200 hover:text-gray-100"
                    href="#"
                  >
                    Terms &amp; Conditions
                  </a>
                  <a
                    className="inline-block text-gray-200 hover:text-gray-100"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
