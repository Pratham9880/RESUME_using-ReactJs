import React from "react";
import Header from "../components/Header";

const Certifications = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">AWS Academy Cloud Foundations</h3>
                <div className="subheading mb-3">Key Skills: AWS architecture, AWS Cloud, AWS Core Services</div>
                <p>
                  In this certification, I learned how AWS services work and how they function. I gained knowledge about various AWS Core Services,
                  including storage services, EC2, and more.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Project Management Fundamentals</h3>
                <div className="subheading mb-3">Key Skills: Project Lifecycle, Team Leadership, Communication</div>
                <p>
                  In this certification, I gained an understanding of project management concepts and processes. This includes knowledge about the value
                  of project management, different approaches to project management, and the role and responsibilities of a project manager across the
                  project lifecycle – from initiation and planning to execution and closure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Certifications;
