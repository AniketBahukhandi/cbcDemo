"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import shape_1 from "@/assets/images/shape/shape_01.svg";
import shape_3 from "@/assets/images/shape/shape_03.svg";
import main_img from "@/assets/images/assets/img_02.png";

const HeroBannerSix = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleAdmissionClick = (event: { preventDefault: () => void }) => {
    if (isLoggedIn) {
      event.preventDefault();
      router.push("/dashboard/candidate-dashboard/profile");
    }
    // If not logged in, the default behavior of the link will trigger the modal
  };

  return (
    <div className="hero-banner-one position-relative">
      <div className="container">
        <div className="position-relative text-black pt-150 md-pt-100 pb-120 xl-pb-120 md-pb-80">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="wow fadeInUp text-black" data-wow-delay="0.3s">
              Find & Hire{" "}
                <span style={{ color: "#eee30d" }}>Experts for any Job.
                </span>
              </h1>
              <p
                className="text-lg text-black mt-40 md-mt-30 mb-50 md-mb-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
              Welcome to Career Buddy Club, Your source for top talent!!
              </p>
              
            </div>
          </div>

          <div className="img-box">
            <Image src={shape_1} alt="shape" className="lazy-img shapes" />
            <Image
              src={main_img}
              alt="main-img"
              className="lazy-img main-img w-100 h-100"
            />
          </div>
        </div>
      </div>

      <Image src={shape_3} alt="shape" className="lazy-img shapes shape_02" />
    </div>
  );
};

export default HeroBannerSix;
