import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            text:PropTypes.string.isRequired
        }).isRequired
    }   

    render() {
        const {article, isOpen, toggleOpen} = this.props      
        // console.log('-----render',this.state.isOpen)
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'CLOSE' : 'OPEN'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null        
        return (
        <section>
            {article.text}
            <CommentList comments = {article.comments}/>
        </section>     )  
        
    }

}

export default toggleOpen(Article)






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


