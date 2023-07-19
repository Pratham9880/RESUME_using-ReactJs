import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Pratham
              <span class="text-primary">&nbsp;Borde</span>
            </h1>
            <div class="subheading mb-5">
              B.Tech - Electronics Engineering &nbsp; Ph: 9326212198 &nbsp;&nbsp; Mail-
              <a href="pratham.borde@mitaoe.ac.in">&nbsp;&nbsp;pratham.borde@mitaoe.ac.in</a>
            </div>
            <p class="lead mb-5">
            Self-motivated and hardworking fresher seeking for an opportunity to work in
            a challenging environment to prove my skills and utilize my knowledge
            & intelligence in the growth of the organization
            </p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.linkedin.com/in/pratham-borde-23a2b9254">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/Pratham9880">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="https://instagram.com/prthm_borde?igshid=ZGUzMzM3NWJiOQ">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Home;