import React from 'react'
import { demoProfilePicture } from '../utils/Constants'
import { Link } from 'react-router-dom'

const ChannelCard = ({ channelDetail, margintop }) => {
  return (
    <div>
      <Link to={`/channel/${channelDetail?.id?.channelId}`} style={{ textDecoration: "none" }}>
        <div className="container channelcard">
          <div class="ms-3 me-3 mb-5" style={{ marginTop: margintop}}>
            <img src={channelDetail?.snippet?.thumbnails?.medium?.url} alt={demoProfilePicture}/>
          </div>
          <h6 className='channelTitle'>{channelDetail?.snippet?.title}<i class="bi bi-check-circle-fill ms-2"></i></h6>
          {channelDetail?.statistics?.subscriberCount && (
            <p className='subs'>{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers</p>
          )}
        </div>
      </Link>
    </div>
  )
}

export default ChannelCard