import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = { progress: 0 }
  progressFunc = (progress) => { this.setState({ progress: progress }) }
  render() {
    return (
      <>
        <BrowserRouter>
          <LoadingBar color='#f11946' progress={this.state.progress}/>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<NewsComponent progressFunc={this.progressFunc} key="general" category='general' />} ></Route>
            <Route exact path='/business' element={<NewsComponent progressFunc={this.progressFunc} key="business" category='business' />} ></Route>
            <Route exact path='/entertainment' element={<NewsComponent progressFunc={this.progressFunc} key="entertainment" category='entertainment' />} ></Route>
            <Route exact path='/general' element={<NewsComponent progressFunc={this.progressFunc} key="general" category='general' />} ></Route>
            <Route exact path='/health' element={<NewsComponent progressFunc={this.progressFunc} key="health" category='health' />} ></Route>
            <Route exact path='/science' element={<NewsComponent progressFunc={this.progressFunc} key="science" category='science' />} ></Route>
            <Route exact path='/sports' element={<NewsComponent progressFunc={this.progressFunc} key="sports" category='sports' />} ></Route>
            <Route exact path='/technology' element={<NewsComponent progressFunc={this.progressFunc} key="technology" category='technology' />} ></Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}