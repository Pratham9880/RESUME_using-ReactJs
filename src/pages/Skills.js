import React from "react";
import Header from "../components/Header";

const Skills = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">AWS CLOUD</h3>
                <div className="subheading mb-3">Key Skills: AWS Cloud</div>
                <p>
                  In this certification, I gained expertise in AWS Cloud and learned about various AWS services and their functionalities. I have hands-on
                  experience in deploying and managing applications on AWS.
                </p>
                
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">HTML</h3>
                <div className="subheading mb-3">Key Skills: HTML</div>
                <p>
                  I have expertise in HTML and web development. I am proficient in creating responsive and interactive web pages using HTML5 and CSS3.
                </p>
                
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Python</h3>
                <div className="subheading mb-3">Key Skills: Python</div>
                <p>
                  I have strong programming skills in Python. I am experienced in developing Python applications and utilizing Python libraries and frameworks
                  for various tasks, including data analysis, web development, and automation.
                </p>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
