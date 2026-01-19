import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector("#about-section");
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      id="about-section"
      className={`about-container ${isVisible ? "fade-in visible" : "fade-in"}`}
    >
      <div className="background-text">About Me</div>

      <div className="content">
        <h1 className="name">ponamandi prashanth</h1>

        <p className="description">
        I’m a passionate B.Tech student and aspiring Full Stack Developer passionate about building seamless digital experiences. 
        Skilled in <span className="highlight">Full-Stack development</span>, with a focus on creating responsive web applications and user-friendly interfaces.
        </p>


        <div className="button-container">
          <div className="social-icons1">
            <a href="tel:9492974445" className="icon-link" aria-label="Call">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
              </svg>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ponamandiprashanth00@gmail.com" className="icon-link" aria-label="Email">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>

          <button
            onClick={toggleReadMore}
            className="read-more-btn"
            aria-label={isExpanded ? "Show less" : "Read more"}
          >
            <svg
              className={`arrow-icon ${isExpanded ? "rotate" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>

        <div className={`more-content ${isExpanded ? "visible" : ""}`}>
          <p className="description">
I am a Full Stack Developer with experience in building responsive and user-friendly web applications using React, Node.js, MongoDB, and Express. I enjoy writing clean code and continuously learning to create solutions that solve real-world problems.          </p>
        </div>
      </div>
    </div>
  );
};

export default About;