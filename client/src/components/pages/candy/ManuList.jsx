import React from 'react'
import { Link } from 'react-router-dom'
import './ManuList.css'

const ManuList = (props) => {
    const { filteredManuArray } = props

    return (
        <ul>
            {filteredManuArray.map((manu) => {
                return (
                    <li key={manu.name}>
                        <Link to={`/manufacturers/${manu.id}`}>{manu.name} {manu.country}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default ManuList