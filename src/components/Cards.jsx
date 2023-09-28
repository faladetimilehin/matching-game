//return <div className="container"></div>;

import React from "react";
import Card from "./Card";
import { useState } from "react";

export default function Cards() {
  const [cards, setCards] = useState([
    {
      id: 0,
      name: "confused",
      status: "",
      img: "./src/assets/practiseimages/confused.jpg",
    },
    {
      id: 0,
      name: "confused",
      status: "",
      img: "./src/assets/practiseimages/confused.jpg",
    },
    {
      id: 1,
      name: "happy",
      status: "",
      img: "./src/assets/practiseimages/happy.jpg",
    },
    {
      id: 1,
      name: "happy",
      status: "",
      img: "./src/assets/practiseimages/happy.jpg",
    },
    {
      id: 2,
      name: "shocked",
      status: "",
      img: "./src/assets/practiseimages/shocked.jpg",
    },
    {
      id: 2,
      name: "shocked",
      status: "",
      img: "./src/assets/practiseimages/shocked.jpg",
    },
  ]);

  return (
    <div className="container">
      {cards.map((card, index) => {
        return <Card card={card} />;
      })}
    </div>
  );
}
