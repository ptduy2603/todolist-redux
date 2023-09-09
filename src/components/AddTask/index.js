import './AddTask.css'
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid'

function AddTask() {
    const taskTypes = ['Medium', 'High', 'Low']
    const [inputTask, setInputTask] = useState("")
    const [inputType, setInputType] = useState(taskTypes[0])
    const dispatch = useDispatch()
    const ref = useRef()

    const handleChangeInputTask = (event) => setInputTask(event.target.value) 
    const handleChangeInputType = (event) => {
        setInputType(event.target.value)
    }
    const handleAddNewTask = () => {
        const data = {
            id : uuidv4(),
            content: inputTask, 
            type : inputType, 
            completed : false
        }
        dispatch(addTodoAction(data))
        setInputTask("")
        setInputType(taskTypes[0])
        ref.current.focus()
    }
    
    return ( 
        <div className='addtask-section'>
            <input type='text' placeholder='Add new task' autoFocus spellCheck="false" value={inputTask} onChange={handleChangeInputTask} ref={ref}></input>
            <select className='task-type-select' onChange={handleChangeInputType} value={inputType} >
                {
                    taskTypes.map((type, index) => <option value={type.toLocaleLowerCase()} key={index}>{type}</option>)
                }
            </select>
            <button className='btn-addtask' onClick={handleAddNewTask}>Add</button>
        </div>
     );
}

export default AddTask;