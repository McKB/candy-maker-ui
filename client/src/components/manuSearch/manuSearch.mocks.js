import React, { useState } from 'react'
import ManuSearch from './ManuSearch'

const MockParentElement = () => {
    const [term, setTerm] = useState('')

    return (
        <ManuSearch term={term} setTerm={setTerm} />
    )
}

export default MockParentElement