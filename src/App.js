import React from "react";

import propTypes from "prop-types";
import Profile from "./Profile";
import photo from "./Component/afef.jpg";

const afef = {
  Name: "afef",
  Prof:"developer web",
  Bio:
    "developper full stack js ",
  Photo: photo
};

export default class App extends React.Component {
  state = {
    afef : "afef",
    showProfile: false,
    timer: 0
  };

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.timer}</h1>
        <button
          onClick={() => {
            this.setState({
              showProfile: !this.state.showProfile
            });
          }}
        >
          {this.state.showProfile ? "hide" : "show"}
        </button>
        {this.state.showProfile && <Profile />}
      </div>
    );
  }
}
