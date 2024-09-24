import React from "react";
import features from "../data/data.js"

const FeatureCard = () => {
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
                <p>{emoji} {title}</p>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="actions">
        <button> Перейти за $3 на 4-недели </button>
      </div>
    </div>
  );
};

export default FeatureCard;
