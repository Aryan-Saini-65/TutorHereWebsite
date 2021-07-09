import React, { Component } from "react";
import Header from "../../Components/Header/Index";
import Footer from "../../Components/Footer/Index";
import "./style.css";
import Vid from "../../Data/Intro_Video.mp4";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Members_Card from "./Members_Component/Index";
import Data from "../AboutUsPage/Members_Component/Data"
class AboutUsPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="maindiv">
          <video className="videoTag" autoPlay loop muted>
            <source src={Vid} type="video/mp4" />
          </video>
        </div>
        <div className="imagelogo_1" />
        <section className="section_heading">
          Retention is easier when Learning is exciting!{" "}
        </section>
        <section className="section_content">
          {" "}
          We believe to be a thread that makes retention much more beneficial to
          you and the society. Tutor Here is a community of global educators
          united in a shared goal of upliftment and transformation. We connect a
          deep understanding of education with the power of technology to
          continuously push the boundaries of learning.{" "}
        </section>
        <Members_Card name={Data[0].name} designation={Data[0].designation} email={Data[0].email} image={Data[0].image}/>
        <Footer />
      </>
    );
  }
}
export default AboutUsPage;
