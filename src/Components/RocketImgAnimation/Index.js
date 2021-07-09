import React, { Component } from "react";
import { Spring } from "react-spring";
import "./style.css";
class RocketImgAnimation extends Component {
  render() {
    return (
      <Spring
      from={{opacity: 0, marginTop: -500}}
      to={{opacity:1, marginTop:0}}>
        {(props) => (
          <div style={props}>
            {/* <div className="ourspeciality"> */}
              <div className="rocketlogo" />
            {/* </div> */}
          </div>
        )}
      </Spring>
    );
  }
}
export default RocketImgAnimation;
