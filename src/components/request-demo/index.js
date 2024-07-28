import React, { useState } from "react";
import { countries } from "../../data";

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
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Schedule a Demo</h2>
      <div className="flex items-center gap-x-3 justify-between">
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
      <div className="flex items-center gap-x-3 justify-between">
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
      <div className="flex items-center justify-center gap-x-3">
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
      <div className="mb-4">
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
      <div className="mb-4">
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
      <div className="mb-4">
        <label className="block text-gray-700">Relevant Course</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email Opt In</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="emailOptIn"
            checked={formData.emailOptIn}
            onChange={handleChange}
            className="mr-2"
          />
          <span>Yes</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="mr-2"
            required
          />
          Accept Terms and Conditions
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Request a Demo
      </button>
    </form>
  );
};

export default ScheduleDemoForm;
