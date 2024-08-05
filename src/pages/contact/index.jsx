import { useState } from "react";
import Navbar from "../../components/navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import IndexSectionFooters7 from "../../components/footers/IndexSectionFooters7";
import { Puff } from "react-loader-spinner";
import { toast } from "react-toastify";
import axios from "axios";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    message: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((formData) => ({ ...formData, [id]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const endpoint = `https://email-delivery-api.onrender.com/contact`;
      await axios.post(endpoint, formData);
      toast.success(
        "Successfully Delivered Contact Us Form... Our Representative will Contact You Soon."
      );
      setFormData((formData) => ({
        ...formData,
        fullName: "",
        emailAddress: "",
        message: "",
      }));
    } catch (error) {
      console.error(error);
      toast.error("Failed To Deliver Contact Form... Please Try Again Later");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
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
            Contact Us | Blue Sands STEM Labs - Transforming STEM Education with
            VR
          </title>
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <section className="bg-black/80 pt-24 pb-32">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-white text-center text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-white text-opacity-70 text-center text-lg mb-20 max-w-2xl mx-auto">
            At Blue Sands, we're committed to empowering your growth journey.
            Explore our curated resources below, and don't hesitate to connect
            with us if you have any questions.
          </p>
          <div className="rounded-2xl border border-white border-opacity-20 p-3 bg-white bg-opacity-10 max-w-xl mx-auto">
            <div className="rounded-2xl bg-darkPink-900 w-full p-8">
              <form onSubmit={handleSubmit}>
                <label
                  for="fullName"
                  className="block text-sm mb-2 text-white font-medium"
                >
                  <span>Full Name</span>
                  <span className="text-[#1980E7]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="px-4 py-3 mb-8 rounded-full border border-white border-opacity-10 bg-white bg-opacity-5 text-sm placeholder-white placeholder-opacity-50 text-white focus:border-white focus:border focus:border-opacity-50 transition duration-200 outline-none w-full"
                  onChange={handleChange}
                  placeholder="Full Name"
                />
                <label
                  for="emailAddress"
                  className="block text-sm mb-2 text-white font-medium"
                >
                  <span>Email Address</span>
                  <span className="text-[#1980E7]">*</span>
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  className="px-4 py-3 mb-8 rounded-full border border-white border-opacity-10 bg-white bg-opacity-5 text-sm placeholder-white placeholder-opacity-50 text-white focus:border-white focus:border focus:border-opacity-50 transition duration-200 outline-none w-full"
                  onChange={handleChange}
                  placeholder="Email Address"
                />
                <label
                  for="message"
                  className="block text-sm mb-2 text-white font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  onChange={handleChange}
                  className="px-4 py-3 mb-8 rounded-2xl resize-none border border-white border-opacity-10 bg-white bg-opacity-5 text-sm placeholder-white placeholder-opacity-50 text-white focus:border-white focus:border focus:border-opacity-50 transition duration-200 outline-none w-full"
                  placeholder="Enter a message..."
                ></textarea>
                <button
                  type="submit"
                  className="group relative inline-block p-0.5 w-full font-semibold overflow-hidden rounded-full shadow-pink hover:shadow-none focus:shadow-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1980E7]/80 to-[#1980E7] group-hover:from-white group-focus:from-white group-hover:to-transparent group-focus:to-white group-hover:opacity-40 group-focus:opacity-20 rounded-full"></div>
                  <div className="relative z-50 py-3 px-4 bg-[#1980E7] group-hover:blue-900 group-focus:blue-900 rounded-full transition duration-200">
                    <p className="text-white group-focus:text-opacity-40 transition duration-200 inline-flex justify-center items-center">
                      {loading ? (
                        <Puff width={40} height={40} color="#fff" />
                      ) : (
                        "Send Message"
                      )}
                    </p>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <IndexSectionFooters7 />
    </>
  );
}
