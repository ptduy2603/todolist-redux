import { useState } from 'react';
import './Filter.css'
import { useDispatch } from 'react-redux';
// import { searchFilterChange, typeFilterChange } from '../../redux/actions';
import FiltersSlice from '../Filter/FiltersSlice'

function Filter() {
    const [searchInput, setSearchInput] = useState("")
    const [statusInput, setStatusInput] = useState("All")
    // const [typeInput , setTypeInput] = useState(" ")
    const dispatch = useDispatch()

    const handleChangeSearch = (e) => {
        const text = e.target.value
        if(!text.startsWith(' '))
        {
            setSearchInput(text)
            dispatch(FiltersSlice.actions.searchFilterChange(text))
        }
    }

    const handleChangeStatus = (event) => {
        if(event.target.checked)
        {
            setStatusInput(event.target.value)
            dispatch(FiltersSlice.actions.statusFilterChange(event.target.value))
        }
    }

    // const handleChangeType = (event) => {
    //     const text = event.target.value
    //     if(!text.startsWith(' '))
    //     {
    //         setTypeInput(text)
    //         // dispatch(searchFilterChange(e.target.value))
    //     }
    // }

    return ( 
        <div className='filter'>
            <div className='filter__group'>
                <span className='filter__label'>Search</span>
                <div className='filter__input'>
                        <input className='text' placeholder='Input search text' type='text' value={searchInput} onChange={handleChangeSearch} spellCheck="false"/>
                        <button className='text-btn'>
                            <i className="fa-solid fa-magnifying-glass filter-icon"></i>
                        </button>
                </div>
            </div>
            <div className='filter__group'>
                <span className='filter__label'>Filter By Status</span>
                <div className='filter__input'>
                   <input type='radio' name="work-type" value="All" onChange={handleChangeStatus} defaultChecked={true}/>All
                   <input type='radio' name='work-type' value="Completed" onChange={handleChangeStatus}/>Completed
                   <input type='radio' name='work-type' value="To do" onChange={handleChangeStatus}/>To do
                </div>
            </div>
            <div className='filter__group'>
                <span className='filter__label'>Filter By Priority</span>
                <div className='filter__input'>
                    <input className='priority' placeholder='Please select' type='text' spellCheck="false" />            
                </div>
            </div>
        </div>
     );
}

export default Filter;