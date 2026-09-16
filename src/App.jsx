import { useState } from 'react'

import heroImg from './assets/hero.png'

import reactLogo from './assets/react.svg'

import viteLogo from './assets/vite.svg'

import myPhoto from './assets/manoj5.png'

import './App.css'

import './index.css'

 function App() {
    const [activeSection, setActiveSection] = useState("manoj");
  return (
    <div>

{/* Navigation */}

<nav className="navbar">

  <div className="nav-logo">
    <h2>Manoj</h2>
  </div>

  <div className="nav-home">
    <a href="#manoj">Home</a>
  </div>

  <div className="nav-about">
    <a href="#about">About</a>
  </div>

  <div className="nav-skills">
    <a href="#skills">Skills</a>
  </div>

  <div className="nav-projects">
    <a href="#projects">Projects</a>
  </div>

  <div className="nav-contact">
    <a href="#contact">Contact</a>
  </div>

  <div className="nav-myself">
    <a href="#manoj">Myself</a>
  </div>

</nav>

<section id="manoj" className="home">

  {/* Details - */}

  <div>

    <p>Hello, I'm</p>

    <h1>Manoj</h1>

    <h2>Frontend Developer</h2>

    <p className="manoj67">
      I build responsive and user-friendly websites
      using HTML, CSS, JavaScript and React.
    </p>

    <div className="home-buttons">  

      <a href="/resume.pdf" className="maran">
        MY RESUME
      </a>

      <a href="#projects" className="maran1">
        View My Projects
      </a>

    </div>

  </div>


  {/* Photo - RIGHT */}

<div className="home-photo">

  <img
    className="diamond"
    src="/diamond.webp"
    alt="Background"
  />

  <img
    className="my-photo"
    src={myPhoto}
    alt="Manoj"
  />

</div>

</section>


      {/* About */}
      <section id="about" className="section">

        <h2>About Me</h2>

        <p>
          I'm an aspiring Frontend Developer who enjoys
          building websites and learning modern web
          technologies.
        </p>

      </section>


      {/* Skills */}
      <section id="skills" className="section">

        <h2>My Skills</h2>

        <div className="skills">

          <div className="skill">HTML</div>

          <div className="skill">CSS</div>

          <div className="skill">JavaScript</div>

          <div className="skill">React</div>

          <div className="skill">Excel</div>

        </div>

      </section>


      {/* Projects */}
      <section id="projects" className="section">

        <h2>My Projects</h2>

        <div className="projects">

          <div className="project-card">
            <h3>FARM SHEILD USING AI AUTOMATION</h3>

            <p>
              A shopping website built using React,
              JavaScript, HTML and CSS.
            </p>

            <button>View Project</button>
          </div>


          <div className="project-card">
            <h3>TOURIST GUIDE USING LOCATION DETECTION</h3>

            <p>
              A simple React application demonstrating
              useState and event handling.
            </p>

            <button>View Project</button>
          </div>


          <div className="project-card">
            <h3>To-Do List</h3>

            <p>
              A simple task management application
              built using JavaScript.
            </p>

            <button>View Project</button>
          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="section contact">

        <h4>Contact Me</h4>

        <p>Email: Maranms@example.com</p>

        <p>Phone: +91 9342556623</p>

        <p>LinkedIn: Your LinkedIn Profile</p>

        <p>GitHub: Your GitHub Profile</p>

      </section>


      {/* Footer */}
      <footer>
        <p>© 2026 Manoj. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;