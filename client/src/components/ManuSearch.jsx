import React from 'react'
import './ManuSearch.css'

const ManuSearch = (props) => {
    const { searchTerm, handleSearchTermInput } = props

    return (
        <div className='inputBox'>
            <input 
                type="text" 
                name="search" 
                value={searchTerm}
                onChange={handleSearchTermInput} 
            />
        </div>
    )
}

export default ManuSearch