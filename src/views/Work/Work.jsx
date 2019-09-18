import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter, Link } from "react-router-dom";

import "./Work.scss";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="work">
        <h1>Work</h1>
        <div className="projects">
          <div className="row">
            <div className="col-md-6">
              <a
                href="https://github.com/MastermindDesign/masterminddesign"
                target="_blank"
              >
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h4>Mastermind Design</h4>
                    </div>
                    <div className="card-text">
                      <p>The Source code to this website.</p>
                      <span>
                        <i className="fas fa-code"></i>React, SCSS, Webpack,
                        2077-Components
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6">
              <a
                href="https://github.com/MastermindDesign/masterminddesign-api"
                target="_blank"
              >
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h4>Mastermind Design API</h4>
                    </div>
                    <div className="card-text">
                      <p>The API that accompanies this website.</p>
                      <span>
                        <i className="fas fa-code"></i>GO
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <a
                href="https://github.com/MastermindDesign/2077-components-react"
                target="_blank"
              >
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h4>2077-Components-React</h4>
                    </div>
                    <div className="card-text">
                      <p>
                        A React component library inspired by Cyberpunk-2077
                      </p>
                      <span>
                        <i className="fas fa-code"></i>React, SCSS, Webpack,
                        Bootstrap
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6">
              <Link to="/fithub">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h4>FitHub</h4>
                    </div>
                    <div className="card-text">
                      <p>A private fitness tracker project I am working on</p>
                      <span>
                        <i className="fas fa-code"></i>.Net Core, EFCore, MySQL,
                        MongoDB, React, SCSS, Webpack
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                    <h4>More to come...</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Work);
