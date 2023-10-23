import React from 'react'
import Sidebar from './Sidebar'
import Video from './Video'
import { fetchFromAPI } from '../utils/FetchApi'
import { useEffect } from 'react'
import { useState } from 'react'


const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos,setVideos ] = useState([])
    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>{
            setVideos(data.items)
        })
    },[selectedCategory])
    return (
        <div>
            <div className="d-flex">
                <div className="col-md-2">
                    <Sidebar selectedCategory = {selectedCategory} setSelectedCategory={setSelectedCategory}/>
                </div>
                <div className="d-flex flex-column">
                    <h2 className='ms-3 video-title'>{selectedCategory} <span>Videos</span></h2>
                    <Video videos = {videos} />
                </div>
            </div>
        </div>
    )
}
export default Feed                   
