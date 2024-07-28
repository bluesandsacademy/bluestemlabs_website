import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ScheduleDemoForm from "../../components/request-demo";
import Navbar from "../../components/navbar";
import FAQAccordion from "../../components/faq";
import IndexSectionFooters7 from "../../components/footers/IndexSectionFooters7";

export default function RequestDemo() {
  const steps = [
    {
      title: "Get a Platform Overview",
      description:
        "Learn how Blue Sands Stem Labs aligns with your program and engages your students.",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          {...props}
        >
          <path
            fill="#FFF"
            d="M3 19q-.825 0-1.412-.587T1 17V7q0-.825.588-1.412T3 5h10q.825 0 1.413.588T15 7v10q0 .825-.587 1.413T13 19zm14 0V5h2v14zm4 0V5h2v14z"
          />
        </svg>
      ),
    },
    {
      title: "Discuss Your Needs",
      description:
        "Discover how Blue Sands Stem Labs can help you drive outcomes and meet your expectations.",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          {...props}
        >
          <path
            fill="#FFF"
            d="m5 8.75l-2.75-3.1q-.425-.5-.162-1.075Q2.35 4 3 4h17q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20H7q-.825 0-1.412-.587Q5 18.825 5 18ZM9 13h9q.425 0 .712-.288Q19 12.425 19 12t-.288-.713Q18.425 11 18 11H9q-.425 0-.712.287Q8 11.575 8 12t.288.712Q8.575 13 9 13Zm0 3h6q.425 0 .713-.288Q16 15.425 16 15t-.287-.713Q15.425 14 15 14H9q-.425 0-.712.287Q8 14.575 8 15t.288.712Q8.575 16 9 16Zm0-6h9q.425 0 .712-.288Q19 9.425 19 9t-.288-.713Q18.425 8 18 8H9q-.425 0-.712.287Q8 8.575 8 9t.288.712Q8.575 10 9 10Z"
          />
        </svg>
      ),
    },
    {
      title: "Explore End-to-End Support ",
      description:
        "Hear about how Blue Sands Stem Labs supports your program every step of the way.",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          {...props}
        >
          <path
            fill="#FFF"
            d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
          />
        </svg>
      ),
    },
  ];

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
            Demo Request | Blue Sands STEM Labs - Transforming STEM Education
            with VR
          </title>
        </Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <div className="flex sm:flex-row flex-col sm:items-start items-center sm:justify-between justify-center space-x-3 my-3 bg-[#1980E7]/30 min-h-screen py-5 sm:px-[10rem] px-3">
          <div className="sm:4/12 w-full h-full flex flex-col justify-start items-start">
            <div>
              <img
                src="/saturn-assets/logos/logo.webp"
                className="rounded-3xl drop-shadow-2xl h-auto w-[30%] object-cover my-3"
                alt="Logo"
              />
            </div>
            <div className="space-y-3 border-b border-[#1980E7] pb-10  sm:w-[75%] w-full">
              <h3 className="text-5xl text-[#1980E7] font-bold">
                Demo Request
              </h3>
              <p className="text-xl text-black font-medium">
                Take a brief guided tour and learn how Blue Sands Stem Labs can
                help your program reach its goals.
              </p>
            </div>
            <div className="py-5 space-y-3">
              {steps.map((step, index) => {
                const icon = {
                  className: "",
                };
                return (
                  <div className="flex gap-x-3" key={index}>
                    <div className="drop-shadow-2xl">{step.icon(icon)}</div>
                    <div>
                      <p className="text-2xl font-semibold text-blue-950">
                        {step.title}
                      </p>
                      <p className="sm:w-[70%] w-full">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sm:w-7/12 w-full">
            <ScheduleDemoForm />
          </div>
        </div>
        <FAQAccordion />
        <IndexSectionFooters7 />
      </>
    </React.Fragment>
  );
}
