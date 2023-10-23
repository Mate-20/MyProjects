import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/FetchApi';
import { useState } from 'react';
import ChannelCard from './ChannelCard';
import Video from './Video';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  console.log(channelDetail)
  console.log(videos)
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0])
    }
    )
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVideos(data?.items)
    }
    )
  }, [id])

  return (
    <div>
      <div className="coverpage">
        <h1 className='text-center'>{channelDetail?.snippet?.title}</h1>
      </div>
      <div className="container channelpage">
        <ChannelCard channelDetail={channelDetail} margintop = {"-100px"} marginleft = {"200px"}/>
        <Video videos={videos}/>
      </div>
    </div>
  )
}

export default ChannelDetail