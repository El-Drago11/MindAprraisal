import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  SizePage = 10;
  apikey = process.env.React_APP_Api_News;
  state ={
    progress : 0
  }

  //Progress function is made for top-loading-bar
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
      <Router>
        <NavBar/>
        <div>
          <LoadingBar  color='#f11946' progress={this.state.progress} onLoaderFinished={()=>{}} />
        </div>
      <div className='conatiner my-3'>
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} ApiKey={this.apikey} PageSize={this.SizePage} country='in' category='general'/>}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} ApiKey={this.apikey} PageSize={this.SizePage} country='in' category='business'/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} ApiKey={this.apikey} PageSize={this.SizePage} country='in' category='entertainment'/>}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} ApiKey={this.apikey} PageSize={this.SizePage} country='in' category='sports'/>}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} ApiKey={this.apikey} PageSize={this.SizePage} country='in' category='health'/>}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} ApiKey={this.apikey} PageSize={this.SizePage} country='in' category='science'/>}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} ApiKey={this.apikey} PageSize={this.SizePage} country='in' category='technology'/>}></Route>
          </Routes>
      </div>
      </Router>
       
      </>
     
    )
  }
}

