import './App.css';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import { useState } from 'react';


export default function App() {
  const[skills, setSkills] = useState([
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
  ])

  const addSkills = (newSkills)=>
    setSkills([...skills, newSkills])
  
  return (
    <div className="App">
      <h1>REACT DEV SKILLS</h1>
      <SkillList skills ={skills}/>
      
      <NewSkillForm addSkills={addSkills}/>
    </div>
  );
}


