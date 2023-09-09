import './Tasks.css'
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';
import { tasksRemainingSelector } from '../../redux/selectors';

function Tasks() {
    const tasks = useSelector(tasksRemainingSelector)
    
    return (
        <div className='task-list'>
            {
                tasks.map(task => <TaskItem content={task.content} type={task.type} key={task.id} id={task.id} completed={task.completed}/>)
            }
        </div>
    )
}

export default Tasks;