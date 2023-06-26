import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'


const News = (props) =>{

  const capitalizeWord=(string)=>{
    return string.toUpperCase();
  }

  const[articles , setArticles] = useState([]);
  const[loading, setLoading] = useState(true);
  const[pages, setPages] = useState(1);
  const [totalResults,setTotalResults] = useState(0);

  const data = async() =>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&pagesize=${props.PageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json(); 
    console.log(parseData)
    console.log(parseData.articles.length)

    // --> data has been loaded
    setLoading(false)
    setArticles(parseData.articles)//setting the json data in the articles array
    setTotalResults(parseData.totalResults)
    props.setProgress(100)
    console.log(articles)
  }

//to fetch more data in infinite scroller
   const fetchMoreData = async()=>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${pages+1}&pagesize=${props.PageSize}`;
    setPages(pages+1)
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json(); //converting to json file

    // --> data has been fetched
    setLoading(false)
    setArticles(articles.concat(parseData.articles)) //setting the json data in the articles array
    setTotalResults(parseData.totalResults)
    props.setProgress(100)
         
   };

// Render only once
  useEffect(()=>{
    data();
    // eslint-disable-next-line
  },[])

    return (
      <div className="container my-20">
        <h1 className="text-center mb-4" style={{marginTop:"150px"}}><b>India's Top {capitalizeWord(props.category)} headlines</b></h1>

        {loading&&<Spinner/>}

        {/* Infinite Scroller */}
        <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner/>}>
        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-4 my-3">
             
              <NewsItem key={element.url} Imagedata={element.urlToImage ? element.urlToImage : "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/170E0/production/_129023449_leivanindex2_getty.jpg"}
                title={element.title ? element.title.slice(0, 49) : ""}
                description={element.description ? element.description.slice(0, 80) : "Jasprit Bumrah's previous appearance in any format was back in September last ye....."}
                newsUrl={element.url} 
                author={element.author ? element.author : "Unknown"}
                publishedAt = {element.publishedAt.slice(0,10)} 
              />
            
            </div>
          })}
        </div>
      </InfiniteScroll>    
      </div>
    );
  }

News.defaultProps = {
    country:'in',
    PageSize: 10,
    category: 'general',
}
News.propTypes={
    country :PropTypes.string,
    PageSize : PropTypes.number,
    category : PropTypes.string,
}

export default News
