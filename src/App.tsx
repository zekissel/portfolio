import About from './component/About'
import Projects from './component/Projects'
import './App.css'
import Education from './component/Education'
import Experience from './component/Experience'
import Contact from './component/Contact'

function App () {

  return (
    <>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>

      <h1><a href='/'>Zane Kissel</a></h1>

      <main>
        <About />

        <Projects />

        <Experience />

        <Education />

        <Contact />
      </main>
    </>
  )
}

export default App
