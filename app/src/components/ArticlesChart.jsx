import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ArticlesChart extends Component {
   componentDidMount(){
       //d3 works with this.refs.chart
   }
   componentWillReceiveProps(nextProps){
       //update chart for new articles
   }
   
    render() {
        return (     <div ref='chart'/>       
        );
    }
    componentWillUnmount(){
        //do cleanUp
    }
}

export default ArticlesChart;


// пример где понадобятся методы жизненого цикла при использовании стороних библиотек :jquerry