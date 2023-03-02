import React from "react";
import "./cards.css";

const Cards = () => (
  <div className="card_container">
    {[
      { title: "Unresolved", count: 60 },
      { title: "Overdue", count: 16 },
      { title: "Open", count: 43 },
      { title: "On Hold", count: 64 },
    ].map(({ title, count }) => (
      <div className="cardBox" key={title}>
        <h4>{title}</h4>
        <h2>{count}</h2>
      </div>
    ))}
  </div>
);

export default Cards;
