// Author: Adefeyitimi Adeyeloja
import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import IndexSectionHeaders6 from "../components/headers/IndexSectionHeaders6";
import IndexSectionCallToAction9 from "../components/call-to-action/IndexSectionCallToAction9";
import IndexSectionFeatures8 from "../components/features/IndexSectionFeatures8";
import IndexSectionFeatures13 from "../components/features/IndexSectionFeatures13";
import IndexSectionInstagramPhotos12 from "../components/instagram-photos/IndexSectionInstagramPhotos12";
import IndexSectionStats11 from "../components/stats/IndexSectionStats11";
import IndexSectionTeam10 from "../components/team/IndexSectionTeam10";
import IndexSectionFooters7 from "../components/footers/IndexSectionFooters7";
import NewsletterModal from "../components/newsletter";
import ForSchool from "../components/for-school";
import VRSolution from "../components/for-school/vr-solution";
import PricingSection from "../components/pricing";
import HowItWorks from "../components/features/NewContent";

export default function Index() {
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
            Blue Sands STEM Labs - Transforming STEM Education with VR
          </title>
        </Helmet>
      </HelmetProvider>
      <NewsletterModal />
      <IndexSectionHeaders6 />
      <IndexSectionCallToAction9 />
      <IndexSectionFeatures8 />
      <ForSchool />
      <IndexSectionFeatures13 />
      <VRSolution />
      <IndexSectionStats11 />
      <HowItWorks />
      <PricingSection />
      {/* <IndexSectionInstagramPhotos12 /> */}
      <IndexSectionTeam10 />
      <IndexSectionFooters7 />
    </React.Fragment>
  );
}
