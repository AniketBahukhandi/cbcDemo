import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import RegisterArea from "../components/register/register-area";
import ApplyArea from "../components/apply-now/apply-area";
import HeroBannerFive from "../components/hero-banners/hero-banner-five";
import FeatureSection from "../components/videoprop/featureprop";
import ExpertSectionOne from "../components/expert-member/expert-section-1";
import ExpertSectionTwo from "../components/expert-member/expert-section-2";
import ExpertsOne from "../components/experts/experts-one";
import FeatureFour from "../components/features/feature-four";
import FancyBanner from "../components/fancy-banner/fancy-banner";
import FancyBannerNine from "../components/fancy-banner/fancy-banner-9";
import JobListTen from "../components/jobs/list/job-list-ten";
import BlogOne from "../components/blogs/blog-one";
import FeedbackTwo from "../components/feedBacks/feedback-two";
import FeedbackOne from "../components/feedBacks/feedback-one";
import FeedbackThree from "../components/feedBacks/feedback-three";
import FeatureSix from "../components/features/feature-six";
import HeaderTwo from "@/layouts/headers/header-2";
import HeaderFour from "@/layouts/headers/header-4";

export const metadata: Metadata = {
  title: "Apply now",
};

const RegisterPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}

        {/*breadcrumb start */}
        {/*breadcrumb end */}

        {/* register area start */}
        <ApplyArea />

        <FeatureSection />

        {/* register area end */}
        <FeatureFour />
        <ExpertsOne />
        <JobListTen />
        <BlogOne />
        <ExpertSectionTwo />
        <FeedbackThree />
        <FeatureSix />

        {/* footer start */}
        {/* <FooterOne /> */}
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
