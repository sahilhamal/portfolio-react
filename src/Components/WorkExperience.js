import React, { Component } from "react";
import Slide from "react-reveal";
class WorkExperience extends Component {
  render() {
    if (!this.props.data) return <>Oops</>;

    const eachWork = this.props.data.work.map(function (work) {
      return (
        <>
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
            <div className="eight columns main-col">{eachWork}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default WorkExperience;
