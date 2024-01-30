import '../index.css';
import Job from './Job';


function Experience() {
  return (
    <>
      <div className = "flex flex-col bg-slate-900 items-center justify-center pb-20" id="experience">
        <div className="text-white w-4/6 px-2 pb-4 text-4xl font-medium border-b font-mono">Experience</div>
        <Job 
            start="April" 
            finish="Oct 2023" 
            title="Amazon Web Services | Software Development Engineer Intern" 
            description="Developed and designed an internal tool to remove ambiguity and improve user experience. 
            Participated in writing JUnit unit tests and code reviews. 
            Utilized scrum to effectively work within a team, by attending daily and weekly meetings."
            software={["Java", "DynamoDB"]}
        ></Job>
        <Job 
            start="Sep 2020" 
            finish="Sep 2024" 
            title="Maynooth University | Computer Science & Software Engineering" 
            description="Studying Computer Science for 4 years. Java is the main programming language learnt throughout my years there. 
            A databases module was taught through PostgreSQL where I scored 89%.
            Other modules included learning Express.js, JavaScript, HTML, CSS and more. 
            I studied many theoretical modules, such as theory of computation and programming language design and semantics."
            software={["Java", "JavaScript", "PostgreSQL", "Express", "HTML", "CSS"]}
        ></Job>

      </div>
    </>
  );
}

export default Experience;
