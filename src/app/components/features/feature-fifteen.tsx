import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import shape from "@/assets/images/shape/bg_shape_02.png";
import logo from "@/assets/images/logo/logo.png";
import media_1 from "@/assets/images/logo/s21.png";
import media_2 from "@/assets/images/logo/s22.png";
import media_3 from "@/assets/images/logo/s23.png";
import media_4 from "@/assets/images/logo/s24.png";
import media_5 from "@/assets/images/logo/s25.png";

// brand icon
function MediaImg({ img, num }: { img: StaticImageData; num: string }) {
  return (
    <div
      className={`brand-icon icon_${num} rounded-circle d-flex align-items-center justify-content-center`}
    >
      <Image
        src={img}
        style={{ height: "40px", width: "40px" }}
        alt="media"
        className="lazy-img"
      />
    </div>
  );
}

const Featurefifteen = () => {
  return (
    <section className="text-feature-four position-relative mt-60 xl-mt-60 lg-mt-60">
      <div className="container">
        <div className="bg-wrapper">
          <div className="row align-items-center">
          <h2 className="text" style={{ color: "#B7469A" }}>
  Career Buddy Club Motto
</h2>
            <div className="col-lg-5">
              <div className="wow fadeInLeft">
                <h3 style={{ paddingLeft: "10px" }} >Transformative Learning: The CBC Advantage
                </h3> 
                  <h3 style={{ paddingLeft: "20px",paddingTop:"20px" }}>Learn from Recruiters</h3>
                <p style={{ paddingLeft: "20px" }}>
                 CEOs, CTOs, and COOs of Fortune 500 companies and start-ups with years of recruitment experience.
                </p>
                <h3 style={{ paddingLeft: "20px" }}>Practice in the Real World
                </h3>
               <p style={{ paddingLeft: "20px" }}> Gain hands-on experience with internships & real-life projects to be job-ready. Participate in Training Bootcamps, Mentorship & Networking in Jobs Fairs, Hackathons, Case Studies, etc.
               </p>
                
               <div style={{ paddingLeft: "20px" }}>
              
          </div>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end md-mt-40">
              <div className="big-circle d-inline-block position-relative wow fadeInRight">
                <Image src={shape} alt="shape" className="lazy-img" />
                <div className="logo rounded-circle d-flex align-items-center justify-content-center">
                  <Image
                    src={logo}
                    alt="logo"
                    className="lazy-img"
                    style={{ height: "auto" }}
                  />
                </div>
                <MediaImg img={media_1} num="01" />
                <MediaImg img={media_2} num="02" />
                <MediaImg img={media_3} num="03" />
                <MediaImg img={media_4} num="04" />
                <MediaImg img={media_5} num="05" />
                <div className="brand text-black text-start text-md">
                  <span>100+</span>Leading Companies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featurefifteen;
