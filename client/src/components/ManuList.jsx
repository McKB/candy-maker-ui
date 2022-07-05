import React from 'react'
import './ManuList.css'

const ManuList = (props) => {
    const { filteredManuArray } = props

    return (
        <ul>
            {filteredManuArray.map(
                (manu) => { return <li>{manu.name} {manu.country}</li>}
            )}
        </ul>
    )
}

export default ManuList