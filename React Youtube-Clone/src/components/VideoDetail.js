import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/FetchApi';
import ReactPlayer from 'react-player';
import Video from './Video';

const VideoDetail = () => {
  const [videoDetail, setvideoDetail] = useState(null);
  const [videos, setVideos] = useState(null)
  console.log(videoDetail)
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setvideoDetail(data.items[0]));
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items));
  }, [id])
  return (
    <div>
      <div className="player container">
        <div className="d-flex">
            <ReactPlayer width={"70vw"} height={"75vh"} url={`https://www.youtube.com/watch?v=${id}`}  controls />
        </div>
        <div className="d-flex" style={{ color: "white" }}>
          <h3>{videoDetail?.snippet?.title}</h3>
          <p className='views'>{videoDetail?.statistics?.viewCount} Views</p>
          <p className='likes'>{videoDetail?.statistics?.likeCount} Likes</p>
        </div>
        <div>
          <h4 style={{ color: "white" }}>{videoDetail?.snippet?.channelTitle}<i style={{ color: "grey", fontSize: "10px" }} class="bi bi-check-circle-fill ms-2"></i></h4>
        </div>
        <Video videos={videos} />
      </div>
    </div>
  )
}

export default VideoDetail