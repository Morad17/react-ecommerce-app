import React from 'react'

const Register = () => {
    return (
        <div className="register-container">
            <h2>Create An Account</h2>
            <form action="">
                <input type="text" placeholder="full name" />
                <input type="text" placeholder="username" />
                <input type="text" placeholder="email" />
                <input type="text" placeholder="password" />
                <input type="text" placeholder="confirm password" />
                <button>Create Account</button>
            </form>
        </div>
    )
}

export default Register
