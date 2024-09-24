import React from "react";
// import img1 from './images/Mask group (11).png'

const CardPost = ({ el }) => {
  const BASE_IMG =
    "https://images.unsplash.com/photo-1726931598787-00b60840177c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8";
  return (
    <div className="card-x">
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
    </div>
  );
};

export default CardPost;
