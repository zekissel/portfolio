
interface NavProps {
  theme: boolean;
  toggleTheme: () => void;
}
export default function Nav({ theme, toggleTheme }: NavProps) {

  return (
    <nav className='fixed left-1 top-0 w-32 ml-0 mr-auto list-none flex flex-col justify-start my-2 '>

      <li className='flex w-full justify-self-start p-1 m-2 mb-8 '>
        <img className='hover:opacity-65 ' src={(theme ? '/moon' : '/sun') + '.svg'} alt={theme ? 'dark mode' : 'light mode'} onClick={toggleTheme} />
      </li>

      <h1 className='m-2 text-dark dark:text-light text-3xl hover:cursor-pointer w-fit '
          onClick={() => document.getElementById('top')?.scrollIntoView({behavior: 'smooth'})}>
        Zane Kissel
      </h1>

      { [
          {ref: 'about', label: 'About'}, 
          {ref: 'skills', label: 'Skills'},
          {ref: 'projects', label: 'Projects'}, 
          {ref: 'experience', label: 'Experience'}, 
        ].map( (item, ind) => (
        <button 
          key={ind} 
          className='m-2 p-1 border border-solid bg-light dark:bg-dark border-dark text-dark dark:border-light dark:text-light hover:bg-dark dark:hover:bg-light hover:text-light dark:hover:text-dark transition duration-250 '
          onClick={() => document.getElementById(item.ref)?.scrollIntoView({behavior: 'smooth'})}
        >
          { item.label }
        </button>
      ))}

    </nav>
  )
}