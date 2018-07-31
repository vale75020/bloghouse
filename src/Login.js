import React from "react";


const Login = () => {
    return(
        <div>
        <form method="POST" action="http://localhost:3000/api/users/login">
        <input name="email" className="form-control" type="email" placeholder="email" />
        <input name="password" className="form-control" type="password" placeholder="password" />
        <button className='btn btn-primary' type='submit'>Login</button>
        </form>
        </div>
    )
}

export default Login;