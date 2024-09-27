import React, { useContext, useEffect, useState } from "react";
import CardPost from "../a_components/CardPost";
import ValueContext from "../context/global";
import { BASE_URL } from "../global/settings";

const Home = () => {
  const {
    value,
    items,
    setValue,
    itemsLoadet,
    setItemsLoadet,
    setItemLocalStorage,
  } = useContext(ValueContext);

  return (
    <>
      <main>
        <div className="container">
          {items.slice(0, itemsLoadet).map((el) => (
            <CardPost id={el.id} el={el} key={el.id} />
          ))}
        </div>
        <div className="hello " style={{ width: "100%" }}>
          <button
            className="btn-prev hello2"
            onClick={() => {
              setValue((p) => !p);
            }}
          >
            Премиум
          </button>
          <button
            className="btn-prev "
            onClick={() => {
              setItemsLoadet((p) => p + 6);
            }}
          >
            Загрузить еще
          </button>
        </div>
        <div className="modalWindow"></div>
      </main>
    </>
  );
};

export default Home;
