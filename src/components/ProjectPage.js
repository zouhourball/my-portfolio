// src/components/ProjectPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';

const projects = [
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

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find(proj => proj.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <h2>{project.title}</h2>
      <p><strong>Company:</strong> {project.company}</p>
      <p><strong>Duration:</strong> {project.duration}</p>
      <p>{project.description}</p>
      <ul>
        {project.roles.map((role, idx) => (
          <li key={idx}>{role}</li>
        ))}
      </ul>
      <p><strong>Tools:</strong> {project.tools}</p>
      <p><strong>Methodology:</strong> {project.methodology}</p>
    </div>
  );
};

export default ProjectPage;
