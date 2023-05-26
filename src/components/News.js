import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  // USing Props in Class Based Components
  static defaultProps={
    country:'in',
    PageSize: 8,
    category : "general"
  }
  static propTypes={
    country :PropTypes.string,
    PageSize : PropTypes.number,
    category : PropTypes.string,
  }

  // Capitalizing the First Letter of the Word
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  capitalizeWord=(string)=>{
    return string.toUpperCase();
  }

  constructor(props) {
    super(props); //To create a constructor super() class must be called
    //object creation of the constructor
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - MindAppraisal` //To use props inside Constructor we need to pass props in argument
  }

  //A function is created insde the class
  // async updateNews(){
  //       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df04f7180c2040a2996d67f8cb982ee1&page=${this.state.page}&pagesize=${this.props.PageSize}`;
  //       let data = await fetch(url);
  //       let parseData = await data.json(); //converting to json file
  //       console.log(parseData);
  //       this.setState({loading:false})
  //       this.setState({ articles: parseData.articles,
  //                       totalResults : parseData.totalResults,
  //                       loading:false
  //                    })//setting the json data in the articles array
  // }


  // It will run after render method
  async componentDidMount() {
    // fecthing the latest data using API
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&pagesize=${this.props.PageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parseData = await data.json(); //converting to json file
    this.setState({loading:false})
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults
    })//setting the json data in the articles array
    this.props.setProgress(100)
  }


  //Pagination : Function to next and previous page 
  // handleNext = async () => {
  //   console.log(`Next  ${this.state.page + 1}`)
  //   this.setState({page: this.state.page+1});
  //   this.updateNews();
  // }
  // handlePrevious = async () => {
  //   console.log(`Previous  ${this.state.page - 1}`)
  //   this.setState({page: this.state.page - 1});
  //   this.updateNews();
  // }

  //to fetch more data in infinite scroller
  fetchMoreData = async()=>{
   this.props.setProgress(10)
   this.setState({page:this.state.page+1})
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&page=${this.state.page}&pagesize=${this.props.PageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json(); //converting to json file
        console.log(parseData);
        this.setState({loading:false})
        this.setState({ articles: this.state.articles.concat(parseData.articles),
                        totalResults : parseData.totalResults,
                        loading:false
                     })//setting the json data in the articles array
        this.props.setProgress(100)
        
  };


  render() {
    return (
      <div className="container my-20">
        <h1 className="text-center mb-4" style={{marginTop:"150px"}}><b>India's Top {this.capitalizeWord(this.props.category)} headlines</b></h1>

        { /* if this.state.loading is true than show spinner  */}
        {this.state.loading&&<Spinner/>}

        {/* Infinite Scroller */}
        <InfiniteScroll dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner/>}>
        <div className="row">
          {/* Created a funcion to iterate through 'articles' array */}
          {/* "map" Function is used to iterate through the array */}
          {/* If this.state.loading is not true(i.,e 'false') then do " this.state.articles.map((element)=>{()} " */}
          {this.state.articles.map((element) => {
            return <div className="col-md-4 my-3">
              {/* ".slice" => Method used to print particular length of charachter */}
              {/*  element.urlToImage ? element.urlToImage : defaultImg ==> if "urlToImage(1)" is empty then show "defaultImg" else if "urlToImage" is provided then show that image*/}
              <NewsItem key={element.url} Imagedata={element.urlToImage ? element.urlToImage : "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/170E0/production/_129023449_leivanindex2_getty.jpg"}
                title={element.title ? element.title.slice(0, 49) : ""}
                description={element.description ? element.description.slice(0, 80) : "Jasprit Bumrah's previous appearance in any format was back in September last ye....."}
                newsUrl={element.url} 
                author={element.author ? element.author : "Unknown"}
                publishedAt = {element.publishedAt.slice(0,10)} 
              />
              {/* [{element.title?element.title.slice(1,49):""}]=> if element.title is NULL then print " "  otherwise element.title.slice(1,49) */}
            </div>
          })}
        </div>
      </InfiniteScroll>    
      

        {/* To call a Function Outside the class we use 'this.' To call that function  */}
        {/* <div className="conatiner d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-2" onClick={this.handlePrevious}>&larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults / `${this.props.PageSize}`)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
        
      </div>
    );
  }
}
