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
