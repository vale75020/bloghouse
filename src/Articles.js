import React, { Component } from "react";
import axios from 'axios'
import Article from './Article'


class Articles extends Component {
    state = {
        json : []
    }

    componentDidMount() {

        axios.get('http://localhost:5000/api/articles/')
            .then((response) => {
                console.log(response);
                this.setState({ json: response.data.docs }, () => console.log(this.state.json))
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        return (
           
                <ul className="Liste"> 
                  { this.state.json.map( elem =>
                    <Article key={ elem._id }
                             titre={ elem.titre}
                             author={ elem.author}
                             text={ elem.text }
                    />)}
                </ul>    
                       
                )}
}     

                export default Articles; 