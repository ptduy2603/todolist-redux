import { createSlice } from "@reduxjs/toolkit"

const initState = {
        search : "", 
        status : "All",
        type : [],
}

// const filtersReducer = (state = initState, action) => {
//     switch(action.type)
//     {
//         case 'filters/searchFilterChange' :
//             return {
//                 ...state,
//                 search : action.payload
//             }
        
//         case 'filters/statusFilterChange' :
//             return {
//                 ...state,
//                 status : action.payload
//             }
//         default : return state
//     }
// }
const filtersSlice = createSlice({
    name : 'filters',
    initialState : initState,
    reducers : {
        searchFilterChange (state, action) {
            state.search = action.payload
        },
        statusFilterChange (state, action) {
            state.status = action.payload
        }
    }
})

export default filtersSlice
 