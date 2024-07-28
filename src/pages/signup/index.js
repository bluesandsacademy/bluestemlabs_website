import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../../components/navbar";

export default function SignUp() {
  return (
    <React.Fragment>
      <HelmetProvider prioritizeSeoTags>
        <Helmet>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Transform STEM education with Blue Sands STEM Labs. Engage students with cutting-edge virtual reality technology and enhance learning outcomes."
          />
          <meta
            name="keywords"
            content="STEM education, virtual reality, VR, AR, interactive learning, immersive education, Blue Sands STEM Labs, student engagement, teacher resources, educational technology"
          />
          <meta name="author" content="Adefeyitimi Gbolahan Adeyeloja" />

          <meta
            property="og:title"
            content="Blue Sands STEM Labs - Transforming STEM Education with VR"
          />
          <meta
            property="og:description"
            content="Discover the power of immersive STEM learning with Blue Sands STEM Labs. Enhance teaching and engage students with our cutting-edge VR technology."
          />
          <meta property="og:image" content="URL_to_your_image_here" />
          <meta property="og:url" content="URL_of_your_page_here" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Blue Sands STEM Labs - Transforming STEM Education with VR"
          />
          <meta
            name="twitter:description"
            content="Discover the power of immersive STEM learning with Blue Sands STEM Labs. Enhance teaching and engage students with our cutting-edge VR technology."
          />
          <meta name="twitter:image" content="URL_to_your_image_here" />

          <title>
            Blue Sands STEM Labs - Transforming STEM Education with VR | Sign Up
          </title>
        </Helmet>
      </HelmetProvider>
      <>
        <section class="relative my-16">
          <div class="container px-4 mx-auto">
            <div class="max-w-7xl mx-auto">
              <div class="flex flex-wrap -mx-4 items-center justify-center">
                <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                  <div class="max-w-md mx-auto lg:mx-0">
                    <h3 class="font-heading text-4xl text-gray-900 font-semibold mb-4">
                      Create an Account
                    </h3>
                    <p class="text-lg text-gray-500 mb-10">
                      Greetings on your return! We kindly request you to enter
                      your details.
                    </p>
                    <form action="">
                      <div class="mb-6">
                        <label
                          class="block mb-1.5 text-sm text-gray-900 font-semibold"
                          for=""
                        >
                          Email
                        </label>
                        <input
                          class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                          type="email"
                          placeholder="pat@saturn.dev"
                        />
                      </div>
                      <div class="mb-7">
                        <div class="flex mb-1.5 items-center justify-between">
                          <label
                            class="block text-sm text-gray-900 font-semibold"
                            for=""
                          >
                            Password
                          </label>
                          <a
                            class="inline-block text-xs font-semibold text-[#1980E7] hover:text-gray-900"
                            href="#"
                          >
                            Forget password?
                          </a>
                        </div>
                        <div class="relative">
                          <input
                            class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                            type="password"
                            placeholder="Enter your password"
                          />
                          <button class="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                            <img
                              src="saturn-assets/images/sign-up/icon-eye.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div class="flex mb-6 items-center">
                        <input type="checkbox" value="" id="" />
                        <label class="ml-2 text-xs text-gray-800" for="">
                          Remember for 30 days
                        </label>
                      </div>
                      <button
                        class="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-[#1980E7] rounded-full overflow-hidden"
                        type="submit"
                      >
                        <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                        <span class="relative">Login</span>
                      </button>
                      <span class="text-xs font-semibold text-gray-900">
                        <span>Don’t have an account?</span>
                        <a
                          class="inline-block ml-1 text-[#1980E7] hover:text-orange-700"
                          href="#"
                        >
                          Sign up
                        </a>
                      </span>
                    </form>
                  </div>
                </div>
                <div class="w-full lg:w-1/2 px-4">
                  <div class="flex flex-col item-center justify-start ">
                    <img
                      src="/saturn-assets/logos/logo.webp"
                      className="w-[400px] h-auto"
                      alt=""
                    />
                    <div class="">
                      <p class="text-black font-semibold text-3xl mb-6">
                        Empowering Tomorrow's Innovators with Immersive STEM
                        Experiences
                      </p>
                    </div>
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
