import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchContext } from '../context/SearchContext'

function Navigation() {
  const navigate = useNavigate()
  const { fetchPopularAnime } = useSearchContext()

  return (
    <div className="nav-buttons">
      <button 
        className="nav-button"
        onClick={() => navigate('/')}
      >
        Home
      </button>
      <button 
        className="nav-button"
        onClick={() => {
          fetchPopularAnime()
          navigate('/')
        }}
      >
        Popular Anime
      </button>
    </div>
  )
}

export default Navigation
