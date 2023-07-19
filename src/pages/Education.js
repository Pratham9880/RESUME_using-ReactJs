import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">MIT Academy of Engineering, Pune</h3>
                <div className="subheading mb-3">B.Tech. - Electronics Engineering</div>
                <div>CGPA: 8.01 / 10.00</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">2020 - 2024</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">VJTI, Mumbai</h3>
                <div className="subheading mb-3">Diploma - Electronics Engineering</div>
                <div>Autonomous</div>
                <p>Percentage: 84.05 / 100.00</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">2021</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Wisdom English High School, Murbad</h3>
                <div className="subheading mb-3">10th (SSC)</div>
                <p>Percentage: 85.90 / 100.00</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">2018</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Education;
