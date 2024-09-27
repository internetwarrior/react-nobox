import React from "react";
import { Link } from "react-router-dom";
import { BASE_IMG } from "../global/settings";

const Details = () => {
  return (
    <div className="details">
      <Link to={"/"}>назад</Link>
      <div className="container">
        <div className="cardd">
          <img src={BASE_IMG} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            natus maiores sapiente asperiores aliquid voluptatum, dolorum
            eligendi debitis optio officiis veritatis, placeat, quibusdam cum
            ipsa. Autem provident illo odio quibusdam?
          </p>

          <h2>
            Контакты: <br /> +996220166461
          </h2>
          <div>
            <div className="smile">😍 </div>
            <div className="smile">🙂</div>
            <div className="smile">😆</div>
            <div className="smile">🏚</div>
            <div className="smile"> 👨‍💻</div>
          </div>
          <p>
            Опубликовано: <br /> 2дня, 18 часов назад
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
