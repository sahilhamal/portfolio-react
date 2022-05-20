import React, { Component } from "react";
import Zmage from "react-zmage";
import Slide from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return <>Oops</>;

    const work = this.props.data.work.map(function (work) {
      return (
        <>
          {/* <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info" >
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div> */}
          <div key={work.company}>
            <div className="container">
              <div className="row"></div>
            </div>
            <h3>{work.company}</h3>

            <p className="info">
              {work.title}
              <em className="date" style={{ float: "right" }}>
                {work.years}
              </em>
            </p>

            <p>{work.description}</p>
            <p>Technologies: {work.technologies}</p>
          </div>
        </>
      );
    });

    return (
      // <section id="portfolio">
      //   <Fade left duration={1000} distance="40px">
      //     <div className="row">
      //       <div className="twelve columns collapsed">
      //         <h1>Check Out Some of My Works.</h1>

      //         <div
      //           id="portfolio-wrapper"
      //           className="bgrid-quarters s-bgrid-thirds cf"
      //         >
      //           {projects}
      //         </div>
      //       </div>
      //     </div>
      //   </Fade>
      // </section>
      <section id="about">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1
                style={{
                  borderBottom: "3px solid #ffffff",
                  display: "inline-block",
                }}
              >
                <span>Work</span>
              </h1>
            </div>
            <div className="eight columns main-col">{work}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Portfolio;
