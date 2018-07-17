import React,{Component} from 'react'
import Article from './Article'
import toggleOpen from '../decorators/toggleOpen'



 class ArticleList extends Component {
   
    
    render(){
         const articleElements = this.props.articles.map(article => <li key = {article.id}>
            <Article 
                article = {article}
                isOpen = {article.id === this.props.openItemId}
                toggleOpen = {this.props.toggleOpenArticle(article.id)}
            />
         </li>)
        
        return (
        <ul>
            {articleElements}
        </ul>
    )
    }   

  
}
export default toggleOpen (ArticleList)