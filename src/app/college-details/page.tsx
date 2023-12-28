import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumbjob from "../components/common/common-breadcrumb-job";
import FooterOne from "@/layouts/footers/footer-one";
import college_details from "@/data/college-details";
import CollegeDetailsArea from "../components/company-details/college-details";

export const metadata: Metadata = {
  title: "College Details",
};

const CompanyDetailsPage = () => {
  const details = college_details[0];
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <CompanyBreadcrumbjob
          title={details.college}
          subtitle={details.location}
        />
        <CollegeDetailsArea details={details} />
        <JobPortalIntro top_border={true} />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default CompanyDetailsPage;
