import React, { Component } from 'react';
import {articles} from '../fixtures';
// import {render} from 'react-dom'
// import ArticleList from './components/ArticleList'
// import './App.css';
import ArticleList from './ArticleList'

class App extends Component {
  render() {
    return (<div>
      <ArticleList articles={articles}/>
            </div>
    )
  }
}

export default App;
