import React from "react";
import axios from 'axios'


class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }
    postLogin = (event) => {
        event.preventDefault()
        const login = {
            email:this.state.email,
            password:this.state.password
        }
        axios.post("http://localhost:5000/api/users/login", login)
            .then((response) => {
                console.log(response);
                const {token} = response.data;
                localStorage.setItem("jwtToken", token)
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
    render() {

        return (
            <div>
                <form onSubmit={this.postLogin}>
                    <input onChange={this.getValue} name="email" className="form-control" type="email" placeholder="email" />
                    <input onChange={this.getValue} name="password" className="form-control" type="password" placeholder="password" />
                    <button className='btn btn-primary' type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;