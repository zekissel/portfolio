import GITHUB from '../assets/github.svg'
import LINKED from '../assets/linkedin.svg'
import GMAIL from '../assets/gmail.svg'
import { useEffect, useState } from 'react';

interface AboutProps {
  theme: boolean;
}
export default function About ({ theme }: AboutProps) {

  const [showCopied, setShowCopied] = useState(false);
  const writeToClipboard = async (e: any) => {
    try {
      await navigator.clipboard.writeText('zekissel@gmail.com');
      setShowCopied(true);
    } catch (err) {}
    e.stopPropagation();
  }
  useEffect(() => {
    if (showCopied) setTimeout(() => setShowCopied(false), 3000);
  }, [showCopied]);

  return (
    <section className='text-dark dark:text-light mb-8 flex flex-col md:flex-row justify-center items-center md:items-start w-full '>

      <div id='about' className='flex flex-col items-center m-4 ml-0 '>
        <img src='/headshot.jpg' className='h-64' />
        <h1 className='font-semibold text-2xl mt-2 '>Zane Kissel</h1>
        <h2 className='font-light text-lg '>Software Engineer</h2>
      </div>

      <div className='w-3/4 md:w-1/2 mt-4 mx-auto md:mx-0 text-justify border border-solid border-dark dark:border-light p-2 '>
        I am an aspiring software engineer with a passion for learning and problem solving. I have experience with a variety of programming languages and technologies, and I am always looking to expand my skillset. I have completed my Bachelor's degree in Computer Science at the University of Pittsburgh, and I have a strong interest in backend, full-stack development, and cybersecurity. I am currently seeking an internship or entry level position within software engineering or related fields.

        <br/>
        <span className='w-full flex flex-row justify-around items-center mt-2 '>
          {
            [
              { img: GITHUB, link: 'https://github.com/zekissel' },
              { img: LINKED, link: 'https://www.linkedin.com/in/zane-kissel/' },
              { img: GMAIL, link: 'zekissel@gmail.com' },
            ].map((item) => ( item.link === 'zekissel@gmail.com' ?
              <img src={item.img} style={ !theme ? {filter: "invert(90%) sepia(99%) saturate(1%) brightness(111%) contrast(148%)"} : undefined} onClick={writeToClipboard} className='cursor-pointer ' /> :
              <a href={item.link} target='_blank' rel='noopener noreferrer' className='m-2 ' ><img src={item.img} style={ !theme ? {filter: "invert(90%) sepia(99%) saturate(1%) brightness(111%) contrast(148%)"} : undefined} /></a>
            ))
          }
        </span>
      </div>


      { showCopied &&
        <div className='absolute top-2 left-2/5 bg-dark dark:bg-light text-light dark:text-dark p-1 '>
          <p>Copied to clipboard!</p>
        </div>
      }
    </section>
  )
}