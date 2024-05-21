import Nav from "./component/Nav";
import About from "./component/About";
import { useState } from "react";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'light' ? true : false);
  const toggleTheme = () => {
    if (!theme) localStorage.setItem('theme', 'light');
    else localStorage.removeItem('theme');
    setTheme(!theme);
  }

  return (
    <div className={(!theme ? 'dark ' : '') + 'bg-light2 dark:bg-dark2 w-full h-full m-0 transition duration-250 overflow-hidden '}>
      
      <Nav theme={theme} toggleTheme={toggleTheme} />

      <div id='top'></div>
      <main className='max-w-[calc(920px)] w-3/4 md:w-5/6 h-[calc(100%-16px)] mt-16 mb-8 ml-auto mr-2 lg:mr-auto p-2 pb-8 pt-8 flex flex-col items-center justify-center overflow-hidden overflow-y-auto border border-solid border-dark dark:border-light bg-light dark:bg-dark '>

        <About theme={theme} />

        <Skills theme={theme} />

        <Projects />

        <Experience  />

      </main>

    </div>
  )
}

export default App;