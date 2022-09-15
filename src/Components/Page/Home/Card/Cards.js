import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch(`https://hotel-bocking.onrender.com/hotels/`)
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, [hotels]);
  return (
    <div className="mt-10">
      <div className="lg:grid lg:grid-cols-5 px-5 ml-10">
        {hotels.slice(0, 5).map((card) => (
          <Card key={hotels._id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
