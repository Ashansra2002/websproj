import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <headers2>
        <div className="logo">Alumni Connect</div>
        <navs>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/Register">Register</a></li>
          </ul>
        </navs>
      </headers2>
      <main>
        <div className="background-image"></div>
        <div className="login-card">
          <h2>Login</h2>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </main>
      <footers>
        <div className="quote">"Stay connected with your alumni community"</div>
      </footers>
    </div>
  );
}

export default Login;