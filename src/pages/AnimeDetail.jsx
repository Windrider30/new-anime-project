import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { SearchContext } from '../context/SearchContext'
import './AnimeDetail.css'

function AnimeDetail() {
  const { id } = useParams()
  const [anime, setAnime] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const { searchQuery, fetchAnime } = useContext(SearchContext)

  React.useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await fetch(`https://kitsu.io/api/edge/anime/${id}`)
        const { data } = await response.json()
        setAnime(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching anime details:', error)
      }
    }

    fetchAnimeDetails()
  }, [id])

  if (loading) return <div>Loading...</div>

  return (
    <div className="anime-detail">
      <Helmet>
        <title>{anime.attributes.canonicalTitle} - The Anime Directory</title>
        <meta name="description" content={anime.attributes.synopsis} />
        <meta property="og:title" content={anime.attributes.canonicalTitle} />
        <meta property="og:description" content={anime.attributes.synopsis} />
        {anime.attributes.posterImage?.large && (
          <meta property="og:image" content={anime.attributes.posterImage.large} />
        )}
      </Helmet>

      {/* Rest of your detail page content */}
    </div>
  )
}

export default AnimeDetail
