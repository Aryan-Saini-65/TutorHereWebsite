import React, { Component } from "react";
import "./style.css";
class BlogCard extends Component {
  render() {
    return (
      <>
        <div className="BlogStrip">
          <div>
            <div className="blog1image"> </div>{" "}
          </div>
          <div>
            {" "}
            <div className="blog2image"> </div>{" "}
          </div>
          <div>
            {" "}
            <div className="blog3image"> </div>{" "}
          </div>
        </div>
      </>
    );
  }
}
export default BlogCard;
