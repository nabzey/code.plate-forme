import React from "react";
import "../../components/widgets.css";

const widget = () => {
  return (
    <div className="widget">
      <div className="left-side">
        <h3>Titre</h3>
        <p>10</p>
        <a href="/">Voire la liste des medecins</a>
      </div>
      <div className="right-side">
        <img
          src="https://i0.wp.com/offremplois.com/wp-content/uploads/2021/12/366612915-bras-croises-fierte-confiance-stethoscope.jpg?fit=810%2C456&ssl=1"
          alt="Medecin"
        />
      </div>
    </div>
  );
};

export default widget;
