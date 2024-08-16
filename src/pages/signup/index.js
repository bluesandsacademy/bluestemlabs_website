import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../../components/navbar";
import axios from "axios";
import { countries, howYouHeardAboutUsList } from "../../data";
import { toast } from "react-toastify";
import { Puff } from "react-loader-spinner";

const userTypes = ["Parent", "School"];
const workPosition = [
  "Professor/Instructor",
  "Head/Chair of Department",
  "Dean/Director",
  "Faculty Administrator",
  "Education Curriculum Developer",
  "Laboratory Instructor/ Cordinator",
  "Online Instructor/ Coordinator",
  "Others",
];

const faculties = [
  "Faculty of Medicine",
  "Faculty of Pharmacy",
  "Faculty of Engineering",
  "Faculty of Science",
  "Faculty of Agriculture",
  "Faculty of Education",
  "Faculty of Nursing",
  "Faculty of Veterinary Medicine",
  "Faculty of Physical Therapy",
  "Others",
];

export default function SignUp() {
  const [viewPassword, setViewPassword] = useState(false);
  const [selectedAccountType, setSelectedAccountType] = useState(userTypes[0]);
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
    position: "",
    institutionCompanyName: "",
    faculty: "",
    country: "",
    howCanCompanyHelpYou: "",
    howDidYouHearAboutUs: "",
    userRole: userTypes[0],
  });
  const [loading, setLoading] = useState(false);

  function handlePasswordView() {
    setViewPassword(!viewPassword);
  }

  function handleUserTypeSwitch(index) {
    setSelectedAccountType(userTypes[index]);
    setFormData((formData) => ({ ...formData, userRole: userTypes[index] }));
  }

  function handleSelect(e) {
    const { value, id } = e.target;
    setFormData((formData) => ({ ...formData, [id]: value }));
  }

  function handleChange(e) {
    const { value, id } = e.target;
    setFormData((formData) => ({ ...formData, [id]: value }));
  }

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    try {
      await axios.post(
        "https://email-delivery-api.onrender.com/auth/signup",
        formData
      );
      toast("Sign Up Successful");
      window.location.href = "/signup/successful";
    } catch (error) {
      console.error(error);
      if (error && !error.response) {
        toast("Sign Up Failed... Please Try Again Later");
        return;
      }

      if (error && error.response) {
        toast(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  }

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
        <Navbar />
        <section className="relative">
          <div className="container px-4 mx-auto">
            <div className="max-w-7xl mx-auto">
              <div className="flex sm:flex-row flex-col-reverse -mx-4 items-center justify-center min-h-screen">
                <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h3 className="font-heading text-4xl text-gray-900 font-semibold mb-4">
                      Create an Account
                    </h3>
                    <p className="text-lg text-gray-500 mb-10">
                      Greetings! We kindly request you to enter your details.
                    </p>
                    <div className="flex items-center justify-center gap-x-5">
                      {userTypes.map((user, index) => {
                        return (
                          <button
                            key={index}
                            className={`text-3xl font-bold ${
                              selectedAccountType === user
                                ? "border-b-4 border-[#1980E7]"
                                : ""
                            }`}
                            onClick={() => handleUserTypeSwitch(index)}
                          >
                            {user}
                          </button>
                        );
                      })}
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-6">
                        <label
                          className="block mb-1.5 text-sm text-gray-900 font-semibold"
                          htmlFor="fullName"
                        >
                          Full Name
                        </label>
                        <input
                          className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                          id="fullName"
                          type="text"
                          placeholder="John Doe"
                          onChange={handleChange}
                          value={formData.fullName}
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          className="block mb-1.5 text-sm text-gray-900 font-semibold"
                          htmlFor="emailAddress"
                        >
                          Email Address
                        </label>
                        <input
                          className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                          id="emailAddress"
                          type="email"
                          placeholder="johndoe@bluesandstemlabs.com"
                          onChange={handleChange}
                          value={formData.emailAddress}
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          className="block mb-1.5 text-sm text-gray-900 font-semibold"
                          htmlFor="phoneNumber"
                        >
                          Phone Number
                        </label>
                        <input
                          className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                          id="phoneNumber"
                          type="tel"
                          placeholder="080 1234 5678"
                          onChange={handleChange}
                          value={formData.phoneNumber}
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          className="block mb-1.5 text-sm text-gray-900 font-semibold"
                          htmlFor="country"
                        >
                          Country
                        </label>
                        <select
                          className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                          name=""
                          id="country"
                          onChange={handleSelect}
                          required
                        >
                          <option value="">
                            {"<--"} Select {"-->"}
                          </option>
                          {countries.map((country, index) => {
                            return (
                              <option key={index} value={country}>
                                {country}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      {selectedAccountType === "School" && (
                        <>
                          <div className="mb-6">
                            <label
                              className="block mb-1.5 text-sm text-gray-900 font-semibold"
                              htmlFor="position"
                            >
                              Position
                            </label>
                            <select
                              className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                              name=""
                              id="position"
                              onChange={handleSelect}
                              required
                            >
                              <option value="">
                                {"<--"} Select {"-->"}
                              </option>
                              {workPosition.map((position, index) => {
                                return (
                                  <option key={index} value={position}>
                                    {position}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="mb-6">
                            <label
                              className="block mb-1.5 text-sm text-gray-900 font-semibold"
                              htmlFor="institutionCompanyName"
                            >
                              Name of Institution
                            </label>
                            <input
                              className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                              id="institutionCompanyName"
                              type="tel"
                              placeholder="Name of Institution"
                              onChange={handleChange}
                              value={formData.institutionCompanyName}
                              required
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              className="block mb-1.5 text-sm text-gray-900 font-semibold"
                              htmlFor="faculty"
                            >
                              Faculty
                            </label>
                            <select
                              className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                              name=""
                              id="faculty"
                              onChange={handleSelect}
                              required
                            >
                              <option value="">
                                {"<--"} Select {"-->"}
                              </option>
                              {faculties.map((faculty, index) => {
                                return (
                                  <option key={index} value={faculty}>
                                    {faculty}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="mb-6">
                            <label
                              className="block mb-1.5 text-sm text-gray-900 font-semibold"
                              htmlFor="howCanCompanyHelpYou"
                            >
                              How Can We Help You?
                            </label>
                            <input
                              className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                              id="howCanCompanyHelpYou"
                              type="text"
                              placeholder="How Can We Help You?"
                              onChange={handleChange}
                              value={formData.howCanCompanyHelpYou}
                              required
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              className="block mb-1.5 text-sm text-gray-900 font-semibold"
                              htmlFor="howDidYouHearAboutUs"
                            >
                              How did you hear about us?
                            </label>
                            <select
                              className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                              name=""
                              id="howDidYouHearAboutUs"
                              required
                              onChange={handleSelect}
                            >
                              <option value="">
                                {"<--"} Select {"-->"}
                              </option>
                              {howYouHeardAboutUsList.map((option, index) => {
                                return (
                                  <option key={index} value={option}>
                                    {option}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </>
                      )}
                      <div className="mb-7">
                        <div className="flex mb-1.5 items-center justify-between">
                          <label
                            className="block text-sm text-gray-900 font-semibold"
                            htmlFor="password"
                          >
                            Password
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                            type={viewPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            id="password"
                            onChange={handleChange}
                            min={8}
                            required
                            value={formData.password}
                          />
                          <button
                            className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100"
                            type="button"
                            onClick={handlePasswordView}
                          >
                            {viewPassword ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  fill-rule="evenodd"
                                  d="M1 12c2.028-4.152 6.192-7 11-7s8.972 2.848 11 7c-2.028 4.152-6.192 7-11 7s-8.972-2.848-11-7m11 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  fill-rule="evenodd"
                                  d="m18.922 16.8l3.17 3.17l-1.06 1.061L4.06 4.061L5.12 3l2.74 2.738A11.9 11.9 0 0 1 12 5c4.808 0 8.972 2.848 11 7a12.66 12.66 0 0 1-4.078 4.8m-8.098-8.097l4.473 4.473a3.5 3.5 0 0 0-4.474-4.474zm5.317 9.56A11.9 11.9 0 0 1 12 19c-4.808 0-8.972-2.848-11-7a12.66 12.66 0 0 1 4.078-4.8l3.625 3.624a3.5 3.5 0 0 0 4.474 4.474l2.964 2.964z"
                                />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="mb-6">
                        <span>
                          By signing up, you agree to our{" "}
                          <a
                            href="/terms"
                            className="text-[#1980E7] font-semibold"
                          >
                            terms and conditions.
                          </a>{" "}
                        </span>
                      </div>
                      <button
                        className="relative group w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-[#1980E7] inline-flex justify-center items-center rounded-full overflow-hidden"
                        type="submit"
                      >
                        <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                        <span className="relative">
                          {loading ? (
                            <Puff color="#fff" width={30} height={30} />
                          ) : (
                            "Sign Up"
                          )}
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4 ">
                  <div className="flex flex-col item-center justify-start">
                    <img
                      src="/saturn-assets/logos/logo.webp"
                      className="w-[400px] h-auto"
                      alt=""
                    />
                    <div className="sm:block hidden">
                      <p className="text-black font-semibold text-3xl mb-6">
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
