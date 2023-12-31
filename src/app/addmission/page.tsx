"use client";
import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-4";
import FooterOne from "@/layouts/footers/footer-one";
import HeroBanner from "../components/hero-banners/hero-banner";
import FeatureTweleve from "../components/features/feature-twelve";
import FancyBannerNine from "../components/fancy-banner/fancy-banner-9";
import FancyBannerTen from "../components/fancy-banner/fancy-banner-10";
import FeatureFour from "../components/features/feature-four";
import PartnersSlider2 from "../components/partners/partners-slider2";
import { string } from "yup";
import FeatureThirteen from "../components/features/feature-thirteen";
import FlipCardone from "../components/card/townandapt1";
import ExpertsOne from "../components/experts/experts-one";
import HowItWorksTwo from "../components/how-it-works/how-it-works-2";
import HowItWorksFive from "../components/how-it-works/how-it-works-5";
// import Featurefourteen from "./components/features/feature-fourteen";
import Featurefifteen from "../components/features/feature-fifteen";
import FeatureSixteen from "../components/features/feature-sixteen";
import FeatureSeventeen from "../components/features/feature-seventeen";
import Featurefourteen from "../components/features/feature-fourteen";

const addmission = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeroBanner />
        <ExpertsOne />
        <HowItWorksFive />

        <FeatureThirteen />

        <Featurefourteen />
        <Featurefifteen />
        <FeatureSeventeen />
        <FeatureSixteen />
        <div className="partner-logos bg-color border-0 pt-45 pb-45 ps-3 pe-3 mt-4">
          <PartnersSlider2 />
        </div>
        <FancyBannerNine />
        <FooterOne />

        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default addmission;
