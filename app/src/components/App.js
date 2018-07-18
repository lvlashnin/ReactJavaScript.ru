import React, { Component } from 'react';
import {articles} from '../fixtures';
// import {render} from 'react-dom'
// import './App.css';
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'


class App extends Component {
  state = {
    selection: null,

  }
  render() {
      const options = articles.map(article => ({  
      label: article.title,
      value: article.id    
    }))

    return (<div>
    <Select options={options} value={this.state.selection} onChange = {this.changeSelection} multi/>
      <ArticleList articles={articles}/>
            </div>
    )
  }
  changeSelection = selection => this.setState({selection})
}

export default App;
