import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

/*Este Componente unicamente renderiza un post*/


export class Post extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e){
        if(e.target.style.color === 'black'){
            e.target.style.color = 'red'
        } else {
            e.target.style.color = 'black'
        }

    }

    render(){
        let owner = this.props.owner;
        let image = this.props.image;
        let message = this.props.message;
        let tags = this.props.tags;

        return(
            <div className="container post">
                <div className="row align-items-center">
                    <div className="col-4">
                        <img className="imageUser" src={owner.image} alt="user"/>
                    </div>
                    <div className="col-8">
                        <h1 className="userName">{owner.firstName} {owner.lastName}</h1>
                    </div>
                </div>                
                <div className="row">                    
                    <img className="imagePost" src={image} alt="post"/>    
                </div>
                <div className="row comment">
                    <p className="d-block">
                        <span className="userComment">{owner.firstName} {owner.lastName}: </span>{message}
                    </p>
                </div>
                <div className="row comment align-items-center justify-content-between">
                    <div className="col-8">
                    <p className="d-block">
                        <span className="userComment">tags: </span>{tags.map(value=>{
                            return (<span className="tagsComment"> #{value} </span>)
                        })}
                    </p>
                    </div>                
                    <div className="col-2">
                    <i className="far fa-heart fa-3x" onClick={this.handleClick} style={{color:'black'}}></i>
                    </div>                                        
                </div>
            </div>
        );
    }
}

Post.propTypes = {
    owner: PropTypes.object,
    image: PropTypes.string,
    message: PropTypes.string,
    tags: PropTypes.array
}

export default Post;