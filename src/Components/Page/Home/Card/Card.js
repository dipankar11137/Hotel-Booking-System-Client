import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../Css/PicStyle.css";

const Card = ({ card }) => {
  const { name, img2 } = card;
  const navigator = useNavigate();
  const handleButton = () => {
    navigator("/hostels/dhaka");
  };
  return (
    <button onClick={handleButton}>
      <div className="w-72 h-72">
        <img
          className="w-64 h-56 rounded-xl hover:animate-pulse pic-style"
          src={img2}
          alt=""
        />
        <h1 className=" font-bold">{name}</h1>
      </div>
    </button>
  );
};

export default Card;
