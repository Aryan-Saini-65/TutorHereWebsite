import React, { Component } from "react";
import "./style.css";
import ModalI from "../Modal/Index";
const im="../../../Data/Members_Image/Amal_Alex.png";
const s1={
    backgroundImage: "url('../../../Data/amalalex.png')",
    width: "234px",
    height: "234px",
    backgroundRepeat: "noRepeat",
    backgroundRepeat: "round",
}
class Members_Card extends Component {
  render() {
    return (
      <>
        <div className="maindiv1">
          <div className="imagediv"/>
          <div className="name"> {this.props.name} </div>
          <div className="designation"> {this.props.designation} </div>
          <div className="email"> {this.props.email}</div> 
          <ModalI />
        </div>
      </>
    );
  }
}
export default Members_Card;
