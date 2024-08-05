import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.js";
import StemLabPage from "./pages/Stem_lab.js";
import SignUp from "./pages/signup/index.js";
import RequestDemo from "./pages/request-demo/index.js";
import SuccessPage from "./pages/thank-you/success.js";
import ContactUs from "./pages/contact/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer closeOnClick={true} />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/thankyou/success" element={<SuccessPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
