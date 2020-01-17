import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
        <div>
          <header className="s-header">
            <div className="header-logo">
              <a href="index.html">
                <img src="./images/logo.png" alt="Homepage" />
              </a>
            </div>
            <div className="header-content">
              <nav className="row header-nav-wrap">
                <ul className="header-nav">
                  <li>
                    <a className="smoothscroll" href="#hero" title="Intro">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#about" title="About">
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="smoothscroll"
                      href="#services"
                      title="Services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#portfolio" title="Works">
                      Works
                    </a>
                  </li>
                  <li>
                    <a href="mailto:#0" title="Contact us">
                      Say Hello
                    </a>
                  </li>
                </ul>
              </nav>
              {/* end header-nav-wrap */}
              <a href="#0" className="btn btn--stroke btn--small">
                Download CV
              </a>
            </div>
            {/* end header-content */}
            <a className="header-menu-toggle" href="#0">
              <span>Menu</span>
            </a>
          </header>
          {/* hero
    ================================================== */}
          <section
            id="hero"
            className="s-hero target-section"
            data-parallax="scroll"
            data-image-src="./images/hero-bg-1.jpg"
            data-natural-width={3000}
            data-natural-height={2000}
            data-position-y="center"
          >
            <div className="row hero-content">
              <div className="column large-full">
                <h1>
                  Hello, I'm Andrew Chunis, <br />
                  a Full Stack Web Developer <br />
                  based in Miami Florida.
                </h1>
                <ul className="hero-social">
                  <li>
                    <a href="https://www.linkedin.com/in/andrewchunis/" title>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/chuniversity" title>
                      Github
                    </a>
                  </li>
                </ul>
                {/* end hero-social */}
              </div>
            </div>
            {/* end hero-content */}
            <div className="hero-scroll">
              <a href="#about" className="scroll-link smoothscroll">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 24l-8-9h6v-15h4v15h6z" />
                </svg>
              </a>
            </div>
            {/* end hero-scroll */}
          </section>
          {/* end s-hero */}
        </div>
      </>
    );
  }
}
