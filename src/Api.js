import React from 'react';
import Post from './Post';
import './App.css';
import PropTypes from 'prop-types';


/**Este componente habla con el Api y renderiza elementos segun resultados de la api */

export class Api extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            response:[],    //Almacena Objeto recibido por API
            loading:true    //Condiciona si se encuentra solicitando o no informacion al API
        }
    }

    //Metodo que adquiere informacion del API con la informacion suministrada por el usuario
    fetchGet(){
        fetch(`https://n161.tech/api/dummyapi/tag/${this.props.tagName}/post`)
        .then(resp => {
            if (resp.ok){
                return resp.json()
            }            
          })
        .then(jsonResponse => {            
            this.setState({
                response: jsonResponse,
                loading: false,               
            });
        })
    }

    
    componentDidMount(){
        this.fetchGet();
        
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.tagName !== this.props.tagName){
            this.setState({
                response:[],
                loading:true,
            });
        }
    }
            
    componentDidUpdate(){        
        this.fetchGet();     
    }

    componentWillUnmount(){
        this.setState({ 
            response:[],           
            loading:true
        });
    }
        
    render(){

        //Condiciona si se esta ejecutando el Request                
        if((this.state.loading===false)){
            
            //Condiciona si hay resultados obtenidos en la busqueda
            if(this.state.response.total !== 0){
                
                return(
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-8">
                                <h1 className="result">Resultados de <span className="resultTags">#{this.props.tagName}</span></h1>

                                {
                                 this.state.response.data.map(value=><Post owner={value.owner} image={value.image} message={value.message} tags={value.tags} />)
                                }
                            </div>
                        </div>
                    </div>
                );

            } else {
                
                return (
                    <div className="container noTags">
                        <div className="row justify-content-center">
                            <div className="col-8">
                                <p className="noTags">
                                    #{this.props.tagName} is not found :( <br/> Try another Tag
                                </p>         
                            </div>
                        </div>
                    </div>
                )
            }   

        } else {
            
            return (
                <div className="container loading">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <h2 className="loading">Loading...</h2>         
                        </div>
                    </div>
                </div>
            )
        }
    }

}

Api.propTypes = {
    tagName: PropTypes.string
}

export default Api;