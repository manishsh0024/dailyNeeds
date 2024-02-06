import React from "react";
import './userLogin.css'

export const Login = ()=>{
    return<>
        <div className="login-main">
            <form action="/main">
                <div className="input-field">
                <input type="email" placeholder="Enter Email" required />
                </div>
                <div className="input-field">
                <input type="password" placeholder="Enter Password" required />
                </div>
                <button><i class="ri-login-box-line"></i> Login</button>
                <a href="">Forgot Passwords?</a>
                <a href="" className="signup">Sign up</a>
                <h3>Login with</h3>
                <div className="links">
                <i class="ri-google-fill"></i>
                <i class="ri-twitter-line"></i>
                <i class="ri-threads-line"></i>
                </div>
            </form>
        </div>
    </>
}