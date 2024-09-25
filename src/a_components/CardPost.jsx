import React, { useState } from "react";
import { BASE_IMG } from "../global/settings";
import { Link } from "react-router-dom";
// import img1 from './images/Mask group (11).png'

const CardPost = ({ el }) => {
  //  все мои изменения
  const [cart, setCart] = useState(() => {
    // Получаем начальное состояние из localStorage при первой загрузке компонента
    console.log(localStorage.getItem("cart"));
    const savedCart = localStorage.getItem("cart");
    return savedCart && savedCart !== null ? JSON.parse(savedCart) : [];
  });

  const handleClick = (event) => {
    event.preventDefault(); // Останавливаем стандартное поведение ссылки
    console.log("Нет перехода по Link");

    // Проверяем, что объект `el` и его `id` существуют
    if (el && el.id) {
      console.log(el); // Логируем объект el для проверки

      // Проверяем, есть ли уже этот элемент в корзине
      if (!cart.includes(el.id)) {
        const updatedCart = [...cart, el.id]; // Создаем новый массив с добавленным элементом

        // Обновляем состояние
        setCart(updatedCart);

        // Сохраняем обновленный массив в localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        console.log("Обновленный cart:", updatedCart);
      } else {
        console.log("Элемент уже в корзине");
      }
    } else {
      console.error("el не определен или не содержит id");
    }
  };

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
        <button onClick={handleClick}>добавить в корзину</button>
      </div>
    </Link>
  );
};

export default CardPost;
