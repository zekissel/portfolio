

export default function Projects () {

  return (
    <section id='projects' className='text-dark dark:text-light flex flex-col justify-center items-center w-full '>
    
      <h2 className='text-xl w-5/6 my-4 border-b border-b-dark dark:border-b-light'>Projects</h2>
      
      {
        [
          {title: 'Balance Book', link: 'https://github.com/zekissel/balance-book', pic: '', desc: 'Desktop application to manage personal finances. Created using Tauri, React, and Rust. Uses Plaid open banking API to fetch real financial accounts and transactions, and local SQLite database for storage.'},
          {title: 'Doodle Diction', link: 'https://github.com/zekissel/doodle-diction', pic: '', desc: 'Full-stack application to draw pictures, write sentences, and have fun. Created using React, Python (Flask), and Redis. Deployed using Kubernetes on Google Cloud Platform.'},
        ].map( (item, ind) => (
          <div key={ind} className='w-3/4 mx-auto text-justify border border-solid border-dark dark:border-light p-2 '>
            <h1 className='font-semibold text-2xl mt-2 '>{ item.title }</h1>
            <a className='font-light text-lg ' target='_blank' rel='noopener noreferrer' href={item.link}>https://github.com/zekissel/{ item.title.toLocaleLowerCase().split(' ').join('-') }</a>
            <p>{ item.desc }</p>
          </div>
        ))
      }

    </section>
  )
}