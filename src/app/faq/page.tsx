import React from "react";
import { Metadata } from "next";
import Header from "@/layouts/headers/header";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import FaqArea from "../components/faqs/faq-area";
import HeaderFour from "@/layouts/headers/header-4";
export const metadata: Metadata = {
  title: "Faq",
};

const FaqPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/*breadcrumb start */}
        <CompanyBreadcrumb
          title="Question & Answers"
          subtitle="Find your answers"
        />
        {/*breadcrumb end */}

        {/* faq area start */}
        <FaqArea />
        {/* faq area end */}

        {/* job portal intro start */}
        
        {/* job portal intro end */}

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default FaqPage;
