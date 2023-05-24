import './NewSkillForm.css'
import { useState } from 'react'
export default function NewSkillForm({addSkills}){
    const [newSkills, setNewSkills]=useState ({name:'', level:3})
    
    function handleChange(e){
        setNewSkills({
            ...newSkills,
            [e.target.name]: e.target.value
        })
    }
    function handleAddSkills(e){
        e.preventDefault()
        addSkills(newSkills)
        setNewSkills({
            skill: '',
            level: 3
        })
    }
    return (
        
        <form className="formy" onSubmit={handleAddSkills}>
            Skill <input type="text" name="name"
            value={newSkills.name}
            onChange={handleChange}/>

            <br />
            <label for="select">Level
                <select name="level" value={newSkills.level} onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button type="submit">ADD SKILL</button>
            </label>        
        </form>
    )
}