import React, { Component } from "react";
import Slide from "react-reveal";

class Education extends Component {
  render() {
    if (!this.props.data) return null;

    const education = (
      <>
        <div>
          <h3>Virginia Tech</h3>
          <p className="info">
            Masters in Computer Science
            <em className="date" style={{ float: "right" }}>
              Graduation: May 2023
            </em>
          </p>
          <ul>
            <li>
              <strong>Thesis topic:</strong> Interpreting Dimension Reductions
              Through Gradient Visualization
            </li>
            <li>
              <strong>Award: </strong>Torgerson Oustanding Graduate Research
              Award
            </li>
            <li>TA for following courses:</li>
            <ul>
              <li>Fall 2021: CS 3114 Data Structures and Algorithms</li>
              <li>
                Spring 2022: CS 5040 Ethics and Professionalism in Computer
                Science
              </li>
              <li>Fall 2022: CS 2114 Software Design and Data Structures</li>
              <li>Spring 2023: CS 5040 Blockchain Technologies</li>
            </ul>
          </ul>
        </div>
        <br></br>
        <div>
          <h3>Troy University</h3>
          <p className="info">
            Bachelors in Computer Science
            <em className="date" style={{ float: "right" }}>
              Graduation: May 2018
            </em>
          </p>
          <ul>
            <li>
              <strong>Chancellors Award:</strong>
              <ul>
                Full tuition scholarship for 4 years of undergraduate degree
              </ul>
            </li>
            <li>
              <strong>President of Computer Science Club</strong>
              <ul>
                Organized first Tech Career Fair, held hands on tech sessions
                and represented university in hackathon
              </ul>
            </li>
            <li>
              <strong>Hackathon Winner at Georgia State University</strong>
            </li>
            <ul>
              <li>
                Created an app using Java, XML and android studio that enabled a
                phone to emulate a shipping package to track the motion and
                shock on the package using accelerometers which helped to detect
                any sudden movements in x, y, z axis and record the location to
                inform sender and receiver about the potential cause.
                <a href="http://devpost.com/software/shock-detector">
                  {"  "}
                  Details
                </a>
              </li>
              <li>Awarded an internship with General Electric (GE Digital)</li>
            </ul>
            <li>
              <strong>Resident Director</strong>{" "}
              <ul>
                Led the Resident Assistants and Troy University international
                dorm, Pace Hall
              </ul>
            </li>
          </ul>
        </div>
      </>
    );

    return (
      <>
        <section id="resume">
          <Slide left duration={2000}>
            <div className="row education">
              <div className="three columns header-col">
                <h1 style={{ color: "#313131" }}>
                  <span>Education</span>
                </h1>
              </div>

              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">{education}</div>
                </div>
              </div>
            </div>
          </Slide>
        </section>
      </>
    );
  }
}

export default Education;
