// src/components/Experiences.js

import React from 'react';
import './Experiences.css';

const experiences = [
  {
    id: "axa-finance",
    title: "Full-stack Developer",
    company: "Axa GIE",
    duration: "February 2024 to Present",
    description: `Developed a comprehensive design system.`,
    roles: [
      "Development a comprehensive Design System.",
      "Demonstrated and documented the product using Storybook.",
      "Implemented continuous deployment processes."
    ]
  },
  {
    id: "sofrecom",
    title: "Full-Stack Developer",
    company: "Sofrecom",
    duration: "January 2023 to January 2024",
    description: `Developed and managed ad slots on the Orange website, creating a dashboard for managing and optimizing ad creatives.`,
    roles: [
      "Migrated features to Directus using Vue.js and Node.js.",
      "Refactored frontend from React to Vue.js.",
      "Maintained testing automation.",
      "Implemented CI/CD on Gitlab CI."
    ]
  },
  {
    id: "target-energy-solutions",
    title: "React Web Developer",
    company: "Target Energy Solutions",
    duration: "July 2021 to December 2022",
    description: `Built an app for services management and regulatory reporting.`,
    roles: [
      "Led feature development with React, TypeScript.",
      "Created reusable components and GraphQL queries.",
      "Fixed bugs and reviewed code."
    ]
  },
  {
    id: "alkhatt",
    title: "Full-Stack Developer",
    company: "Alkhatt Organization",
    duration: "November 2019 to June 2021",
    description: `Built an online audio magazine platform.`,
    roles: [
      "building data-rich web applications, leveraging RESTful APIs services.",
      "Test Unit Creation for Component Validation.",
      "Timely Deployment of Web Application."
    ]
  },
];

const Experiences = () => {
  return (
    <div className="experiences" id='experiences'>
      {experiences.map(experience => (
        <div key={experience.id} className="experience">
          <h2>{experience.title}</h2>
          <p><strong>Company:</strong> {experience.company}</p>
          <p><strong>Duration:</strong> {experience.duration}</p>
          <p>{experience.description}</p>
          <ul>
            {experience.roles.map((role, idx) => (
              <li key={idx}>{role}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
