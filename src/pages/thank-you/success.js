import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../../components/navbar";
import IndexSectionFooters7 from "../../components/footers/IndexSectionFooters7";

export default function SuccessPage() {
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
            Successful Demo Request | Blue Sands STEM Labs - Transforming STEM
            Education with VR
          </title>
        </Helmet>
      </HelmetProvider>
      {/* <Navbar /> */}
      <div className="flex items-center h-screen justify-center flex-col gap-y-3 my-10">
        <h3 className="text-center text-blue-950 text-5xl">Thank You! 😊</h3>
        <p className="text-3xl">A Representative will reach out to you shortly</p>
      </div>
      {/* <IndexSectionFooters7 /> */}
    </React.Fragment>
  );
}
