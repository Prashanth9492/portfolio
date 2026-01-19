import React, { useState, useEffect } from "react";
import "./Projects.css";

// Import multiple images for each project
import project1_img1 from "../assets/home1.png";  
import project1_img2 from "../assets/home2.png";  
import project1_img3 from "../assets/home3.png";  
import project1_img4 from "../assets/home4.png";  
import project1_img5 from "../assets/home5.png";
import project1_img6 from "../assets/home6.png";
import project2_img1 from "../assets/edu.png";  
import project2_img2 from "../assets/edu.png";  
import project3_img1 from "../assets/house.png";   
import project3_img2 from "../assets/house1.png";   
import project3_img3 from "../assets/house2.png";   
import project4_img1 from "../assets/shoe1.png";
import project4_img2 from "../assets/shoe2.png";  
import project4_img3 from "../assets/shoe3.png";  
import project4_img4 from "../assets/shoe4.png";  
import project4_img5 from "../assets/shoe5.png";  
import project4_img6 from "../assets/shoe6.png";  
import project4_img7 from "../assets/shoe7.png"; 
import neuro from "../assets/neuro.png";  
import neuro1 from "../assets/neuro1.png";  
import neuro2 from "../assets/neuro2.png";  
import neuro3 from "../assets/neuro3.png"; 
import ai from "../assets/ai.png";  
import ai1 from "../assets/ai1.png";  
import ai3 from "../assets/ai3.png"; 
import kerala1 from "../assets/kerala1.png"; 
import kerala2 from "../assets/kerala2.png"; 
import kerala3 from "../assets/kerala3.png"; 
import kerala4 from "../assets/kerala4.png"; 

const projectsData = [

        {
  name: "NEURO-EMPOWERMENT",
  description: "A platform to empower individuals.",
  details: "NEURO-EMPOWERMENT is a platform designed to empower individuals with neurodiversity by providing a supportive community, resources, and tools to help them thrive. The platform features discussion forums, educational content, and a directory of services tailored to the needs of neurodiverse individuals.",
  skills: ["React","Typescript", "Taillwind CSS","node.js","firebase",],
  images: [neuro,neuro1, neuro2, neuro3 ],
  github: "https://github.com/example/project3",
  liveDemo: "https://nueroempowerment.vercel.app/",
},

  
      {
  name: "Migrant Worker Health  System",
  description:  "A Smart India Hackathon solution for migrant workers",
  details: "A Smart India Hackathon solution for migrant workers’ digital health records, secure document uploads, and verification workflows for Kerala Government.",
  skills: ["React","Typescript", "Taillwind CSS","node.js","framer motion"],
  images: [kerala1,kerala2,kerala3,kerala4],
  github: "https://github.com/mohansiva58/kerala-migrates",
  liveDemo: "https://safe-kerala.vercel.app/",
}, 



    {
    name: "CSD&CSIT",
    description: "CSD&CSIT Branch house activities portal",
    details: "This portal showcases all CSD & CSIT branch house activities and allows students to track their participation, view earned points, and stay updated on upcoming events and announcements.",
    skills: ["React", "css", "PHP","MYSQL",],
    images: [project3_img1, project3_img2, project3_img3],
    github: "https://github.com/example/project3",
    liveDemo: "https://csd-it-house-website-swapanths-projects.vercel.app/",
  },
  {
    name: "Free education platform",
    description: "Uneven access to quality education in the digital world.",
    details: "This project aims to bridge the gap in access to quality education by providing a free, user-friendly platform where students can learn, practice, and grow—regardless of their background or location.",
    skills: ["React ", "Firebase"],
    images: [project2_img1, project2_img2],
    github: "https://github.com/Prashanth9492/edu",
    liveDemo: "https://free-edu-platform.vercel.app",
  },

    {
    name: "Shoecart",
    description: "A modern and responsive e-commerce platform for stylish and affordable footwear.",
    details: "Shoecart is a fully responsive online shoe store built with React and MongoDB. It features a wide collection of stylish and affordable footwear for men, women, and kids. Users can explore various categories, view detailed product information, add items to the cart, and enjoy a smooth shopping experience with a clean and user-friendly interface.",
    skills: ["React", "css", "MongoDB",],
    images: [project4_img1, project4_img2, project4_img3, project4_img4, project4_img5, project4_img6, project4_img7],
    github: "https://github.com/example/project3",
    liveDemo: "https://shoecart-ecommerce.vercel.app",
  },

 
  {
    name: "SRKR Homepage",
    description: "Collage sample home page design",
    details: "This project is a modern and responsive homepage design for SRKR College, built to showcase the institution's highlights, departments, and facilities through an engaging and intuitive interface.",
    skills: ["React", "JavaScript", "CSS", "HTML"],
    images: [project1_img1, project1_img2, project1_img3, project1_img4, project1_img5, project1_img6],
    github: "https://github.com/Prashanth9492/srkr-homepage",
    liveDemo: "https://srkr-homepage-demo.vercel.app",
  },

      {
  name: "RAG AI Assistant",
  description: "A RAG AI Assistant is an intelligent system",
  details: "A RAG AI Assistant is an intelligent system that answers user questions by first searching for the most relevant information from documents, databases, or files and then generating a clear and meaningful response using AI. Instead of relying only on pre-trained knowledge, it uses real and updated data, which makes the answers more accurate and reliable. It understands the user’s question, finds the right context, and explains the answer in simple language.",
  skills: ["next.js", "Taillwind","mongoDB","firebase","openAI"],
  images: [ai,ai1,ai3],
  github: "hhttps://github.com/Prashanth9492/ai-assistant-t8",
  liveDemo: "https://v0-personal-ai-assistant-jet-beta.vercel.app/",
},


];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardImageIndices, setCardImageIndices] = useState(
    projectsData.map(() => 0) // Initialize image index for each project card
  );

  // Auto-slide effect for project cards (main page)
  useEffect(() => {
    const interval = setInterval(() => {
      setCardImageIndices((prevIndices) =>
        prevIndices.map((index, i) => {
          const projectImages = projectsData[i].images;
          return projectImages.length > 1 ? (index + 1) % projectImages.length : index;
        })
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Auto-slide effect for the selected project's images (modal)
  useEffect(() => {
    if (selectedProject && selectedProject.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % selectedProject.images.length
        );
      }, 1500); // Change image every 1.5 seconds

      return () => clearInterval(interval); // Cleanup on unmount or modal close
    }
  }, [selectedProject]);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to restore scrolling on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects">
      <div className="projects-container">
        <h3 className="subheading">Browse My Recent</h3>
        <h1>Projects</h1>
        <hr className="divider" />
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.images[cardImageIndices[index]]})` }}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0); // Start carousel at first image
                }}
              ></div>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="skills-tags">
                {(project.skills || []).map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                <button 
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0); // Start carousel at first image
                  }} 
                  className="btn"
                >
                  More details
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
              
              <div className="carousel">
                {(selectedProject.images || [])[currentImageIndex] ? (
                  <img src={(selectedProject.images || [])[currentImageIndex]} 
                    alt={`${selectedProject.name} ${currentImageIndex + 1}`} 
                    className="carousel-image"
                  />
                ) : (
                  <div className="carousel-image-placeholder">No image available</div>
                )}
              </div>
              
              <h2>{selectedProject.name}</h2>
              <p className="modal-details">{selectedProject.details}</p>
              <div className="skills-tags">
                {(selectedProject.skills || []).map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
              <div className="modal-buttons">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn2">GitHub</a>
                {selectedProject.liveDemo && selectedProject.liveDemo !== "#" && (
                  <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="btn2">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;