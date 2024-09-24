import React, { useContext } from "react";
import features from "../data/data.js";
import ValueContext from "../context/global.js";

const FeatureCard = () => {
  const { value, setValue } = useContext(ValueContext);
  return (
    <div className="card">
      <div className="header">
        <p>★</p>
      </div>
      <div className="features">
        <ul>
          {features.map(({ title, emoji, description }) => (
            <li key={title}>
              {/* <img alt="icon" src="" /> */}
              <div>
                <p>
                  {emoji} {title}
                </p>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="actions">
        <button>Перейти за $3 на 4-недели </button>
        <button
          onClick={() => {
            setValue((p) => !p);
          }}
        >
          Нет, спасибо
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
