import React, { useState, useEffect } from "react";
import ApplyForm from "../../forms/apply-now";

const ApplyModal = () => {
  // State to track the window width
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0; // Return a default width if window is not defined
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set up event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="modal fade"
      id="ApplyModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="container">
          <div className="user-data-form modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="text-center">
              <h3>Take Control Of Your Career!</h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              {windowWidth > 768 && (
                <div
                  style={{ flex: 1, marginLeft: "10px", marginRight: "10px" }}
                >
                  {/* Why Register With Us section */}
                  <div>
                    <div
                      style={{
                        backgroundColor: "#f7f7f7",
                        padding: "20px",
                        borderRadius: "5px",
                        margin: "20px 0",
                        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div
                        style={{
                          marginBottom: "15px",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        Why Register With Us?
                      </div>
                      <ul
                        style={{ listStyleType: "none", padding: 0, margin: 0 }}
                      >
                        <li style={{ marginBottom: "10px", fontSize: "14px" }}>
                          * Get admission in 50+ shortlisted Colleges.
                        </li>
                        <li style={{ marginBottom: "10px", fontSize: "14px" }}>
                          * Take admission with CBC 100% Job Guarantee to land a
                          job after your degree.
                        </li>
                        <li style={{ marginBottom: "10px", fontSize: "14px" }}>
                          * Exclusive Job portal for CBC Students from 100+
                          Corporates with Average 6+ LPA package.
                        </li>
                        <li style={{ marginBottom: "10px", fontSize: "14px" }}>
                          * 300+ Buddies to Mentor, Upskill and Train you to
                          become Successful.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ flex: 1, marginLeft: "10px", marginRight: "10px" }}>
                <div className="form-wrapper m-auto">
                  <ApplyForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
