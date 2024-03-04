
export default function Experience () {

  interface Experience {
    company: string,
    location: string,
    position: string,
    date: string,
    description: string,
    link: string,
    image: string,
  }

  const experience: Experience[] = [
    {
      company: "A2 Secure Technologies",
      position: "Security Analyst L1",
      location: "Barcelona, Spain (remote)",
      date: "May 2022 - Present",
      description: "Analyze and responds to security events and incidents. Monitors and analyzes network traffic, IDS/IPS alerts, and security logs. Investigates and resolves security incidents and recommends enhancements to improve security.",
      link: "https://a2secure.com/en/",
      image: "a2-logo.jpg",
    },
    {
      company: "University of Pittsburgh",
      position: "Lab Consultant",
      location: "Pittsburgh, PA",
      date: "June 2022 - October 2022",
      description: "Assist students with technology related issues in computing lab. Monitor and maintain lab equipment, including network of printers. Provide technical support to students and faculty.",
      link: "https://technology.pitt.edu/",
      image: "pitt-logo.png",
    },
  ]

  return (
    <section id="experience">
      <h2>Experience</h2>
      <ul>
        { experience.map((exp, index) => 
          <>
            <li key={index}>
              <img className="logo" src={exp.image} alt={exp.company} />
              <div className="exp-container">
                <h3>{exp.company}</h3>
                <h4>{exp.position}</h4>
                <p>{exp.date}</p>
                <p>{exp.description}</p>
                <a href={exp.link}  target="_blank">Link</a>
              </div>
            </li>
            { experience.length - 1 !== index && <hr/> }
          </>
        )}
      </ul>
    </section>
  )
}