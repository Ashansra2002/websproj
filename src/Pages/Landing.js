import './Landing.css';
import React from 'react';

function Landing() {
  return (
    <div>
      <headers>
        <nav>
          <a href="#" className="logo">Alumni Connect</a>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/Register">Register</a></li>
          </ul>
        </nav>
      </headers>

      <section className="hero">
        <h1>Welcome to Alumni Connect</h1>
        <p>Connect with your fellow alumni and stay up-to-date with the latest news and events.</p>
        <button className="cta">Get Started</button>
      </section>

      <section className="features">
        <div className="feature">
          <i className="fas fa-users"></i>
          <h2>Connect with Alumni</h2>
          <p>Stay connected with your fellow alumni and expand your network.</p>
        </div>
        <div className="feature">
          <i className="fas fa-calendar-alt"></i>
          <h2>Stay Up-to-Date</h2>
          <p>Get notified about upcoming events and keep up with the latest news.</p>
        </div>
        <div className="feature">
          <i className="fas fa-comment-alt"></i>
          <h2>Engage in Discussions</h2>
          <p>Participate in discussions with your fellow alumni on various topics.</p>
        </div>
      </section>

      <section className="testimonial">
        <blockquote>
          "Alumni Connect has been a great way for me to stay connected with my alma mater and my fellow alumni. I highly recommend it!"
        </blockquote>
        <cite>John Doe</cite>
      </section>

      <footer>
        <p>Alumni Connect &copy; 2023</p>
      </footer>
    </div>
  );
}

export default Landing;