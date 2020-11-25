import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to ="">
        <div className="project-img">
          <img src="" alt="project" />
        </div>
        <div className="project-title">"project title</div>
        <div className="project-info">project-info</div>
      </Link>
    </div>
  )
}

export default Thumbnail;