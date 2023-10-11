// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/projectImage1.png";
import projectImage2 from "./assets/projects/projectImage2.png";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Parth Ojha",
  tagline: "Turning Ideas into Digital Realities",
  img: profile,
  about: `Ambitious Full Stack Developer with a strong foundation in HTML, CSS and JavaScript. Seeking to leverage my knowledge and skills in MERN Stack  that includes React.js, Express.js, Node.js and MongoDB. Passionate about making dynamic projects and deliver exceptional user experiences. Strong professional with Bachelor in Technology(Mechanical Engineering) from BITS Edu Campus, Vadodara and a course in Web Development with Web3.0 from Almabetter, Banglore. 
  `,
};

// Social Media URLs 
export const socialMediaUrl = {
  linkdein: "https://linkedin.com/in/parthojha12",
  github: "https://github.com/parthojha12",
  twitter: "https://twitter.com/parth_ojha",
  instagram: "https://www.instagram.com/parthojha",
};

// Work Experience 
export const workDetails = [
  {
    Position: "Web Develoment Trainee",
    Company: `AlmaBetter`,
    Location: "Bengaluru (Remote)",
    Type: "Full Time",
    Duration: "September 2022 - October 2023",
  },
  {
    Position: "Assistance Maintenance Engineer",
    Company: `EMIL(Aditya Birla Group)`,
    Location: "Vapi",
    Type: "Full Time",
    Duration: "October 2020 - October 2022",
  }
];

// Enter your Education Details here
export const eduDetails = [
  
  {    
    Position: "Bachelor of Engineering",
    Company: `Babaria Institute of Technology`,
    Location: "Vadodara",
    Type: "Full Time",
    Duration: "Aug 2016 - July 2020",
  },
  {    
    Position: "XII (Senior Secondary)",
    Company: `St. Xavier's High School`,
    Location: "Vapi",
    Type: "Full Time",
    Duration: "April 2015 - March 2016",
  }
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Resume Builder",
    image: projectImage1,
    description: `Designed & Developed a user-friendly Resume Builder web application that
    allows users to download resumes in pdf format`,
    techstack: ": React.js, react-Redux, MaerualUI, React-router, jsPdf",
    previewLink: "https://resume-builder-almabetter-six.vercel.app/",
    githubLink: "https://github.com/parthojha12/Resume-Builder-Almabetter",
  },
  {
    title: "Get-Youtube-Subscribers",
    image: projectImage2,
    description: `Designed and developed a REST API that performs the GET method. Two operations were performed: Fetching a list of all the data, Fetching a particular data based on the given ID from the Subscribers list.`,
    techstack: "ExpressJS, MongoDB, NodeJS, Postman, HTTP requests",
    previewLink: "https://get-youtube-subscribers-almabetter-backend.vercel.app/",
    githubLink: "https://github.com/parthojha12/get-youtube-subscribers",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "parthojha541@mail.com",
  phone: "+91 7433927592",
};
