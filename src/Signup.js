import React from "react";



const Signup = () => {
    return(
        <div>
             <form method="POST" action="http://localhost:5000/api/users/signup">
        <input name="firstName" className="form-control" type="text" placeholder="Firstame" />
        <input name="lastName" className="form-control" type="text" placeholder="Lastname" />
        <input name="email" className="form-control" type="email" placeholder="email" />
        <input name="password" className="form-control" type="password" placeholder="password" />
        <button className='btn btn-primary' type='submit'>Sign-up</button>
        </form>

            
        </div>
    )
}

export default Signup;