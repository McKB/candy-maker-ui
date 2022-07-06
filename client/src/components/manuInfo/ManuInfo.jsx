import { useState, useEffect } from "react"
import React from 'react'
import axios from 'axios'
import { useParams, NavLink } from 'react-router-dom'
import './ManuInfo.css'

const ManuInfo = () => {
    const { id } = useParams()
    const [manu, setManu] = useState({})
    const [products, setProducts] = useState([])

    const getData = async () => {
        let { data } = await axios.get(`http://localhost:1337/api/manufacturers/${id}`)

        setManu(data)
        setProducts(data.products)
    }

    useEffect(() => {
        getData()
    })

    return (
        <div className='page'>
            <div className='title'>Manufacturer Info</div>
            <div className='subtitle'>The details & the products</div>
            <h3>Name: </h3>
            <span>{manu.name}</span>
            <h3>Country: </h3>
            <span>{manu.country}</span>
            <h3>Products:</h3>
            <ul>
                {products.map((product) => {
                    return (<li key={product.name}>{product.name}</li>)
                })}
            </ul>
            <div className='goBack'>
                <NavLink to='/'>Go Back</NavLink>
            </div>
        </div>
    )
}

export default ManuInfo