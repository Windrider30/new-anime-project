import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { SearchContext } from '../context/SearchContext'
import SearchBar from '../components/SearchBar'
import AnimeCard from '../components/AnimeCard'

function HomePage() {
  const { animeList, loading } = useContext(SearchContext)

  return (
    <>
      <div className="title-container">
        <h1 className="animated-title">The Anime Directory</h1>
      </div>

      <div className="search-container">
        <div className="welcome-text">
          <p className="anime-style-text">
            <span>Whispers of adventure fill the air...</span>
            <span>The Anime Directory beckons.</span>
            <span>Find your next obsession, or rediscover</span>
            <span>the magic that first ignited your passion.</span>
            <span>May your anime journey be filled with</span>
            <span>laughter, tears, and endless excitement!</span>
            <span>Thank you for choosing The Anime Directory.</span>
          </p>
        </div>
        <div className="search-controls">
          <SearchBar />
        </div>
        {loading ? (
          <div>Loading anime...</div>
        ) : (
          <div className="anime-grid">
            {animeList.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default HomePage
