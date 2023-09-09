import './Todo.css'
import Filter from '../Filter/Filter';
import Tasks from '../Tasks';
import AddTask from '../AddTask';

function Todo() {
    return ( 
        <div className='wrapper'>
            <h1 className='heading'>TODO APP with REDUX</h1>    
            <Filter />   
            <Tasks />
            <AddTask />
        </div>
     );
}

export default Todo;