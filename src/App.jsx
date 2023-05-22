import './App.css';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';

export default function App() {
  return (
    <div className="App">
      <h1>REACT DEV SKILLS</h1>
      <SkillList />
      <hr />
      <NewSkillForm />
    </div>
  );
}


