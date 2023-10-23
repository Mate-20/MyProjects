import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoVideoUrl } from '../utils/Constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    const truncatedTitle = snippet.title.length > 10
    ? snippet.title.slice(0, 50) + '...'
    : snippet.title;
    return (
        <div>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{textDecoration:"none"}}>
                <div class="card videocard ms-3 me-3 mb-5">
                    <img src={snippet?.thumbnails?.medium?.url}  alt={demoThumbnailUrl}  />
                    <div class="card-body">
                        <h5 class="card-title">{truncatedTitle}</h5>
                        <p class="card-text">{snippet.channelTitle}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default VideoCard