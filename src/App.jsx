import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { SearchContext } from './context/SearchContext'
import SearchBar from './components/SearchBar'
import AnimeCard from './components/AnimeCard'
import AnimeDetail from './pages/AnimeDetail'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const { animeList, loading, fetchAnime } = useContext(SearchContext)

  return (
    <>
      <Helmet>
        <title>Anime Website - Discover Your Next Favorite Anime</title>
        <meta name="description" content="Explore a vast collection of anime series and movies." />
      </Helmet>
      
      <div className="container">
        <SearchBar />
        {loading ? (
          <div>Loading anime...</div>
        ) : (
          <Routes>
            <Route path="/" element={
              <>
                <h1>Anime List</h1>
                <div className="anime-grid">
                  {animeList.map((anime) => (
                    <AnimeCard key={anime.id} anime={anime} />
                  ))}
                </div>
              </>
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
