import React, { useState } from "react";
import { countries } from "../../data";
import { Puff } from "react-loader-spinner";
import axios from "axios";
import { toast } from "react-toastify";

const ScheduleDemoForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    institutionType: "",
    position: "",
    country: "",
    course: "",
    emailOptIn: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    const baseUrl = `https://email-delivery-api.onrender.com/request-demo`;
    setLoading(true);
    e.preventDefault();

    try {
      toast("Successfully Processed Demo Request");

      axios.post(baseUrl, formData);

      setTimeout(() => {
        window.location.href = "/thankyou/success";
      }, 3000);
    } catch (error) {
      toast.error(
        "There was a problem scheduling your demo appointment, please try again later"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto p-4 bg-white rounded-lg shadow-2xl"
    >
      <h2 className="text-3xl font-bold mb-4 text-blue-950">Schedule a Demo</h2>
      <div className="flex items-center sm:flex-row flex-col gap-x-3 justify-between">
        <div className="w-full">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
      </div>
      <div className="flex items-center sm:flex-row flex-col gap-x-3 justify-between">
        <div className="w-full">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
      </div>
      <div className="flex items-center sm:flex-row flex-col justify-center gap-x-3">
        <div className="w-full">
          <label className="block text-gray-700">
            Institution/Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-gray-700">Type of Institution</label>
          <input
            type="text"
            name="institutionType"
            value={formData.institutionType}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
      </div>
      <div className="flex items-center sm:flex-row flex-col justify-center gap-x-3">
        <div className="w-full">
          <label className="block text-gray-700">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-gray-700">Select Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="">Select Country</option>
            {countries.map((country, index) => {
              return (
                <option value={country} key={index}>
                  {country}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex items-center justify-start gap-x-3  sm:flex-row flex-col">
        <div className="sm:w-[70%] w-full">
          <label className="block text-gray-700">Relevant Course Topic</label>
          <select
            value={formData.course}
            onChange={handleChange}
            id="course"
            name="course"
            class="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="">Relevant Course Topic</option>
            <option value="Anatomy &amp; Physiology">
              Anatomy &amp; Physiology
            </option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="Cellular and Molecular Biology">
              Cellular and Molecular Biology
            </option>
            <option value="General Biology">General Biology</option>
            <option value="General Chemistry">General Chemistry</option>
            <option value="Genetics">Genetics</option>
            <option value="Microbiology">Microbiology</option>
            <option value="Nursing">Nursing</option>
            <option value="Organic Chemistry">Organic Chemistry</option>
            <option value="Physics">Physics</option>
            <option value="Biochemistry">Biochemistry</option>
            <option value="Analytical Chemistry">Analytical Chemistry</option>
            <option value="Other Chemistry">Other Chemistry</option>
            <option value="Other Biology">Other Biology</option>
            <option value="Clinical Sciences">Clinical Sciences</option>
            <option value="Engineering">Engineering</option>
            <option value="Environmental Sciences">
              Environmental Sciences
            </option>
            <option value="High School">High School</option>
          </select>
        </div>
      </div>
      <div className="w-full mt-3">
        <label className="block text-gray-700">Email Newsletters</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="emailOptIn"
            id="emailOptIn"
            checked={formData.emailOptIn}
            onChange={handleChange}
            className="mr-2 h-5 w-5"
          />
          <label htmlFor="emailOptIn">Yes</label>
        </div>
      </div>
      <p className="text-sm my-3">
        By proceeding, you consent to Blue Sand Stem Labs processing of your
        information provided above in accordance with its{" "}
        <a href="#" className="text-[#1980E7]">
          Privacy Policy
        </a>
        , subject to its website{" "}
        <a href="#" className="text-[#1980E7]">
          Terms of Service
        </a>{" "}
        and Use. You can unsubscribe or revoke your consent at any time.
      </p>
      <div className="ml-auto">
        <div className="flex items-center removed">
          <button
            className="relative group inline-block py-3 px-4 text-sm font-semibold text-[#1980E7] hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300"
            type="submit"
          >
            <div className="absolute top-0 right-full w-full h-full bg-[#1980E7] transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
            {!loading ? (
              <span className="relative">Schedule Demo</span>
            ) : (
              <Puff color="#1980E7" width={30} height={30} />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ScheduleDemoForm;
