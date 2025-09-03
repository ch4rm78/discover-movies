import React from 'react'
import search from '/search.svg'

const Search = ({searchTerm, setSearchTerm}) => {

  return (
    <div className='search'>
        <div>
        <img src={search} alt="search" />
        <input type="text" 
        placeholder='Search through thousands of movies' 
        value={searchTerm} 
        className='font-sans'
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
    </div>

  )
}

export default Search