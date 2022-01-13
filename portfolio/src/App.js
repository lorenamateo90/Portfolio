
import React, {useState, useEffect} from 'react';
import './App.scss';
import AboutMe from './components/aboutMe/AboutMe';
import Cover from "./components/cover/Cover";
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [scrollHeight, setScrollHeight] = useState (0);
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };
  
  useEffect(()=> (
    window.addEventListener("scroll", handleScroll)
  ), [scrollHeight])

  return (
    <div className="App">
    <BrowserRouter>
    <Navbar isScrolling={scrollHeight}/>
    <Cover/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
