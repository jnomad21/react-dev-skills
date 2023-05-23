import './SkillListItem.css';
export default function SkillListItem({skill}){
return(
<>
<li className="skill-list"><span className="skill-set">{skill.name}</span><span className="level-set">LEVEL {skill.level}</span></li>
</>
)
}
