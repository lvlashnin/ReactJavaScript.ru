import React, {Component} from 'react';

class Article extends Component {
   constructor(props){
       super(props)
       
       this.state={
           isOpen: false
       }       
   }
    render() {  
        const{article} = this.props 
        const{isOpen} = this.state
        
            return (
                <div>
                        <h3>{article.title}</h3>
                        <button onClick={this.toggleOpen}>{isOpen?"CLOSE":"OPEN"}</button>       
                        {this.getBody()}                        
                </div>
            );
        }
    getBody(){
        if(!this.state.isOpen) return null
        const{article} = this.props 
       return <section>{article.text}</section> 
    }
//errowfunction обычный метод просто его this привязан к нашему инстансу        
    toggleOpen = ()=> {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    }
    
export default Article;



// export default function Article(props){
    
//     const {article} = props
//     return (
//                     <div>
//                             <h3>{article.title}</h3>
//                             <section>{article.text}</section>                
//                     </div>
//                 )
// }


