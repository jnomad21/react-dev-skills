import SkillListItem from "./SkillListItem"
export default function SkillList({skills}){
    return(
        <>
        <ul>
        {skills.map((s, idx)=>
        (<SkillListItem skill={s} key = {idx} />
        ))}
        </ul>
        </>
  
 );
    
}