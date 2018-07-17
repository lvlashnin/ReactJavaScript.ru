import React,{Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent{
    state = {
            isOpen: false,
            openItemId : null
        }
    
    render(){
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} toggleOpenArticle={this.toggleOpenArticle}/>
    }
    toggleOpenArticle = openItemId => ev => {
        // let { openItemId : previousCurrentId} = this.state
        // if( previousCurrentId=== openItemId ) return this.setState({ openItemId:null})
        // return this.setState({openItemId})       
        
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })   
    }
    toggleOpen = (ev) => {
      ev && ev.preventDefault && ev.preventDefault() 
        this.setState({
            isOpen: !this.state.isOpen            
        })   
       
    }
}