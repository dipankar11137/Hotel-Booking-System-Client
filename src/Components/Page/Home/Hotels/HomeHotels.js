import React, { useEffect, useState } from "react";
import Hotel from "./Hotel";

const HomeHotels = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch(`https://hotel-bocking.onrender.com/hotels/`)
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, [hotels]);
  return (
    <div>
      <h1 className="text-center text-3xl  font-bold py-3 uppercase text-blue-600">
        Hotels{" "}
      </h1>
      <div className="sm:px-20 lg:px-44 ">
        {hotels.slice(0, 4).map((hotel) => (
          <Hotel key={hotel._id} hotel={hotel}></Hotel>
        ))}
      </div>
    </div>
  );
};

export default HomeHotels;
