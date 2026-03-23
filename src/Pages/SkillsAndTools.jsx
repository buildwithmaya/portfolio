import React from 'react'
import './SkillsAndTools.css'
import JS from '../assets/JS-Icon.png'
import ReactIcon from '../assets/React-icon.svg.png'
import HTMLIcon from '../assets/HTML-icon.avif'
import CSSIcon from '../assets/css-icon.png'
import git from '../assets/git-icon.png'
import github from '../assets/github-icon.png'
import restfulAPI from '../assets/Restful-api.jpg'
import commandLine from '../assets/cmd-icon.jpg'
import vsCode from '../assets/vscode-icon.jpg'
import responsiveWeb from '../assets/Responsive-Design.jpg'

export default function SkillsAndTools() {
  return (
    <div className='skillsandtools'>
        <h2>Skills & Tools </h2>
        <p>These are the technologies, skills and tools I use to bring products to life</p>
        <ul className='tools'>
            <li>
                <div className="tool-card">
                    <img src={JS} alt="JavaScript icon" className="tool-icon" />
                    <span>JavaScript</span>
                </div>
            </li>
            <li>
                <div className="tool-card">
                    <img src={HTMLIcon} alt="HTML5 icon" className="tool-icon" />
                    <span>HTML5</span>
                </div>
            </li>
            <li>
                <div className="tool-card">
                    <img src={CSSIcon} alt="CSS icon" className="tool-icon" />
                    <span>CSS3</span>
                </div>
            </li>
            <li>
                <div className="tool-card">
                    <img src={ReactIcon} alt="React icon" className="tool-icon" />
                    <span>React</span>
                </div>
            </li>
            <li>
                <div className="tool-card">
                    <img src={git} alt="Git icon" className="tool-icon" />
                    <span>Git</span>
                </div>
            </li>
            <li>
                <div className="tool-card">
                    <img src={github} alt="Github icon" className="tool-icon" />
                    <span>GitHub</span>
                </div>
            </li>
            <li>
                <div className="tool-card">
                    <img src={restfulAPI} alt="Restful API icon" className="tool-icon" />
                    <span>RESTful APIs</span>
                </div>
            </li>
            <li>
                <div className="tool-card">
                    <img src={commandLine} alt="Command Line icon" className="tool-icon" />
                    <span>Command Line</span>
                </div>
            </li>
            <li>
                <div className="tool-card">
                    <img src={vsCode} alt="VS Code icon" className="tool-icon" />
                    <span>VS Code</span>
                </div>
            </li>
            <li>
                <div className="tool-card">
                    <img src={responsiveWeb} alt="Responsive Design icon" className="tool-icon" />
                    <span>Responsive Design</span>
                </div>
            </li>
        </ul>
        <p>Improving my skills in, and understanding of vanilla JavaScript and<a className='github-ref' href="https://github.com/buildwithmaya?tab=repositories" target='_blank' rel='noopener noreferrer'>Follow my journey here.</a></p>
 React.Also, having fun learning Using AI-assisted development as part of my learning process to experiment with ideas and build small projects 

    </div>
  );
}
