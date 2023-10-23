import React from 'react'
import Video from './Video'
import { fetchFromAPI } from '../utils/FetchApi'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm}= useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items)
    })
  }, [searchTerm])
  return (
    <div>
      <div className="d-flex">
        <div className="d-flex flex-column">
          <h2 className='ms-3 video-title'>Search Results : <span>{searchTerm}</span></h2>
          <Video videos={videos} />
        </div>
      </div>
    </div>
  )
}
export default SearchFeed                   
