import React, { Component } from 'react';
import {articles} from './fixtures';
import {render} from 'react-dom'
import ArticleList from './components/ArticleList'

// import './App.css';

class App extends Component {
  render() {
    return (<ArticleList articles={articles}/>)
  }
}

export default App;
