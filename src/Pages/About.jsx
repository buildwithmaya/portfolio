import React from 'react'
import './About.css'

function About() {
  return (
        <section className="about">
          <h2>About Me</h2>

          
          <p>
            I’m an entry-level front-end developer with a strong interest in building
            clean, responsive, and accessible web interfaces.
          </p>

          <p>
            I transitioned into tech after working as a social worker, where I saw
            firsthand how technology could be used to improve systems and help solve
            real-world social problems.
          </p>

          <p>
            I’m happiest when I’m creating, learning, exploring, and thinking about how
            to make things better.
          </p>

          <p>
            Outside of work, you’ll usually find me spending time with friends and
            family, watching movies, and reading.
          </p>



          <div className="skills">
            <div>
              <h4>Frontend</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>

            <div>
              <h4>Tools</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Vite</li>
              </ul>
            </div>
          </div>
    </section>

  )
}

export default About  