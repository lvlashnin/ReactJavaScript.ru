import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
// import toggleOpen from '../decorators/toggleOpen'
import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            text:PropTypes.string.isRequired,
            comments:PropTypes.string,
            id:PropTypes.string.isRequired            
        }).isRequired,     
        isOpen: PropTypes.bool,
        toggleOpen:PropTypes.func
      
    }  
    componentWillReceiveProps(nextProps){
         console.log('UPDATING',this.props.isOpen,nextProps.isOpen)
    } 

    componentWillMount(){
        console.log('---','mounting')
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props      
        // console.log('-----render',this.state.isOpen)
        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'CLOSE' : 'OPEN'}
                </button>
               <CSSTransitionGroup 
                transitionName="article"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={500}>
                {this.getBody()}
               </CSSTransitionGroup>
            </div>
        )
    }
    setContainerRef = ref =>{
        this.container = ref
        console.log('---',ref)
       
    }
    componentDidMount(){
        
    }


    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null        
        return (
        <section>
            {article.text}
            <CommentList comments = {article.comments} ref={this.setCommentsRef}/>
        </section>     )  
        
    }
    setCommentsRef = ref  => {
        console.log('---ref',findDOMNode(ref))
    }

}

export default Article






    // //errowfunction обычный метод просто его this привязан к нашему инстансу        
//     toggleOpen = ()=> {
//         this.setState({
//             isOpen:!this.state.isOpen
//         })
//     }

//     }
    




// export default function Article(props){
    
//     const {article} = props
//     return (
//                     <div>
//                             <h3>{article.title}</h3>
//                             <section>{article.text}</section>                
//                     </div>
//                 )
// }


