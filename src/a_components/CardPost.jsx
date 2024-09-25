import React from "react";
import { BASE_IMG } from "../global/settings";
import { Link } from "react-router-dom";
// import img1 from './images/Mask group (11).png'

const CardPost = ({ el }) => {
  return (
    <Link to={"post"} className="card-x">
      <div className="card-n">
        <div className="card-i">
          <img src={BASE_IMG} alt="" />
        </div>
        <div className="card-d">
          <p>hello</p>
          <img src={BASE_IMG} alt="" />
          <p>hello world </p>
        </div>
      </div>
    </Link>
  );
};

export default CardPost;
