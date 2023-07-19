import React from "react";
import Header from "../components/Header";

const Internship = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">AICTE-Edu skills Virtual Internship</h3>
                <div className="subheading mb-3">Cohort 01</div>
                <div>Jul, 2022 - Sep, 2022</div>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Key Skills</h3>
                <ul>
                  <li>AI and ML Concepts</li>
                  <li>AWS Services</li>
                  <li>Model Training and Evaluation</li>
                </ul>
                <p>
                  The AI-ML Virtual Internship using AWS of AICTE teaches AI and ML concepts using AWS services, such as Amazon SageMaker and EC2.
                  I gained good knowledge from this internship.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Internship;
