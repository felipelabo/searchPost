import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

/**Este componente adquiere el tag suministrado por el usuario */

export class Tags extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        tagName:''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    //Metodo que maneja el evento del cambio en la entrada del formulario
    handleChange(event) {
      this.setState({tagName: event.target.value});      
    }
    
    //Metodo que maneja el evento del Submit en la entrada del formulario
    //aqui se envia la informacion del usuario al componente App
    handleSubmit(event) {
      this.props.onChange(this.state.tagName.toLowerCase());
      event.preventDefault();
    }

    render(){
        //Renderiza la El titulo y el formulario donde se recibira la informacion del usuario
        return (
          <div className="container tags">
              <div className="row justify-content-center ">
              <div className="col-8">
                  <div className="row justify-content-center">
                    <h1 id="titleTags">SearchPOST</h1>
                  </div>
                  <div className="row justify-content-center">
                    <h4 id="subtitleTags">search all post just with one tag</h4>
                  </div>
                  <div className="row justify-content-center ">
                    <form className="formTags" onSubmit={this.handleSubmit}>
                        <label for="inputTag" id="labelInputTag">#</label>         
                        <input type="text" value={this.state.tagName} onChange={this.handleChange} id="inputTags" />       
                        <button type="submit" id="buttonTags">Search</button>
                    </form>
                  </div>
              </div>
              </div>
          </div>
        );
      }
}

Tags.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default Tags;