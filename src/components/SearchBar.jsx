import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchContext } from '../context/SearchContext'

function SearchBar() {
  const [query, setQuery] = useState('')
  const { setSearchQuery, fetchAnime } = useSearchContext()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchQuery(query)
    fetchAnime(query)
    navigate('/')
  }

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search anime..."
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
