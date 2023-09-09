import { v4 as uuidv4 } from 'uuid'

const initState = [
        {
            id : uuidv4(),
            content: "Quét nhà",
            type : "medium",
            completed : false
        },
        {
            id : uuidv4(),
            content : "Giặt đồ",
            type : "low",
            completed : false
        },
        {
            id : uuidv4(),
            content : "Chở crush đi mua sắm",
            type : "high",
            completed : false
        }
 ]

const tasksReducer = (state = initState, action) => {
    switch(action.type)
    {
        case 'tasks/add' :
            return [...state, action.payload]            

        case 'tasks/complete' :
            return state.map((task) => {
                    if(task.id === action.payload.id)
                        task.completed = action.payload.check
                    return task
                })
        
        default : return state
    }
}

export default tasksReducer
 