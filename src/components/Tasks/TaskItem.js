import './Tasks.css'
import PropTypes from 'prop-types';
import Badge from '../Badge';
import { useDispatch } from 'react-redux';
// import { completeTaskAction } from '../../redux/actions';
import tasksSlice from './TasksSlice';

function TaskItem({ content, type , completed, id}) {
    const dispatch = useDispatch()
    const completedText = {
        textDecoration : "line-through",
        color : "#333"
    }

    const handleClickCheck = (event) => {
        const payload = {
            id : id,
            check : event.target.checked
        }

        dispatch(tasksSlice.actions.complete(payload))

    }

    return ( 
        <div className='task-item'>
            <div className='task__content' style={completed?completedText:{}}>
                <input type='checkbox' className='task__check' onClick={handleClickCheck} defaultChecked={completed}/> 
                {content}
            </div>     
            <Badge type={type} disable={completed}/>
        </div>
     );
}

TaskItem.propTypes = {
    content : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    completed : PropTypes.bool.isRequired
}

export default TaskItem;