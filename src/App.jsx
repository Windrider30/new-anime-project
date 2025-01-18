import React, { useContext } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { SearchContext } from './context/SearchContext'
import SearchBar from './components/SearchBar'
import AnimeCard from './components/AnimeCard'
import AnimeDetail from './pages/AnimeDetail'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const { animeList, loading, fetchAnime } = useContext(SearchContext)
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>The Anime Directory - Discover Your Next Favorite Anime</title>
        <meta name="description" content="Explore a vast collection of anime series and movies. Find detailed information, ratings, and recommendations." />
        <meta name="keywords" content="anime, anime directory, anime list, anime recommendations, anime search" />
        <meta property="og:title" content="The Anime Directory" />
        <meta property="og:description" content="Your ultimate guide to discovering anime series and movies." />
      </Helmet>

      <button className="home-button" onClick={() => navigate('/')}>
        Home
      </button>

      <div className="title-container">
        <h1 className="animated-title">The Anime Directory</h1>
      </div>

      <div className="search-container">
        <SearchBar />
        {loading ? (
          <div>Loading anime...</div>
        ) : (
          <Routes>
            <Route path="/" element={
              <div className="anime-grid">
                {animeList.map((anime) => (
                  <AnimeCard key={anime.id} anime={anime} />
                ))}
              </div>
            } />
            <Route path="/anime/:id" element={<AnimeDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </div>
    </>
  )
}

export default App
