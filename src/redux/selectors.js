import { createSelector } from "@reduxjs/toolkit"

export const filterSelector = (state) => state.filter
export const tasksSelector = (state) => state.tasks

export const tasksRemainingSelector = createSelector(tasksSelector,filterSelector, (tasks, filters) => {
    return tasks.filter((task) => {
        // check condition for task's status 
        let status = false
        if((filters.status === 'Completed' && task.completed) || (filters.status === 'To do' && !task.completed) || (filters.status === 'All'))
            status = true
          
        
        return (task.content.toLowerCase().includes(filters.search.toLowerCase()) && status)
    })
})


