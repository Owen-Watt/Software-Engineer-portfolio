import '../index.css';
import Job from './Job';


function Experience() {
  return (
    <>
      <div className = "flex flex-col bg-slate-900 items-center justify-center pb-20" id="experience">
        <div className="text-white w-4/6 px-2 pb-4 text-4xl font-medium border-b font-mono">Experience</div>
        <Job 
            start="April" 
            finish="October 2023" 
            title="Amazon Web Services | Software Development Engineer Intern" 
            description="Developed and designed an internal tool to remove ambiguity and improve user experience. 
            Participated in writing JUnit unit tests and code reviews. 
            Utilized scrum to effectively work within a team, by attending daily and weekly meetings."
            software={["Java", "DynamoDB"]}
        ></Job>

      </div>
    </>
  );
}

export default Experience;
