import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const linkedIn = this.props.data.linkedIn;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg color="#259e57" type="cobweb" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Education
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Work Experience
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Sahil Hamal</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>
                Software Engineer/Masters in Computer Science at Virginia Tech
              </h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={linkedIn} className="button btn project-btn">
                  <i className="fa fa-brands fa-linkedin"></i>LinkedIn
                </a>
                <a
                  href="Resume_SahilHamal.pdf"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-download"> </i> Resume
                </a>
              </ul>
              {/* #F1E2B0 */}
              <a
                href="mailto: sahilhamal@vt.edu"
                className="social"
                download
                target="_blank"
              >
                <i className="fa fa-envelope"> </i> Contact
              </a>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
