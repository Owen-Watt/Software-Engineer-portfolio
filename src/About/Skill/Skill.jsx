import './Skill.css';

function Skill(props) {
  // make sure the image is the same name as the prop
  const imageSource = `/images/${props.name}.png`
  return (
    <>
      <div className="skill-container" >
        <img src={imageSource} alt="true" className="skills-image"/>
        {props.name}
      </div>
    </>
  );
}

export default Skill;