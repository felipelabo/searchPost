import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

/*Este Componente unicamente renderiza un post*/

export class Post extends React.Component{

    render(){
        let owner = this.props.owner;
        let image = this.props.image;
        let message = this.props.message;
        let tags = this.props.tags;

        return(
            <div className="container post">
                <div className="row align-items-center">
                    <div className="col-4">
                        <img className="imageUser" src={owner.image}/>
                    </div>
                    <div className="col-8">
                        <h1 className="userName">{owner.firstName} {owner.lastName}</h1>
                    </div>
                </div>                
                <div className="row">                    
                    <img className="imagePost" src={image}/>    
                </div>
                <div className="row comment">
                    <p className="d-block">
                        <span className="userComment">{owner.firstName} {owner.lastName}: </span>{message}
                    </p>
                    <p className="d-block">
                        <span className="userComment">tags: </span>{tags.map(value=>{
                            return (<span className="tagsComment"> #{value} </span>)
                        })}
                    </p>
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