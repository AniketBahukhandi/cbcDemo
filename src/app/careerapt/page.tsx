import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-4";
import FooterOne from "@/layouts/footers/footer-one";
import FancyBannerTwo from "../components/fancy-banner/fancy-banner-2";
import ContactArea from "../components/contact/contact-area";
import AptiBanner from "../components/hero-banners/apti-banner";
import AptiFeature from "../components/features/feature-apti";
import AptiFeaturet from "../components/features/feature-aptiT";
import Aptibannerthree from "../components/fancy-banner/apti-banner";
import { FaUserGraduate, FaChartLine, FaUserTie, FaSchool } from 'react-icons/fa';
import StatisticsCard from "../components/statistic/stats";
import FeatureSection from "../components/videoprop/featureprop";
import HowItWorksThree from "../components/how-it-works/how-it-works-3";
import ImageWithTextSection from "../components/how-it-works/how-it-works-4";
import img1 from '@/assets/images/assets/1.svg'
import ContactSchoolArea from "../components/contactSchools/contactSchools-area";
import Component from "../components/how-it-works/how-it-works-4";
import CareerSurvey from "../aptitudetest/page";
export const metadata: Metadata = {
  title: "career aptitude test",
};

const statistics = [
  { icon: <FaUserGraduate />, number: '10,000+', label: 'Students taken Test' },
  { icon: <FaChartLine />, number: '4,000+', label: 'Students Counseled' },
  { icon: <FaUserTie />, number: '100+', label: 'Expert Counsellors' },
  { icon: <FaSchool />, number: '1,000+', label: 'Admissions taken' }
];

const campus = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderFour />
        {/* header end */}

        {/* hero banner start */}
        <AptiBanner />
        {/* hero banner end */}
        <StatisticsCard statistics={statistics} />
        <FeatureSection/>
        <HowItWorksThree/>
        <Component/>

        <AptiFeature />
        {/* how it works start */}
        <AptiFeaturet />
        
        {/* how it works end */}
        <Aptibannerthree />
        <FancyBannerTwo />
        {/* feature three end */}
        <ContactSchoolArea />
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default campus;
