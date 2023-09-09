export const addTodoAction = (payload) => ({
    type: 'tasks/add',
    payload
})

export const completeTaskAction = (payload) => ({
    type : 'tasks/complete',
    payload
})

export const searchFilterChange = (payload) => ({
    type : 'filters/searchFilterChange',
    payload
})

export const typeFilterChange = (status) => ({
    type: "filters/statusFilterChange",
    payload : status
})