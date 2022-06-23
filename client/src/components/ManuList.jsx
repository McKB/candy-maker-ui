import React from 'react'
import './ManuList.css'

const ManuList = (props) => {
    const { manuArray, searchTerm } = props

    return (
        <ul>
            {manuArray.filter(
                (manu) => { return manu.name.toLowerCase().includes(searchTerm.toLowerCase()) }
            ).map(
                (manu) => { return <li>{manu.name} {manu.country}</li>}
            )}
        </ul>
    )
}

export default ManuList