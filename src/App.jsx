
import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'       
import Footer  from './Components/Footer/Footer.jsx'
import Home    from './Pages/Home.jsx'
import About   from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Projects from './Pages/Projects.jsx'

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import './App.css'
import SkillsAndTools from './Pages/SkillsAndTools.jsx'
import ProjectCard from './Components/ProjectCard/ProjectCard.jsx'

function App() {
  

  return (
    
    <>
      
        <Navbar />
        
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<SkillsAndTools />} />
        </Routes>
        
      
    </>
    
    
  );
}

export default App
