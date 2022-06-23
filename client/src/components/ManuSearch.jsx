import React from 'react'
import './ManuSearch.css'

const ManuSearch = (props) => {
    const { searchTerm, setSearchTerm } = props

    return (
        <div className='inputBox'>
            <input 
                type="text" 
                name="search" 
                value={searchTerm}
                onChange={(event) => { setSearchTerm(event.target.value) }} 
            />
        </div>
    )
}

export default ManuSearch