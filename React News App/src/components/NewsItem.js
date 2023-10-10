import React from 'react'

export const NewsItem =(props)=> {
    let { title, description, imageUrl, newsUrl, publishedAt,source } = props
    return (
      <div>
        <div className="card text-bg-dark mt-5">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success"
          style={{zIndex:'1'}}>
            {source}</span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
            <p class="card-text"><small class="text-body-secondary">{new Date(publishedAt).toUTCString()}</small></p>
          </div>
        </div>
      </div>
    )
}
export default NewsItem
