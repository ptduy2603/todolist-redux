// // tạo kho lưu global state của cả dự án ở đây
// import { legacy_createStore as createStore } from 'redux'
// import rootReducer from './reducer'
// // cài thêm dev tool dành riêng cho redux
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhancers)

// export default store

import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from "../components/Filter/FiltersSlice"
import tasksSlice from "../components/Tasks/TasksSlice"

const store = configureStore({
    reducer: {
        filter: filtersSlice.reducer,
        tasks: tasksSlice.reducer
    }
})

export default store 