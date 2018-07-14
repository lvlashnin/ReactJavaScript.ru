import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

export default class Article extends Component {
    static defaultProps = {
        article: PropTypes.shape({
            text:PropTypes.string.isRequired
        }).isRequired
    }
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        // console.log('-----render',this.state.isOpen)
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'CLOSE' : 'OPEN'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return <section>
        {article.text}
        <CommentList comments = {article.comments}/>
        </section>       
        
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
       
        // console.log('-----',this.state.isOpen)
    }
}








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


