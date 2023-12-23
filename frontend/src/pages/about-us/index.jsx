import React from "react";
import "./style.css";
import Img from "../../components/Img";

const AboutUs = () => {
  return (
    <main className="about-us-page-container">
      <div className="about-us-summary">
        <h1>About Us</h1>
        <p>
          Welcome to MY PHONE, your go-to destination for comprehensive mobile
          phone details! Our website is meticulously crafted and maintained by
          the talented web developer, Ashraf Alshashaa.
        </p>
      </div>
      <div className="why-choose-section">
        <h2>Why Choose MY PHONE?</h2>
        <ul>
          <li>
            <strong>Detailed Mobile Phone Information:</strong> We strive to
            provide you with the most comprehensive and detailed information
            about various mobile phones.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Our website is built using
            React, ensuring a smooth and responsive user experience.
          </li>
          <li>
            <strong>Developer's Commitment:</strong> Ashraf Alshashaa is
            committed to keeping MY PHONE up-to-date with the latest
            advancements in mobile technology.
          </li>
        </ul>
      </div>
      <div className="developer-section">
        <div className="developer-img">
          <Img
            src={
              "https://avatars.githubusercontent.com/u/103607612?s=400&u=4a5c8f24dbcf1c2c59c602367d978ccd6fbf276e&v=4"
            }
          />
        </div>
        <div className="developer-text">
          <h2>Meet the Developer: </h2>
          <h3>Ashraf Alshashaa</h3>
          <p>
            Ashraf is a passionate and skilled web developer with a strong
            background in creating dynamic and user-friendly websites. With a
            focus on delivering exceptional user experiences, Ashraf has
            dedicated himself to providing accurate and up-to-date information
            about mobile phones.
          </p>
        </div>
      </div>
      <div className="connect-section">
        <h2>Connect with Ashraf Alshashaa</h2>
        <p>Stay connected with Ashraf on professional platforms:</p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/ashraf-alshashaa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Stay updated on my professional journey.</p>
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ashraf-Alshashaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Gain insights into my coding expertise.</p>
              <i class="fa-brands fa-square-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="touch-section">
        <h2>Get in Touch</h2>
        <div className="touch-card">
          <p>Connect with Ashraf directly via:</p>
          <div>
            <a
              href="https://www.linkedin.com/in/ashraf-alshashaa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Ashraf-Alshashaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a
              href="mailto: ashraf.alchechae@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
