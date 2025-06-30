import React from "react";
import "./index.css"; // custom styles

const projects = [
  {
    title: "Razer Tech Labs Website",
    image: "https://res.cloudinary.com/daz8hb4ia/image/upload/v1748427134/Yellow_Black_Brush_Streetwear_Brand_Logo_yjvtmh.png",
    time: "Feb 2025",
    description: "A clean and responsive startup website built to represent a tech company offering innovative software solutions, product development, and IT services.",
    demo: "https://razertechlabs.com/",
    code: "#",
  },
  {
    title: "Gurugyaan Website",
    image: "https://res.cloudinary.com/daz8hb4ia/image/upload/v1741598981/logo_wbnm0a.jpg",
    time: "March 2025",
    description: "A student-focused platform that simplifies college admissions by providing course comparisons, university details, and expert guidance for better academic decisions.",
    demo: "https://gurugyaan.com/",
    code: "#",
  },
  {
    title: "Nxt Trendz",
    image: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    time: "April 2025",
    description: "Nxt Trendz is an E-commerce application like Amazon and Flipkart where users can log in to explore products with search, filters, and sort functionalities. Use Username: **rahul** & Password: **rahul@2021** to test the app.",
    demo: "https://nxtz.ccbp.tech/",
    code: "https://github.com/Tanmaydwivedi9161/nxt_trends",
  },
  {
    title: "Jobby App (Job Portal)",
    image: "https://cdn.pixabay.com/photo/2019/09/05/04/39/dream-job-4453054_1280.jpg",
    time: "May 2025",
    description: "A job portal platform allowing users to search and apply for jobs. Includes login authentication. Use Username: **rahul** & Password: **rahul@2021** to test the app.",
    demo: "https://TanmayJobbyApp.ccbp.tech",
    code: "https://github.com/Tanmaydwivedi9161/jobby_App",
  },
  {
    title: "ChatBot with Gemini API",
    image: "https://img.freepik.com/free-vector/chatbot-concept-illustration_114360-2293.jpg",
    time: "Sep 2024",
    description: "An intelligent chatbot application integrated with Gemini API to provide human-like responses. Designed for interactive assistance and automation.",
    demo: "https://chatbot-gemini-demo.vercel.app/",
    code: "https://github.com/Tanmaydwivedi9161/ProjectusingGemini",
  },
  {
    title: "Nxt Watch",
    image: "https://cdn.pixabay.com/photo/2024/10/23/18/37/youtube-9143824_1280.jpg",
    time: "June 2025",
    description: "Nxt Watch is a YouTube clone that supports both light and dark themes. It allows users to watch videos, navigate by categories, and includes login functionality. Use Username: **rahul** & Password: **rahul@2021** to test the app.",
    demo: "https://tanmayyoutube.ccbp.tech/", // Replace with your actual demo URL
    code: "https://github.com/Tanmaydwivedi9161/Nxt-Watch", // Replace with your actual GitHub link
  },
   {
    title: "NxtAccess App (Online Testing System)",
    image: "https://cdn.pixabay.com/photo/2017/06/28/10/53/board-2450236_1280.jpg",
    time: "July 2025",
    description: "A 10-question timed online testing system with automatic submission after 10 minutes. Useful for mock tests and assessments. Use Username: **rahul** & Password: **rahul@2021** to test the app.",
    demo: "https://tanmaytestlab.ccbp.tech",
    code: "https://github.com/Tanmaydwivedi9161/Nxt_watch", // Add GitHub repo link if available
  },
  {
  title: "Explore My Technical Blogs",
  image: "https://cdn.pixabay.com/photo/2014/08/27/08/07/blogging-428954_1280.jpg",
  time: "Ongoing",
  description: "Read my latest blogs on coding, tech tutorials, and software tips.",
  demo: "https://tanmay-blog-zeta.vercel.app/", // Local redirect
  code: "https://github.com/Tanmaydwivedi9161/my_blog",
}
];



export default function Projects() {
  return (
    <>
      <h1 className="project">Latest Projects</h1>
      <div className="projects-container" id="project">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-time">{project.time}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-buttons">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live</a>
                <a href={project.code} target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
