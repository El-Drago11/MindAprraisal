import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


const App = () => {
  var SizePage = 10;
  const apikey = process.env.React_APP_Api_News;

  const [progress , setProgress] = useState(0)

  //Progress function is made for top-loading-bar
    return (
      <>
      <Router>
        <NavBar/>
        <div>
          <LoadingBar  color='#f11946' progress={progress}/>
        </div>
      <div className='conatiner my-3'>
          <Routes>
                                                  {/* "setProgress" is passed as props */}
            <Route path="/" element={<News setProgress={setProgress} ApiKey={apikey} PageSize={SizePage} country='in' category='general'/>}></Route>
            <Route exact path="/MindAprraisal" element={<News setProgress={setProgress} ApiKey={apikey} PageSize={SizePage} country='in' category='general'/>}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} ApiKey={apikey} PageSize={SizePage} country='in' category='business'/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} ApiKey={apikey} PageSize={SizePage} country='in' category='entertainment'/>}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} ApiKey={apikey} PageSize={SizePage} country='in' category='sports'/>}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} ApiKey={apikey} PageSize={SizePage} country='in' category='health'/>}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} ApiKey={apikey} PageSize={SizePage} country='in' category='science'/>}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} ApiKey={apikey} PageSize={SizePage} country='in' category='technology'/>}></Route>
          </Routes>
      </div>
      </Router>
       
      </>
     
    )
  }

  export default App;
