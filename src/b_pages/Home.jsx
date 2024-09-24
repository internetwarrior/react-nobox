import React, { useEffect, useState } from "react";
import CardPost from "../a_components/CardPost";

const Home = () => {
  const [items, setItems] = useState([]);
  const [itemsLoadet, setItemsLoadet] = useState(1);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setItems(data.users));
  }, []);
  return (
    <>
      <main>
        <div className="container">
          {items.slice(0, itemsLoadet).map((el) => (
            <CardPost el={el} key={el.id} />
          ))}
        </div>
        <div className="hello" style={{ width: "100%" }}>
          <button
            className="btn-prev"
            onClick={() => {
              setItemsLoadet((p) => p + 6);
            }}
          >
            Загрузить еще{" "}
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
