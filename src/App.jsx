import './App.css';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

export default function App() {
  return (
    <div className="App">
      <h1>REACT DEV SKILLS</h1>
      <SkillList skills ={skills}/>
      <hr />
      <NewSkillForm />
    </div>
  );
}


