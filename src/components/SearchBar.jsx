import React from "react"
import "../styles/homepage.scss"
import 'rc-pagination/assets/index.css'
import "../styles/pagination.scss"

const SearchBar = (props) => {
    const {term, handleInput} = props
    return <div className="relative">
        <div className="search-input">
            <input type="text" name="search" value={term} onChange={handleInput} placeholder="Szukaj..." />
        </div>
        </div> 
}

export default SearchBar