import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Video = ({ videos }) => {
  if(!videos?.length) return "Loading..."
  console.log(videos)
  return (
    <div>
      <div className="row">
        {videos.map((item, indx) => (
          <div key={indx} className='col-md-3'>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Video