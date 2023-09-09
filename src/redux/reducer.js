import { combineReducers } from 'redux'

import filtersReducer from "../components/Filter/FiltersSlice"
import tasksReducer from "../components/Tasks/TasksSlice"

// const rootReducer = (state = {}, action) => {
//     return {
//         filter: filtersReducer(state.filter, action),
//         tasks: tasksReducer(state.tasks, action),
//     }
// }

const rootReducer = combineReducers({
    filter: filtersReducer,
    tasks: tasksReducer
})

export default rootReducer
 