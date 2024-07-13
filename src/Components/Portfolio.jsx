/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Air-bnb clone",
    description:
      "Created an Airbnb clone using HTML, CSS, and JavaScript, with EJS for templating. Developed RESTful APIs with Node.js and Express.js, integrating MongoDB with Mongoose",
    url: "https://github.com/MoxitParmar/airbnb-project",
  },
  {
    title: "Youtube backend by node.js",
    description:
      "Developed VideoVerse, a complete backend web application similar to YouTube, built with the Node.js and Express.js for the backend, integrating MongoDB with Mongoose. Implemented JWT tokens for user authentication, video upload,tweets, playlists, subscribers, and liked videos with infinite scroll pagination and comment functionality.",
    url: "https://github.com/MoxitParmar/VideoVerse",
  },
  {
    title: "React based Calculator Application with Aceternity.ui",
    description:
      "Designed and implemented an React-based Calculator application using Aceternity.ui for dynamic user interfaces.",
    url: "https://github.com/MoxitParmar/reactCalculator",
  },
  {
    title: "Api based article summarizer react Application",
    description:
      "Designed and implemented an API-based article summarizer application using React for dynamic user interfaces. Leveraged React's component-based architecture for efficient rendering and user interaction, enhancing user experience.",
    url: "https://github.com/MoxitParmar/webLOOKup",
  },
  // {
  //   title: "My Resume Site",
  //   description:
  //     "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
  //   url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  // },
  {
    title: "React based To-Do app with Redux and localstorage",
    description:
      "Developed a React-based to-do list application, enhancing state management with Redux for streamlined data flow. Utilized Redux's centralized store and actions to manage application state efficiently, providing a seamless user experience.",
    url: "https://github.com/MoxitParmar/react-redux-todo",
  },
  {
    title: "API based weather Application",
    description:
      "Designed and implemented an API-based weather application using React for dynamic user interfaces. Leveraged React's component-based architecture for efficient rendering and user interaction, enhancing user experience.",
    url: "https://github.com/MoxitParmar/weather-API",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
