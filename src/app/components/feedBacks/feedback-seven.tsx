"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
// internal
import user_1 from "@/assets/images/assets/img_14.jpg";
import user_2 from "@/assets/images/assets/img_15.jpg";
import user_3 from "@/assets/images/assets/img_57.jpeg";
import icon from "@/assets/images/icon/icon_41.svg";
// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// slider data
const slider_data: {
  id: number;
  review_text: string;
  review_start: number[];
  desc: string;
  name: string;
  location: string;
  user: StaticImageData;
}[] = [
  {
    id: 1,
    review_text: "Impressive!",
    review_start: [1, 2, 3, 4, 5],
    desc: "The team at this job portal truly cares about their clients. From the initial consultation to the final job offer, they provided me with invaluable support and guidance. I couldn't have done it without them!",
    name: "Akhil Bharghav",
    location: "Taj Agra",
    user: user_1,
  },
  {
    id: 2,
    review_text: "Great work!!",
    review_start: [1, 2, 3, 4, 5],
    desc: "I landed my dream job! The mentorship and upskilling programs were extremely helpful in preparing me for the interview and giving me the confidence to pursue my dream.",
    name: "Mohit",
    location: "Skywings Private Limited",
    user: user_2,
  },
  {
    id: 3,
    review_text: "Impressive!",
    review_start: [1, 2, 3, 4, 5],
    desc: "I would highly recommend this service to anyone looking to further their career.",
    name: "Ashwani Goswami",
    location: "KSPL",
    user: user_3,
  },
];

const FeedbackSeven = () => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <section className="feedback-section-five position-relative mt-50 mb-50 xl-mt-50 pt-50 md-pt-60 pb-50 xl-pb-50 md-pb-50">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-md-6">
              <div className="title-one mb-55 lg-mb-40">
                <h2
                  className="main-font text-white wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  What’s our Students Think of us?
                </h2>
              </div>
            </div>
          </div>
          <Slider
            ref={sliderRef}
            {...slider_setting}
            className="row feedback-slider-one"
          >
            {slider_data.map((item) => (
              <div key={item.id} className="item m-0">
                <div className="feedback-block-three position-relative">
                  <Image src={icon} alt="icon" className="quote-icon" />
                  <div className="review fw-500">{item.review_text}</div>
                  <ul className="style-none d-flex rating">
                    {item.review_start.map((r, i) => (
                      <li key={i}>
                        <a href="#">
                          <i className="bi bi-star-fill"></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <blockquote className="mt-50 lg-mt-20 mb-15 lg-mb-10 text-dark">
                    {item.desc}
                  </blockquote>
                  <div className="block-footer d-flex align-items-center justify-content-between pt-35 lg-pt-10">
                    <div className="d-flex align-items-center">
                      <div className="name fw-500 text-dark">{item.name},</div>
                      <span className="opacity-50 ps-1">{item.location}</span>
                    </div>
                    <Image
                      src={item.user}
                      alt="user"
                      className="author-img rounded-circle"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <ul className="slider-arrows slick-arrow-one color-two d-flex justify-content-center style-none sm-mt-30">
            <li onClick={sliderPrev} className="prev_b slick-arrow text-white">
              <i className="bi bi-arrow-left"></i>
            </li>
            <li onClick={sliderNext} className="next_b slick-arrow text-white">
              <i className="bi bi-arrow-right"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSeven;
