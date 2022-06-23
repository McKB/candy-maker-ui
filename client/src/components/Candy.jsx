import React, { useState, useEffect } from 'react'
import ManuList from './ManuList'
import ManuSearch from './ManuSearch'
import axios from 'axios'

const Candy = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [manuArray, setManuArray] = useState([])

    useEffect(() => {
        fetchManu()
    }, [])

    const fetchManu = async () => {
        let fetchedData = await axios.get('http://localhost:1337/api/manufacturers')
        setManuArray(fetchedData.data)
    }

    return (
        <div className='page'>
            <ManuSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ManuList manuArray={manuArray} searchTerm={searchTerm} />
        </div>
    )
}

export default Candy