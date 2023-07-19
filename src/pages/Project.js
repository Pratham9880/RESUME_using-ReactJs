import React from "react";
import Header from "../components/Header";

const Project = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Institute Management System</h3>
                <div className="subheading mb-3">Apr 01, 2023 - May 10, 2023</div>
                <div>Team Size: 4</div>
                <div>Key Skills: ReactJS</div>
                <p>
                  "College Management System" is a web-based project developed using React. It features a responsive design implemented with Bootstrap.
                  The system stores data in JSON format, eliminating the need for a separate database.
                </p>
                <div>Project Link: <a href="https://github.com/Pratham9880/React.js">https://github.com/Pratham9880/React.js</a></div>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Loan Data Analysis</h3>
                <div className="subheading mb-3">Nov 01, 2022 - Dec 01, 2022</div>
                <div>Mentor: Awasthy Mam</div>
                <div>Team Size: 3</div>
                <div>Key Skills: Python</div>
                <p>
                  This project performs exploratory data analysis (EDA) on a loan dataset from LendingClub.com. The goal is to identify criteria that
                  indicate a higher probability of borrowers paying back their loans. The analysis includes examining variables such as credit policy,
                  loan purpose, interest rate, installment amount, income, and credit score. Visualizations and correlation analysis are used to gain
                  insights into the data. The findings highlight the importance of factors such as credit policy, loan repayment history, and absence of
                  derogatory records in predicting loan repayment likelihood.
                </p>
                <div>Project Link: <a href="https://drive.google.com/drive/folders/1eoGno6My4638iVmWlu81szn33CK2uJHX?usp=drive_link">https://drive.google.com/drive/folders/1eoGno6My4638iVmWlu81szn33CK2uJHX?usp=drive_link</a></div>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Home automation using Bluetooth and Arduino</h3>
                <div className="subheading mb-3">Jan 03, 2022 - Jul 18, 2022</div>
                <div>Mentor: Prof Smita Kulkarni</div>
                <div>Team Size: 4</div>
                <div>Key Skills: Connection Bluetooth and Phone, Proficiency in programming with Arduino</div>
                <p>
                  This project involves home automation using Bluetooth and Arduino. It utilizes Bluetooth connectivity to control various home
                  appliances and systems using a smartphone. The Arduino platform is used for programming and controlling the connected devices,
                  providing automation and convenience to the users.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">UV Disinfection Box</h3>
                <div className="subheading mb-3">Aug 06, 2020 - Mar 19, 2021</div>
                <div>Mentor: Prof Jyoti Gondane</div>
                <div>Team Size: 5</div>
                <div>Key Skills: Knowledge of UV-C light, Material Selection, Design and prototyping</div>
                <p>
                  The UV Disinfection Box project involves designing and prototyping a device that utilizes UV-C light for disinfecting objects and
                  surfaces. The project includes the selection of suitable materials for construction and the design of an effective UV exposure system
                  to ensure proper disinfection. The UV Disinfection Box provides a safe and efficient method for sanitizing various items.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;
