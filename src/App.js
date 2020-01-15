import React from 'react';
import './App.css';
import Tags from './Tags';
import Api from './Api';

/**Componente principal */

export class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      tag:'',      
      shownTag:true,
      shownApi:true
    }
    this.getTag = this.getTag.bind(this)
    
  }

  getTag(value){
    this.setState({tag:value});
  }

  shouldComponentUpdate(nextProps,nextState){
    if(nextState.tag === this.state.tag){
        return false;
    } else {
        return true;
    }
}
  
  /*Aqui verifica primero si hay etiqueta adquirida. Luego renderiza Tags.js y Api.js*/
  render(){

    let post = (this.state.tag!=='' ? <Api tagName={this.state.tag}/> : '');

    return (
      <div>
        <Tags onChange={this.getTag}/>
        {post}
      </div>      
    );    
  }
}



export default App;
