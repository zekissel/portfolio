
export default function Projects () {

  interface Project {
    title: string,
    description: string,
    link: string,
    image: string,
  }

  const projects: Project[] = [
    {
      title: "Doodle Diction",
      description: "Full stack web application developed using React, Flask, and Redis. Users create and connect to rooms to play a fun game involving writing creative sentences and drawing interesting pictures. Deployed with Kubernetes on various cloud platforms.",
      link: "https://github.com/zekissel/doodle-diction",
      image: "doodle-diction.png",
    },
    {
      title: "GRASP-HPO",
      description: "Collaborative project among students and professors of University of Pittsburgh and Federal University of Pampa. The goal of this project was to further research involving machine learning models functioning in critical intrusion detection systems at electrical substations, and to propose Greedy Random Adaptive Search Procedure (GRASP) as a method for hyperparameter optimization.",
      link: "https://github.com/shinwookim/GRASP-HPO",
      image: "grasp-hpo.jpg",
    },
  ]

  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>
        Here are some of the projects I have worked on. Click on the links to see the repository.
      </p>
      <ul>
        { projects.map((project, index) => 
          <>
            <li key={index}>
              <div className="proj-container">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link}  target="_blank">Repository</a>
              </div>
              <img className='proj-img' src={project.image} alt={project.title} />
              
            </li> 
            { projects.length - 1 !== index && <hr/> }
          </>
        )}
      </ul>
    </section>
  )
}