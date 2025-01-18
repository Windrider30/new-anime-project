import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SearchBar from '../components/SearchBar'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="not-found">
      <Helmet>
        <title>Page Not Found - Anime Website</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      <SearchBar />
      <div className="not-found-content">
        <h1>Oops! Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <button 
          className="home-button"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default NotFound
