"use client";
import React from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import logo_1 from "@/assets/images/logo/media_02.webp";
import logo_2 from "@/assets/images/logo/media_04.webp";
import logo_7 from "@/assets/images/logo/media_05.webp";
import logo_4 from "@/assets/images/logo/media_06.webp";
import logo_5 from "@/assets/images/logo/media_07.webp";
import logo_6 from "@/assets/images/logo/media_08.webp";
import logo_3 from "@/assets/images/logo/media_01.webp";
import logo_8 from "@/assets/images/logo/media_09.webp";
import logo_9 from "@/assets/images/logo/media_10.webp";
import logo_10 from "@/assets/images/logo/media_03.webp";

// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

// logo data
const logos: StaticImageData[] = [
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
  logo_7,
  logo_8,
  logo_9,
  logo_10,
];

const PartnersSlider4 = () => {
  return (
    <>
      <div className="text-center mt-4">
        <h3 className="mt-40 md-mt-20 mb-40 md-mb-20" style={{ color: "#14adbd" }}>
          Corporate Partners
        </h3>
      </div>
      <Slider {...slider_setting} className="partner-slider">
        {logos.map((logo, i) => (
          <div key={i} className="item">
            <div
              className="logo d-flex align-items-center"
              style={{
                width: '100%',
                aspectRatio: '3 / 2',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Image
                src={logo}
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default PartnersSlider4;
