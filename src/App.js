import React from "react";
import "./App.css"; 

function AboutMe() {
  return (
    <section id="about-me" className="py-5">
      <div className="container text-center">
        <h2>About Me:</h2>
        <h3>I am Ian Tracy C. Orillaza</h3>
        <p>You can call me Icy for short</p>
        <p>Born on May 31, 2004</p>
        <p>I am 20 years old</p>
        <p>I like watching Racing, Kpop/Kdrama, and Traveling</p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="project-container">
          
          <div className="card project-card">
            <img src="project1.jpg" alt="Forzahh 5" className="project-image" />
            <h5 className="card-title">Forzahh 5</h5>
            <p className="card-text">To be a thought of description soon</p>
            <button className="btn btn-primary">Read More</button>
          </div>

        
          <div className="card project-card">
            <img src="project2.jpg" alt="Purrari" className="project-image" />
            <h5 className="card-title">Purrari</h5>
            <p className="card-text">To be a thought of description soon</p>
            <button className="btn btn-primary">Read More</button>
          </div>

         
          <div className="card project-card">
            <img src="project3.jpg" alt="Goatmilton" className="project-image" />
            <h5 className="card-title">Goatmilton</h5>
            <p className="card-text">To be a thought of description soon</p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form id="contactForm">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about-me">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
