export default function NewSkillForm(){
    return (
        
        <form>
            <label for="input">Skill <input type="text"/>
            </label>
            <label for="select">Level
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button>ADD SKILL</button>
            </label>        
        </form>
    )
}