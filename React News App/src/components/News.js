import React,{useEffect, useState} from 'react'
import { NewsItem } from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";


export const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews=async()=>{
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c33ff7b5d4b74933a1765e094231a96b&page=${props.page}&pageSize=${props.pageSize}`
    // this.setState({loading:true})
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    // Now we will set the state.
    setArticles(parsedData.articles);
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  }
  useEffect(()=>{
    updateNews();
  },[])

  // const handleNextClick = async () => {
  //   setPage(page+1);
  //   updateNews();
  // }
  // const handlePrevClick = async () => {
  //   setPage(page-1);
  //   updateNews();
  // }
  const fetchMoreData = async() => {
    setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c33ff7b5d4b74933a1765e094231a96b&page=${page}&pageSize=${props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json()
    // Now we will set the state.
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

    return (
      <>
        {/* <h2 className='text-center mb-3'>News Web App</h2> */}
        
        {loading && <Loading />} 
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading/>}
        >
        <div className='container'>
        <div className="row mt-5">
          { articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 50) : ""} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt = {element.publishedAt} source = {element.source.name} />
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between mb-3 ">
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button >
          <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr;Prev</button>
        </div> */}
      </>
    )
}
News.defaultProps = {
  country : "in",
  category : "general"
}
export default News