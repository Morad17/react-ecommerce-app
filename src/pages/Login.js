import React from 'react'

const Login = () => {
    return (
        <div className="login-container">
            <h2>Sign In</h2>
            <form action="">
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <button>Login</button>
            </form>
            <div className="login-links">
                <p className="forgot-password">Forgot Password?</p>
                <p className="create-account">Create New Account</p>
            </div>
        </div>
    )
}

export default Login
