import React from "react";
import Footer from "../../Components/Footer/Index";
import Header from "./../../Components/Header/Index";
import BlogCard from "./../../Components/BlogCard/Index"
import "./style.scss";
import RocketImgAnimation from "../../Components/RocketImgAnimation/Index"
const HomePage = () => {
  return (
    <>
      <Header />
      <img className="centerimage" />
      <div className="imagesstrip">
        <img className="sectionimage" id="image_3" />
        <img className="sectionimage" id="image_4" />
        <img className="sectionimage" id="image_5" />
      </div>
      <div className="animations" />
      <iframe
        className="emdlink"
        src="https://www.youtube.com/embed/g4BGZY9Omvc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="ourspeciality">
      <RocketImgAnimation />
        {/* <div className="rocketlogo" />  */}
        <h3> Our Specialities</h3>
        <p>
          {" "}
          We offer, curated content from Subject Matter Experts. We strive for
          creative simplification of topics. Most importantly, its all FREE to
          use.
        </p>
        <button> Learn More</button>
      </div>
      <BlogCard />
      <Footer />
    </>
  );
};

export default HomePage;
