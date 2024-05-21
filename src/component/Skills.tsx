import PYTHON from '../assets/python.svg';
import TS from '../assets/ts.svg';
import JS from '../assets/js.svg';
import SQL from '../assets/sql.svg';
import JAVA from '../assets/java.svg';
import C from '../assets/c.svg';
import HTML from '../assets/html.svg';
import CSS from '../assets/css.svg';
import GIT from '../assets/git.svg';
import DOCKER from '../assets/docker.svg';
import K8S from '../assets/k8s.svg';
import AWS from '../assets/aws.svg';
import GCP from '../assets/gcp.svg';
import TW from '../assets/tw.svg';
import REACT from '../assets/react.svg';

interface SkillsProps {
  theme: boolean;
}
export default function Skills ({ theme }: SkillsProps) {

  return (
    <section id='skills' className='text-dark dark:text-light w-full flex flex-col justify-center items-center '>
    
      <h2 className='text-xl w-5/6 my-4 border-b border-b-dark dark:border-b-light'>Skills and Technologies</h2>
      
      <div className='grid grid-cols-3 md:grid-cols-5 w-5/6 '>
      {
        [
          { name: 'Python', icon: PYTHON },
          { name: 'TypeScript', icon: TS },
          { name: 'JavaScript', icon: JS },
          { name: 'SQL', icon: SQL },
          { name: 'Java', icon: JAVA },
          { name: 'C/C++', icon: C },
          { name: 'HTML', icon: HTML },
          { name: 'CSS', icon: CSS },
          { name: 'Rust', icon: '' },
          { name: 'Shell', icon: '' },
          { name: 'Git', icon: GIT },
          { name: 'Docker', icon: DOCKER },
          { name: 'Kubernetes', icon: K8S },
          { name: 'AWS', icon: AWS },
          { name: 'GCP', icon: GCP },
          { name: 'Agile', icon: '' },
          { name: 'React', icon: REACT },
          { name: 'Tailwind', icon: TW },
        ].map( (item, ind) => (
          <div key={ind} className='w-fit mx-auto text-justify border border-dashed border-dark dark:border-light p-2 flex flex-row items-center rounded-lg mb-3 '>
            <h1 className='text-lg mt-2 '>{ item.name }</h1>
            <img src={item.icon} style={ !theme ? {filter: "invert(90%) sepia(99%) saturate(1%) brightness(111%) contrast(148%)"} : undefined} className=' ' />
          </div>
        ))
      }
      </div>

    </section>
  )
}