// src/components/Projects.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    id: "adopsflow",
    title: "Development of a Design System",
    company: "Axa GIE",
    duration: "February 2024 to Present",
    description: `Developed an intuitive and fully accessible design system.`,
    roles: [
      "Created and implemented a comprehensive design system with user-friendly UI components.",
      "Ensured accessibility is well integrated in all components.",
      "Implemented unit tests.",
    ],
    tools: "Jest, NodeJs, VueJs, ReactJs, Playwright, Gitlab CI, Directus, Strapi",
    methodology: "Scrum, Kanban"
  },
  {
    id: "adopsflow",
    title: "AdOpsFlow: Ad Slot Management and Dashboard",
    company: "Sofrecom",
    duration: "January 2023 to August 2023",
    description: `Developed and managed ad slots on the Orange website, created a dashboard for managing and optimizing ad creatives.`,
    roles: [
      "Migrated features to Directus using Vue.js and Node.js.",
      "Refactored frontend from React to Vue.js.",
      "Maintained testing automation.",
      "Implemented CI/CD on Gitlab CI."
    ],
    tools: "Jest, NodeJs, VueJs, ReactJs, Playwright, Gitlab CI, Directus, Strapi",
    methodology: "Scrum, Kanban"
  },
  {
    id: "services-management",
    title: "Services Management Application & Regulatory Reporting",
    company: "Target Energy Solutions",
    duration: "July 2021 to December 2022",
    description: `Built an app for services management and regulatory reporting.`,
    roles: [
      "Led feature development with React, TypeScript.",
      "Created reusable components and GraphQL queries.",
      "Fixed bugs and reviewed code."
    ],
    tools: "ReactJS, Typescript, GraphQl, Apollo, SASS, Eslint, Jest, CI/CD pipelines",
    methodology: "Scrum"
  },
  {
    id: "inky-podcast",
    title: "Inky Podcast - Online Audio Distribution Platform",
    company: "AL Khatt",
    duration: "November 2020 to July 2021",
    description: `Tunisia's first platform for native podcasts.`,
    roles: [
      "Enhanced user experience.",
      "Designed frontend architecture.",
      "Developed test units."
    ],
    tools: "ReactJS, Redux, ES6, SASS, Eslint, Jest, Babel, Axios, SQL",
    methodology: "Scrum"
  },
  {
    id: "inkube",
    title: "INKUBE – Publication Tool",
    company: "AL Khatt",
    duration: "May 2020 to November 2020",
    description: `AI-assisted content creation tool for digital newsrooms.`,
    roles: [
      "Developed base components.",
      "Corrected errors.",
      "Launched on time."
    ],
    tools: "ReactJS, Lit Element, Redux, ES6, Apache Echarts, Sass, Babel, Axios, SQL, Twig",
    methodology: "Scrum"
  },
  {
    id: "online-magazine",
    title: "Online Independent Media Magazine",
    company: "AL Khatt",
    duration: "November 2019 to May 2020",
    description: `Platform for delivering insightful content.`,
    roles: [
      "Developed data visualization.",
      "Updated core and optimized performance."
    ],
    tools: "ReactJS, PHP7, Wordpress, Javascript, SQL, Apache Echarts, Sass, Jest",
    methodology: "Scrum"
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3><Link to={`/projects/${project.id}`}>{project.title}</Link></h3>
            <p><strong>Company:</strong> {project.company}</p>
            <p><strong>Duration:</strong> {project.duration}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
