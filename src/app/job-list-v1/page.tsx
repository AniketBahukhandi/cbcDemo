import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/headers/header";
import FooterOne from "@/layouts/footers/footer-one";
import JobBreadcrumb from "../components/jobs/breadcrumb/job-breadcrumb";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";
import JobListV2Area from "../components/jobs/list/job-list-v2-area";
import HeaderFour from "@/layouts/headers/header-4";

export const metadata: Metadata = {
  title: "Career buddy club-Job List ",
  robots: "noindex",
};

const JobListTwoPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/* search breadcrumb start */}
        <JobBreadcrumb />
        {/* search breadcrumb end */}

        {/* job list three start */}
        <JobListV2Area itemsPerPage={8} />
        {/* job list three end */}

        {/* job portal intro start */}
        <JobPortalIntro top_border={true} />
        {/* job portal intro end */}

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default JobListTwoPage;
