import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import AnimeDetail from './pages/AnimeDetail'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <>
      <Helmet>
        <title>The Anime Directory - Discover Your Next Favorite Anime</title>
        <meta name="description" content="Explore a vast collection of anime series and movies. Find detailed information, ratings, and recommendations." />
        <meta name="keywords" content="anime, anime directory, anime list, anime recommendations, anime search" />
        <meta property="og:title" content="The Anime Directory" />
        <meta property="og:description" content="Your ultimate guide to discovering anime series and movies." />
      </Helmet>

      <Navigation />
      
      <div className="title-container">
        <h1 className="animated-title">The Anime Directory</h1>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
