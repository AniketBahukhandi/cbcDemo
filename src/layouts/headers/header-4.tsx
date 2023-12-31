"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Menus from "./component/menus";
import logo from "@/assets/images/logo/logo4.png";
import useSticky from "@/hooks/use-sticky";
import LoginModal from "@/app/components/common/popup/login-modal";
import PhoneModal from "@/app/components/common/popup/phone-modal";

import dynamic from "next/dynamic";

// Import ApplyModal with SSR disabled
const ApplyModal = dynamic(
  () => import("@/app/components/common/popup/apply-modal"),
  {
    ssr: false,
  }
);

import "react-toastify/dist/ReactToastify.css";

interface HeaderFourProps {
  user: {
    value: string | null;
  };
  onLogout: () => void;
  key: number;
}
const HeaderFour: React.FC<HeaderFourProps> = ({ user, key, onLogout }) => {
  const { sticky } = useSticky();
  const isUserLoggedIn = user && user.value;

  return (
    <>
      <header
        className={`theme-main-menu menu-overlay sticky-menu ${
          sticky ? "fixed" : ""
        }`}
      >
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <Image
                    src={logo}
                    alt="logo"
                    width="125"
                    height="75"
                    priority
                  />
                </Link>
              </div>
              <div className="right-widget ms-auto ms-lg-0 order-lg-2">
                {!isUserLoggedIn && (
                  <ul className="d-flex align-items-center style-none">
                    <li>
                      <a
                        href="#"
                        className="fw-500 text-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                      >
                        Login
                      </a>
                    </li>
                    <li className="d-none d-md-block ms-4">
                      <a
                        href="#"
                        className="fw-500 btn-five"
                        data-bs-toggle="modal"
                        data-bs-target="#ApplyModal"
                      >
                        Apply Now
                      </a>
                    </li>
                  </ul>
                )}
                {isUserLoggedIn && (
                  <ul className="d-flex align-items-center style-none">
                    <li>
                      <a
                        href="/"
                        className=" btn-five fw-500 text-white"
                        onClick={onLogout}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                )}
              </div>
              <nav className="navbar navbar-expand-lg p0 ms-3 ms-lg-0 order-lg-1">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="d-block d-lg-none">
                      <div className="logo">
                        <Link href="/" className="d-block">
                          <Image src={logo} alt="logo" priority width="100" />
                        </Link>
                      </div>
                    </li>
                    {/* menus start */}
                    <Menus />
                    {/* menus end */}
                    {!isUserLoggedIn && (
                      <li className="d-md-none mt-5">
                        <a
                          href="#"
                          className="fw-500 btn-five"
                          data-bs-toggle="modal"
                          data-bs-target="#ApplyModal"
                        >
                          Apply Now
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* login modal start */}
      <ApplyModal />
      <LoginModal />
      <PhoneModal />

      {/* login modal end */}
    </>
  );
};

export default HeaderFour;
