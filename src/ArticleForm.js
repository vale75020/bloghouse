import React from "react";
import axios from "axios"


class ArticleForm extends React.Component {
    state = {
        titre: "",
        author: "",
        text: ""
    }

    postLogin = (event) => {
        event.preventDefault()
        const postArticle = {
            titre: this.state.titre,
            author: this.state.author,
            text: this.state.text

        }
        axios.post("http://localhost:5000/api/articles/add", postArticle)
            .then((response) => {
                console.log(response);
                this.props.history.push("/articles")
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
    return(
        <div>
        <form onSubmit={this.postLogin.bind(this)} >
        <input onChange={this.getValue} name="titre" className="form-control" type="text" placeholder="title" />
        <input onChange={this.getValue} name="author" className="form-control" type="text" placeholder="author" />
        <textarea onChange={this.getValue} type="text" name="text" className="form-control"  placeholder="enter your text here" />
        <button className='btn btn-primary' type='submit'>Enter</button>
        </form>
        </div>
    )
}
}

export default ArticleForm;