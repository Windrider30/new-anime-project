import React, { createContext, useState, useContext } from 'react'

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [animeList, setAnimeList] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchAnime = async (query = '') => {
    setLoading(true)
    try {
      const url = query
        ? `https://kitsu.io/api/edge/anime?filter[text]=${query}&page[limit]=20`
        : 'https://kitsu.io/api/edge/anime?page[limit]=20'
      
      const response = await fetch(url)
      const data = await response.json()
      setAnimeList(data.data)
    } catch (error) {
      console.error('Error fetching anime:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchPopularAnime = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        'https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=20'
      )
      const data = await response.json()
      setAnimeList(data.data)
    } catch (error) {
      console.error('Error fetching popular anime:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      animeList,
      loading,
      fetchAnime,
      fetchPopularAnime
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => useContext(SearchContext)
