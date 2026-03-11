import React from 'react'
import ProjectCard from '../Components/ProjectCard/ProjectCard.jsx';
import './Projects.css';
import project1Image from '../assets/AlignmentKenya.png';
import project2Image from '../assets/TaskiGoals..png';
import project3Image from '../assets/shopsmart..png';
import project4Image from '../assets/ALX.png';

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="project-cards">
        <ProjectCard 
          image={project1Image} 
          title="Alignment Kenya Website" 
          description="A responsive website built for Alignment Kenya to showcase their mission, programs, and community impact."
          stack={["Squarespace", "CSS", "Responsive Design"]}
        >
          <a
            href="https://www.alignmentkenya.co.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn primary"
        >
            View It Here
          </a>

          <a
            href="https://github.com/yourname/taskigoal"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn secondary"
        >
            View GitHub Repo
          </a>
        </ProjectCard>
        <ProjectCard 
          image={project2Image} 
          title="TaskiGoal (To-Do Application)" 
          description="A task management application to help users organize and prioritize their daily tasks.It's built from scratch as a redesign of an earlier project. This project reflects my growth as a developer, with improved structure, cleaner UI, and better state management compared to the original version."
          stack={["React", "CSS", "JavaScript"]}
        >
          <a
            href="https://taskigoals.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn primary"
        >
            View It Here
          </a>
          <a
            href="https://github.com/buildwithmaya/TaskiGoals.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn secondary"
        >
            View GitHub Repo
          </a>
        </ProjectCard>
        <ProjectCard 
          image={project3Image} 
          title="E-commerce Website (In Progress)"
          description="A frontend-focused e-commerce application started during my ALX specialization. The project currently includes product listing and UI structure, with backend integration and authentication planned."
          stack={["React", "CSS", "JavaScript"]}
        >
          <a
            href="https://shopsmart.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn primary"
        >
            View It Here
          </a>
          <a
            href="https://github.com/buildwithmaya/shopsmart.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn secondary"
        >
            View GitHub Repo
          </a>
        </ProjectCard>
        
        <ProjectCard 
          image={project4Image} 
          title="AlX Software Engineering Projects"
          description="A collection of projects completed during the ALX Software Engineering program, covering computer science fundamentals, backend development, and system-level programming. Projects include an AirBnB Clone, a Simple Shell, and a Flask-based application."
          stack={["C", "Python", "Flask", "Linux"]}
        >
          <a
            href="https://github.com/sheelahk/alx-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn primary"
        >
            View It Here
          </a>
          <a
            href="https://github.com/buildwithmaya?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn secondary"
        >
            View GitHub Repo
          </a>
        </ProjectCard>
        
      </div>
    </div>
  )
}
