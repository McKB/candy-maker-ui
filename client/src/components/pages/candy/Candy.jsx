import React, { useState, useEffect } from 'react'
import ManuList from './ManuList'
import ManuSearch from './ManuSearch'
import axios from 'axios'
import './Candy.css'

const Candy = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [manuArray, setManuArray] = useState([])
    const [filteredManuArray, setFilteredManuArray] = useState([])

    useEffect(() => {
        fetchManu()
    }, [])

    useEffect(() => {
        setFilteredManuArray(manuArray.filter(
            (manu) => { return manu.name.toLowerCase().includes(searchTerm.toLowerCase()) }
        ))
    }, [searchTerm, manuArray])

    const fetchManu = async () => {
        let fetchedData = await axios.get('http://localhost:1337/api/manufacturers')
        setManuArray(fetchedData.data)
        setFilteredManuArray(fetchedData.data)
    }

    const handleSearchTermInput = (event) => {
        setSearchTerm(event.target.value) 
    }

    return (
        <div className='page'>
            <h2>Candy Makers</h2>
            <ManuSearch searchTerm={searchTerm} handleSearchTermInput={handleSearchTermInput}/>
            <ManuList filteredManuArray={filteredManuArray} />
        </div>
    )
}

export default Candy