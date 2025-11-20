import React from 'react';
import styles from './experience.module.css';

const experiences = [
  {
    title: "Front-End Developer / Team Lead",
    company: "IntegCubes",
    period: "Nov 2024 – Present",
    points: [
      "Architected and developed advanced Angular apps with standalone components, RxJS, lazy loading, and optimized state management.",
      "Engineered interactive ERP and CRM dashboards with dynamic data visualization and real-time API sync.",
      "Enhanced performance with on-push change detection, code splitting, and build pipeline optimization.",
      "Collaborated with backend and design teams to deliver secure, responsive, enterprise-grade solutions."
    ]
  },
  {
    title: "Software Engineer",
    company: "Zaratica",
    period: "Jan 2025 – Aug 2025",
    points: [
      "Built dynamic ERP dashboards with reusable UI components using MERN Stack and Nuxt.",
      "Developed SEO-friendly landing pages with SSR, Tailwind CSS, and multilingual support.",
      "Ensured seamless backend API integration for improved reliability and user experience."
    ]
  },
  {
    title: "Full Stack Web Developer",
    company: "TakDevs",
    period: "June 2024 – Oct 2024",
    points: [
      "Built scalable Angular applications integrated with Strapi CMS for content management.",
      "Created intuitive, responsive UI components across devices.",
      "Implemented robust API integrations and optimized performance using debugging and tuning."
    ]
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "Vizteck Solutions",
    period: "Aug 2023 – Sept 2023",
    points: [
      "Translated Figma designs into responsive, pixel-perfect web interfaces.",
      "Developed a Learning Management System with Node.js and full CRUD functionality.",
      "Collaborated with designers and senior developers for seamless frontend-backend integration."
    ]
  }
];

const ExperienceTimeline = () => {
  return (
    <div className={styles.timelineContainer}>
      <h2 className={styles.header}>Work Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <div key={idx} className={styles.timelineItem}>
            <span className={styles.period}>{exp.period}</span>
            <a href="#" className={styles.pillButton}>{exp.company}</a>
            <h3 className={styles.title}>{exp.title}</h3>
            <ul className={styles.points}>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
