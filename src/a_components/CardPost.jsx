import React, { useContext, useState } from "react";
import { BASE_IMG } from "../global/settings";
import { Link } from "react-router-dom";
import ValueContext from "../context/global";
// import img1 from './images/Mask group (11).png'

const CardPost = (props, { el }) => {
  //  все мои изменения
  const { setItemLocalStorage, cartItems } = useContext(ValueContext);
  const { id } = props;

  return (
    <div to={""} className="card-x">
      <div className="card-n">
        <div className="card-i">
          <img src={BASE_IMG} alt="" />
        </div>
        <div className="card-d">
          <p>hello</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            dolores, corporis, eos rem vitae cum, cumque earum labore
            accusantium inventore illo aliquid eligendi quae harum adipisci
            fugiat quidem soluta aspernatur.
          </p>
          <p>hello world </p>
        </div>
        <button
          onClick={() => {
            setItemLocalStorage(id);
          }}
        >
          {cartItems && cartItems.includes(id)
            ? "Удалить из корзины"
            : "Добавить в корзину"}
        </button>
      </div>
    </div>
  );
};

export default CardPost;
