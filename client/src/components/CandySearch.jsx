import React, { useState } from 'react'
import './CandySearch.css';

const CandySearch = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className='inputBox'>
            <input type="text" name="search" onChange={(event) => { setSearchTerm(event.target.value) }} />
            {searchTerm
                ? <div className='response'>{searchTerm}</div>
                : null
            }
        </div>
    )
}

export default CandySearch