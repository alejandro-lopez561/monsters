import React from 'react'
import './search-box.styles.css'

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div className="s">
            <input className="search" type="search" placeholder={placeholder} onChange={handleChange}></input>
        </div>
    )
}

export default SearchBox
